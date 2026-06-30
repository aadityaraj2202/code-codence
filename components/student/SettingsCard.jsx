export default function SettingsCard({
  actionLabel,
  description,
  icon: Icon,
  onAction,
  title,
  value,
}) {
  return (
    <article className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:border-brand-100 hover:bg-brand-50/40">
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-950">{title}</h3>
            <p className="mt-1 text-sm text-slate-500">{description}</p>
            {value ? (
              <p className="mt-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700">
                {value}
              </p>
            ) : null}
          </div>
        </div>

        <button
          className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
          onClick={onAction}
        >
          {actionLabel}
        </button>
      </div>
    </article>
  )
}
