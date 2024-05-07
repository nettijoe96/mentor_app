import { Booking } from "@/models/models";

export function StudentCalendar(props: any) {
  const { bookings, setBookings, student } = props;

  const book = (booking: Booking) => {
    // Find booking

    setBookings(
      bookings.map((b: Booking) => {
        if (b.time_start == booking.time_start) {
          b.student_id = student.id;
          return b;
        } else {
          return b;
        }
      })
    );
    booking.student_id = student.id;
    fetch("/update", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.status != 200) {
          //TODO: undo here because it failed to update OR only update state on success
        }
      });
  };

  const unbook = (booking: Booking) => {
    // Find booking
    setBookings(
      bookings.map((b: Booking) => {
        if (b.time_start == booking.time_start) {
          delete b.student_id;
          return b;
        } else {
          return b;
        }
      })
    );
    delete booking.student_id;
    fetch("/update", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.status != 200) {
          //TODO: undo here because it failed to update OR only update state on success
        }
      });
  };

  return (
    <div className="flex flex-col">
      <div className="font-bold">Available times:</div>
      {bookings.map((booking: Booking, index: number) => (
        <div key={index}>
          {(!booking.student_id || booking.student_id == student.id) && (
            <div className="flex gap-2 items-center">
              <div>Time: {booking.time_start}</div>
              {!booking.student_id && (
                <button className="btn btn-sm" onClick={() => book(booking)}>
                  Click to book
                </button>
              )}
              {booking.student_id == student.id && (
                <button className="btn btn-sm" onClick={() => unbook(booking)}>
                  undo
                </button>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
