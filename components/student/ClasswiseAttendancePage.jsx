import { useState } from "react"
import { ArrowLeftIcon } from "./Icons"

export default function ClasswiseAttendancePage({ courseAttendance, onBack }) {
  const [expanded, setExpanded] = useState(null)

  const overall = courseAttendance.reduce(
    (acc, c) => ({ total: acc.total + c.totalClasses, attended: acc.attended + c.attended }),
    { total: 0, attended: 0 }
  )
  const overallPct = Math.round((overall.attended / overall.total) * 100)

  return (
    <div className="space-y-6">
      {/* Back + header */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition hover:border-brand-300 hover:text-brand-700 shadow-soft"
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </button>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Attendance
          </p>
          <h1 className="font-display text-xl font-bold text-slate-950">Class-wise Attendance</h1>
        </div>
      </div>

      {/* Summary */}
      <section className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-soft backdrop-blur-xl">
        <div className="grid gap-4 sm:grid-cols-4">
          <SummaryTile label="Total Classes" value={overall.total} />
          <SummaryTile label="Classes Attended" value={overall.attended} color="text-emerald-600" />
          <SummaryTile label="Classes Absent" value={overall.total - overall.attended} color="text-rose-500" />
          <SummaryTile label="Overall Rate" value={`${overallPct}%`} color={overallPct >= 75 ? "text-emerald-600" : "text-rose-500"} />
        </div>

        {/* Overall bar */}
        <div className="mt-5">
          <div className="mb-1.5 flex justify-between text-sm">
            <span className="text-slate-500">Overall Attendance</span>
            <span className={`font-semibold ${overallPct >= 75 ? "text-emerald-600" : "text-rose-500"}`}>
              {overallPct}%
            </span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-slate-100">
            <div
              className={`h-full rounded-full ${overallPct >= 75 ? "bg-emerald-500" : "bg-rose-400"} transition-all`}
              style={{ width: `${overallPct}%` }}
            />
          </div>
          {overallPct < 75 && (
            <p className="mt-2 text-xs text-rose-500 font-medium">
              ⚠️ Attendance below 75% — risk of being marked short attendance
            </p>
          )}
        </div>
      </section>

      {/* Per-course cards */}
      <div className="space-y-4">
        {courseAttendance.map((course) => {
          const pct = Math.round((course.attended / course.totalClasses) * 100)
          const isOpen = expanded === course.courseId

          return (
            <section
              key={course.courseId}
              className="rounded-[2rem] border border-white/80 bg-white/85 shadow-soft backdrop-blur-xl overflow-hidden"
            >
              {/* Header row */}
              <button
                onClick={() => setExpanded(isOpen ? null : course.courseId)}
                className="flex w-full items-center gap-4 p-5 text-left"
              >
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${course.gradient} font-display text-lg font-bold text-white shadow-md`}>
                  {course.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base font-bold text-slate-950">{course.courseName}</h3>
                  <p className="text-sm text-slate-500">{course.instructor}</p>

                  <div className="mt-2 flex items-center gap-3">
                    <div className="flex-1 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className={`h-full rounded-full ${pct >= 75 ? "bg-emerald-500" : "bg-rose-400"}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className={`shrink-0 text-sm font-bold ${pct >= 75 ? "text-emerald-600" : "text-rose-500"}`}>
                      {pct}%
                    </span>
                  </div>
                </div>

                <div className="shrink-0 text-right">
                  <p className="font-display text-2xl font-bold text-slate-950">
                    {course.attended}
                    <span className="text-base font-normal text-slate-400">/{course.totalClasses}</span>
                  </p>
                  <p className="text-xs text-slate-400">attended</p>
                  <ChevronIcon className={`mt-2 ml-auto h-5 w-5 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </div>
              </button>

              {/* Expandable session list */}
              {isOpen && (
                <div className="border-t border-slate-100 px-5 pb-5 pt-4">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Recent Sessions
                  </p>
                  <div className="space-y-2">
                    {course.sessions.map((session, i) => (
                      <div
                        key={i}
                        className={`flex items-center justify-between rounded-2xl px-4 py-3 ${
                          session.status === "present"
                            ? "bg-emerald-50"
                            : "bg-rose-50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm ${
                            session.status === "present"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-rose-100 text-rose-600"
                          }`}>
                            {session.status === "present" ? "✓" : "✗"}
                          </span>
                          <div>
                            <p className="text-sm font-medium text-slate-800">{session.topic}</p>
                            <p className="text-xs text-slate-400">{session.date}</p>
                          </div>
                        </div>
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                          session.status === "present"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-rose-100 text-rose-600"
                        }`}>
                          {session.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )
        })}
      </div>
    </div>
  )
}

function SummaryTile({ label, value, color = "text-slate-950" }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <p className="text-sm text-slate-500">{label}</p>
      <p className={`mt-2 font-display text-2xl font-bold ${color}`}>{value}</p>
    </div>
  )
}

function ChevronIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
