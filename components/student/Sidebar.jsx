import {
  AttendanceIcon,
  BellIcon,
  CoursesIcon,
  DashboardIcon,
  LogoutIcon,
  MoocIcon,
  ProfileIcon,
} from "./Icons"

const navItems = [
  { label: "Dashboard", icon: DashboardIcon, key: "dashboard" },
  { label: "My Courses", icon: CoursesIcon, key: "courses" },
  { label: "Mock Tests", icon: MoocIcon, key: "mooctest" },
  { label: "Attendance", icon: AttendanceIcon, key: "attendance" },
  { label: "Notifications", icon: BellIcon, key: "notifications" },
  { label: "Profile", icon: ProfileIcon, key: "profile" },
  { label: "Logout", icon: LogoutIcon, key: "logout" },
]

export default function Sidebar({
  activeSection,
  mobileOpen,
  onClose,
  onNavigate,
}) {
  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-slate-950/35 transition md:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-white/60 bg-white/90 px-5 py-6 shadow-soft backdrop-blur-xl transition-transform duration-300 md:static md:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-lg font-bold text-white shadow-lg">
            CC
          </div>
          <div>
            <p className="font-display text-lg font-bold text-slate-900">
              Code Codence
            </p>
            <p className="text-sm text-slate-500">Learning Platform</p>
          </div>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.label}
                onClick={() => {
                  onNavigate(item.key)
                  onClose()
                }}
                className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                  activeSection === item.key
                    ? "bg-brand-50 text-brand-700 shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="mt-auto rounded-3xl bg-gradient-to-br from-slate-900 to-slate-700 p-5 text-white shadow-float">
          <p className="text-sm text-slate-200">Keep your streak alive</p>
          <h3 className="mt-1 font-display text-xl font-bold">
            5 learning days in a row
          </h3>
          <p className="mt-2 text-sm text-slate-300">
            Finish one lesson today to unlock your weekly badge.
          </p>
        </div>
      </aside>
    </>
  )
}
