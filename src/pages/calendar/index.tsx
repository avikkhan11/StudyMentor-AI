"use client"

import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Calendar } from "../../components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Badge } from "../../components/ui/badge"
import { CalendarIcon, ListTodo, Clock, Filter, Plus } from "lucide-react"
import { format } from "date-fns"

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [view, setView] = useState("month")

  // Mock data - in a real app, this would come from a database
  const assignments = [
    {
      id: 1,
      title: "Calculus Problem Set",
      subject: "Mathematics",
      subjectColor: "bg-blue-500",
      dueDate: new Date(2025, 4, 10),
      priority: "high",
      status: "in-progress",
    },
    {
      id: 2,
      title: "Physics Lab Report",
      subject: "Physics",
      subjectColor: "bg-purple-500",
      dueDate: new Date(2025, 4, 12),
      priority: "medium",
      status: "not-started",
    },
    {
      id: 3,
      title: "History Essay",
      subject: "History",
      subjectColor: "bg-amber-500",
      dueDate: new Date(2025, 4, 15),
      priority: "low",
      status: "not-started",
    },
    {
      id: 4,
      title: "Programming Project",
      subject: "Computer Science",
      subjectColor: "bg-green-500",
      dueDate: new Date(2025, 4, 8),
      priority: "high",
      status: "in-progress",
    },
    {
      id: 5,
      title: "Literature Analysis",
      subject: "Literature",
      subjectColor: "bg-red-500",
      dueDate: new Date(2025, 4, 20),
      priority: "medium",
      status: "not-started",
    },
  ]

  // Filter assignments for the selected date
  const selectedDateAssignments = date
    ? assignments.filter(
        (assignment) =>
          assignment.dueDate.getDate() === date.getDate() &&
          assignment.dueDate.getMonth() === date.getMonth() &&
          assignment.dueDate.getFullYear() === date.getFullYear(),
      )
    : []

  // Get upcoming assignments (next 7 days)
  const today = new Date()
  const nextWeek = new Date()
  nextWeek.setDate(today.getDate() + 7)

  const upcomingAssignments = assignments
    .filter((assignment) => assignment.dueDate >= today && assignment.dueDate <= nextWeek)
    .sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime())

  // Function to get priority badge styling
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return (
          <Badge variant="outline" className="bg-red-500/20 text-red-400 border-red-500/50">
            High
          </Badge>
        )
      case "medium":
        return (
          <Badge variant="outline" className="bg-amber-500/20 text-amber-400 border-amber-500/50">
            Medium
          </Badge>
        )
      case "low":
        return (
          <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/50">
            Low
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Study Calendar</h1>
          <p className="text-muted-foreground">Manage your assignments and study sessions</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
          <Button className="bg-primary hover:bg-primary/80 glow">
            <Plus className="mr-2 h-4 w-4" /> New Assignment
          </Button>
        </div>
      </div>

      <Tabs defaultValue="calendar" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-2 mb-4 p-1 bg-muted/30 backdrop-blur-sm border border-muted">
          <TabsTrigger
            value="calendar"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <CalendarIcon className="mr-2 h-4 w-4" /> Calendar View
          </TabsTrigger>
          <TabsTrigger
            value="list"
            className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
          >
            <ListTodo className="mr-2 h-4 w-4" /> List View
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calendar">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 cyber-border glow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle>Calendar</CardTitle>
                  <CardDescription>View and manage your schedule</CardDescription>
                </div>
                <Select defaultValue={view} onValueChange={setView}>
                  <SelectTrigger className="w-[120px] bg-muted/30 border-primary/20">
                    <SelectValue placeholder="View" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="month">Month</SelectItem>
                    <SelectItem value="week">Week</SelectItem>
                    <SelectItem value="day">Day</SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border border-primary/20"
                  modifiers={{
                    assignment: assignments.map((a) => a.dueDate),
                  }}
                  modifiersStyles={{
                    assignment: {
                      fontWeight: "bold",
                      borderBottom: "2px solid var(--primary)",
                      color: "hsl(var(--primary))",
                    },
                  }}
                />

                <div className="mt-4 flex flex-wrap gap-2">
                  {["Mathematics", "Physics", "Computer Science", "History", "Literature"].map((subject, i) => {
                    const colors = ["bg-blue-500", "bg-purple-500", "bg-green-500", "bg-amber-500", "bg-red-500"]
                    return (
                      <div key={subject} className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${colors[i]}`}></div>
                        <span className="text-xs">{subject}</span>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="cyber-border glow-secondary">
              <CardHeader className="pb-2">
                <CardTitle>{date ? format(date, "MMMM d, yyyy") : "Select a date"}</CardTitle>
                <CardDescription>
                  {selectedDateAssignments.length
                    ? `${selectedDateAssignments.length} assignment${selectedDateAssignments.length !== 1 ? "s" : ""} due`
                    : "No assignments due on this date"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedDateAssignments.length > 0 ? (
                  <div className="space-y-3">
                    {selectedDateAssignments.map((assignment) => (
                      <div
                        key={assignment.id}
                        className="p-3 rounded-lg border border-secondary/30 bg-secondary/5 hover:bg-secondary/10 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${assignment.subjectColor}`}></div>
                            <span className="text-xs text-muted-foreground">{assignment.subject}</span>
                          </div>
                          {getPriorityBadge(assignment.priority)}
                        </div>
                        <h4 className="font-medium">{assignment.title}</h4>
                        <div className="flex items-center mt-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>Due {format(assignment.dueDate, "h:mm a")}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <CalendarIcon className="h-10 w-10 text-muted-foreground mb-2" />
                    <h3 className="font-medium mb-1">No Assignments</h3>
                    <p className="text-sm text-muted-foreground mb-4">There are no assignments due on this date.</p>
                    <Button size="sm" className="bg-secondary hover:bg-secondary/80">
                      <Plus className="mr-2 h-4 w-4" /> Add Assignment
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="list">
          <Card className="cyber-border glow-secondary">
            <CardHeader>
              <CardTitle>Upcoming Assignments</CardTitle>
              <CardDescription>Due in the next 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingAssignments.length > 0 ? (
                  upcomingAssignments.map((assignment) => (
                    <div
                      key={assignment.id}
                      className="p-4 rounded-lg border border-secondary/30 bg-secondary/5 hover:bg-secondary/10 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <div className={`w-3 h-3 rounded-full ${assignment.subjectColor}`}></div>
                            <span className="text-sm text-muted-foreground">{assignment.subject}</span>
                            {getPriorityBadge(assignment.priority)}
                          </div>
                          <h4 className="font-medium text-lg">{assignment.title}</h4>
                          <div className="flex items-center mt-1 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>Due {format(assignment.dueDate, "MMMM d, yyyy 'at' h:mm a")}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="border-secondary/30 hover:bg-secondary/10">
                            Edit
                          </Button>
                          <Button size="sm" className="bg-secondary hover:bg-secondary/80">
                            Complete
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <ListTodo className="h-12 w-12 text-muted-foreground mb-3" />
                    <h3 className="text-xl font-medium mb-1">No Upcoming Assignments</h3>
                    <p className="text-muted-foreground mb-6 max-w-md">
                      You don't have any assignments due in the next 7 days. Add a new assignment to get started.
                    </p>
                    <Button className="bg-secondary hover:bg-secondary/80 glow-secondary">
                      <Plus className="mr-2 h-4 w-4" /> Add New Assignment
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
