import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import {
  Menu,
  Search,
  Bell,
  Sun,
  Moon,
  ChevronDown,
  User,
  Settings,
  LogOut,
  Check,
  Info,
  AlertTriangle,
  CheckCircle,
} from 'lucide-react'
import { useApp } from '../../context/AppContext'

const notificationIcons = {
  info: { icon: Info, color: 'text-blue-500 bg-blue-50' },
  success: { icon: CheckCircle, color: 'text-success bg-emerald-50' },
  warning: { icon: AlertTriangle, color: 'text-warning bg-amber-50' },
  error: { icon: AlertTriangle, color: 'text-danger bg-red-50' },
}

function Navbar() {
  const {
    toggleSidebar,
    darkMode,
    toggleDarkMode,
    notifications,
    unreadCount,
    markNotificationRead,
    markAllNotificationsRead,
  } = useApp()

  const [searchQuery, setSearchQuery] = useState('')
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const notifRef = useRef(null)
  const profileRef = useRef(null)
  const navigate = useNavigate()

  // Click outside to close
  useEffect(() => {
    const handler = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setShowNotifications(false)
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfile(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // navigate to search results
    }
  }

  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center px-4 gap-3 sticky top-0 z-20 flex-shrink-0">
      {/* Hamburger */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-2 rounded-lg text-text-secondary hover:bg-gray-100 transition-colors"
      >
        <Menu size={20} />
      </button>

      {/* Search */}
      <form onSubmit={handleSearch} className="flex-1 max-w-md hidden sm:block">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
          <input
            type="text"
            placeholder="Search courses, students..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 border border-gray-100 rounded-xl text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all duration-200"
          />
        </div>
      </form>

      <div className="ml-auto flex items-center gap-2">
        {/* Dark mode */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-xl text-text-secondary hover:bg-gray-100 hover:text-text-primary transition-all duration-200"
          title={darkMode ? 'Light mode' : 'Dark mode'}
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => { setShowNotifications(p => !p); setShowProfile(false) }}
            className="relative p-2 rounded-xl text-text-secondary hover:bg-gray-100 hover:text-text-primary transition-all duration-200"
          >
            <Bell size={18} />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full ring-2 ring-white" />
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-2xl shadow-dropdown border border-gray-100 overflow-hidden animate-fade-in">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                <h3 className="text-sm font-semibold text-text-primary">
                  Notifications {unreadCount > 0 && <span className="ml-1 text-xs bg-danger text-white px-1.5 py-0.5 rounded-full">{unreadCount}</span>}
                </h3>
                {unreadCount > 0 && (
                  <button
                    onClick={markAllNotificationsRead}
                    className="text-xs text-primary hover:text-primary-600 font-medium transition-colors"
                  >
                    Mark all read
                  </button>
                )}
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.length === 0 ? (
                  <div className="py-8 text-center text-sm text-text-secondary">No notifications</div>
                ) : (
                  notifications.map((n) => {
                    const ni = notificationIcons[n.type] || notificationIcons.info
                    const Icon = ni.icon
                    return (
                      <button
                        key={n.id}
                        onClick={() => markNotificationRead(n.id)}
                        className={clsx(
                          'w-full flex items-start gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0',
                          !n.read && 'bg-primary-50/30'
                        )}
                      >
                        <div className={clsx('w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5', ni.color)}>
                          <Icon size={14} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-text-primary">{n.title}</p>
                          <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">{n.message}</p>
                          <p className="text-xs text-text-secondary mt-1">{n.time}</p>
                        </div>
                        {!n.read && (
                          <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                        )}
                      </button>
                    )
                  })
                )}
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => { setShowProfile(p => !p); setShowNotifications(false) }}
            className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-gray-100 transition-all duration-200"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-bold">
              JD
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-sm font-semibold text-text-primary leading-tight">John Doe</p>
              <p className="text-xs text-text-secondary">Trainer</p>
            </div>
            <ChevronDown size={14} className="text-text-secondary hidden sm:block" />
          </button>

          {showProfile && (
            <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl shadow-dropdown border border-gray-100 overflow-hidden animate-fade-in">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-sm font-semibold text-text-primary">John Doe</p>
                <p className="text-xs text-text-secondary">john.doe@trainer.com</p>
              </div>
              <div className="py-1">
                {[
                  { icon: User, label: 'My Profile' },
                  { icon: Settings, label: 'Settings' },
                ].map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-text-secondary hover:bg-gray-50 hover:text-text-primary transition-colors"
                    onClick={() => setShowProfile(false)}
                  >
                    <Icon size={16} />
                    {label}
                  </button>
                ))}
              </div>
              <div className="border-t border-gray-100 py-1">
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-danger hover:bg-red-50 transition-colors">
                  <LogOut size={16} />
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
