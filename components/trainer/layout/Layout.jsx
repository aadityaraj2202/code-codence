import React from 'react'
import { Outlet } from 'react-router-dom'
import clsx from 'clsx'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { useApp } from '../../context/AppContext'

function Layout() {
  const { sidebarCollapsed } = useApp()

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />

      {/* Main content area */}
      <div
        className={clsx(
          'flex-1 flex flex-col min-w-0 transition-all duration-300',
          sidebarCollapsed
            ? 'lg:ml-[72px]'
            : 'lg:ml-64'
        )}
      >
        <Navbar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Layout
