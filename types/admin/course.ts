export interface Quiz {
  id: string;
  question: string;
  options: string[];
  answer: string;
}

export interface CourseContent {
  videos: File[];
  notes: File[];
  assignments: File[];
  quizzes: Quiz[];
}

export interface Course {
  id: string;
  name: string;
  description?: string;
  duration: string;
  price: number;
  trainerId: number;
  status: "Active" | "Inactive";
  enrollments: number;
  imageUrl?: string;
  content?: CourseContent;
}

