export default function RecentActivity({ activities }) {
  return (
    <section className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-soft backdrop-blur-xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
        Recent Activity
      </p>
      <h2 className="mt-2 font-display text-2xl font-bold text-slate-950">
        Learning momentum
      </h2>

      <div className="mt-6 space-y-4">
        {activities.map((activity, index) => (
          <article
            key={activity.id}
            className="flex gap-4 rounded-2xl bg-slate-50 p-4 animate-slide-up"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="mt-1 h-3 w-3 rounded-full bg-brand-500" />
            <div>
              <p className="font-medium text-slate-800">{activity.description}</p>
              <p className="mt-1 text-sm text-slate-500">{activity.timestamp}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
