"use client"

import { notFound } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard-layout"
import { BenefitDetails } from "@/components/benefit-details"
import { benefits } from "@/data/benefits"

interface BenefitDetailsPageProps {
  params: {
    id: string
  }
}

export default function BenefitDetailsPage({ params }: BenefitDetailsPageProps) {
  const { id } = params
  
  // Find the benefit by ID
  const benefit = benefits.find(benefit => benefit.id === id)
  
  // If benefit not found, show 404 page
  if (!benefit) {
    notFound()
  }
  
  return (
    <DashboardLayout>
      <BenefitDetails benefit={benefit} />
    </DashboardLayout>
  )
} 