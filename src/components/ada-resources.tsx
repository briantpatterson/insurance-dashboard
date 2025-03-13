"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, BookOpen, FileText, HelpCircle, Building, Scale } from "lucide-react"

export function ADAResources() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-primary" />
          <span>ADA Accommodation Resources</span>
        </CardTitle>
        <CardDescription>
          Helpful resources for understanding and implementing workplace accommodations
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="rounded-md border p-4">
            <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Job Accommodation Network (JAN)
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              JAN is the leading source of free, expert, and confidential guidance on job accommodations and disability employment issues.
            </p>
            <div className="space-y-2">
              <a 
                href="https://askjan.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                JAN Official Website
              </a>
              <a 
                href="https://askjan.org/a-to-z.cfm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                A to Z of Disabilities and Accommodations
              </a>
              <a 
                href="https://askjan.org/toolkit/index.cfm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                Workplace Accommodation Toolkit
              </a>
            </div>
          </div>
          
          <div className="rounded-md border p-4">
            <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
              <Building className="h-5 w-5 text-primary" />
              EEOC Resources
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              The U.S. Equal Employment Opportunity Commission provides guidance on ADA compliance.
            </p>
            <div className="space-y-2">
              <a 
                href="https://www.eeoc.gov/laws/guidance/enforcement-guidance-reasonable-accommodation-and-undue-hardship-under-ada" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                Enforcement Guidance on Reasonable Accommodation
              </a>
              <a 
                href="https://www.eeoc.gov/laws/guidance/your-employment-rights-individual-disability" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                Employment Rights for Individuals with Disabilities
              </a>
            </div>
          </div>
          
          <div className="rounded-md border p-4">
            <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
              <Scale className="h-5 w-5 text-primary" />
              ADA Legal Information
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Legal resources and information about the Americans with Disabilities Act.
            </p>
            <div className="space-y-2">
              <a 
                href="https://www.ada.gov/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                ADA.gov - Official Website
              </a>
              <a 
                href="https://www.ada.gov/topics/employment/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                ADA Employment Resources
              </a>
            </div>
          </div>
          
          <div className="rounded-md border p-4">
            <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
              <FileText className="h-5 w-5 text-primary" />
              Company Resources
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Internal resources to help with accommodation requests.
            </p>
            <div className="space-y-2">
              <a 
                href="#" 
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                Accommodation Request Form
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                Company Accommodation Policy
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                Contact HR for Assistance
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-xs text-muted-foreground mt-4">
          <p>For assistance with accommodation requests, please contact the HR department at hr@company.com or call ext. 1234.</p>
        </div>
      </CardContent>
    </Card>
  )
} 