"use client";

import { useMemo, useState } from "react";
import { BookOpen, Calendar, LayoutDashboard, Menu, TrendingUp, UserCircle, X } from "lucide-react";
import CourseCard from "@/components/courses/CourseCard";
import ProgressBar from "@/components/courses/ProgressBar";
import ScheduleTable from "@/components/courses/ScheduleTable";
import TrainerInfo from "@/components/courses/TrainerInfo";

const navItems = [
  { key: "overview", label: "Overview", icon: LayoutDashboard },
  { key: "catalog", label: "Catalog", icon: BookOpen },
  { key: "trainer", label: "Trainer", icon: UserCircle },
  { key: "schedule", label: "Schedule", icon: Calendar },
  { key: "progress", label: "Progress", icon: TrendingUp },
];

const trainer = {
  name: "Priya Sharma",
  email: "priya@codence.com",
  bio: "Specializes in project-based full stack learning and cohort delivery.",
};

const courses = [
  {
    _id: "course-1",
    title: "Full Stack Java",
    description: "Build production-ready Java applications from fundamentals to deployment.",
    category: "Backend",
    level: "Intermediate",
    trainer,
    students: [{ _id: "1" }, { _id: "2" }, { _id: "3" }],
    schedule: [
      { topic: "Spring Boot setup", date: "2026-04-01", duration: 90, completed: true },
      { topic: "REST APIs", date: "2026-04-03", duration: 90, completed: false },
    ],
    progress: [{ student: "student-1", completedLessons: 8, totalLessons: 12 }],
  },
  {
    _id: "course-2",
    title: "React Dashboard Engineering",
    description: "Design and ship modern dashboard experiences with reusable components.",
    category: "Frontend",
    level: "Beginner",
    trainer,
    students: [{ _id: "1" }, { _id: "2" }],
    schedule: [
      { topic: "Layout systems", date: "2026-04-04", duration: 75, completed: true },
      { topic: "Charts and filters", date: "2026-04-06", duration: 75, completed: false },
    ],
    progress: [{ student: "student-1", completedLessons: 5, totalLessons: 10 }],
  },
];

function CourseSidebar({ active, mobileOpen, onChange, onClose }: { active: string; mobileOpen: boolean; onChange: (value: string) => void; onClose: () => void; }) {
  return (
    <>
      {mobileOpen && <button className="fixed inset-0 z-30 bg-slate-950/40 lg:hidden" onClick={onClose} />}
      <aside className={["fixed inset-y-0 left-0 z-40 w-72 border-r border-slate-200 bg-white shadow-xl transition-transform lg:static lg:translate-x-0", mobileOpen ? "translate-x-0" : "-translate-x-full"].join(" ")}>
        <div className="flex h-20 items-center justify-between border-b border-slate-200 px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Codence</p>
            <h2 className="text-lg font-bold text-slate-900">Course Dashboard</h2>
          </div>
          <button className="lg:hidden" onClick={onClose}><X size={20} /></button>
        </div>
        <nav className="space-y-2 p-4">
          {navItems.map(({ key, label, icon: Icon }) => (
            <button key={key} onClick={() => { onChange(key); onClose(); }} className={["flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium transition", active === key ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"].join(" ")}>
              <Icon size={18} />{label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default function CourseDashboardShell() {
  const [active, setActive] = useState("overview");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  const activeLabel = useMemo(() => navItems.find((item) => item.key === active)?.label ?? "Overview", [active]);

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto flex min-h-screen max-w-[1600px] gap-6 p-4 md:p-6">
        <CourseSidebar active={active} mobileOpen={mobileOpen} onChange={setActive} onClose={() => setMobileOpen(false)} />

        <div className="flex-1 space-y-6">
          <header className="flex items-center justify-between rounded-[28px] border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-3">
              <button className="lg:hidden" onClick={() => setMobileOpen(true)}><Menu size={20} /></button>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Learning Catalog</p>
                <h1 className="text-2xl font-bold text-slate-900">{activeLabel}</h1>
              </div>
            </div>
            <div className="hidden text-sm text-slate-600 md:block">No auth mode enabled</div>
          </header>

          <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
            <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">Course Catalog</h2>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {courses.map((course) => (
                  <button key={course._id} className="text-left" onClick={() => setSelectedCourse(course)}>
                    <CourseCard course={course} myProgress={undefined} isEnrolled currentUserId="student-1" onOpenCourse={() => setSelectedCourse(course)} />
                  </button>
                ))}
              </div>
            </section>

            <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">Selected Course</h2>
              <div className="mt-5 space-y-5">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <h3 className="font-semibold text-slate-900">{selectedCourse.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{selectedCourse.description}</p>
                </div>
                <ProgressBar completed={selectedCourse.progress[0].completedLessons} total={selectedCourse.progress[0].totalLessons} label="Student progress" />
                <TrainerInfo trainer={selectedCourse.trainer} />
              </div>
            </section>
          </div>

          <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Upcoming Schedule</h2>
            <div className="mt-5">
              <ScheduleTable schedule={selectedCourse.schedule} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

