import "@/styles/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Insurance Dashboard",
  description: "HR Dashboard for managing employee benefits",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
} 