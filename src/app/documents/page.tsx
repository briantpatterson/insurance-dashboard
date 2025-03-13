"use client"

import { useState } from "react"
import { getDocumentsByCategory, DocumentCategory } from "@/data/documents"
import { DocumentCard } from "@/components/document-card"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  FileText, 
  ClipboardList, 
  BookOpen, 
  FileBarChart, 
  FileWarning 
} from "lucide-react"

export default function DocumentsPage() {
  const documentsByCategory = getDocumentsByCategory()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState<DocumentCategory>("claim-forms")
  
  // Format category for display
  const formatCategory = (category: DocumentCategory): string => {
    switch (category) {
      case "claim-forms":
        return "Claim Forms"
      case "enrollment-kits":
        return "Enrollment Kits"
      case "member-guides":
        return "Member Guides"
      case "benefit-summaries":
        return "Benefit Summaries"
      case "legal-notices":
        return "Legal Notices"
      default:
        return category
    }
  }
  
  // Get icon for category
  const getCategoryIcon = (category: DocumentCategory) => {
    switch (category) {
      case "claim-forms":
        return <ClipboardList className="h-4 w-4" />
      case "enrollment-kits":
        return <FileText className="h-4 w-4" />
      case "member-guides":
        return <BookOpen className="h-4 w-4" />
      case "benefit-summaries":
        return <FileBarChart className="h-4 w-4" />
      case "legal-notices":
        return <FileWarning className="h-4 w-4" />
      default:
        return null
    }
  }
  
  // Filter documents based on search query
  const filterDocuments = (category: DocumentCategory) => {
    if (!searchQuery) return documentsByCategory[category]
    
    const query = searchQuery.toLowerCase()
    return documentsByCategory[category].filter(doc => 
      doc.title.toLowerCase().includes(query) || 
      doc.description.toLowerCase().includes(query)
    )
  }
  
  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Documents & Forms</h1>
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search documents..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <p className="text-muted-foreground">
            Access and download important documents, forms, and guides related to your insurance benefits.
          </p>
        </div>
        
        <Tabs defaultValue="claim-forms" onValueChange={(value) => setActiveTab(value as DocumentCategory)}>
          <TabsList className="grid grid-cols-5 mb-8">
            <TabsTrigger value="claim-forms" className="flex items-center gap-2">
              <ClipboardList className="h-4 w-4" />
              <span>Claim Forms</span>
            </TabsTrigger>
            <TabsTrigger value="enrollment-kits" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Enrollment Kits</span>
            </TabsTrigger>
            <TabsTrigger value="member-guides" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Member Guides</span>
            </TabsTrigger>
            <TabsTrigger value="benefit-summaries" className="flex items-center gap-2">
              <FileBarChart className="h-4 w-4" />
              <span>Benefit Summaries</span>
            </TabsTrigger>
            <TabsTrigger value="legal-notices" className="flex items-center gap-2">
              <FileWarning className="h-4 w-4" />
              <span>Legal Notices</span>
            </TabsTrigger>
          </TabsList>
          
          {Object.entries(documentsByCategory).map(([category, _]) => {
            const filteredDocs = filterDocuments(category as DocumentCategory)
            
            return (
              <TabsContent key={category} value={category} className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  {getCategoryIcon(category as DocumentCategory)}
                  <h2 className="text-2xl font-semibold">{formatCategory(category as DocumentCategory)}</h2>
                </div>
                
                {filteredDocs.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredDocs.map((document) => (
                      <DocumentCard key={document.id} document={document} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-[200px] bg-muted rounded-lg p-6 text-center">
                    <FileText className="h-12 w-12 text-muted-foreground mb-4 opacity-50" />
                    <h3 className="text-lg font-medium mb-2">No documents found</h3>
                    <p className="text-muted-foreground max-w-md">
                      {searchQuery 
                        ? `No documents matching "${searchQuery}" in this category. Try a different search term or category.`
                        : `There are currently no documents available in this category.`
                      }
                    </p>
                  </div>
                )}
                
                {category === "claim-forms" && filteredDocs.length > 0 && (
                  <div className="mt-8 p-4 bg-muted rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Need Help With a Claim?</h3>
                    <p className="text-muted-foreground mb-4">
                      If you need assistance filling out a claim form or have questions about the claims process, 
                      please contact our customer service team at 800-234-5678 or email claims@insuranceco.com.
                    </p>
                  </div>
                )}
                
                {category === "legal-notices" && filteredDocs.length > 0 && (
                  <div className="mt-8 p-4 bg-muted rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Important Notice</h3>
                    <p className="text-muted-foreground mb-4">
                      Please review all legal notices carefully. These documents contain important information about 
                      your rights and our obligations under various laws and regulations.
                    </p>
                  </div>
                )}
              </TabsContent>
            )
          })}
        </Tabs>
      </div>
    </DashboardLayout>
  )
} 