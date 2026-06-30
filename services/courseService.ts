import { request, requestWithFallback } from "./api";

export interface Course {
  id?: string | number;
  title?: string;
  name?: string;
  description?: string;
  [key: string]: unknown;
}

export async function getAllCourses(): Promise<Course[]> {
  return request<Course[]>({
    url: "/courses",
  });
}

export async function getCourseById(id: string | number): Promise<Course> {
  return request<Course>({
    url: `/courses/${id}`,
  });
}

export async function enrollCourse(courseId: string | number): Promise<unknown> {
  return requestWithFallback<unknown, { courseId: string | number }>([
    {
      url: `/courses/${courseId}/enroll`,
      method: "post",
    },
    {
      url: "/courses/enroll",
      method: "post",
      data: { courseId },
    },
  ]);
}

export async function getCourses(): Promise<Course[]> {
  return getAllCourses();
}

const courseService = {
  getAllCourses,
  getCourseById,
  enrollCourse,
  getCourses,
};

export default courseService;
