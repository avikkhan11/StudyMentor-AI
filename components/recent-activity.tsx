import { CheckCircle, Clock, FileText } from "lucide-react"

export function RecentActivity() {
  // Mock data - in a real app, this would come from a database
  const activities = [
    {
      id: 1,
      type: "completed",
      subject: "Mathematics",
      item: "Calculus Assignment",
      time: "2 hours ago",
      icon: CheckCircle,
      color: "text-green-500",
    },
    {
      id: 2,
      type: "studied",
      subject: "Physics",
      item: "Quantum Mechanics",
      time: "Yesterday",
      icon: Clock,
      color: "text-blue-500",
    },
    {
      id: 3,
      type: "uploaded",
      subject: "Computer Science",
      item: "Algorithm Notes",
      time: "2 days ago",
      icon: FileText,
      color: "text-purple-500",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start space-x-3">
          <activity.icon className={`h-5 w-5 mt-0.5 ${activity.color}`} />
          <div>
            <p className="text-sm font-medium">
              {activity.type === "completed" && "Completed "}
              {activity.type === "studied" && "Studied "}
              {activity.type === "uploaded" && "Uploaded "}
              <span className="font-semibold">{activity.item}</span>
            </p>
            <p className="text-xs text-muted-foreground">
              {activity.subject} • {activity.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
