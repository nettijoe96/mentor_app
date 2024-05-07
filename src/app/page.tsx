"use client";

import { useEffect, useState } from "react";
import { CoachCalendar } from "./ui/CoachCalendar";
import { Booking, Coach, Student } from "@/models/models";
import { CoachComponent } from "./ui/Coach";
import { StudentComponent } from "./ui/Student";
import { StudentCalendar } from "./ui/StudentCalendar";
import { createClient } from "@supabase/supabase-js";

const COACH = "COACH";
const STUDENT = "STUDENT";

export default function Home() {
  const [user, setUser] = useState<string>();
  const [students, setStudents] = useState<Student[]>();
  const [bookings, setBookings] = useState<Booking[]>();
  const [coach, setCoach] = useState<Coach>();
  const [student, setStudent] = useState<Student>();

  const logout = () => {
    setUser(undefined);
  };

  useEffect(() => {
    const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseURL, supabaseANON); //eslint-disable-line

    supabase
      .from("bookings")
      .select("*")
      .eq("active", true) // this took me awhile to figure out, .select(*) doesn't work as expected
      .then((resp) => {
        if (resp.data) {
          const bookings = resp.data;
          setBookings(bookings);
        }
      });

    supabase
      .from("coaches")
      .select("*")
      .then((resp) => {
        if (resp.data && resp.data.length > 0) {
          // TODO: replace this if allowing for many coaches
          setCoach(resp.data[0]);
        }
      });

    supabase
      .from("students")
      .select("*")
      .then((resp) => {
        if (resp.data) {
          setStudents(resp.data);
        }
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full flex-col items-center justify-between font-mono text-sm">
        <div className="fixed left-0 top-0 flex w-full justify-between border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit text-xl pr-2 pl-2">
          <div className="w-24"></div>
          Stepful
          {!user && <div className="w-24"></div>}
          {user && (
            <button className="btn" onClick={logout}>
              Logout
            </button>
          )}
        </div>
        <div className="pt-32">
          {!user && (
            <div className="w-full flex flex-col items-center justify-center gap-3">
              <div className="flex flex-col items-center gap-2">
                Sign in as student:
                {students &&
                  students.map((student: Student, index: number) => (
                    <button
                      key={index}
                      className="btn"
                      onClick={() => {
                        setUser(STUDENT);
                        setStudent(student);
                      }}
                    >
                      {student.full_name}
                    </button>
                  ))}
              </div>
              Sign in as coach:
              <button className="btn" onClick={() => setUser(COACH)}>
                {coach && coach.full_name}
              </button>
            </div>
          )}
          {user == COACH && bookings && (
            <div className="w-full">
              <CoachComponent
                bookings={bookings}
                coach={coach}
                setBookings={setBookings}
              >
                <CoachCalendar
                  bookings={bookings}
                  students={students}
                ></CoachCalendar>
              </CoachComponent>
            </div>
          )}
          {user == STUDENT && bookings && (
            <div className="w-full">
              <StudentComponent coach={coach}>
                <StudentCalendar
                  bookings={bookings}
                  setBookings={setBookings}
                  student={student}
                ></StudentCalendar>
              </StudentComponent>
            </div>
          )}
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:bg-none pb-2">
          Stepful 2024
        </div>
      </div>
    </main>
  );
}
