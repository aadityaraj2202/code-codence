"use client";

import { useState } from "react";
import { BookOpen, LayoutDashboard, Menu, Settings, UserCircle, Users, X } from "lucide-react";
import AddCourseModal from "@/components/admin/AddCourseModal";
import AddStudentModal from "@/components/admin/AddStudentModal";
import AddTrainerModal from "@/components/admin/AddTrainerModal";
import type { Course } from "@/types/admin/course";
import type { Student } from "@/types/admin/student";
import type { Trainer } from "@/types/admin/trainer";

const navItems = [
  { key: "overview", label: "Overview", icon: LayoutDashboard },
  { key: "students", label: "Students", icon: Users },
  { key: "courses", label: "Courses", icon: BookOpen },
  { key: "trainers", label: "Trainers", icon: UserCircle },
  { key: "settings", label: "Settings", icon: Settings },
];

const overviewStats = [
  { label: "Students", value: "4,209" },
  { label: "Courses", value: "143" },
  { label: "Trainers", value: "48" },
  { label: "Revenue", value: "$124,500" },
];

const initialStudents: Student[] = [
  { id: 1, name: "Alice Freeman", email: "alice@example.com", phone: "9876543210", trainerId: 1, courseId: 1, joinDate: "2025-10-24", status: "Active" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", phone: "9876543211", trainerId: 2, courseId: 2, joinDate: "2025-10-22", status: "Graduated" },
];

const initialCourses: Course[] = [
  { id: "COURSE_001", name: "Full-Stack Web Dev", description: "Covers React, Node.js, and databases.", duration: "6 Months", price: 2500, trainerId: 1, enrollments: 145, status: "Active" },
  { id: "COURSE_002", name: "Data Science Bootcamp", description: "Data analysis and ML with Python.", duration: "8 Months", price: 3200, trainerId: 2, enrollments: 89, status: "Active" },
];

const initialTrainers: Trainer[] = [
  { id: "TRN-001", name: "Dr. Alan Turing", email: "alan@codence.com", phone: "9876543210", expertise: ["Data Science"], assignedCourseIds: [2], experience: "15 Years", status: "Active", role: "Lead Data Scientist", courses: 3, rating: 4.9 },
  { id: "TRN-002", name: "Ada Lovelace", email: "ada@codence.com", phone: "9876543211", expertise: ["Frontend"], assignedCourseIds: [1], experience: "10 Years", status: "Active", role: "Frontend Expert", courses: 2, rating: 4.8 },
];

function AdminSidebar({ active, mobileOpen, onChange, onClose }: { active: string; mobileOpen: boolean; onChange: (value: string) => void; onClose: () => void; }) {
  return (
    <>
      {mobileOpen && <button className="fixed inset-0 z-30 bg-slate-950/40 lg:hidden" onClick={onClose} />}
      <aside className={["fixed inset-y-0 left-0 z-40 w-72 border-r border-slate-200 bg-white shadow-xl transition-transform lg:static lg:translate-x-0", mobileOpen ? "translate-x-0" : "-translate-x-full"].join(" ")}>
        <div className="flex h-20 items-center justify-between border-b border-slate-200 px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Codence</p>
            <h2 className="text-lg font-bold text-slate-900">Admin Dashboard</h2>
          </div>
          <button className="lg:hidden" onClick={onClose}><X size={20} /></button>
        </div>
        <nav className="space-y-2 p-4">
          {navItems.map(({ key, label, icon: Icon }) => (
            <button key={key} onClick={() => { onChange(key); onClose(); }} className={["flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium transition", active === key ? "bg-brand-50 text-brand-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"].join(" ")}>
              <Icon size={18} />{label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode; }) {
  return (
    <section className="glass rounded-[28px] p-6">
      <h2 className="text-lg font-bold text-slate-900">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function AdminDashboardShell() {
  const [active, setActive] = useState("overview");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [students, setStudents] = useState(initialStudents);
  const [courses, setCourses] = useState(initialCourses);
  const [trainers, setTrainers] = useState(initialTrainers);
  const [studentModalOpen, setStudentModalOpen] = useState(false);
  const [courseModalOpen, setCourseModalOpen] = useState(false);
  const [trainerModalOpen, setTrainerModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto flex min-h-screen max-w-[1600px] gap-6 p-4 md:p-6">
        <AdminSidebar active={active} mobileOpen={mobileOpen} onChange={setActive} onClose={() => setMobileOpen(false)} />

        <div className="flex-1 space-y-6">
          <header className="glass flex items-center justify-between rounded-[28px] px-5 py-4">
            <div className="flex items-center gap-3">
              <button className="lg:hidden" onClick={() => setMobileOpen(true)}><Menu size={20} /></button>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Control Center</p>
                <h1 className="text-2xl font-bold text-slate-900">{navItems.find((item) => item.key === active)?.label ?? "Overview"}</h1>
              </div>
            </div>
            <div className="hidden text-sm font-medium text-slate-600 md:block">Admin · institute@codence.com</div>
          </header>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {overviewStats.map((stat) => (
              <div key={stat.label} className="glass rounded-[28px] p-5">
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                <p className="mt-3 text-3xl font-bold text-slate-900">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.2fr_1fr]">
            <Section title="Students">
              <div className="space-y-3">
                {students.map((student) => (
                  <div key={student.id} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
                    <div>
                      <p className="font-semibold text-slate-900">{student.name}</p>
                      <p className="text-sm text-slate-500">{student.email}</p>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">{student.status}</span>
                  </div>
                ))}
                <button onClick={() => setStudentModalOpen(true)} className="rounded-2xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white">Add Student</button>
              </div>
            </Section>

            <Section title="Trainers">
              <div className="space-y-3">
                {trainers.map((trainer) => (
                  <div key={trainer.id} className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="font-semibold text-slate-900">{trainer.name}</p>
                    <p className="text-sm text-slate-500">{trainer.role}</p>
                    <p className="mt-2 text-sm text-slate-600">{trainer.courses} courses · {trainer.rating} rating</p>
                  </div>
                ))}
                <button onClick={() => setTrainerModalOpen(true)} className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white">Add Trainer</button>
              </div>
            </Section>
          </div>

          <Section title="Courses">
            <div className="grid gap-4 md:grid-cols-2">
              {courses.map((course) => (
                <div key={course.id} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-slate-900">{course.name}</h3>
                      <p className="mt-1 text-sm text-slate-500">{course.description}</p>
                    </div>
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{course.status}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600">
                    <span>{course.duration}</span>
                    <span>${course.price}</span>
                    <span>{course.enrollments} enrollments</span>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => setCourseModalOpen(true)} className="mt-5 rounded-2xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white">Add Course</button>
          </Section>
        </div>
      </div>

      <AddStudentModal isOpen={studentModalOpen} onClose={() => setStudentModalOpen(false)} onSuccess={(student) => setStudents((current) => [student, ...current])} />
      <AddCourseModal isOpen={courseModalOpen} onClose={() => setCourseModalOpen(false)} onSuccess={(course) => setCourses((current) => [course, ...current])} />
      <AddTrainerModal isOpen={trainerModalOpen} onClose={() => setTrainerModalOpen(false)} onSuccess={(trainer) => setTrainers((current) => [{ ...trainer, role: trainer.expertise[0] || "Trainer", courses: trainer.assignedCourseIds.length, rating: 5 }, ...current])} />
    </div>
  );
}

