import React from 'react'
import { Search, X } from 'lucide-react'
import clsx from 'clsx'

function SearchInput({
  value,
  onChange,
  placeholder = 'Search...',
  className = '',
  onClear,
}) {
  return (
    <div className={clsx('relative', className)}>
      <Search
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="input pl-9 pr-9"
      />
      {value && (
        <button
          onClick={() => onClear ? onClear() : onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors"
        >
          <X size={14} />
        </button>
      )}
    </div>
  )
}

export default SearchInput
