import { useEffect, useRef, useState } from "react"
import { BellIcon, ChevronDownIcon, MenuIcon } from "./Icons"

export default function Header({
  activePageLabel,
  notifications,
  onMenuClick,
  onNavigate,
  onLogout,
  student,
  unreadCount,
}) {
  const [open, setOpen] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const menuRef = useRef(null)
  const notificationRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false)
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false)
      }
    }

    window.addEventListener("click", handleClickOutside)
    return () => window.removeEventListener("click", handleClickOutside)
  }, [])

  return (
    <header className="relative z-30 flex flex-wrap items-center justify-between gap-4 rounded-[2rem] border border-white/70 bg-white/75 px-5 py-4 shadow-soft backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 md:hidden"
          onClick={onMenuClick}
          aria-label="Open sidebar"
        >
          <MenuIcon className="h-5 w-5" />
        </button>
        <div>
          <p className="text-sm font-medium text-slate-500">Student workspace</p>
          <h1 className="font-display text-2xl font-bold text-slate-950">
            {activePageLabel}
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative" ref={notificationRef}>
          <button
            className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:shadow-md"
            onClick={() => setShowNotifications((current) => !current)}
            aria-label="Open notifications"
          >
            <BellIcon className="h-5 w-5" />
            {unreadCount > 0 && (
              <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-rose-500" />
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 top-16 z-40 w-80 rounded-2xl border border-slate-200 bg-white p-3 shadow-soft">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="font-display text-lg font-bold text-slate-950">
                  Notifications
                </h2>
                <button
                  className="text-sm font-semibold text-brand-700"
                  onClick={() => {
                    onNavigate("notifications")
                    setShowNotifications(false)
                  }}
                >
                  View all
                </button>
              </div>

              <div className="space-y-2">
                {notifications.map((item) => (
                  <button
                    key={item.id}
                    className="w-full rounded-2xl bg-slate-50 px-3 py-3 text-left transition hover:bg-brand-50"
                    onClick={() => {
                      onNavigate("notifications")
                      setShowNotifications(false)
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`mt-1 h-2.5 w-2.5 rounded-full ${
                          item.unread ? "bg-rose-500" : "bg-slate-300"
                        }`}
                      />
                      <div>
                        <p className="text-sm font-medium text-slate-800">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          {item.unread ? "Unread update" : "Viewed update"}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="relative" ref={menuRef}>
          <button
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-left transition hover:-translate-y-0.5 hover:shadow-md"
            onClick={() => setOpen((current) => !current)}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 font-bold text-white">
              {student.avatar}
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-slate-900">
                {student.name}
              </p>
              <p className="text-xs text-slate-500">Frontend Pathway</p>
            </div>
            <ChevronDownIcon className="h-4 w-4 text-slate-500" />
          </button>

          {open && (
            <div className="absolute right-0 top-16 z-40 w-48 rounded-2xl border border-slate-200 bg-white p-2 shadow-soft">
              {["Profile", "Settings", "Logout"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    if (item === "Logout") {
                      onLogout()
                    } else {
                      onNavigate("profile")
                    }
                    setOpen(false)
                  }}
                  className="w-full rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
