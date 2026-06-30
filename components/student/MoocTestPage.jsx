import { useState } from "react"
import { CheckCircleIcon } from "./Icons"

export default function MoocTestPage({ moocTests }) {
  const [activeTest, setActiveTest] = useState(null)       // mooc object when taking test
  const [quizState, setQuizState] = useState("idle")       // idle | active | result
  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answers, setAnswers] = useState([])
  const [score, setScore] = useState(0)

  function startTest(mooc) {
    setActiveTest(mooc)
    setQuizState("active")
    setCurrentQ(0)
    setSelected(null)
    setAnswers([])
    setScore(0)
  }

  function handleNext() {
    const newAnswers = [...answers, selected]
    setAnswers(newAnswers)

    if (currentQ + 1 < activeTest.questions.length) {
      setCurrentQ(currentQ + 1)
      setSelected(null)
    } else {
      const correct = newAnswers.filter(
        (ans, i) => ans === activeTest.questions[i].answer
      ).length
      setScore(correct)
      setQuizState("result")
    }
  }

  function closeQuiz() {
    setActiveTest(null)
    setQuizState("idle")
  }

  const enrolled = moocTests.filter((m) => m.enrolled)
  const available = moocTests.filter((m) => !m.enrolled)

  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-soft backdrop-blur-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          Mock Tests
        </p>
        <h2 className="mt-2 font-display text-2xl font-bold text-slate-950">
          Mock Tests & Online Certifications
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Track your NPTEL / Coursera enrollments, take weekly tests, and earn certifications.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Enrolled Tests</p>
            <p className="mt-2 font-display text-2xl font-bold text-slate-950">{enrolled.length}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Tests Completed</p>
            <p className="mt-2 font-display text-2xl font-bold text-slate-950">
              {enrolled.reduce((s, m) => s + m.completedTests, 0)}
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Avg. Score</p>
            <p className="mt-2 font-display text-2xl font-bold text-slate-950">
              {Math.round(enrolled.reduce((s, m) => s + m.score, 0) / enrolled.length)}%
            </p>
          </div>
        </div>
      </section>

      {/* Enrolled courses */}
      {enrolled.length > 0 && (
        <section>
          <h3 className="mb-4 font-display text-lg font-bold text-slate-800">
            Enrolled Courses
          </h3>
          <div className="grid gap-5 xl:grid-cols-2">
            {enrolled.map((mooc) => (
              <MoocCard key={mooc.id} mooc={mooc} onTakeTest={startTest} />
            ))}
          </div>
        </section>
      )}

      {/* Available courses */}
      {available.length > 0 && (
        <section>
          <h3 className="mb-4 font-display text-lg font-bold text-slate-800">
            Available to Enroll
          </h3>
          <div className="grid gap-5 xl:grid-cols-2">
            {available.map((mooc) => (
              <MoocCard key={mooc.id} mooc={mooc} onTakeTest={startTest} />
            ))}
          </div>
        </section>
      )}

      {/* Quiz Modal */}
      {quizState !== "idle" && activeTest && (
        <QuizModal
          mooc={activeTest}
          quizState={quizState}
          currentQ={currentQ}
          selected={selected}
          score={score}
          total={activeTest.questions.length}
          onSelect={setSelected}
          onNext={handleNext}
          onClose={closeQuiz}
        />
      )}
    </div>
  )
}

function MoocCard({ mooc, onTakeTest }) {
  const percent = mooc.enrolled
    ? Math.round((mooc.completedTests / mooc.totalTests) * 100)
    : 0

  return (
    <article className="rounded-[2rem] border border-white/80 bg-white/85 p-5 shadow-soft backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-float">
      <div className="flex items-start gap-4">
        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${mooc.gradient} font-display text-lg font-bold text-white shadow-md`}>
          {mooc.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-base font-bold text-slate-950 leading-tight">
              {mooc.title}
            </h3>
            <ProviderBadge provider={mooc.provider} />
          </div>
          <p className="mt-1 text-sm text-slate-500">{mooc.instructor} · {mooc.institute}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        <InfoBit label="Duration" value={mooc.duration} />
        <InfoBit label="Credits" value={mooc.credits} />
        <InfoBit label="Tests" value={`${mooc.completedTests}/${mooc.totalTests}`} />
      </div>

      {mooc.enrolled && (
        <>
          <div className="mt-4">
            <div className="mb-1.5 flex justify-between text-xs text-slate-500">
              <span>Progress</span>
              <span>{percent}%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${mooc.gradient}`}
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>

          {mooc.score !== null && (
            <div className="mt-3 flex items-center gap-2 rounded-2xl bg-slate-50 p-3">
              <CheckCircleIcon className="h-5 w-5 text-emerald-500" />
              <span className="text-sm font-medium text-slate-700">Current Score:</span>
              <span className="font-display text-sm font-bold text-slate-950">{mooc.score}%</span>
            </div>
          )}

          {mooc.nextTest && (
            <div className="mt-3 rounded-2xl border border-brand-100 bg-brand-50/60 p-3 text-sm">
              <span className="font-semibold text-brand-700">Next: </span>
              <span className="text-slate-700">{mooc.nextTest}</span>
              <span className="ml-2 text-slate-500">· {mooc.nextTestDate}</span>
            </div>
          )}

          <button
            onClick={() => onTakeTest(mooc)}
            disabled={mooc.questions.length === 0}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:opacity-40"
          >
            Take Test
          </button>
        </>
      )}

      {!mooc.enrolled && (
        <button
          disabled
          className="mt-4 inline-flex w-full items-center justify-center rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-400 cursor-not-allowed"
        >
          Enroll on {mooc.provider}
        </button>
      )}
    </article>
  )
}

