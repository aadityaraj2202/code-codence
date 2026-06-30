import { useState } from "react"
import { ArrowLeftIcon, CheckCircleIcon, PlayIcon, VideoIcon } from "./Icons"

const typeIcons = {
  Video: VideoIcon,
  Project: ProjectIcon,
  Assessment: AssessmentIcon,
  Live: LiveIcon,
}

export default function ContinueLearningPage({ course, lessons, onBack }) {
  const [activeLesson, setActiveLesson] = useState(
    lessons.find((l) => !l.completed) || lessons[0]
  )
  const [playing, setPlaying] = useState(false)

  const completed = lessons.filter((l) => l.completed).length
  const progress = Math.round((completed / lessons.length) * 100)

  return (
    <div className="space-y-5">
      {/* Top bar */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition hover:border-brand-300 hover:text-brand-700 shadow-soft"
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </button>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Continue Learning
          </p>
          <h1 className="font-display text-xl font-bold text-slate-950">{course.title}</h1>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr,340px]">
        {/* Left — video player + lesson info */}
        <div className="space-y-5">
          {/* Video player */}
          <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-slate-950 shadow-float">
            <div className="relative flex aspect-video items-center justify-center">
              {/* Gradient backdrop mimicking a video frame */}
              <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-30`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <button
                    onClick={() => setPlaying(!playing)}
                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-float transition hover:scale-105 hover:bg-white"
                  >
                    {playing ? (
                      <PauseIcon className="h-8 w-8 text-slate-950" />
                    ) : (
                      <svg className="h-8 w-8 translate-x-0.5 text-slate-950" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7L8 5Z" />
                      </svg>
                    )}
                  </button>
                  <p className="mt-4 text-sm font-medium text-white/80">
                    {playing ? "Now Playing" : "Click to Play"}
                  </p>
                </div>
              </div>
              {/* Duration badge */}
              <span className="absolute bottom-4 right-4 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-semibold text-white">
                {activeLesson.duration}
              </span>
            </div>
          </div>

          {/* Lesson meta */}
          <section className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-soft backdrop-blur-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  {activeLesson.type}
                </span>
                <h2 className="mt-3 font-display text-xl font-bold text-slate-950">
                  {activeLesson.title}
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  {course.instructor} · {activeLesson.duration}
                </p>
              </div>
              {activeLesson.completed && (
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                  <CheckCircleIcon className="h-4 w-4" />
                  Completed
                </span>
              )}
            </div>

            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              This lesson covers key concepts and practical examples.
              Follow along with the video and complete the exercises at the end.
              Estimated completion time: {activeLesson.duration}.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <InfoTile label="Course" value={course.title} />
              <InfoTile label="Instructor" value={course.instructor} />
              <InfoTile label="Progress" value={`${progress}%`} />
            </div>
          </section>
        </div>

        {/* Right — lessons list */}
        <aside className="rounded-[2rem] border border-white/80 bg-white/85 p-5 shadow-soft backdrop-blur-xl xl:max-h-[calc(100vh-10rem)] xl:overflow-y-auto">
          <div className="mb-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Course Lessons
            </p>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-slate-600">{completed}/{lessons.length} completed</span>
              <span className="font-semibold text-brand-700">{progress}%</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${course.gradient} transition-all`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="space-y-2 mt-4">
            {lessons.map((lesson, index) => {
              const Icon = typeIcons[lesson.type] || VideoIcon
              const isActive = lesson.id === activeLesson.id
              return (
                <button
                  key={lesson.id}
                  onClick={() => { setActiveLesson(lesson); setPlaying(false) }}
                  className={`flex w-full items-center gap-3 rounded-2xl p-3 text-left transition ${
                    isActive
                      ? "bg-brand-50 ring-1 ring-brand-200"
                      : "hover:bg-slate-50"
                  }`}
                >
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
                    lesson.completed
                      ? "bg-emerald-100 text-emerald-700"
                      : isActive
                      ? "bg-brand-100 text-brand-700"
                      : "bg-slate-100 text-slate-500"
                  }`}>
                    {lesson.completed ? "✓" : index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className={`truncate text-sm font-semibold ${
                      isActive ? "text-brand-800" : "text-slate-800"
                    }`}>
                      {lesson.title}
                    </p>
                    <p className="text-xs text-slate-400">{lesson.duration} · {lesson.type}</p>
                  </div>
                  {isActive && (
                    <PlayIcon className="h-4 w-4 shrink-0 text-brand-600" />
                  )}
                </button>
              )
            })}
          </div>
        </aside>
      </div>
    </div>
  )
}

function InfoTile({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-3">
      <p className="text-xs text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-800 truncate">{value}</p>
    </div>
  )
}

function PauseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6 19h4V5H6zm8-14v14h4V5h-4z" />
    </svg>
  )
}

function ProjectIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  )
}

function AssessmentIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  )
}

function LiveIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M6.3 6.3a8 8 0 0 0 0 11.4" />
      <path d="M17.7 6.3a8 8 0 0 1 0 11.4" />
      <path d="M3.5 3.5a13 13 0 0 0 0 17" />
      <path d="M20.5 3.5a13 13 0 0 1 0 17" />
    </svg>
  )
}
