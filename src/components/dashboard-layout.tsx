"use client"

import { SidebarNav, sidebarNavItems } from "@/components/sidebar-nav"
import { TopNav } from "@/components/top-nav"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Navigation */}
      <TopNav />
      
      <div className="flex flex-1">
        {/* Sidebar - Desktop */}
        <aside className="hidden border-r bg-background md:block md:w-64 sticky top-16 h-[calc(100vh-4rem)] z-30">
          <div className="flex h-full flex-col">
            <div className="flex-1 overflow-y-auto py-6">
              <SidebarNav items={sidebarNavItems} className="px-4 md:px-6" />
            </div>
          </div>
        </aside>
        
        {/* Mobile Sidebar - Overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div 
              className="fixed inset-0 bg-black/50" 
              onClick={() => setSidebarOpen(false)}
            />
            <div className="fixed inset-y-0 left-0 w-64 bg-background">
              <div className="flex h-16 items-center border-b px-4 md:px-6">
                <h2 className="text-lg font-semibold">Insurance Dashboard</h2>
              </div>
              <div className="py-6 overflow-y-auto h-[calc(100vh-4rem)]">
                <SidebarNav items={sidebarNavItems} className="px-4 md:px-6" />
              </div>
            </div>
          </div>
        )}
        
        {/* Main content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          {children}
        </main>
      </div>
      
      {/* Mobile menu button */}
      <div className="md:hidden fixed bottom-4 right-4 z-40">
        <Button 
          size="icon" 
          className="h-12 w-12 rounded-full shadow-lg"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
} 