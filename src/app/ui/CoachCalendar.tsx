import { useState } from "react";

export function CoachCalendar(props: any) {
  return (
    <div>
      <select className="select select-bordered w-full max-w-xs">
        <option disabled selected>
          Who shot first?
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
    </div>
  );
}
