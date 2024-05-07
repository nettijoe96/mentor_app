import { useState } from "react";
import { AddToCalendar } from "./AddToCalendar";

export function CoachComponent(props: any) {
  const { bookings, setBookings, coach, children } = props;

  return (
    <div className="flex flex-col justify-between items-center gap-3">
      <div className="font-bold">{coach.full_name}'s calendar!</div>
      {children}
      <AddToCalendar
        bookings={bookings}
        setBookings={setBookings}
      ></AddToCalendar>
    </div>
  );
}
