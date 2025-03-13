"use client"

import { Document, formatDate } from "@/data/documents"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  FileText, 
  Calendar, 
  Download, 
  Eye, 
  FileIcon, 
  FileSpreadsheet, 
  AlertCircle 
} from "lucide-react"

interface DocumentCardProps {
  document: Document
}

export function DocumentCard({ document }: DocumentCardProps) {
  // Get file icon based on file type
  const getFileIcon = () => {
    switch (document.fileType) {
      case "pdf":
        return <FileText className="h-10 w-10 text-red-500" />
      case "docx":
        return <FileIcon className="h-10 w-10 text-blue-500" />
      case "xlsx":
        return <FileSpreadsheet className="h-10 w-10 text-green-500" />
      default:
        return <FileText className="h-10 w-10 text-gray-500" />
    }
  }
  
  // Format file type for display
  const formatFileType = () => {
    switch (document.fileType) {
      case "pdf":
        return "PDF Document"
      case "docx":
        return "Word Document"
      case "xlsx":
        return "Excel Spreadsheet"
      default:
        return "Document"
    }
  }
  
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-lg">{document.title}</CardTitle>
            <CardDescription className="mt-1">{document.description}</CardDescription>
          </div>
          <div className="ml-4">
            {getFileIcon()}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow pb-2">
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Type:</span>
            <span>{formatFileType()}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Size:</span>
            <span>{document.fileSize}</span>
          </div>
          
          {document.version && (
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Version:</span>
              <span>{document.version}</span>
            </div>
          )}
          
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Updated: {formatDate(document.uploadDate)}</span>
          </div>
          
          {document.isRequired && (
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="outline" className="bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                <span>Required</span>
              </Badge>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4 flex gap-2">
        <Button variant="outline" className="flex-1 flex items-center gap-2">
          <Eye className="h-4 w-4" />
          <span>View</span>
        </Button>
        <Button variant="default" className="flex-1 flex items-center gap-2">
          <Download className="h-4 w-4" />
          <span>Download</span>
        </Button>
      </CardFooter>
    </Card>
  )
} 