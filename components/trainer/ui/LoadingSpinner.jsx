import React from 'react'
import clsx from 'clsx'

const sizes = {
  xs: 'w-3 h-3 border',
  sm: 'w-4 h-4 border-2',
  md: 'w-6 h-6 border-2',
  lg: 'w-8 h-8 border-2',
  xl: 'w-12 h-12 border-4',
}

const colors = {
  primary: 'border-primary border-t-transparent',
  white: 'border-white border-t-transparent',
  gray: 'border-gray-300 border-t-gray-600',
}

function LoadingSpinner({ size = 'md', color = 'primary', className = '', label = 'Loading...' }) {
  return (
    <span
      role="status"
      aria-label={label}
      className={clsx(
        'inline-block rounded-full animate-spin',
        sizes[size],
        colors[color],
        className
      )}
    />
  )
}

export function PageLoader() {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="flex flex-col items-center gap-3">
        <LoadingSpinner size="xl" />
        <p className="text-sm text-text-secondary animate-pulse">Loading...</p>
      </div>
    </div>
  )
}

export function SkeletonCard() {
  return (
    <div className="card p-6 space-y-3">
      <div className="skeleton h-4 w-1/3 rounded" />
      <div className="skeleton h-8 w-1/2 rounded" />
      <div className="skeleton h-4 w-2/3 rounded" />
    </div>
  )
}

export function SkeletonTable({ rows = 5 }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 p-4">
          <div className="skeleton w-10 h-10 rounded-full" />
          <div className="flex-1 space-y-2">
            <div className="skeleton h-4 w-1/4 rounded" />
            <div className="skeleton h-3 w-1/3 rounded" />
          </div>
          <div className="skeleton h-6 w-20 rounded-full" />
          <div className="skeleton h-4 w-16 rounded" />
        </div>
      ))}
    </div>
  )
}

export default LoadingSpinner
