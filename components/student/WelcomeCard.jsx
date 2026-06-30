export default function WelcomeCard({ studentName, courseCount }) {
  return (
    <section className="relative z-0 overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 via-brand-500 to-emerald-400 p-7 text-white shadow-float">
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute bottom-0 right-10 h-28 w-28 rounded-full border border-white/20" />

      <div className="relative z-10 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/75">
          Code Codence
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
          Your learning overview
        </h2>
        <p className="mt-3 max-w-xl text-base text-white/90">
          {studentName}, you are actively enrolled in {courseCount} courses and
          making strong progress this week. Here is a quick summary of what
          matters most today.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
          <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">
            Track progress
          </span>
          <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">
            Manage attendance
          </span>
          <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">
            Join upcoming classes
          </span>
        </div>
      </div>
    </section>
  )
}
