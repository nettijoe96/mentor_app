export type Booking = {
  // when student_id not present, booking is available
  student_id?: number;
  time_start: string;
  time_end: string;
};

export type Student = {
  id: number;
  full_name: string;
  phone: string;
};

export type Coach = {
  id: number;
  full_name: string;
  phone: string;
};
