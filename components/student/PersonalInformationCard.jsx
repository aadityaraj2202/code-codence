import {
  CalendarIcon,
  GlobeIcon,
  LocationIcon,
  MailIcon,
  PencilIcon,
  PhoneIcon,
  ProfileIcon,
} from "./Icons"

const fields = [
  { key: "fullName", label: "Full Name", icon: ProfileIcon },
  { key: "studentId", label: "Student ID", icon: ProfileIcon },
  { key: "email", label: "Email Address", icon: MailIcon },
  { key: "phone", label: "Phone Number", icon: PhoneIcon },
  { key: "dateOfBirth", label: "Date of Birth", icon: CalendarIcon },
  { key: "gender", label: "Gender", icon: ProfileIcon },
  { key: "address", label: "Address / Location", icon: LocationIcon },
  { key: "nationality", label: "Nationality", icon: GlobeIcon },
]

export default function PersonalInformationCard({ onEdit, student }) {
  return (
    <section className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-soft backdrop-blur-xl">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Personal Information
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-slate-950">
            Student details
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Keep your personal profile information up to date for course communication.
          </p>
        </div>

        <button
          className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          onClick={onEdit}
        >
          <PencilIcon className="h-4 w-4" />
          Edit Profile
        </button>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[220px,1fr]">
        <div className="rounded-[2rem] bg-slate-50 p-5 text-center">
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-[2rem] bg-gradient-to-br from-brand-500 to-brand-700 text-4xl font-bold text-white shadow-md">
            {student.avatar}
          </div>
          <h3 className="mt-4 font-display text-xl font-bold text-slate-950">
            {student.fullName}
          </h3>
          <p className="mt-1 text-sm text-slate-500">{student.studentId}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {fields.map((field) => {
            const Icon = field.icon
            return (
              <div key={field.key} className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-slate-500 shadow-sm">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-slate-500">{field.label}</p>
                    <p className="mt-1 break-words font-medium text-slate-900">
                      {student[field.key]}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
