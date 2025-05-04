import { FileText, FileCode, FileImage, MoreHorizontal } from "lucide-react"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Badge } from "./ui/badge"


export function DocumentList({ subjectId }) {
  // Mock data 
  const documents = [
    {
      id: 1,
      name: "Calculus Fundamentals.pdf",
      type: "pdf",
      size: "2.4 MB",
      uploadedAt: "2 days ago",
      status: "read",
    },
    {
      id: 2,
      name: "Linear Algebra Notes.docx",
      type: "docx",
      size: "1.8 MB",
      uploadedAt: "1 week ago",
      status: "unread",
    },
    {
      id: 3,
      name: "Differential Equations.pdf",
      type: "pdf",
      size: "3.2 MB",
      uploadedAt: "2 weeks ago",
      status: "read",
    },
    {
      id: 4,
      name: "Geometry Diagrams.png",
      type: "image",
      size: "1.1 MB",
      uploadedAt: "3 weeks ago",
      status: "read",
    },
  ]

  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
        return <FileText className="h-4 w-4 text-red-500" />
      case "docx":
        return <FileText className="h-4 w-4 text-blue-500" />
      case "image":
        return <FileImage className="h-4 w-4 text-green-500" />
      default:
        return <FileCode className="h-4 w-4 text-purple-500" />
    }
  }

  return (
    <div className="space-y-2">
      {documents.map((doc) => (
        <div key={doc.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted">
          <div className="flex items-center space-x-3">
            {getFileIcon(doc.type)}
            <div>
              <p className="font-medium text-sm">{doc.name}</p>
              <p className="text-xs text-muted-foreground">
                {doc.size} • Uploaded {doc.uploadedAt}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {doc.status === "unread" && (
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300">
                New
              </Badge>
            )}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View Document</DropdownMenuItem>
                <DropdownMenuItem>Chat with Document</DropdownMenuItem>
                <DropdownMenuItem>Download</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}
    </div>
  )
}