function ProviderBadge({ provider }) {
  const colors = {
    NPTEL: "bg-orange-100 text-orange-700",
    Coursera: "bg-sky-100 text-sky-700",
  }
  return (
    <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${colors[provider] || "bg-slate-100 text-slate-600"}`}>
      {provider}
    </span>
  )
}

function InfoBit({ label, value }) {
  return (
    <div className="rounded-xl bg-slate-50 p-2">
      <p className="text-xs text-slate-400">{label}</p>
      <p className="mt-0.5 font-semibold text-slate-800 text-sm">{value}</p>
    </div>
  )
}

function QuizModal({ mooc, quizState, currentQ, selected, score, total, onSelect, onNext, onClose }) {
  const q = mooc.questions[currentQ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-[2rem] border border-white/60 bg-white p-6 shadow-float">
        {quizState === "active" && q && (
          <>
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                {mooc.title}
              </p>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">
                Q {currentQ + 1} / {total}
              </span>
            </div>

            <div className="mb-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand-500 to-emerald-400 transition-all"
                style={{ width: `${((currentQ) / total) * 100}%` }}
              />
            </div>

            <h3 className="mt-5 font-display text-lg font-bold text-slate-950">
              {q.text}
            </h3>

            <div className="mt-4 space-y-3">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => onSelect(i)}
                  className={`flex w-full items-center gap-3 rounded-2xl border p-4 text-left text-sm font-medium transition ${
                    selected === i
                      ? "border-brand-500 bg-brand-50 text-brand-800"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:border-brand-200 hover:bg-brand-50/50"
                  }`}
                >
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    selected === i ? "bg-brand-500 text-white" : "bg-slate-200 text-slate-600"
                  }`}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </button>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={onClose}
                className="rounded-2xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50"
              >
                Exit
              </button>
              <button
                onClick={onNext}
                disabled={selected === null}
                className="flex-1 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:opacity-40"
              >
                {currentQ + 1 < total ? "Next Question" : "Submit"}
              </button>
            </div>
          </>
        )}

        {quizState === "result" && (
          <div className="text-center">
            <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full text-3xl ${
              score / total >= 0.6 ? "bg-emerald-100" : "bg-rose-100"
            }`}>
              {score / total >= 0.6 ? "🎉" : "📖"}
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold text-slate-950">
              {score / total >= 0.6 ? "Well Done!" : "Keep Practising"}
            </h3>
            <p className="mt-2 text-slate-500">You scored</p>
            <p className="mt-1 font-display text-4xl font-bold text-slate-950">
              {score} <span className="text-slate-400">/ {total}</span>
            </p>
            <p className="mt-1 text-slate-500">{Math.round((score / total) * 100)}%</p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {mooc.questions.map((question, i) => (
                <div key={i} className={`flex items-center gap-2 rounded-xl p-3 text-sm ${
                  /* answers array holds what was submitted */
                  "bg-slate-50"
                }`}>
                  <span className={`h-5 w-5 rounded-full flex items-center justify-center text-xs font-bold ${
                    "bg-slate-200 text-slate-600"
                  }`}>
                    {i + 1}
                  </span>
                  <span className="text-slate-600 truncate">{question.text.slice(0, 30)}…</span>
                </div>
              ))}
            </div>

            <button
              onClick={onClose}
              className="mt-6 w-full rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Back to Mock Tests
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
