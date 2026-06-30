export default function ProfileHeader({ attendance, enrolledCourses, student, unreadCount }) {
  return (
    <section className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-soft backdrop-blur-xl">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] bg-gradient-to-br from-brand-500 to-brand-700 text-3xl font-bold text-white shadow-md">
            {student.avatar}
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Profile Header
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-slate-950">
              {student.fullName}
            </h2>
            <p className="mt-1 text-slate-500">
              Student ID: {student.studentId} | Frontend Pathway
            </p>
            <p className="mt-1 text-sm text-slate-500">{student.email}</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <ProfileMetric label="Courses" value={enrolledCourses.length} />
          <ProfileMetric label="Attendance" value={`${attendance.percentage}%`} />
          <ProfileMetric label="Unread Alerts" value={unreadCount} />
        </div>
      </div>
    </section>
  )
}

function ProfileMetric({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 px-5 py-4">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 font-display text-2xl font-bold text-slate-950">{value}</p>
    </div>
  )
}
