import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Progress } from "../components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Badge } from "../components/ui/badge"
import { UserLevel } from "../components/user-level"
import { DailyStreak } from "../components/daily-streak"
import { RecentActivity } from "../components/recent-activity"
import { Calendar, Clock, Edit, FileText, Trophy, Users } from "lucide-react"

export default function ProfilePage() {
  // Mock data - in a real app, this would come from a database
  const userProfile = {
    name: "John Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    joinDate: "January 2025",
    level: 12,
    xp: 4580,
    nextLevelXp: 5000,
    streak: 24,
    totalStudyTime: "156h 45m",
    completedAssignments: 87,
    subjects: 6,
  }

  const achievements = [
    { id: 1, name: "Early Bird", description: "Complete 5 study sessions before 9 AM", icon: "🌅", earned: true },
    { id: 2, name: "Night Owl", description: "Complete 5 study sessions after 10 PM", icon: "🦉", earned: true },
    { id: 3, name: "Bookworm", description: "Upload 20 documents", icon: "📚", earned: true },
    { id: 4, name: "Math Wizard", description: "Complete all Mathematics assignments", icon: "🧙", earned: false },
    { id: 5, name: "Science Guru", description: "Reach level 10 in Science", icon: "🔬", earned: true },
    { id: 6, name: "History Buff", description: "Study History for 50 hours", icon: "🏛️", earned: false },
    { id: 7, name: "Perfect Streak", description: "Maintain a 30-day study streak", icon: "🔥", earned: false },
    { id: 8, name: "Quiz Master", description: "Score 100% on 10 quizzes", icon: "🎯", earned: true },
    { id: 9, name: "Team Player", description: "Join 5 study groups", icon: "👥", earned: true },
  ]

  const stats = [
    { label: "Study Sessions", value: "142", icon: Clock },
    { label: "Documents", value: "56", icon: FileText },
    { label: "Assignments", value: "87", icon: Calendar },
    { label: "Achievements", value: "6/9", icon: Trophy },
    { label: "Study Groups", value: "3", icon: Users },
  ]

  return (
    <div className="flex flex-col p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Profile</h1>
        <Button variant="outline">
          <Edit className="mr-2 h-4 w-4" /> Edit Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 cyber-border">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <Avatar className="h-16 w-16 border border-primary/50 glow">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-primary/20 text-primary text-xl">JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center">
                <CardTitle className="text-2xl">{userProfile.name}</CardTitle>
                <Badge className="ml-2 bg-primary/20 text-primary border-primary/50">Level {userProfile.level}</Badge>
              </div>
              <CardDescription>
                @{userProfile.username} • Joined {userProfile.joinDate}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center p-3 bg-muted/30 rounded-lg border border-muted">
                  <stat.icon className="h-5 w-5 mb-1 text-primary" />
                  <span className="text-xl font-bold">{stat.value}</span>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-sm">
                    {userProfile.xp} / {userProfile.nextLevelXp} XP
                  </span>
                </div>
                <Progress value={Math.round((userProfile.xp / userProfile.nextLevelXp) * 100)} className="h-2 glow" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Subject Progress</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Mathematics", progress: 75, color: "bg-blue-500" },
                      { name: "Physics", progress: 60, color: "bg-purple-500" },
                      { name: "Computer Science", progress: 90, color: "bg-green-500" },
                    ].map((subject) => (
                      <div key={subject.name} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>{subject.name}</span>
                          <span>{subject.progress}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full ${subject.color} rounded-full`}
                            style={{ width: `${subject.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Recent Activity</h3>
                  <RecentActivity />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="cyber-border glow">
          <CardHeader className="pb-2">
            <CardTitle>Stats</CardTitle>
            <CardDescription>Your learning journey</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <UserLevel level={userProfile.level} xp={userProfile.xp} nextLevelXp={userProfile.nextLevelXp} />
            <DailyStreak days={userProfile.streak} />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="achievements" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-2 mb-4">
          <TabsTrigger value="achievements">
            <Trophy className="mr-2 h-4 w-4" /> Achievements
          </TabsTrigger>
          <TabsTrigger value="activity">
            <Clock className="mr-2 h-4 w-4" /> Activity History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="achievements">
          <Card>
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
              <CardDescription>Badges and milestones you've earned</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`flex flex-col items-center p-4 rounded-lg border ${
                      achievement.earned ? "bg-primary/10 border-primary/30" : "bg-muted/30 border-muted opacity-60"
                    }`}
                  >
                    <div className={`text-3xl mb-2 ${achievement.earned ? "" : "grayscale"}`} aria-hidden="true">
                      {achievement.icon}
                    </div>
                    <h3 className="font-medium text-center">{achievement.name}</h3>
                    <p className="text-xs text-center text-muted-foreground mt-1">{achievement.description}</p>
                    {achievement.earned ? (
                      <Badge className="mt-2 bg-primary/20 text-primary border-primary/50">Earned</Badge>
                    ) : (
                      <Badge variant="outline" className="mt-2">
                        Locked
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle>Activity History</CardTitle>
              <CardDescription>Your recent study activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {["This Week", "Last Week", "Earlier This Month"].map((period) => (
                  <div key={period}>
                    <h3 className="font-medium mb-4">{period}</h3>
                    <div className="space-y-4">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
                          <div className="bg-primary/20 p-2 rounded-full">
                            {i % 3 === 0 ? (
                              <FileText className="h-5 w-5 text-primary" />
                            ) : i % 3 === 1 ? (
                              <Clock className="h-5 w-5 text-secondary" />
                            ) : (
                              <Trophy className="h-5 w-5 text-accent" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">
                              {i % 3 === 0
                                ? "Uploaded new document"
                                : i % 3 === 1
                                  ? "Completed study session"
                                  : "Earned achievement"}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {i % 3 === 0
                                ? "Physics - Quantum Mechanics Notes.pdf"
                                : i % 3 === 1
                                  ? "Mathematics - 2 hours 15 minutes"
                                  : "Early Bird - Complete 5 morning study sessions"}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {period === "This Week"
                                ? `${3 - i} day${i < 2 ? "s" : ""} ago`
                                : period === "Last Week"
                                  ? `${10 - i} days ago`
                                  : `${20 - i} days ago`}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
