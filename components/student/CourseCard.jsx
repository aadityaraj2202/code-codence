export default function CourseCard({ course, onContinueLearning }) {
  return (
    <article className="group rounded-[2rem] border border-white/80 bg-white/85 p-5 shadow-soft backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-float">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${course.gradient} font-display text-lg font-bold text-white shadow-md`}
          >
            {course.icon}
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-slate-950">
              {course.title}
            </h3>
            <p className="mt-1 text-sm text-slate-500">{course.instructor}</p>
          </div>
        </div>
        <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">
          {course.progress}%
        </span>
      </div>

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-medium text-slate-500">Progress</span>
          <span className="font-semibold text-slate-700">
            {course.completedLessons}/{course.totalLessons} lessons
          </span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-500 to-emerald-400 animate-grow-width"
            style={{ "--progress-width": `${course.progress}%` }}
          />
        </div>
      </div>

      <button
        onClick={() => onContinueLearning && onContinueLearning(course)}
        className="mt-6 inline-flex items-center justify-center rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
      >
        Continue Learning
      </button>
    </article>
  )
}
