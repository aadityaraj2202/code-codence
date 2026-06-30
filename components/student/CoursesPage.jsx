import CourseCard from "./CourseCard"

export default function CoursesPage({ courses, onContinueLearning }) {
  const totalLessons = courses.reduce((sum, course) => sum + course.totalLessons, 0)
  const completedLessons = courses.reduce(
    (sum, course) => sum + course.completedLessons,
    0,
  )
  const averageProgress = Math.round(
    courses.reduce((sum, course) => sum + course.progress, 0) / courses.length,
  )

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-soft backdrop-blur-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          My Courses
        </p>
        <h2 className="mt-2 font-display text-2xl font-bold text-slate-950">
          Full enrolled courses overview
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <StatCard label="Enrolled Courses" value={courses.length} />
          <StatCard
            label="Completed Lessons"
            value={`${completedLessons}/${totalLessons}`}
          />
          <StatCard label="Average Progress" value={`${averageProgress}%`} />
        </div>
      </section>

      <div className="grid gap-5 xl:grid-cols-3">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onContinueLearning={onContinueLearning}
          />
        ))}
      </div>
    </div>
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
