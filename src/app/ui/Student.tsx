import { useState } from "react";
import { AddToCalendar } from "./AddToCalendar";
import { BookOnCalendar } from "./BookOnCalendar";

export function StudentComponent(props: any) {
  const { bookings, setBookings, children } = props;

  return (
    <div className="flex flex-col justify-between items-center gap-3">
      <div className="text-md">Coach Fred Smith's Calendar</div>
      {children}
      {/* <BookOnCalendar
        bookings={bookings}
        setBookings={setBookings}
      ></BookOnCalendar> */}
    </div>
  );
}
