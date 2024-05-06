import { useState } from "react";
import { AddToCalendar } from "./AddToCalendar";

export function CoachComponent(props: any) {
  const { bookings, setBookings, children } = props;

  return (
    <div className="flex flex-col justify-between items-center gap-3">
      <div>Your calendar! (click to select availability)</div>
      {children}
      <AddToCalendar
        bookings={bookings}
        setBookings={setBookings}
      ></AddToCalendar>
    </div>
  );
}
