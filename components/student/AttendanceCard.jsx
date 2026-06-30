function AttendanceRing({ value }) {
  const radius = 52
  const circumference = 2 * Math.PI * radius
  const dashOffset = circumference - (value / 100) * circumference

  return (
    <div className="relative flex items-center justify-center">
      <svg className="h-40 w-40 -rotate-90" viewBox="0 0 140 140">
        <circle
          cx="70"
          cy="70"
          r={radius}
          className="fill-none stroke-slate-100"
          strokeWidth="12"
        />
        <circle
          cx="70"
          cy="70"
          r={radius}
          className="fill-none stroke-brand-500 transition-all duration-1000"
          strokeLinecap="round"
          strokeWidth="12"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: dashOffset,
          }}
        />
      </svg>
      <div className="absolute text-center">
        <p className="font-display text-3xl font-bold text-slate-950">
          {value}%
        </p>
        <p className="text-sm text-slate-500">Attendance</p>
      </div>
    </div>
  )
}

export default function AttendanceCard({ attendance, onViewAttendance }) {
  return (
    <section className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-soft backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Attendance Overview
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-slate-950">
            Your class consistency
          </h2>
        </div>
        <button
          onClick={onViewAttendance}
          className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
        >
          View Attendance
        </button>
      </div>

      <div className="mt-6 grid items-center gap-6 lg:grid-cols-[180px,1fr]">
        <AttendanceRing value={attendance.percentage} />

        <div className="grid gap-4 sm:grid-cols-2">
          <StatCard label="Total Classes" value={attendance.totalClasses} />
          <StatCard label="Classes Attended" value={attendance.attended} />
          <StatCard label="Classes Absent" value={attendance.absent} />
          <StatCard label="Attendance Rate" value={`${attendance.percentage}%`} />
        </div>
      </div>
    </section>
  )
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 font-display text-2xl font-bold text-slate-950">
        {value}
      </p>
    </div>
  )
}
