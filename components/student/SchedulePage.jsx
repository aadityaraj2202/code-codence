import { CalendarIcon, ClockIcon } from "./Icons"

const typeColors = {
  Lecture: "bg-blue-50 text-blue-700 border-blue-200",
  Practical: "bg-green-50 text-green-700 border-green-200",
  Tutorial: "bg-amber-50 text-amber-700 border-amber-200",
  "Lab Session": "bg-purple-50 text-purple-700 border-purple-200",
  Workshop: "bg-rose-50 text-rose-700 border-rose-200",
}

export default function SchedulePage({ schedule }) {
  const totalWeeklyClasses = schedule.reduce((sum, d) => sum + d.classes.length, 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-soft backdrop-blur-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          Full Schedule
        </p>
        <h2 className="mt-2 font-display text-2xl font-bold text-slate-950">
          Weekly Class Timetable
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Total Weekly Classes</p>
            <p className="mt-2 font-display text-2xl font-bold text-slate-950">{totalWeeklyClasses}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Active Days</p>
            <p className="mt-2 font-display text-2xl font-bold text-slate-950">
              {schedule.filter(d => d.classes.length > 0).length}
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Enrolled Courses</p>
            <p className="mt-2 font-display text-2xl font-bold text-slate-950">3</p>
          </div>
        </div>
      </section>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 px-1">
        {Object.entries(typeColors).map(([type, cls]) => (
          <span key={type} className={`rounded-full border px-3 py-1 text-xs font-semibold ${cls}`}>
            {type}
          </span>
        ))}
      </div>

      {/* Daily cards */}
      <div className="grid gap-5 lg:grid-cols-2">
        {schedule.map((day) => (
          <DayCard key={day.day} day={day} />
        ))}
      </div>
    </div>
  )
}

function DayCard({ day }) {
  const isEmpty = day.classes.length === 0

  return (
    <section className="rounded-[2rem] border border-white/80 bg-white/85 p-5 shadow-soft backdrop-blur-xl">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950">
          <CalendarIcon className="h-5 w-5 text-white" />
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-slate-950">{day.day}</h3>
          <p className="text-xs text-slate-400">
            {isEmpty ? "No classes" : `${day.classes.length} class${day.classes.length > 1 ? "es" : ""}`}
          </p>
        </div>
      </div>

      {isEmpty ? (
        <div className="rounded-2xl bg-slate-50 py-8 text-center text-sm text-slate-400">
          Free Day 🎉
        </div>
      ) : (
        <div className="space-y-3">
          {day.classes.map((cls) => (
            <ClassSlot key={cls.id} cls={cls} />
          ))}
        </div>
      )}
    </section>
  )
}

function ClassSlot({ cls }) {
  const badgeCls = typeColors[cls.type] || "bg-slate-50 text-slate-700 border-slate-200"

  return (
    <div className={`rounded-2xl border p-4 ${cls.color}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h4 className="font-semibold">{cls.subject}</h4>
          <p className="mt-0.5 text-sm opacity-80">{cls.instructor}</p>
        </div>
        <span className={`shrink-0 rounded-full border px-2 py-0.5 text-xs font-semibold ${badgeCls}`}>
          {cls.type}
        </span>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-4 text-sm opacity-80">
        <span className="flex items-center gap-1.5">
          <ClockIcon className="h-4 w-4" />
          {cls.time} – {cls.endTime}
        </span>
        <span className="flex items-center gap-1.5">
          <RoomIcon className="h-4 w-4" />
          {cls.room}
        </span>
      </div>
    </div>
  )
}

function RoomIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M3 21V7l9-4 9 4v14" />
      <path d="M10 21v-6h4v6" />
      <rect x="6" y="10" width="3" height="3" />
      <rect x="15" y="10" width="3" height="3" />
    </svg>
  )
}
