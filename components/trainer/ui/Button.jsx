import React from 'react'
import clsx from 'clsx'
import LoadingSpinner from './LoadingSpinner'

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-600 focus:ring-primary',
  secondary: 'bg-white text-text-primary border border-gray-200 hover:bg-gray-50 focus:ring-primary',
  danger: 'bg-danger text-white hover:bg-red-600 focus:ring-danger',
  ghost: 'bg-transparent text-text-secondary hover:bg-gray-100 focus:ring-primary',
  success: 'bg-success text-white hover:bg-emerald-600 focus:ring-success',
  warning: 'bg-warning text-white hover:bg-amber-600 focus:ring-warning',
}

const sizes = {
  xs: 'px-2.5 py-1.5 text-xs',
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  icon: Icon,
  iconRight: IconRight,
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={clsx(
        'inline-flex items-center justify-center gap-2 font-medium rounded-lg',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        'transition-all duration-200',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {loading ? (
        <LoadingSpinner size="sm" color={variant === 'secondary' || variant === 'ghost' ? 'primary' : 'white'} />
      ) : Icon ? (
        <Icon size={size === 'xs' ? 12 : size === 'sm' ? 14 : 16} />
      ) : null}
      {children}
      {!loading && IconRight && <IconRight size={size === 'xs' ? 12 : size === 'sm' ? 14 : 16} />}
    </button>
  )
}

export default Button
