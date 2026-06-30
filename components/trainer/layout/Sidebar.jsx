import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import {
  LayoutDashboard,
  BookOpen,
  Users,
  ClipboardCheck,
  TrendingUp,
  FolderOpen,
  Calendar,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  X,
} from 'lucide-react'
import { useApp } from '../../context/AppContext'

const navItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/courses', icon: BookOpen, label: 'Courses' },
  { to: '/students', icon: Users, label: 'Students' },
  { to: '/attendance', icon: ClipboardCheck, label: 'Attendance' },
  { to: '/progress', icon: TrendingUp, label: 'Progress' },
  { to: '/materials', icon: FolderOpen, label: 'Materials' },
  { to: '/schedule', icon: Calendar, label: 'Schedule' },
]

function Sidebar() {
  const { sidebarOpen, sidebarCollapsed, toggleSidebarCollapse, toggleSidebar } = useApp()
  const location = useLocation()

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          'fixed top-0 left-0 h-full bg-white border-r border-gray-100 z-40',
          'flex flex-col transition-all duration-300 ease-in-out shadow-lg',
          sidebarCollapsed ? 'w-[72px]' : 'w-64',
          // Mobile: slide in/out
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        {/* Logo */}
        <div className={clsx(
          'flex items-center h-16 px-4 border-b border-gray-100 flex-shrink-0',
          sidebarCollapsed ? 'justify-center' : 'justify-between'
        )}>
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
              <GraduationCap size={20} className="text-white" />
            </div>
            {!sidebarCollapsed && (
              <div className="overflow-hidden">
                <span className="text-base font-bold text-text-primary whitespace-nowrap">TrainerPro</span>
                <p className="text-xs text-text-secondary">Dashboard</p>
              </div>
            )}
          </div>
          {/* Mobile close */}
          {!sidebarCollapsed && (
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-1 rounded-lg text-text-secondary hover:bg-gray-100"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 px-2 space-y-0.5 overflow-y-auto">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => window.innerWidth < 1024 && toggleSidebar()}
              className={({ isActive }) =>
                clsx(
                  'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group',
                  isActive
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-text-secondary hover:bg-gray-50 hover:text-text-primary',
                  sidebarCollapsed && 'justify-center'
                )
              }
              title={sidebarCollapsed ? label : undefined}
            >
              {({ isActive }) => (
                <>
                  <Icon
                    size={20}
                    className={clsx(
                      'flex-shrink-0 transition-transform duration-200',
                      !isActive && 'group-hover:scale-110'
                    )}
                  />
                  {!sidebarCollapsed && (
                    <span className="whitespace-nowrap">{label}</span>
                  )}
                  {!sidebarCollapsed && isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white/70" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Trainer Profile */}
        <div className={clsx(
          'border-t border-gray-100 p-3 flex-shrink-0',
          sidebarCollapsed ? 'flex justify-center' : ''
        )}>
          {sidebarCollapsed ? (
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-bold">
              JD
            </div>
          ) : (
            <div className="flex items-center gap-3 px-1">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                JD
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-text-primary truncate">John Doe</p>
                <p className="text-xs text-text-secondary truncate">Senior Trainer</p>
              </div>
            </div>
          )}
        </div>

        {/* Collapse toggle - desktop only */}
        <button
          onClick={toggleSidebarCollapse}
          className={clsx(
            'hidden lg:flex items-center justify-center w-6 h-6 rounded-full',
            'bg-white border border-gray-200 shadow-sm',
            'absolute -right-3 top-20',
            'hover:bg-gray-50 transition-colors duration-150 text-text-secondary',
          )}
          title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {sidebarCollapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
        </button>
      </aside>
    </>
  )
}

export default Sidebar
