export interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  trainerId: number;
  trainerName?: string;
  courseId: number;
  courseName?: string;
  joinDate: string;
  status: "Active" | "Paused" | "Graduated";
  paymentStatus?: "Paid" | "Pending";
}

export const DUMMY_TRAINERS = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Mike Johnson" },
];

export const DUMMY_COURSES = [
  { id: 1, name: "Full-Stack Web Dev" },
  { id: 2, name: "Data Science Bootcamp" },
  { id: 3, name: "UI/UX Design Masterclass" },
  { id: 4, name: "Mobile App Dev using React Native" },
];

