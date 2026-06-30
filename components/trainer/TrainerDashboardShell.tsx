"use client";

import { useMemo, useState } from "react";
import {
  BookOpen,
  Calendar,
  ClipboardCheck,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Menu,
  TrendingUp,
  Users,
  X,
} from "lucide-react";

const navItems = [
  { key: "overview", label: "Overview", icon: LayoutDashboard },
  { key: "courses", label: "Courses", icon: BookOpen },
  { key: "students", label: "Students", icon: Users },
  { key: "attendance", label: "Attendance", icon: ClipboardCheck },
  { key: "progress", label: "Progress", icon: TrendingUp },
  { key: "materials", label: "Materials", icon: FileText },
  { key: "schedule", label: "Schedule", icon: Calendar },
];

const stats = [
  { label: "Active Courses", value: "12", note: "+2 this month" },
  { label: "Students", value: "284", note: "+18 this month" },
  { label: "Attendance", value: "87%", note: "Steady this week" },
  { label: "Completion", value: "73%", note: "Needs follow-up" },
];

const courses = [
  { name: "React Fundamentals", students: 45, progress: 82, status: "Active" },
  { name: "JavaScript Basics", students: 68, progress: 91, status: "Active" },
  { name: "Node.js Backend", students: 28, progress: 74, status: "Review" },
];

const students = [
  { name: "Alex Johnson", course: "React Fundamentals", attendance: "92%" },
  { name: "Maria Garcia", course: "CSS Mastery", attendance: "85%" },
  { name: "Sam Wilson", course: "Node.js Backend", attendance: "72%" },
];

const schedule = [
  { time: "09:00 AM", title: "React live session", room: "Batch A" },
  { time: "11:30 AM", title: "Assignment review", room: "Batch C" },
  { time: "03:00 PM", title: "Trainer office hours", room: "Community" },
];

function Sidebar({ activeSection, mobileOpen, onNavigate, onClose }: { activeSection: string; mobileOpen: boolean; onNavigate: (key: string) => void; onClose: () => void; }) {
  return (
    <>
      {mobileOpen && (
        <button aria-label="Close sidebar overlay" className="fixed inset-0 z-30 bg-slate-950/40 lg:hidden" onClick={onClose} />
      )}

      <aside className={["fixed inset-y-0 left-0 z-40 w-72 border-r border-slate-200 bg-white shadow-xl transition-transform lg:static lg:translate-x-0", mobileOpen ? "translate-x-0" : "-translate-x-full"].join(" ")}>
        <div className="flex h-20 items-center justify-between border-b border-slate-200 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-600 text-white">
              <GraduationCap size={22} />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Codence</p>
              <h2 className="text-lg font-bold text-slate-900">Trainer Dashboard</h2>
            </div>
          </div>
          <button className="lg:hidden" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <nav className="space-y-2 p-4">
          {navItems.map(({ key, label, icon: Icon }) => {
            const active = activeSection === key;
            return (
              <button
                key={key}
                onClick={() => {
                  onNavigate(key);
                  onClose();
                }}
                className={[
                  "flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium transition",
                  active ? "bg-sky-50 text-sky-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                ].join(" ")}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}

function Header({ title, onOpenMenu }: { title: string; onOpenMenu: () => void; }) {
  return (
    <header className="flex items-center justify-between rounded-[28px] border border-slate-200 bg-white px-5 py-4 shadow-sm">
      <div className="flex items-center gap-3">
        <button className="lg:hidden" onClick={onOpenMenu}>
          <Menu size={20} />
        </button>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Trainer Workspace</p>
          <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
        </div>
      </div>
      <div className="hidden rounded-2xl bg-slate-100 px-4 py-2 text-sm text-slate-600 md:block">John Doe · Senior Trainer</div>
    </header>
  );
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode; }) {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function TrainerDashboardShell() {
  const [activeSection, setActiveSection] = useState("overview");
  const [mobileOpen, setMobileOpen] = useState(false);

  const title = useMemo(() => navItems.find((item) => item.key === activeSection)?.label ?? "Overview", [activeSection]);

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto flex min-h-screen max-w-[1600px] gap-6 p-4 md:p-6">
        <Sidebar activeSection={activeSection} mobileOpen={mobileOpen} onNavigate={setActiveSection} onClose={() => setMobileOpen(false)} />

        <div className="flex-1 space-y-6">
          <Header title={title} onOpenMenu={() => setMobileOpen(true)} />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                <p className="mt-3 text-3xl font-bold text-slate-900">{stat.value}</p>
                <p className="mt-2 text-sm text-emerald-600">{stat.note}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
            <SectionCard title="Course Performance">
              <div className="space-y-4">
                {courses.map((course) => (
                  <div key={course.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-slate-900">{course.name}</h3>
                        <p className="text-sm text-slate-500">{course.students} students</p>
                      </div>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600">{course.status}</span>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-slate-200">
                      <div className="h-2 rounded-full bg-sky-600" style={{ width: `${course.progress}%` }} />
                    </div>
                    <p className="mt-2 text-sm text-slate-500">{course.progress}% complete</p>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard title="Today’s Schedule">
              <div className="space-y-3">
                {schedule.map((item) => (
                  <div key={item.time} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-sky-700">{item.time}</p>
                    <h3 className="mt-1 font-semibold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-500">{item.room}</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.2fr_1fr]">
            <SectionCard title="Student Snapshot">
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <table className="w-full text-left">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Student</th>
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Course</th>
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Attendance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {students.map((student) => (
                      <tr key={student.name}>
                        <td className="px-4 py-3 font-medium text-slate-900">{student.name}</td>
                        <td className="px-4 py-3 text-slate-600">{student.course}</td>
                        <td className="px-4 py-3 text-slate-600">{student.attendance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionCard>

            <SectionCard title="Materials Queue">
              <div className="space-y-3">
                {["Upload Module 5 slides", "Review assignment rubric", "Publish session recording"].map((item) => (
                  <div key={item} className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm font-medium text-slate-600">{item}</div>
                ))}
              </div>
            </SectionCard>
          </div>
        </div>
      </div>
    </div>
  );
}

