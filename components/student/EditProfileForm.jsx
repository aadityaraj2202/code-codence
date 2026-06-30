export default function EditProfileForm({ form, onChange, onClose, onSubmit }) {
  const fields = [
    ["fullName", "Full Name", "text"],
    ["studentId", "Student ID", "text"],
    ["email", "Email Address", "email"],
    ["phone", "Phone Number", "text"],
    ["dateOfBirth", "Date of Birth", "text"],
    ["gender", "Gender", "text"],
    ["address", "Address / Location", "text"],
    ["nationality", "Nationality", "text"],
    ["avatar", "Avatar Initials", "text"],
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 p-4">
      <div className="w-full max-w-3xl rounded-[2rem] bg-white p-6 shadow-soft">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Edit Profile
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-slate-950">
              Update personal information
            </h2>
          </div>
          <button className="text-sm font-semibold text-slate-500" onClick={onClose}>
            Close
          </button>
        </div>

        <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={onSubmit}>
          {fields.map(([name, label, type]) => (
            <label className={`block ${name === "address" ? "sm:col-span-2" : ""}`} key={name}>
              <span className="mb-2 block text-sm font-medium text-slate-600">{label}</span>
              <input
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-400 focus:bg-white"
                name={name}
                onChange={onChange}
                type={type}
                value={form[name]}
              />
            </label>
          ))}

          <div className="sm:col-span-2 flex justify-end gap-3 pt-2">
            <button
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700"
              onClick={onClose}
              type="button"
            >
              Cancel
            </button>
            <button className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white" type="submit">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
