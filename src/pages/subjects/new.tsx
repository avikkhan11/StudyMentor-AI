"use client"

import type React from "react"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group"
import { Slider } from "../../components/ui/slider"
import { Switch } from "../../components/ui/switch"
import { ArrowLeft, Save, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

export default function NewSubjectPage() {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [color, setColor] = useState("purple")
  const [targetLevel, setTargetLevel] = useState(10)
  const [enableAI, setEnableAI] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would save to a database
    console.log({ name, description, color, targetLevel, enableAI })

    // Redirect to subjects page
    navigate("/subjects")
  }

  const colorOptions = [
    { value: "purple", label: "Purple", class: "bg-purple-500" },
    { value: "blue", label: "Blue", class: "bg-blue-500" },
    { value: "green", label: "Green", class: "bg-green-500" },
    { value: "amber", label: "Amber", class: "bg-amber-500" },
    { value: "red", label: "Red", class: "bg-red-500" },
    { value: "emerald", label: "Emerald", class: "bg-emerald-500" },
  ]

  return (
    <div className="flex flex-col p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild className="border-primary/20 hover:bg-primary/10">
          <Link to="/subjects">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Create New Subject</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="cyber-border glow">
            <CardHeader>
              <CardTitle>Subject Details</CardTitle>
              <CardDescription>Enter the basic information for your new subject</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Subject Name</Label>
                <Input
                  id="name"
                  placeholder="e.g., Mathematics"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-muted/30 border-primary/20 focus-visible:ring-primary/50"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what you'll be studying..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-muted/30 border-primary/20 focus-visible:ring-primary/50 min-h-[120px]"
                />
              </div>

              <div className="space-y-2">
                <Label>Subject Color</Label>
                <RadioGroup value={color} onValueChange={setColor} className="grid grid-cols-3 gap-2">
                  {colorOptions.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value} id={`color-${option.value}`} className="peer sr-only" />
                      <Label
                        htmlFor={`color-${option.value}`}
                        className="flex items-center space-x-2 rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                      >
                        <div className={`w-4 h-4 rounded-full ${option.class}`}></div>
                        <span>{option.label}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          <Card className="cyber-border glow-secondary">
            <CardHeader>
              <CardTitle>Learning Goals</CardTitle>
              <CardDescription>Set your targets and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <Label htmlFor="target-level">Target Level</Label>
                  <span className="text-secondary font-bold">{targetLevel}</span>
                </div>
                <Slider
                  id="target-level"
                  min={1}
                  max={20}
                  step={1}
                  value={[targetLevel]}
                  onValueChange={(value) => setTargetLevel(value[0])}
                  className="[&>span]:bg-secondary"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Beginner</span>
                  <span>Intermediate</span>
                  <span>Advanced</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="ai-enabled">AI Study Assistant</Label>
                    <p className="text-sm text-muted-foreground">Enable AI chat for this subject</p>
                  </div>
                  <Switch
                    id="ai-enabled"
                    checked={enableAI}
                    onCheckedChange={setEnableAI}
                    className="data-[state=checked]:bg-secondary"
                  />
                </div>
              </div>

              <Card className="border border-secondary/30 bg-secondary/5">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Sparkles
                      className="h-5 w-5 text-secondary mt-0.5"
                      style={{ filter: "drop-shadow(0 0 4px var(--secondary))" }}
                    />
                    <div>
                      <h4 className="font-medium text-sm">Earn XP by completing tasks</h4>
                      <p className="text-xs text-muted-foreground">
                        You'll earn experience points as you study, complete assignments, and reach milestones in this
                        subject.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-end mt-6">
          <Button type="submit" size="lg" className="bg-primary hover:bg-primary/80 glow">
            <Save className="mr-2 h-4 w-4" /> Create Subject
          </Button>
        </div>
      </form>
    </div>
  )
}
