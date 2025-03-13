"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileQuestion, PlusCircle } from "lucide-react"

interface EmptyPolicyStateProps {
  title: string
  description: string
  showContactButton?: boolean
}

export function EmptyPolicyState({ 
  title, 
  description, 
  showContactButton = true 
}: EmptyPolicyStateProps) {
  return (
    <Card className="h-full flex flex-col items-center justify-center text-center p-6">
      <CardContent className="pt-6 pb-4 flex flex-col items-center">
        <FileQuestion className="h-16 w-16 text-muted-foreground mb-4 opacity-50" />
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <CardDescription className="mb-6 max-w-md">
          {description}
        </CardDescription>
        
        {showContactButton && (
          <Button variant="outline" className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            <span>Contact Sales</span>
          </Button>
        )}
      </CardContent>
    </Card>
  )
} 