import { Calendar, Clock, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"



export function StudySessionList({ subjectId }) {
  // Mock data - in a real app, this would come from a database
  const sessions = [
    {
      id: 1,
      title: "Calculus Review",
      date: "Today",
      time: "4:00 PM - 6:00 PM",
      status: "upcoming",
      location: "Home",
    },
    {
      id: 2,
      title: "Linear Algebra Practice",
      date: "Tomorrow",
      time: "10:00 AM - 12:00 PM",
      status: "upcoming",
      location: "Library",
    },
    {
      id: 3,
      title: "Differential Equations",
      date: "May 8, 2025",
      time: "2:00 PM - 4:00 PM",
      status: "completed",
      location: "Study Group",
      duration: "2h 15m",
    },
  ]

  return (
    <div className="space-y-4">
      {sessions.map((session) => (
        <div key={session.id} className="p-4 rounded-lg border">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <Calendar className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">{session.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {session.date} • {session.time}
                </p>
                <div className="flex items-center mt-1 space-x-2">
                  <Badge variant="outline">{session.location}</Badge>
                  {session.status === "completed" && (
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {session.duration}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div>
              {session.status === "upcoming" ? (
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300">Upcoming</Badge>
              ) : (
                <Badge
                  variant="outline"
                  className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                >
                  Completed
                </Badge>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 mt-1">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit Session</DropdownMenuItem>
                  <DropdownMenuItem>Start Session</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">Cancel</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
