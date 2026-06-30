import AttendanceCard from "./AttendanceCard"
import CourseCard from "./CourseCard"
import RecentActivity from "./RecentActivity"
import UpcomingClasses from "./UpcomingClasses"
import WelcomeCard from "./WelcomeCard"

export default function DashboardHome({
  attendance,
  courses,
  recentActivity,
  student,
  upcomingClasses,
  onContinueLearning,
  onJoinClass,
  onViewSchedule,
  onViewAttendance,
}) {
  const highlightedCourses = courses.slice(0, 2)
  const upcomingPreview = upcomingClasses.slice(0, 3)
  const activityPreview = recentActivity.slice(0, 2)

  return (
    <div className="space-y-6">
      <WelcomeCard
        studentName={student.name}
        courseCount={courses.length}
      />

      <section className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Dashboard Snapshot
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-slate-950">
            Most important learning updates
          </h2>
        </div>

        <div className="grid gap-5 xl:grid-cols-2">
          {highlightedCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onContinueLearning={onContinueLearning}
            />
          ))}
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.1fr,0.9fr]">
        <AttendanceCard
          attendance={attendance}
          onViewAttendance={onViewAttendance}
        />
        <RecentActivity activities={activityPreview} />
      </div>

      <UpcomingClasses
        classes={upcomingPreview}
        onViewSchedule={onViewSchedule}
        onJoinClass={onJoinClass}
      />
    </div>
  )
}
