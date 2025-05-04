"use client"
import { Link } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Home, Calendar, Trophy, Settings, LogOut, User, ChevronDown, Plus, Zap, Sparkles } from "lucide-react"

export function AppSidebar() {

  // Mock subjects - in a real app, these would come from a database
  const subjects = [
    { id: 1, name: "Mathematics", color: "bg-blue-500" },
    { id: 2, name: "Physics", color: "bg-purple-500" },
    { id: 3, name: "Computer Science", color: "bg-green-500" },
    { id: 4, name: "History", color: "bg-amber-500" },
  ]

  return (
    <Sidebar className="bg-background/95 backdrop-blur-sm border-r border-primary/20">
      <SidebarHeader>
        <div className="flex items-center p-2">
          <div className="font-bold text-xl flex items-center">
            <Sparkles className="h-5 w-5 mr-2 text-primary" style={{ filter: "drop-shadow(0 0 4px var(--primary))" }} />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">StudyQuest</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="hover:bg-primary/10 data-[active=true]:bg-primary/20 data-[active=true]:text-primary"
            >
              <Link to="/dashboard">
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="hover:bg-primary/10 data-[active=true]:bg-primary/20 data-[active=true]:text-primary"
            >
              <Link to="/calendar">
                <Calendar className="h-4 w-4" />
                <span>Study Calendar</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="hover:bg-primary/10 data-[active=true]:bg-primary/20 data-[active=true]:text-primary"
            >
              <Link to="/achievements">
                <Trophy className="h-4 w-4" />
                <span>Achievements</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <SidebarSeparator className="bg-primary/20" />

        <SidebarGroup>
          <SidebarGroupLabel className="flex justify-between items-center text-primary">
            <span className="flex items-center">
              <Zap
                className="h-4 w-4 mr-2 text-secondary"
                style={{ filter: "drop-shadow(0 0 2px var(--secondary))" }}
              />
              My Subjects
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-5 w-5 text-primary hover:text-primary hover:bg-primary/20"
              asChild
            >
              <Link to="/subjects/new">
                <Plus className="h-4 w-4" />
              </Link>
            </Button>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {subjects.map((subject) => (
                <SidebarMenuItem key={subject.id}>
                  <SidebarMenuButton
                    asChild
                    className="hover:bg-primary/10 data-[active=true]:bg-primary/20 data-[active=true]:text-primary"
                  >
                    <Link to={`/subjects/${subject.id}`}>
                      <div
                        className={`h-3 w-3 rounded-full ${subject.color}`}
                        style={{ boxShadow: "0 0 5px currentColor" }}
                      />
                      <span>{subject.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-primary/20">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="hover:bg-primary/10 data-[active=true]:bg-primary/20 data-[active=true]:text-primary"
            >
              <Link to="/settings">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="hover:bg-primary/10">
                  <Avatar className="h-6 w-6 border border-primary/50 glow">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-primary/20 text-primary">US</AvatarFallback>
                  </Avatar>
                  <span>User Profile</span>
                  <ChevronDown className="ml-auto h-4 w-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-sm border-primary/20">
                <DropdownMenuItem asChild>
                  <Link to="/profile">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/logout">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
