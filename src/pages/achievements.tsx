import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Progress } from "../components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Badge } from "../components/ui/badge"
import { Filter, Medal, Share, Trophy } from "lucide-react"

export default function AchievementsPage() {
  // Mock data - in a real app, this would come from a database
  const achievementCategories = [
    { id: "all", name: "All Achievements" },
    { id: "study", name: "Study Habits" },
    { id: "subjects", name: "Subject Mastery" },
    { id: "social", name: "Social Learning" },
    { id: "streaks", name: "Consistency" },
  ]

  const achievements = [
    {
      id: 1,
      name: "Early Bird",
      description: "Complete 5 study sessions before 9 AM",
      icon: "🌅",
      category: "study",
      earned: true,
      earnedDate: "2 days ago",
      progress: 100,
      xp: 50,
    },
    {
      id: 2,
      name: "Night Owl",
      description: "Complete 5 study sessions after 10 PM",
      icon: "🦉",
      category: "study",
      earned: true,
      earnedDate: "1 week ago",
      progress: 100,
      xp: 50,
    },
    {
      id: 3,
      name: "Bookworm",
      description: "Upload 20 documents",
      icon: "📚",
      category: "study",
      earned: true,
      earnedDate: "3 weeks ago",
      progress: 100,
      xp: 100,
    },
    {
      id: 4,
      name: "Math Wizard",
      description: "Complete all Mathematics assignments",
      icon: "🧙",
      category: "subjects",
      earned: false,
      progress: 75,
      xp: 200,
    },
    {
      id: 5,
      name: "Science Guru",
      description: "Reach level 10 in Science",
      icon: "🔬",
      category: "subjects",
      earned: true,
      earnedDate: "1 month ago",
      progress: 100,
      xp: 150,
    },
    {
      id: 6,
      name: "History Buff",
      description: "Study History for 50 hours",
      icon: "🏛️",
      category: "subjects",
      earned: false,
      progress: 60,
      xp: 150,
    },
    {
      id: 7,
      name: "Perfect Streak",
      description: "Maintain a 30-day study streak",
      icon: "🔥",
      category: "streaks",
      earned: false,
      progress: 80,
      xp: 300,
    },
    {
      id: 8,
      name: "Quiz Master",
      description: "Score 100% on 10 quizzes",
      icon: "🎯",
      category: "study",
      earned: true,
      earnedDate: "2 weeks ago",
      progress: 100,
      xp: 200,
    },
    {
      id: 9,
      name: "Team Player",
      description: "Join 5 study groups",
      icon: "👥",
      category: "social",
      earned: true,
      earnedDate: "1 month ago",
      progress: 100,
      xp: 100,
    },
    {
      id: 10,
      name: "Helping Hand",
      description: "Answer 20 questions from other students",
      icon: "🤝",
      category: "social",
      earned: false,
      progress: 45,
      xp: 150,
    },
    {
      id: 11,
      name: "Weekend Warrior",
      description: "Study for 8 hours on weekends",
      icon: "⚔️",
      category: "streaks",
      earned: true,
      earnedDate: "3 days ago",
      progress: 100,
      xp: 100,
    },
    {
      id: 12,
      name: "Document Master",
      description: "Upload 50 documents",
      icon: "📄",
      category: "study",
      earned: false,
      progress: 56,
      xp: 250,
    },
  ]

  // Calculate stats
  const totalAchievements = achievements.length
  const earnedAchievements = achievements.filter((a) => a.earned).length
  const totalXP = achievements.reduce((sum, a) => (a.earned ? sum + a.xp : sum), 0)
  const overallProgress = Math.round((earnedAchievements / totalAchievements) * 100)

  return (
    <div className="flex flex-col p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Achievements</h1>
          <p className="text-muted-foreground">Track your learning milestones and rewards</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
          <Button variant="outline">
            <Share className="mr-2 h-4 w-4" /> Share Achievements
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="cyber-border glow">
          <CardContent className="p-6 flex flex-col items-center justify-center">
            <div className="rounded-full bg-primary/20 p-4 mb-4">
              <Trophy className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">
              {earnedAchievements}/{totalAchievements}
            </h2>
            <p className="text-sm text-muted-foreground">Achievements Earned</p>
          </CardContent>
        </Card>
        <Card className="cyber-border glow-secondary">
          <CardContent className="p-6 flex flex-col items-center justify-center">
            <div className="rounded-full bg-secondary/20 p-4 mb-4">
              <Medal className="h-8 w-8 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold">{totalXP}</h2>
            <p className="text-sm text-muted-foreground">Total XP Earned</p>
          </CardContent>
        </Card>
        <Card className="md:col-span-2 cyber-border">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-2">Overall Progress</h2>
            <Progress value={overallProgress} className="h-2 mb-2" />
            <p className="text-sm text-muted-foreground">{overallProgress}% of achievements unlocked</p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center p-3 bg-muted/30 rounded-lg">
                <span className="text-2xl font-bold">
                  {achievements.filter((a) => a.progress > 0 && a.progress < 100).length}
                </span>
                <span className="text-xs text-muted-foreground">In Progress</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-muted/30 rounded-lg">
                <span className="text-2xl font-bold">{achievements.filter((a) => a.progress === 0).length}</span>
                <span className="text-xs text-muted-foreground">Not Started</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-5 mb-4">
          {achievementCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {achievementCategories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements
                .filter((a) => category.id === "all" || a.category === category.id)
                .map((achievement) => (
                  <Card
                    key={achievement.id}
                    className={`overflow-hidden ${achievement.earned ? "cyber-border glow" : "border border-muted"}`}
                  >
                    <div className={`h-2 w-full ${achievement.earned ? "bg-primary" : "bg-muted"}`} />
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`text-4xl ${achievement.earned ? "" : "grayscale opacity-50"}`}
                          aria-hidden="true"
                        >
                          {achievement.icon}
                        </div>
                        {achievement.earned ? (
                          <Badge className="bg-primary/20 text-primary border-primary/50">+{achievement.xp} XP</Badge>
                        ) : (
                          <Badge variant="outline">+{achievement.xp} XP</Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-1">{achievement.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{achievement.description}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span>Progress</span>
                          <span>{achievement.progress}%</span>
                        </div>
                        <Progress value={achievement.progress} className="h-1.5" />
                        {achievement.earned ? (
                          <p className="text-xs text-muted-foreground">Earned {achievement.earnedDate}</p>
                        ) : (
                          <p className="text-xs text-muted-foreground">
                            {achievement.progress > 0 ? "In progress" : "Not started"}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
