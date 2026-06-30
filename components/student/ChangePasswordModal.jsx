export default function ChangePasswordModal({
  error,
  form,
  onChange,
  onClose,
  onSubmit,
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 p-4">
      <div className="w-full max-w-lg rounded-[2rem] bg-white p-6 shadow-soft">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Account Security
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-slate-950">
              Change password
            </h2>
          </div>
          <button className="text-sm font-semibold text-slate-500" onClick={onClose}>
            Close
          </button>
        </div>

        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <Field
            label="Current Password"
            name="currentPassword"
            onChange={onChange}
            type="password"
            value={form.currentPassword}
          />
          <Field
            label="New Password"
            name="newPassword"
            onChange={onChange}
            type="password"
            value={form.newPassword}
          />
          <Field
            label="Confirm New Password"
            name="confirmPassword"
            onChange={onChange}
            type="password"
            value={form.confirmPassword}
          />

          {error ? (
            <p className="rounded-2xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-600">
              {error}
            </p>
          ) : null}

          <div className="flex justify-end gap-3 pt-2">
            <button
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700"
              onClick={onClose}
              type="button"
            >
              Cancel
            </button>
            <button className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white" type="submit">
              Save Password
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function Field({ label, ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-600">{label}</span>
      <input
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-400 focus:bg-white"
        {...props}
      />
    </label>
  )
}
