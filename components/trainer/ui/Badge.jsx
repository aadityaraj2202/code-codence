import React from 'react'
import clsx from 'clsx'

const variants = {
  primary: 'bg-primary-50 text-primary-600 border border-primary-100',
  secondary: 'bg-cyan-50 text-cyan-600 border border-cyan-100',
  success: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
  warning: 'bg-amber-50 text-amber-700 border border-amber-100',
  danger: 'bg-red-50 text-red-700 border border-red-100',
  info: 'bg-blue-50 text-blue-700 border border-blue-100',
  gray: 'bg-gray-100 text-gray-600 border border-gray-200',
}

const dotColors = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  success: 'bg-success',
  warning: 'bg-warning',
  danger: 'bg-danger',
  info: 'bg-blue-500',
  gray: 'bg-gray-400',
}

function Badge({ children, variant = 'gray', dot = false, className = '' }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {dot && (
        <span className={clsx('w-1.5 h-1.5 rounded-full', dotColors[variant])} />
      )}
      {children}
    </span>
  )
}

export default Badge
