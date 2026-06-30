import { CalendarIcon, ClockIcon } from "./Icons"

export default function UpcomingClasses({ classes, onViewSchedule, onJoinClass }) {
  return (
    <section className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-soft backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Upcoming Classes
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-slate-950">
            Scheduled sessions
          </h2>
        </div>
        <button
          onClick={onViewSchedule}
          className="text-sm font-semibold text-brand-700 transition hover:text-brand-800"
        >
          View Full Schedule
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {classes.map((item) => (
          <article
            key={item.id}
            className="flex flex-wrap items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition hover:border-brand-100 hover:bg-brand-50/50"
          >
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient || "from-slate-700 to-slate-900"} font-bold text-white text-sm`}>
              {item.icon}
            </div>

            <div className="min-w-[160px] flex-1">
              <h3 className="font-semibold text-slate-900">{item.courseName}</h3>
              <p className="text-sm text-slate-500">{item.instructor}</p>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-600">
              <CalendarIcon className="h-4 w-4" />
              <span>{item.date}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-600">
              <ClockIcon className="h-4 w-4" />
              <span>{item.time}</span>
            </div>

            <button
              onClick={() => onJoinClass(item)}
              className="rounded-2xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Join
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
