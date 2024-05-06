import { useState } from "react";
import { AddToCalendar } from "./AddToCalendar";
import { Booking } from "@/models/models";

export function CoachCalendar(props: any) {
  const { bookings } = props;

  return (
    <div className="flex flex-col">
      {bookings.map((booking: Booking) => (
        <div className="flex gap-2">
          <div>Time: {booking.time_start}</div> |
          {booking.student_id && (
            <div>booked by student {booking.student_id}</div>
          )}
        </div>
      ))}
    </div>
  );
}
