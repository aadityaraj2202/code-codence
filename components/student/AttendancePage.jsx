import AttendanceCard from "./AttendanceCard"
import RecentActivity from "./RecentActivity"

export default function AttendancePage({ attendance, activities, onViewAttendance }) {
  return (
    <div className="space-y-6">
      <AttendanceCard attendance={attendance} onViewAttendance={onViewAttendance} />

      <section className="grid gap-6 lg:grid-cols-[0.9fr,1.1fr]">
        <div className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-soft backdrop-blur-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Attendance Details
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-slate-950">
            Monthly learning consistency
          </h2>

          <div className="mt-6 space-y-4">
            <AttendanceRow
              label="Classes Attended"
              value={attendance.attended}
              percentage={attendance.percentage}
              color="bg-brand-500"
            />
            <AttendanceRow
              label="Classes Absent"
              value={attendance.absent}
              percentage={100 - attendance.percentage}
              color="bg-rose-400"
            />
          </div>
        </div>

        <RecentActivity activities={activities} />
      </section>
    </div>
  )
}

function AttendanceRow({ color, label, percentage, value }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-slate-700">{label}</span>
        <span className="text-slate-500">
          {value} ({percentage}%)
        </span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-100">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  )
}
