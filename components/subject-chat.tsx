"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FileText, Send, User, Bot } from "lucide-react"

interface SubjectChatProps {
  subjectId: string
}

export function SubjectChat({ subjectId }: SubjectChatProps) {
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([
    { role: "system", content: "Welcome to your AI study assistant! Ask me anything about your documents." },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  // Mock documents - in a real app, these would come from a database
  const documents = [
    { id: 1, name: "Calculus Fundamentals.pdf", type: "pdf" },
    { id: 2, name: "Linear Algebra Notes.docx", type: "docx" },
    { id: 3, name: "Differential Equations.pdf", type: "pdf" },
  ]

  const handleSend = async () => {
    if (!input.trim()) return

    // Add user message
    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        role: "assistant",
        content:
          "This is a simulated response. In a real application, this would use OpenAI or another AI provider to generate a response based on your uploaded documents using RAG (Retrieval Augmented Generation).",
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)
    }, 1500)
  }

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="flex flex-col h-[600px] border border-green-500/30 rounded-lg bg-muted/20 backdrop-blur-sm">
      <div className="flex-1 overflow-hidden">
        <div className="flex h-full">
          <div className="w-64 border-r border-green-500/30 p-4 hidden md:block">
            <h2 className="font-semibold mb-4 text-green-400">Available Documents</h2>
            <div className="space-y-2">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="p-3 flex items-center space-x-2 rounded-md cursor-pointer border border-green-500/20 hover:bg-green-500/10 transition-colors"
                >
                  <FileText className="h-4 w-4 text-green-500" />
                  <span className="text-sm truncate">{doc.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground border border-primary/50 glow"
                          : message.role === "system"
                            ? "bg-muted/50 text-muted-foreground border border-muted"
                            : "bg-green-500/20 border border-green-500/50 text-green-50"
                      }`}
                      style={message.role === "assistant" ? { boxShadow: "0 0 10px rgba(34, 197, 94, 0.3)" } : {}}
                    >
                      <div className="flex items-center space-x-2 mb-1">
                        {message.role === "user" ? (
                          <User className="h-4 w-4" />
                        ) : message.role === "assistant" ? (
                          <Bot className="h-4 w-4 text-green-400" />
                        ) : null}
                        <span className="font-medium capitalize">{message.role}</span>
                      </div>
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-lg p-3 bg-green-500/20 border border-green-500/50">
                      <div className="flex items-center space-x-2">
                        <Bot className="h-4 w-4 text-green-400" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse [animation-delay:0.2s]" />
                          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse [animation-delay:0.4s]" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            <div className="p-4 border-t border-green-500/30 bg-muted/30">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
                className="flex space-x-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about your documents..."
                  className="flex-1 bg-muted border-green-500/30 focus-visible:ring-green-500/50"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="bg-green-500 hover:bg-green-600"
                  style={{ boxShadow: "0 0 10px rgba(34, 197, 94, 0.5)" }}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
