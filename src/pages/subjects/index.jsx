import { Link } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { SubjectCard } from "../../components/subject-card"
import { Plus, Search, Filter, ArrowUpDown } from "lucide-react"

export default function SubjectsPage() {
  // Mock data
  const subjects = [
    {
      id: 1,
      name: "Mathematics",
      color: "bg-blue-500",
      progress: 65,
      documents: 8,
      assignments: 3,
      description: "Advanced calculus and linear algebra",
      level: 4,
    },
    {
      id: 2,
      name: "Physics",
      color: "bg-purple-500",
      progress: 42,
      documents: 5,
      assignments: 2,
      description: "Quantum mechanics and relativity",
      level: 3,
    },
    {
      id: 3,
      name: "Computer Science",
      color: "bg-green-500",
      progress: 78,
      documents: 12,
      assignments: 1,
      description: "Algorithms and data structures",
      level: 5,
    },
    {
      id: 4,
      name: "History",
      color: "bg-amber-500",
      progress: 30,
      documents: 6,
      assignments: 4,
      description: "World War II and Cold War",
      level: 2,
    },
    {
      id: 5,
      name: "Literature",
      color: "bg-red-500",
      progress: 55,
      documents: 9,
      assignments: 2,
      description: "Modern American literature",
      level: 3,
    },
    {
      id: 6,
      name: "Biology",
      color: "bg-emerald-500",
      progress: 22,
      documents: 4,
      assignments: 3,
      description: "Cellular biology and genetics",
      level: 1,
    },
  ]

  return (
    <div className="flex flex-col p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">My Subjects</h1>
          <p className="text-muted-foreground">Manage and track your learning progress</p>
        </div>
        <Button asChild className="bg-primary hover:bg-primary/80 glow self-start">
          <Link to="/subjects/new">
            <Plus className="mr-2 h-4 w-4" /> New Subject
          </Link>
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search subjects..."
            className="pl-9 bg-muted/30 border-primary/20 focus-visible:ring-primary/50"
          />
        </div>
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px] bg-muted/30 border-primary/20">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Subjects</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="not-started">Not Started</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="name">
            <SelectTrigger className="w-[180px] bg-muted/30 border-primary/20">
              <ArrowUpDown className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="progress">Progress</SelectItem>
              <SelectItem value="level">Level</SelectItem>
              <SelectItem value="recent">Recently Updated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {subjects.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>

      <Card className="cyber-border border-dashed border-primary/30 bg-muted/20">
        <CardContent className="flex flex-col items-center justify-center p-6 h-64">
          <div className="rounded-full bg-primary/20 p-3 mb-4">
            <Plus className="h-8 w-8 text-primary" style={{ filter: "drop-shadow(0 0 4px var(--primary))" }} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Add New Subject</h3>
          <p className="text-muted-foreground text-center mb-4">
            Create a new subject to organize your study materials
          </p>
          <Button asChild className="bg-primary hover:bg-primary/80 glow">
            <Link to="/subjects/new">
              <Plus className="mr-2 h-4 w-4" /> New Subject
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
