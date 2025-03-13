"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Notification, notifications as initialNotifications } from '@/data/notifications'

interface NotificationContextType {
  notifications: Notification[]
  unreadCount: number
  markAsRead: (id: string) => void
  markAllAsRead: () => void
  dismissNotification: (id: string) => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications)
  
  // Calculate unread count
  const unreadCount = notifications.filter(notification => !notification.read).length
  
  // Mark a single notification as read
  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, read: true } 
          : notification
      )
    )
  }
  
  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    )
  }
  
  // Dismiss (remove) a notification
  const dismissNotification = (id: string) => {
    setNotifications(prev => 
      prev.filter(notification => notification.id !== id)
    )
  }
  
  // Provide the context value
  const value = {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    dismissNotification
  }
  
  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  )
}

// Custom hook to use the notification context
export function useNotifications() {
  const context = useContext(NotificationContext)
  
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider')
  }
  
  return context
} 