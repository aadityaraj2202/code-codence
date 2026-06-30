import { requestWithFallback } from "./api";

export interface TrainerDashboard {
  [key: string]: unknown;
}

export interface TrainerCourse {
  id?: string | number;
  title?: string;
  name?: string;
  [key: string]: unknown;
}

export interface TrainerStudent {
  id?: string | number;
  name?: string;
  email?: string;
  [key: string]: unknown;
}

export interface TrainerRecord {
  id?: string | number;
  name?: string;
  email?: string;
  phone?: string;
  phoneNumber?: string;
  expertise?: string[];
  assignedCourseIds?: Array<string | number>;
  experience?: string;
  status?: "Active" | "Inactive" | string;
  [key: string]: unknown;
}

export async function getTrainerDashboard(): Promise<TrainerDashboard> {
  return requestWithFallback<TrainerDashboard>([
    { url: "/trainers/dashboard" },
    { url: "/trainer/dashboard" },
    { url: "/dashboard/trainer" },
  ]);
}

export async function getTrainerCourses(): Promise<TrainerCourse[]> {
  return requestWithFallback<TrainerCourse[]>([
    { url: "/trainers/courses" },
    { url: "/trainers/my-courses" },
    { url: "/courses/my/teaching" },
    { url: "/courses" },
  ]);
}

export async function getStudents(): Promise<TrainerStudent[]> {
  return requestWithFallback<TrainerStudent[]>([
    { url: "/trainers/students" },
    { url: "/trainers/my-students" },
    { url: "/students" },
  ]);
}

export async function getTrainers(): Promise<TrainerRecord[]> {
  return requestWithFallback<TrainerRecord[]>([
    { url: "/trainers" },
    { url: "/trainers/all" },
    { url: "/users?role=trainer" },
  ]);
}

export async function addTrainer(trainer: Partial<TrainerRecord>): Promise<TrainerRecord> {
  return requestWithFallback<TrainerRecord, Partial<TrainerRecord>>([
    { url: "/trainers", method: "post", data: trainer },
    { url: "/trainer", method: "post", data: trainer },
    { url: "/users/trainers", method: "post", data: trainer },
  ]);
}

export async function updateTrainer(
  id: string | number,
  trainer: Partial<TrainerRecord>,
): Promise<TrainerRecord> {
  return requestWithFallback<TrainerRecord, Partial<TrainerRecord>>([
    { url: `/trainers/${id}`, method: "put", data: trainer },
    { url: `/trainer/${id}`, method: "put", data: trainer },
    { url: `/users/trainers/${id}`, method: "patch", data: trainer },
  ]);
}

export async function deleteTrainer(id: string | number): Promise<void> {
  await requestWithFallback<void>([
    { url: `/trainers/${id}`, method: "delete" },
    { url: `/trainer/${id}`, method: "delete" },
    { url: `/users/trainers/${id}`, method: "delete" },
  ]);
}

const trainerService = {
  addTrainer,
  deleteTrainer,
  getTrainerDashboard,
  getTrainerCourses,
  getTrainers,
  getStudents,
  updateTrainer,
};

export default trainerService;
