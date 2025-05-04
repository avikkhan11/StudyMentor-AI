import { CalendarClock } from "lucide-react"
import { Badge } from "./ui/badge"

export function UpcomingAssignments() {
  // Mock data - in a real app, this would come from a database
  const assignments = [
    {
      id: 1,
      title: "Calculus Problem Set",
      subject: "Mathematics",
      dueDate: "Tomorrow",
      priority: "high",
    },
    {
      id: 2,
      title: "Physics Lab Report",
      subject: "Physics",
      dueDate: "In 3 days",
      priority: "medium",
    },
    {
      id: 3,
      title: "History Essay",
      subject: "History",
      dueDate: "Next week",
      priority: "low",
    },
  ]

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300"
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300"
      case "low":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div className="space-y-4">
      {assignments.map((assignment) => (
        <div key={assignment.id} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
          <CalendarClock className="h-5 w-5 mt-0.5 text-muted-foreground" />
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <p className="font-medium text-sm">{assignment.title}</p>
              <Badge variant="outline" className={getPriorityColor(assignment.priority)}>
                {assignment.priority}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              {assignment.subject} • Due {assignment.dueDate}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
