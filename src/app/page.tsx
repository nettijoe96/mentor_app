"use client";

import { useEffect, useState } from "react";
import { CoachCalendar } from "./ui/CoachCalendar";
import { Booking, Coach, Student } from "@/models/models";
import { CoachComponent } from "./ui/Coach";
import { StudentComponent } from "./ui/Student";
import { StudentCalendar } from "./ui/StudentCalendar";

const COACH = "COACH";
const STUDENT = "STUDENT";

export default function Home() {
  // TODO: reduce number of state variables
  const [user, setUser] = useState<string>();
  const [student, setStudent] = useState<Student>();
  const [coach, setCoach] = useState<Coach>();
  const [bookings, setBookings] = useState<Booking[]>();
  const [coaches, setCoaches] = useState<Coach[]>();
  const [students, setStudents] = useState<Student[]>();

  const loginStudent = () => {
    const sample_student: Student = {
      id: 1,
      full_name: "Megan Smith",
      phone: "111-222-3333",
    };
    setStudent(sample_student);
    setUser(STUDENT);
  };

  const loginCoach = () => {
    const sample_coach: Coach = {
      id: 1,
      full_name: "THE COACH",
      phone: "111-222-3333",
    };
    setCoach(sample_coach);
    setUser(COACH);
  };

  const logout = () => {
    setUser(undefined);
  };

  useEffect(() => {
    const booking = {
      student_id: 1,
      time_start: new Date().toDateString(),
      time_end: new Date().toDateString(),
    };

    setBookings([booking]);
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
            <div className="w-full flex items-center justify-center gap-3">
              <button className="btn" onClick={loginStudent}>
                Student
              </button>
              <button className="btn" onClick={loginCoach}>
                Coach
              </button>
            </div>
          )}
          {user == COACH && (
            <div className="w-full">
              <CoachComponent bookings={bookings} setBookings={setBookings}>
                <CoachCalendar bookings={bookings}></CoachCalendar>
              </CoachComponent>
            </div>
          )}
          {user == STUDENT && (
            <div className="w-full">
              <StudentComponent bookings={bookings} setBookings={setBookings}>
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
