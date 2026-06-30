import { requestWithFallback } from "./api";

export interface StudentDashboard {
  [key: string]: unknown;
}

export interface StudentProfile {
  id?: string | number;
  name?: string;
  email?: string;
  phoneNumber?: string;
  [key: string]: unknown;
}

export interface StudentCourse {
  id?: string | number;
  title?: string;
  name?: string;
  description?: string;
  [key: string]: unknown;
}

export async function getStudentDashboard(): Promise<StudentDashboard> {
  return requestWithFallback<StudentDashboard>([
    { url: "/students/dashboard" },
    { url: "/student/dashboard" },
    { url: "/dashboard/student" },
  ]);
}

export async function getStudentProfile(): Promise<StudentProfile> {
  return requestWithFallback<StudentProfile>([
    { url: "/students/profile" },
    { url: "/students/me" },
    { url: "/student/profile" },
  ]);
}

export async function getCourses(): Promise<StudentCourse[]> {
  return requestWithFallback<StudentCourse[]>([
    { url: "/students/courses" },
    { url: "/students/my-courses" },
    { url: "/courses/my/enrolled" },
    { url: "/courses" },
  ]);
}

const studentService = {
  getStudentDashboard,
  getStudentProfile,
  getCourses,
};

export default studentService;
