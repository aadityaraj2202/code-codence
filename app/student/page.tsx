// @ts-nocheck
"use client"

import { useState, useMemo } from "react"
import ProtectedRoute from "@/components/auth/ProtectedRoute"
import AttendancePage from "@/components/student/AttendancePage"
import ClassJoinPage from "@/components/student/ClassJoinPage"
import ClasswiseAttendancePage from "@/components/student/ClasswiseAttendancePage"
import ContinueLearningPage from "@/components/student/ContinueLearningPage"
import CoursesPage from "@/components/student/CoursesPage"
import DashboardHome from "@/components/student/DashboardHome"
import Header from "@/components/student/Header"
import MoocTestPage from "@/components/student/MoocTestPage"
import NotificationsPanel from "@/components/student/NotificationsPanel"
import ProfileCard from "@/components/student/ProfileCard"
import SchedulePage from "@/components/student/SchedulePage"
import Sidebar from "@/components/student/Sidebar"
import { useAuth } from "@/context/AuthContext"
import {
  attendance,
  courseAttendance,
  courseLessons,
  enrolledCourses,
  moocTests,
  recentActivity,
  settings as initialSettings,
  student as demoStudent,
  upcomingClasses,
  weeklySchedule,
} from "@/components/student/data/dashboardData"

export default function StudentDashboard() {
  const { logout, user, isProfileLoading } = useAuth()
  const [activePage, setActivePage] = useState("dashboard")
  const [mobileOpen, setMobileOpen] = useState(false)
  const [accountSettings, setAccountSettings] = useState(initialSettings)

  // Context for sub-pages
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [selectedClass, setSelectedClass] = useState(null)

  // ─── Merge real user data with demo student shell ──────────────────────────
  // The backend profile provides name, email, and avatar.
  // The demo data provides everything else (notifications, phone, etc.)
  const studentProfile = useMemo(() => {
    if (!user) return demoStudent

    const initials =
      user.avatar ||
      user.name
        .split(" ")
        .map((w) => w[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)

    return {
      ...demoStudent,
      name: user.name,
      fullName: user.name,
      email: user.email,
      avatar: initials,
    }
  }, [user])

  const [editableProfile, setEditableProfile] = useState(studentProfile)

  // Keep editable profile in sync when the user data changes
  useMemo(() => {
    setEditableProfile(studentProfile)
  }, [studentProfile])

  const unreadCount = studentProfile.notifications.filter(
    (notification) => notification.unread,
  ).length

  // ─── Show a loading state while the profile is still being fetched ────────
  if (isProfileLoading && !user) {
    return (
      <ProtectedRoute allowedRoles={["student"]}>
        <div className="flex min-h-screen items-center justify-center bg-[#f5f8f4]">
          <div className="flex flex-col items-center gap-4">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-200 border-t-brand-600" />
            <p className="text-sm font-medium text-slate-500">Loading your dashboard…</p>
          </div>
        </div>
      </ProtectedRoute>
    )
  }

  function navigateTo(pageKey) {
    if (pageKey === "logout") {
      logout()
      return
    }
    setActivePage(pageKey)
    setMobileOpen(false)
  }

  function handleContinueLearning(course) {
    setSelectedCourse(course)
    setActivePage("continueLearning")
    setMobileOpen(false)
  }

  function handleJoinClass(cls) {
    setSelectedClass(cls)
    setActivePage("classDetail")
    setMobileOpen(false)
  }

  function handleViewSchedule() {
    setActivePage("schedule")
    setMobileOpen(false)
  }

  function handleViewAttendance() {
    setActivePage("classAttendance")
    setMobileOpen(false)
  }

  // Sidebar page labels — sub-pages inherit from their parent
  const pageLabels = {
    dashboard: "Dashboard",
    courses: "My Courses",
    mooctest: "Mock Tests",
    attendance: "Attendance",
    notifications: "Notifications",
    profile: "Profile",
    schedule: "Full Schedule",
    continueLearning: selectedCourse ? selectedCourse.title : "Continue Learning",
    classDetail: selectedClass ? selectedClass.courseName : "Class Detail",
    classAttendance: "Class-wise Attendance",
  }

  // Determine which sidebar item to highlight for sub-pages
  const sidebarActive = {
    schedule: "dashboard",
    continueLearning: "courses",
    classDetail: "dashboard",
    classAttendance: "attendance",
  }[activePage] || activePage

  return (
    <ProtectedRoute allowedRoles={["student"]}>
      <div className="min-h-screen bg-[#f5f8f4] text-slate-900">
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute left-[-8rem] top-[-8rem] h-72 w-72 rounded-full bg-brand-100 blur-3xl" />
          <div className="absolute bottom-[-10rem] right-[-4rem] h-80 w-80 rounded-full bg-orange-100 blur-3xl" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-[1600px] gap-6 p-4 md:p-6">
          <Sidebar
            activeSection={sidebarActive}
            mobileOpen={mobileOpen}
            onClose={() => setMobileOpen(false)}
            onNavigate={navigateTo}
          />

          <main className="flex-1 space-y-6 md:pl-0">
            <Header
              activePageLabel={pageLabels[activePage] || "Dashboard"}
              notifications={studentProfile.notifications}
              onLogout={() => navigateTo("logout")}
              student={studentProfile}
              unreadCount={unreadCount}
              onMenuClick={() => setMobileOpen(true)}
              onNavigate={navigateTo}
            />

            {activePage === "dashboard" && (
              <DashboardHome
                attendance={attendance}
                courses={enrolledCourses}
                recentActivity={recentActivity}
                student={studentProfile}
                upcomingClasses={upcomingClasses}
                onContinueLearning={handleContinueLearning}
                onJoinClass={handleJoinClass}
                onViewSchedule={handleViewSchedule}
                onViewAttendance={handleViewAttendance}
              />
            )}

            {activePage === "courses" && (
              <CoursesPage
                courses={enrolledCourses}
                onContinueLearning={handleContinueLearning}
              />
            )}

            {activePage === "mooctest" && (
              <MoocTestPage moocTests={moocTests} />
            )}

            {activePage === "attendance" && (
              <AttendancePage
                attendance={attendance}
                activities={recentActivity}
                onViewAttendance={handleViewAttendance}
              />
            )}

            {activePage === "notifications" && (
              <NotificationsPanel notifications={studentProfile.notifications} />
            )}

            {activePage === "profile" && (
              <ProfileCard
                attendance={attendance}
                enrolledCourses={enrolledCourses}
                onSaveProfile={setEditableProfile}
                onSaveSettings={setAccountSettings}
                settings={accountSettings}
                student={editableProfile}
              />
            )}

            {activePage === "schedule" && (
              <SchedulePage schedule={weeklySchedule} />
            )}

            {activePage === "continueLearning" && selectedCourse && (
              <ContinueLearningPage
                course={selectedCourse}
                lessons={courseLessons[selectedCourse.id] || []}
                onBack={() => navigateTo("courses")}
              />
            )}

            {activePage === "classDetail" && selectedClass && (
              <ClassJoinPage
                cls={selectedClass}
                onBack={() => navigateTo("dashboard")}
              />
            )}

            {activePage === "classAttendance" && (
              <ClasswiseAttendancePage
                courseAttendance={courseAttendance}
                onBack={() => navigateTo("attendance")}
              />
            )}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  )
}
