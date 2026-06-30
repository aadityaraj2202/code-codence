export default function NotificationsPanel({ notifications }) {
  return (
    <section className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-soft backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Notifications
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-slate-950">
            Important updates
          </h2>
        </div>
        <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">
          {notifications.filter((item) => item.unread).length} unread
        </span>
      </div>

      <div className="mt-6 space-y-3">
        {notifications.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
          >
            <div className="flex items-start gap-3">
              <span
                className={`mt-1 h-3 w-3 rounded-full ${
                  item.unread ? "bg-rose-500" : "bg-slate-300"
                }`}
              />
              <div>
                <p className="font-medium text-slate-800">{item.title}</p>
                <p className="mt-1 text-sm text-slate-500">
                  {item.unread ? "New platform alert" : "Previously seen"}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
