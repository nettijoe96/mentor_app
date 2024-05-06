import { useState } from "react";

export function BookOnCalendar(props: any) {
  const { bookings, setBookings } = props;

  const [dateTime, setDateTime] = useState<string>("2024-05-06T00:00");

  const handleSubmit = () => {
    // add 2 hours
    const time_end = new Date(dateTime);
    time_end.setTime(time_end.getTime() + 2 * 60 * 60 * 1000);

    setBookings((bookings: any) => {
      const new_booking = {
        time_start: dateTime,
        time_end: time_end.toISOString(),
      };
      return [...bookings, new_booking];
    });
  };

  return (
    <div className="flex flex-col w-60 gap-2">
      <label htmlFor="start">Book time:</label>

      <input
        type="datetime-local"
        id="start"
        name="trip-start"
        value={dateTime}
        min="2024-05-06T00:00"
        max="2025-05-31T00:00"
        onChange={(e) => setDateTime(e.target.value)}
      />
      <button className="btn" onClick={handleSubmit}>
        submit
      </button>
    </div>
  );
}
