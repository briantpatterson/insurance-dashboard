"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { HelpCircle } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function BillingFaqCard() {
  const router = useRouter()
  
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Frequently Asked Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-600 dark:text-slate-400">
          Find answers to common billing questions.
        </p>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => router.push("/billing/faqs")}
        >
          View FAQs
        </Button>
      </CardFooter>
    </Card>
  )
} 