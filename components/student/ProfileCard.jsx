import { useState } from "react"
import ChangePasswordModal from "./ChangePasswordModal"
import EditProfileForm from "./EditProfileForm"
import ProfileHeader from "./ProfileHeader"
import PersonalInformationCard from "./PersonalInformationCard"
import SettingsCard from "./SettingsCard"
import {
  BellIcon,
  CameraIcon,
  LockIcon,
  PencilIcon,
  ShieldIcon,
} from "./Icons"

export default function ProfileCard({
  attendance,
  enrolledCourses,
  onSaveProfile,
  onSaveSettings,
  settings,
  student,
}) {
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isPasswordOpen, setIsPasswordOpen] = useState(false)
  const [editForm, setEditForm] = useState(student)
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })
  const [passwordError, setPasswordError] = useState("")

  const unreadCount = student.notifications.filter((item) => item.unread).length

  const settingItems = [
    {
      title: "Edit Profile",
      description: "Update personal information such as name, phone number, and address.",
      icon: PencilIcon,
      actionLabel: "Edit",
      onAction: () => {
        setEditForm(student)
        setIsEditOpen(true)
      },
    },
    {
      title: "Change Password",
      description: "Securely update your account password to keep your learning account protected.",
      icon: LockIcon,
      actionLabel: "Change",
      onAction: () => setIsPasswordOpen(true),
    },
    {
      title: "Update Profile Photo",
      description: "Refresh your avatar or initials used across the Code Codence dashboard.",
      icon: CameraIcon,
      actionLabel: "Update",
      value: `Current: ${student.avatar}`,
      onAction: () => {
        setEditForm(student)
        setIsEditOpen(true)
      },
    },
    {
      title: "Notification Preferences",
      description: "Enable or disable email and platform notifications for classes and assignments.",
      icon: BellIcon,
      actionLabel: settings.notificationsEnabled ? "Disable" : "Enable",
      value: settings.emailNotifications ? "Email alerts on" : "Email alerts off",
      onAction: () =>
        onSaveSettings({
          ...settings,
          notificationsEnabled: !settings.notificationsEnabled,
          emailNotifications: !settings.emailNotifications,
        }),
    },
    {
      title: "Privacy Settings",
      description: "Control profile visibility and personal data permissions within the platform.",
      icon: ShieldIcon,
      actionLabel: "Toggle",
      value: settings.privacyVisibility,
      onAction: () =>
        onSaveSettings({
          ...settings,
          privacyVisibility:
            settings.privacyVisibility === "Students Only" ? "Private" : "Students Only",
        }),
    },
  ]

  function handleEditChange(event) {
    const { name, value } = event.target
    setEditForm((current) => ({ ...current, [name]: value }))
  }

  function handleEditSubmit(event) {
    event.preventDefault()
    onSaveProfile({ ...editForm, name: editForm.fullName.split(" ")[0] || editForm.fullName })
    setIsEditOpen(false)
  }

  function handlePasswordChange(event) {
    const { name, value } = event.target
    setPasswordForm((current) => ({ ...current, [name]: value }))
  }

  function handlePasswordSubmit(event) {
    event.preventDefault()
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordError("New password and confirm password must match.")
      return
    }
    setPasswordError("")
    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    })
    setIsPasswordOpen(false)
  }

  return (
    <div className="space-y-6">
      <ProfileHeader
        attendance={attendance}
        enrolledCourses={enrolledCourses}
        student={student}
        unreadCount={unreadCount}
      />

      <PersonalInformationCard onEdit={() => {
        setEditForm(student)
        setIsEditOpen(true)
      }} student={student} />

      <section className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-soft backdrop-blur-xl">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Settings & Account Management
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-slate-950">
            Manage your account
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Control profile updates, password security, notifications, and privacy settings.
          </p>
        </div>

        <div className="mt-6 grid gap-4 xl:grid-cols-2">
          {settingItems.map((item) => (
            <SettingsCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {isEditOpen && (
        <EditProfileForm
          form={editForm}
          onChange={handleEditChange}
          onClose={() => setIsEditOpen(false)}
          onSubmit={handleEditSubmit}
        />
      )}

      {isPasswordOpen && (
        <ChangePasswordModal
          error={passwordError}
          form={passwordForm}
          onChange={handlePasswordChange}
          onClose={() => {
            setPasswordError("")
            setIsPasswordOpen(false)
          }}
          onSubmit={handlePasswordSubmit}
        />
      )}
    </div>
  )
}
