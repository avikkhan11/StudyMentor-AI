import { Flame } from "lucide-react"


export function DailyStreak({ days }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="relative flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/30 glow-accent">
        <Flame
          className="h-14 w-14 text-accent animate-pulse"
          style={{ filter: "drop-shadow(0 0 8px var(--accent))" }}
        />
        <div className="absolute top-0 right-0 bg-accent text-accent-foreground rounded-full h-10 w-10 flex items-center justify-center text-sm font-bold border-2 border-background">
          {days}
        </div>
      </div>
      <div className="text-center">
        <p className="font-semibold text-lg">
          {days} Day{days !== 1 ? "s" : ""} Streak!
        </p>
        <p className="text-xs text-muted-foreground">Keep studying daily to maintain your streak</p>
      </div>
    </div>
  )
}
