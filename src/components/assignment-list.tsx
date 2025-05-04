import { CheckCircle, Clock, AlertCircle, MoreHorizontal } from "lucide-react"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Badge } from "./ui/badge"

interface AssignmentListProps {
  subjectId: string
}

export function AssignmentList({ subjectId }: AssignmentListProps) {
  // Mock data - in a real app, this would come from a database
  const assignments = [
    {
      id: 1,
      title: "Calculus Problem Set",
      description: "Complete problems 1-20 in Chapter 5",
      dueDate: "Tomorrow, 11:59 PM",
      status: "in-progress",
      priority: "high",
    },
    {
      id: 2,
      title: "Linear Algebra Quiz",
      description: "Online quiz on vectors and matrices",
      dueDate: "May 10, 2025",
      status: "not-started",
      priority: "medium",
    },
    {
      id: 3,
      title: "Differential Equations Project",
      description: "Final project on solving real-world problems",
      dueDate: "May 20, 2025",
      status: "completed",
      priority: "high",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "in-progress":
        return <Clock className="h-5 w-5 text-yellow-500" />
      case "not-started":
        return <AlertCircle className="h-5 w-5 text-red-500" />
      default:
        return <Clock className="h-5 w-5 text-muted-foreground" />
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300">
            High
          </Badge>
        )
      case "medium":
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300">
            Medium
          </Badge>
        )
      case "low":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300">
            Low
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-4">
      {assignments.map((assignment) => (
        <div key={assignment.id} className="p-4 rounded-lg border">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              {getStatusIcon(assignment.status)}
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-medium">{assignment.title}</h3>
                  {getPriorityBadge(assignment.priority)}
                </div>
                <p className="text-sm text-muted-foreground">{assignment.description}</p>
                <p className="text-xs mt-1">Due: {assignment.dueDate}</p>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit Assignment</DropdownMenuItem>
                <DropdownMenuItem>Mark as Completed</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}
    </div>
  )
}
