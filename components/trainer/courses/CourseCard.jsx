import React from 'react'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { Users, Clock, BookOpen, MoreVertical, Eye, Edit2, Trash2 } from 'lucide-react'
import Badge from '../ui/Badge'

const statusVariant = {
  active: 'success',
  draft: 'gray',
  completed: 'primary',
  archived: 'warning',
}

function CourseCard({ course, onEdit, onDelete, viewMode = 'grid' }) {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = React.useState(false)
  const menuRef = React.useRef(null)

  React.useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  if (viewMode === 'list') {
    return (
      <div className="card p-4 hover:shadow-card-hover transition-all duration-200 cursor-pointer group"
        onClick={() => navigate(`/courses/${course.id}`)}>
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-lg"
            style={{ backgroundColor: course.color || '#4F46E5' }}
          >
            {course.title?.[0] || 'C'}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold text-text-primary text-sm truncate">{course.title}</h3>
              <Badge variant={statusVariant[course.status] || 'gray'} dot>
                {course.status}
              </Badge>
            </div>
            <p className="text-xs text-text-secondary mt-0.5 truncate">{course.description}</p>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-text-secondary flex-shrink-0">
            <div className="flex items-center gap-1.5">
              <Users size={14} />
              <span>{course.students} students</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>{course.duration}</span>
            </div>
            <div className="w-24">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-text-secondary">Progress</span>
                <span className="font-medium text-text-primary">{course.progress}%</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="card-hover overflow-hidden group">
      {/* Header bar */}
      <div
        className="h-2 w-full"
        style={{ backgroundColor: course.color || '#4F46E5' }}
      />

      <div className="p-5">
        {/* Top row */}
        <div className="flex items-start justify-between mb-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-base flex-shrink-0"
            style={{ backgroundColor: course.color || '#4F46E5' }}
          >
            {course.title?.[0] || 'C'}
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={statusVariant[course.status] || 'gray'} dot>
              {course.status}
            </Badge>
            <div className="relative" ref={menuRef}>
              <button
                onClick={(e) => { e.stopPropagation(); setMenuOpen(p => !p) }}
                className="p-1 rounded-lg text-text-secondary hover:bg-gray-100 transition-colors"
              >
                <MoreVertical size={16} />
              </button>
              {menuOpen && (
                <div className="absolute right-0 top-full mt-1 w-40 bg-white rounded-xl shadow-dropdown border border-gray-100 overflow-hidden z-10 animate-fade-in">
                  <button
                    onClick={(e) => { e.stopPropagation(); navigate(`/courses/${course.id}`); setMenuOpen(false) }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm text-text-secondary hover:bg-gray-50 hover:text-text-primary transition-colors"
                  >
                    <Eye size={14} /> View Details
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); onEdit?.(course); setMenuOpen(false) }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm text-text-secondary hover:bg-gray-50 hover:text-text-primary transition-colors"
                  >
                    <Edit2 size={14} /> Edit
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); onDelete?.(course); setMenuOpen(false) }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm text-danger hover:bg-red-50 transition-colors"
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Title & description */}
        <div
          className="cursor-pointer"
          onClick={() => navigate(`/courses/${course.id}`)}
        >
          <h3 className="font-semibold text-text-primary line-clamp-1 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          <p className="text-xs text-text-secondary mt-1 line-clamp-2 leading-relaxed">
            {course.description}
          </p>
        </div>

        {/* Stats */}
        <div className="mt-4 flex items-center gap-4 text-xs text-text-secondary">
          <div className="flex items-center gap-1">
            <Users size={12} />
            <span>{course.students} students</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen size={12} />
            <span>{course.modules} modules</span>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-text-secondary font-medium">Completion</span>
            <span className="font-semibold text-text-primary">{course.progress}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${course.progress}%`,
                backgroundColor: course.color || '#4F46E5',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
