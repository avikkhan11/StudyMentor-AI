import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { DocumentList } from "@/components/document-list"
import { AssignmentList } from "@/components/assignment-list"
import { StudySessionList } from "@/components/study-session-list"
import { SubjectChat } from "@/components/subject-chat"
import { Plus, FileText, ListTodo, Clock, MessageSquare, Trophy } from "lucide-react"
import { useParams } from 'react-router-dom';

export default function SubjectDetail() {
  const { id } = useParams();

  // Mock data - in a real app, this would come from a database
  const subject = {
    id: id,
    name: "Mathematics",
    description: "Advanced calculus and linear algebra",
    color: "bg-blue-500",
    progress: 65,
    totalDocuments: 8,
    completedDocuments: 5,
    totalAssignments: 6,
    completedAssignments: 4,
    totalStudyTime: "12h 30m",
    level: 4,
    xp: 2450,
  }

  return (
    <div className="flex flex-col p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div
            className={`w-16 h-16 rounded-lg ${subject.color} flex items-center justify-center text-white text-2xl font-bold border border-blue-400 glow-secondary`}
          >
            {subject.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center">
              <h1 className="text-3xl font-bold">{subject.name}</h1>
              <div className="ml-3 px-2 py-1 bg-secondary/20 text-secondary rounded text-xs font-semibold border border-secondary/50">
                LVL {subject.level}
              </div>
            </div>
            <p className="text-muted-foreground">{subject.description}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="border-primary/50 hover:bg-primary/20">
            <Trophy className="mr-2 h-4 w-4 text-primary" />
            <span>{subject.xp} XP</span>
          </Button>
          <Button className="bg-primary hover:bg-primary/80 glow">
            <Plus className="mr-2 h-4 w-4" /> Add Document
          </Button>
        </div>
      </div>

      <Card className="cyber-border glow-secondary">
        <CardHeader className="pb-2">
          <CardTitle>Subject Progress</CardTitle>
          <CardDescription>Track your learning journey</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Progress value={subject.progress} className="h-2 glow-secondary" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center p-4 bg-muted/30 backdrop-blur-sm rounded-lg border border-secondary/30">
              <FileText
                className="h-8 w-8 mb-2 text-secondary"
                style={{ filter: "drop-shadow(0 0 4px var(--secondary))" }}
              />
              <div className="text-2xl font-bold">
                {subject.completedDocuments}/{subject.totalDocuments}
              </div>
              <div className="text-sm text-muted-foreground">Documents Studied</div>
            </div>
            <div className="flex flex-col items-center p-4 bg-muted/30 backdrop-blur-sm rounded-lg border border-primary/30">
              <ListTodo
                className="h-8 w-8 mb-2 text-primary"
                style={{ filter: "drop-shadow(0 0 4px var(--primary))" }}
              />
              <div className="text-2xl font-bold">
                {subject.completedAssignments}/{subject.totalAssignments}
              </div>
              <div className="text-sm text-muted-foreground">Assignments Completed</div>
            </div>
            <div className="flex flex-col items-center p-4 bg-muted/30 backdrop-blur-sm rounded-lg border border-accent/30">
              <Clock className="h-8 w-8 mb-2 text-accent" style={{ filter: "drop-shadow(0 0 4px var(--accent))" }} />
              <div className="text-2xl font-bold">{subject.totalStudyTime}</div>
              <div className="text-sm text-muted-foreground">Total Study Time</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="documents" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-4 mb-4 p-1 bg-muted/30 backdrop-blur-sm border border-muted">
          <TabsTrigger
            value="documents"
            className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
          >
            <FileText className="mr-2 h-4 w-4" /> Documents
          </TabsTrigger>
          <TabsTrigger
            value="assignments"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <ListTodo className="mr-2 h-4 w-4" /> Assignments
          </TabsTrigger>
          <TabsTrigger
            value="sessions"
            className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
          >
            <Clock className="mr-2 h-4 w-4" /> Study Sessions
          </TabsTrigger>
          <TabsTrigger value="chat" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
            <MessageSquare className="mr-2 h-4 w-4" /> AI Chat
          </TabsTrigger>
        </TabsList>

        <TabsContent value="documents">
          <Card className="cyber-border glow-secondary">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Study Materials</CardTitle>
                <CardDescription>Your uploaded documents</CardDescription>
              </div>
              <Button size="sm" className="bg-secondary hover:bg-secondary/80">
                <Plus className="mr-2 h-4 w-4" /> Upload
              </Button>
            </CardHeader>
            <CardContent>
              <DocumentList subjectId={subject.id} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assignments">
          <Card className="cyber-border glow">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Assignments</CardTitle>
                <CardDescription>Track your homework and projects</CardDescription>
              </div>
              <Button size="sm" className="bg-primary hover:bg-primary/80">
                <Plus className="mr-2 h-4 w-4" /> New Assignment
              </Button>
            </CardHeader>
            <CardContent>
              <AssignmentList subjectId={subject.id} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sessions">
          <Card className="cyber-border glow-accent">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Study Sessions</CardTitle>
                <CardDescription>Schedule and track your study time</CardDescription>
              </div>
              <Button size="sm" className="bg-accent hover:bg-accent/80">
                <Plus className="mr-2 h-4 w-4" /> Schedule Session
              </Button>
            </CardHeader>
            <CardContent>
              <StudySessionList subjectId={subject.id} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chat">
          <Card className="cyber-border" style={{ boxShadow: "0 0 10px #22c55e, 0 0 20px rgba(34, 197, 94, 0.3)" }}>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>AI Study Assistant</CardTitle>
                <CardDescription>Chat with your documents using AI</CardDescription>
              </div>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-green-500/50 text-green-500 hover:bg-green-500/20"
                >
                  <FileText className="mr-2 h-4 w-4" /> Select Documents
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <SubjectChat subjectId={subject.id} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
