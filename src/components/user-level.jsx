import { Progress } from "@/components/ui/progress"

export function UserLevel({ level, xp, nextLevelXp }) {
  const progress = Math.round((xp / nextLevelXp) * 100)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-white">{level}</span>
          </div>
          <svg className="h-28 w-28" viewBox="0 0 100 100">
            <circle className="text-muted stroke-current" strokeWidth="6" cx="50" cy="50" r="40" fill="transparent" />
            <circle
              className="text-primary stroke-current"
              strokeWidth="6"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              strokeDasharray={`${2 * Math.PI * 40}`}
              strokeDashoffset={`${2 * Math.PI * 40 * (1 - progress / 100)}`}
              transform="rotate(-90 50 50)"
              style={{ filter: "drop-shadow(0 0 6px var(--primary))" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-muted/30 backdrop-blur-sm flex items-center justify-center">
              <div className="text-3xl font-bold text-white">{level}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>XP: {xp}</span>
          <span>Next: {nextLevelXp}</span>
        </div>
        <Progress value={progress} className="h-2 glow" />
        <p className="text-xs text-center text-muted-foreground">
          {nextLevelXp - xp} XP until level {level + 1}
        </p>
      </div>
    </div>
  )
}
