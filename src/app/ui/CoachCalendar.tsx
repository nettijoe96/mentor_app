import { Booking, Student } from "@/models/models";

export function CoachCalendar(props: any) {
  const { bookings, students } = props;

  const getStudentByID = (id: number) => {
    return students.find((student: Student) => student.id == id);
  };

  return (
    <div className="flex flex-col">
      {bookings.map((booking: Booking, index: number) => (
        <div className="flex gap-2" key={index}>
          <div>Time: {booking.time_start}</div> |
          {booking.student_id && (
            <div>booked by {getStudentByID(booking.student_id).full_name}</div>
          )}
        </div>
      ))}
    </div>
  );
}
