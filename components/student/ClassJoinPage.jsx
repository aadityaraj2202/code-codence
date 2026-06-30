import { useState } from "react"
import { ArrowLeftIcon, CalendarIcon, ClockIcon, LinkIcon } from "./Icons"

export default function ClassJoinPage({ cls, onBack }) {
  const [joined, setJoined] = useState(false)

  if (!cls) return null

  const platformColors = {
    "Google Meet": "bg-green-50 text-green-700 border-green-200",
    "Zoom": "bg-sky-50 text-sky-700 border-sky-200",
    "Microsoft Teams": "bg-purple-50 text-purple-700 border-purple-200",
  }

  const platformBadge = platformColors[cls.platform] || "bg-slate-50 text-slate-700 border-slate-200"

  return (
    <div className="space-y-5">
      {/* Back button */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition hover:border-brand-300 hover:text-brand-700 shadow-soft"
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </button>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Upcoming Class
          </p>
          <h1 className="font-display text-xl font-bold text-slate-950">{cls.courseName}</h1>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr,360px]">
        {/* Main card */}
        <section className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-soft backdrop-blur-xl">
          {/* Hero banner */}
          <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${cls.gradient} p-6 text-white`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                  {cls.type}
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold">{cls.courseName}</h2>
                <p className="mt-1 text-white/80">{cls.instructor}</p>
              </div>
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/20 font-display text-2xl font-bold">
                {cls.icon}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-4 text-sm text-white/90">
              <span className="flex items-center gap-1.5">
                <CalendarIcon className="h-4 w-4" />
                {cls.date}
              </span>
              <span className="flex items-center gap-1.5">
                <ClockIcon className="h-4 w-4" />
                {cls.time} – {cls.endTime}
              </span>
              <span className="flex items-center gap-1.5">
                <RoomIcon className="h-4 w-4" />
                {cls.room}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h3 className="font-display text-lg font-bold text-slate-950">About This Session</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{cls.description}</p>
          </div>

          {/* Topics */}
          <div className="mt-5">
            <h3 className="font-display text-base font-bold text-slate-950">Topics Covered</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {cls.topics.map((topic, i) => (
                <li key={i} className="flex items-center gap-2 rounded-2xl bg-slate-50 p-3 text-sm">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                    {i + 1}
                  </span>
                  <span className="text-slate-700">{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Join button */}
          {!joined ? (
            <button
              onClick={() => setJoined(true)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-4 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              <JoinIcon className="h-5 w-5" />
              Join Class Now
            </button>
          ) : (
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-center">
              <p className="text-lg">🎉</p>
              <p className="mt-1 font-semibold text-emerald-800">You've joined the class!</p>
              <p className="mt-1 text-sm text-emerald-600">
                Your attendance has been marked. The session will begin shortly.
              </p>
            </div>
          )}
        </section>

        {/* Sidebar info */}
        <div className="space-y-5">
          {/* Platform */}
          <section className="rounded-[2rem] border border-white/80 bg-white/85 p-5 shadow-soft backdrop-blur-xl">
            <h3 className="font-display text-base font-bold text-slate-950">Meeting Info</h3>
            <div className="mt-4 space-y-3">
              <InfoRow label="Platform">
                <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${platformBadge}`}>
                  {cls.platform}
                </span>
              </InfoRow>
              <InfoRow label="Meeting Link">
                <a
                  href={cls.meetingLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm text-brand-700 font-semibold hover:text-brand-800 transition"
                >
                  <LinkIcon className="h-4 w-4" />
                  Open Link
                </a>
              </InfoRow>
              <InfoRow label="Room / Venue" value={cls.room} />
              <InfoRow label="Duration" value={`${cls.time} – ${cls.endTime}`} />
              <InfoRow label="Instructor" value={cls.instructor} />
            </div>
          </section>

          {/* Reminder */}
          <section className="rounded-[2rem] border border-amber-200 bg-amber-50/80 p-5 shadow-soft">
            <h3 className="font-semibold text-amber-800">📌 Reminders</h3>
            <ul className="mt-3 space-y-2 text-sm text-amber-700">
              <li>• Join 5 minutes before the session starts</li>
              <li>• Keep your microphone muted on entry</li>
              <li>• Have your notes ready</li>
              <li>• Attendance is marked at join time</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

function InfoRow({ label, value, children }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 px-4 py-3">
      <span className="text-sm text-slate-500">{label}</span>
      {children || <span className="text-sm font-semibold text-slate-800">{value}</span>}
    </div>
  )
}

function RoomIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M3 21V7l9-4 9 4v14" />
      <path d="M10 21v-6h4v6" />
    </svg>
  )
}

function JoinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M17 12H3M3 12l4-4M3 12l4 4" />
      <path d="M11 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-2" />
    </svg>
  )
}
