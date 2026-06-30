export interface Trainer {
  id: string;
  name: string;
  email: string;
  phone: string;
  expertise: string[];
  assignedCourseIds: (string | number)[];
  experience: string;
  status: "Active" | "Inactive";
  role?: string;
  courses?: number;
  rating?: number;
}

