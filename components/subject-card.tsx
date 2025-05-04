import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { FileText, ListTodo } from "lucide-react"

interface SubjectCardProps {
  subject: {
    id: number
    name: string
    color: string
    progress: number
    documents: number
    assignments: number
  }
}

export function SubjectCard({ subject }: SubjectCardProps) {
  const getGlowClass = (color: string) => {
    if (color.includes("blue")) return "glow-secondary"
    if (color.includes("purple")) return "glow"
    if (color.includes("green")) return "shadow-green-500/50"
    if (color.includes("amber")) return "shadow-amber-500/50"
    return ""
  }

  return (
    <Link href={`/subjects/${subject.id}`}>
      <Card
        className={`h-full overflow-hidden transition-all hover:scale-105 cyber-border ${getGlowClass(subject.color)}`}
      >
        <div className={`h-2 w-full ${subject.color}`} />
        <CardContent className="p-6">
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-lg">{subject.name}</h3>
            <Progress value={subject.progress} className={`h-2 ${getGlowClass(subject.color)}`} />
            <p className="text-sm text-muted-foreground">{subject.progress}% complete</p>
          </div>
        </CardContent>
        <CardFooter className="border-t p-4 bg-muted/50 backdrop-blur-sm">
          <div className="flex justify-between w-full text-sm">
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-1" />
              <span>{subject.documents} docs</span>
            </div>
            <div className="flex items-center">
              <ListTodo className="h-4 w-4 mr-1" />
              <span>{subject.assignments} tasks</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
