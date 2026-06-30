import React from 'react'
import clsx from 'clsx'
import { Check, X, Clock } from 'lucide-react'

const STATUS = {
  present: { label: 'P', color: 'bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-200', icon: Check },
  absent: { label: 'A', color: 'bg-red-100 text-red-700 border-red-200 hover:bg-red-200', icon: X },
  late: { label: 'L', color: 'bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-200', icon: Clock },
  unmarked: { label: '—', color: 'bg-gray-100 text-gray-400 border-gray-200 hover:bg-gray-200', icon: null },
}

function AttendanceCell({ status, onClick }) {
  const s = STATUS[status] || STATUS.unmarked
  const Icon = s.icon

  return (
    <button
      onClick={onClick}
      className={clsx(
        'w-9 h-9 rounded-lg border text-xs font-semibold transition-all duration-150',
        'flex items-center justify-center',
        s.color
      )}
      title={status}
    >
      {Icon ? <Icon size={14} /> : s.label}
    </button>
  )
}

function AttendanceGrid({ students, dates, attendance, onToggle, loading }) {
  const cycleStatus = (current) => {
    const cycle = ['present', 'absent', 'late', 'unmarked']
    const idx = cycle.indexOf(current)
    return cycle[(idx + 1) % cycle.length]
  }

  if (loading) {
    return (
      <div className="overflow-x-auto">
        <div className="min-w-max space-y-3 p-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="skeleton w-36 h-8 rounded" />
              {[...Array(7)].map((_, j) => (
                <div key={j} className="skeleton w-9 h-9 rounded-lg" />
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-max w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left text-xs font-semibold text-text-secondary px-4 py-3 sticky left-0 bg-white z-10 min-w-[160px]">
              Student
            </th>
            {dates.map((date) => (
              <th key={date} className="text-center text-xs font-semibold text-text-secondary px-2 py-3 min-w-[50px]">
                <div className="flex flex-col items-center">
                  <span className="text-text-secondary">
                    {new Date(date).toLocaleDateString('en', { weekday: 'short' })}
                  </span>
                  <span className="text-text-primary font-bold">
                    {new Date(date).getDate()}
                  </span>
                </div>
              </th>
            ))}
            <th className="text-center text-xs font-semibold text-text-secondary px-4 py-3">Rate</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            const presentCount = dates.filter(
              (d) => attendance[student.id]?.[d] === 'present'
            ).length
            const rate = dates.length > 0 ? Math.round((presentCount / dates.length) * 100) : 0

            return (
              <tr key={student.id} className="border-t border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2 sticky left-0 bg-white hover:bg-gray-50 z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {student.name?.[0]}
                    </div>
                    <span className="text-sm font-medium text-text-primary whitespace-nowrap">
                      {student.name}
                    </span>
                  </div>
                </td>
                {dates.map((date) => {
                  const status = attendance[student.id]?.[date] || 'unmarked'
                  return (
                    <td key={date} className="px-2 py-2 text-center">
                      <div className="flex justify-center">
                        <AttendanceCell
                          status={status}
                          onClick={() => onToggle(student.id, date, cycleStatus(status))}
                        />
                      </div>
                    </td>
                  )
                })}
                <td className="px-4 py-2 text-center">
                  <span className={clsx(
                    'text-xs font-semibold px-2 py-1 rounded-full',
                    rate >= 80 ? 'text-emerald-700 bg-emerald-50' :
                    rate >= 60 ? 'text-amber-700 bg-amber-50' :
                    'text-red-700 bg-red-50'
                  )}>
                    {rate}%
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AttendanceGrid
