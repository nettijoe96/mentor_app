export type Booking = {
  // when student_id not present, booking is available
  student_id?: number;
  time_start: string;
  time_end: string;
};

export type Student = {
  student_id: number;
  full_name: string;
  phone: string;
};

export type Coach = {
  coach_id: number;
  full_name: string;
  phone: string;
};
