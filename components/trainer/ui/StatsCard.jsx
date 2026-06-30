import React from 'react'
import clsx from 'clsx'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

function StatsCard({ icon: Icon, label, value, trend, trendValue, color = 'primary', loading = false }) {
  const colorMap = {
    primary: {
      bg: 'bg-primary-50',
      icon: 'text-primary',
      trend: 'text-primary',
    },
    secondary: {
      bg: 'bg-cyan-50',
      icon: 'text-secondary',
      trend: 'text-secondary',
    },
    success: {
      bg: 'bg-emerald-50',
      icon: 'text-success',
      trend: 'text-success',
    },
    warning: {
      bg: 'bg-amber-50',
      icon: 'text-warning',
      trend: 'text-warning',
    },
    danger: {
      bg: 'bg-red-50',
      icon: 'text-danger',
      trend: 'text-danger',
    },
  }

  const c = colorMap[color] || colorMap.primary

  if (loading) {
    return (
      <div className="card p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <div className="skeleton h-4 w-24 rounded" />
            <div className="skeleton h-8 w-32 rounded" />
            <div className="skeleton h-3 w-20 rounded" />
          </div>
          <div className="skeleton w-12 h-12 rounded-xl" />
        </div>
      </div>
    )
  }

  const TrendIcon =
    trend === 'up' ? TrendingUp :
    trend === 'down' ? TrendingDown :
    Minus

  const trendColor =
    trend === 'up' ? 'text-success' :
    trend === 'down' ? 'text-danger' :
    'text-text-secondary'

  return (
    <div className="card-hover p-6 group">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-text-secondary truncate">{label}</p>
          <p className="mt-2 text-3xl font-bold text-text-primary tracking-tight">{value}</p>
          {trendValue !== undefined && (
            <div className={clsx('mt-2 flex items-center gap-1 text-xs font-medium', trendColor)}>
              <TrendIcon size={14} />
              <span>{trendValue}</span>
              <span className="text-text-secondary font-normal">vs last month</span>
            </div>
          )}
        </div>
        <div className={clsx('w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ml-4 group-hover:scale-110 transition-transform duration-200', c.bg)}>
          {Icon && <Icon size={22} className={c.icon} />}
        </div>
      </div>
    </div>
  )
}

export default StatsCard
