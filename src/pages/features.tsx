import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { ArrowLeft, CheckCircle } from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      title: "Personalized Study Worlds",
      description: "Create custom study spaces for each subject with unique themes and resources.",
      details: [
        "Customize backgrounds, themes, and layouts",
        "Organize materials by subject, topic, or project",
        "Create a personalized learning environment that motivates you",
      ],
    },
    {
      title: "AI Document Chat",
      description: "Upload documents and chat with them using advanced AI to get instant answers.",
      details: [
        "Ask questions about your study materials",
        "Get explanations for complex concepts",
        "Summarize lengthy documents quickly",
        "Generate practice questions from your materials",
      ],
    },
    {
      title: "Assignment Tracking",
      description: "Manage assignments with due dates, priorities, and completion tracking.",
      details: [
        "Set due dates and reminders",
        "Prioritize tasks with visual indicators",
        "Track completion status and progress",
        "Receive notifications for upcoming deadlines",
      ],
    },
    {
      title: "Study Calendar",
      description: "Schedule and optimize your study sessions with an interactive calendar.",
      details: [
        "Plan study sessions around your schedule",
        "Set recurring study blocks",
        "Visualize your study time allocation",
        "Balance workload across subjects",
      ],
    },
    {
      title: "XP & Level System",
      description: "Earn experience points and level up as you complete study tasks and maintain streaks.",
      details: [
        "Gain XP for completing assignments and study sessions",
        "Level up your profile and subjects",
        "Unlock achievements and rewards",
        "Maintain daily streaks for bonus points",
      ],
    },
    {
      title: "Progress Analytics",
      description: "Visualize your learning journey with detailed analytics and insights.",
      details: [
        "Track time spent on each subject",
        "Analyze productivity patterns",
        "Identify strengths and areas for improvement",
        "Set and monitor learning goals",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">StudyQuest</span>
          </Link>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Button variant="ghost" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link to="/register">Sign Up</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container py-10">
        <div className="flex items-center mb-8">
          <Button variant="outline" size="icon" asChild className="mr-4">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-4xl font-bold">Features</h1>
        </div>

        <p className="text-xl text-muted-foreground mb-10 max-w-3xl">
          StudyQuest transforms studying from a chore into an adventure with these powerful features designed to make
          learning engaging, effective, and fun.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="cyber-border overflow-hidden">
              <div
                className={`h-2 w-full ${index % 3 === 0 ? "bg-primary" : index % 3 === 1 ? "bg-secondary" : "bg-accent"}`}
              />
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-2">{feature.title}</h2>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center py-10">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your study experience?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-center max-w-2xl">
            Join StudyQuest today and turn studying into an adventure that keeps you motivated and engaged.
          </p>
          <Button size="lg" asChild className="px-8">
            <Link to="/register">Get Started Now</Link>
          </Button>
        </div>
      </main>

      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm text-muted-foreground">© 2025 StudyQuest. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/terms" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
