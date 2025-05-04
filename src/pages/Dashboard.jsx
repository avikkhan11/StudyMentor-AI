import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { SubjectCard } from "@/components/subject-card"
import { UserLevel } from "@/components/user-level"
import { DailyStreak } from "@/components/daily-streak"
import { RecentActivity } from "@/components/recent-activity"
import { UpcomingAssignments } from "@/components/upcoming-assignments"
import { Plus, BookOpen, CalendarIcon, Trophy } from "lucide-react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar";
import { Link } from 'react-router-dom';


export default function Dashboard() {
  // Mock data - in a real app, this would come from a database
  const userStats = {
    level: 7,
    xp: 3240,
    nextLevelXp: 4000,
    streak: 12,
    totalStudyTime: "32h 15m",
    completedAssignments: 24,
  }

  const subjects = [
    { id: 1, name: "Mathematics", color: "bg-blue-500", progress: 65, documents: 8, assignments: 3 },
    { id: 2, name: "Physics", color: "bg-purple-500", progress: 42, documents: 5, assignments: 2 },
    { id: 3, name: "Computer Science", color: "bg-green-500", progress: 78, documents: 12, assignments: 1 },
    { id: 4, name: "History", color: "bg-amber-500", progress: 30, documents: 6, assignments: 4 },
  ]

  return (
    <>
   
    <div className="flex flex-col p-6 space-y-6">
    <SidebarProvider>
   
   <AppSidebar />
 
</SidebarProvider>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button asChild>
          <Link to="/subjects/new">
            <Plus className="mr-2 h-4 w-4" /> New Subject
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="cyber-border glow">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Current Level</CardTitle>
            <CardDescription>Your learning progress</CardDescription>
          </CardHeader>
          <CardContent>
            <UserLevel level={userStats.level} xp={userStats.xp} nextLevelXp={userStats.nextLevelXp} />
          </CardContent>
        </Card>

        <Card className="cyber-border glow-accent">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Daily Streak</CardTitle>
            <CardDescription>Keep it going!</CardDescription>
          </CardHeader>
          <CardContent>
            <DailyStreak days={userStats.streak} />
          </CardContent>
        </Card>

        <Card className="cyber-border glow-secondary">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Study Stats</CardTitle>
            <CardDescription>Your achievements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Total Study Time</span>
              <span className="font-medium">{userStats.totalStudyTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Completed Assignments</span>
              <span className="font-medium">{userStats.completedAssignments}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Current Streak</span>
              <span className="font-medium">{userStats.streak} days</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="subjects">
        <TabsList className="grid w-full md:w-auto grid-cols-3 mb-4">
          <TabsTrigger value="subjects">
            <BookOpen className="mr-2 h-4 w-4" /> My Subjects
          </TabsTrigger>
          <TabsTrigger value="calendar">
            <CalendarIcon className="mr-2 h-4 w-4" /> Study Calendar
          </TabsTrigger>
          <TabsTrigger value="achievements">
            <Trophy className="mr-2 h-4 w-4" /> Achievements
          </TabsTrigger>
        </TabsList>

        <TabsContent value="subjects" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {subjects.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="calendar">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Study Schedule</CardTitle>
                <CardDescription>Plan your study sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar mode="single" className="rounded-md border" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Assignments</CardTitle>
                <CardDescription>Due soon</CardDescription>
              </CardHeader>
              <CardContent>
                <UpcomingAssignments />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="achievements">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
                <CardDescription>Your latest badges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                        <Trophy className="h-8 w-8 text-primary" />
                      </div>
                      <span className="text-xs text-center">Achievement {i}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your learning journey</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentActivity />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
    </>
  )
}
