import React from 'react'
import { Inbox } from 'lucide-react'
import clsx from 'clsx'

function EmptyState({
  icon: Icon = Inbox,
  title = 'No data found',
  description = 'There is nothing to display here yet.',
  action,
  className = '',
}) {
  return (
    <div className={clsx('flex flex-col items-center justify-center py-16 px-4', className)}>
      <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
        <Icon size={28} className="text-gray-400" />
      </div>
      <h3 className="text-base font-semibold text-text-primary mb-1">{title}</h3>
      <p className="text-sm text-text-secondary text-center max-w-xs">{description}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  )
}

export default EmptyState
