"use client"

import { useState } from "react"
import { useParams } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { ScrollArea } from "../../components/ui/scroll-area"
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { FileText, Send, User, Bot } from "lucide-react"

export default function SubjectChatPage() {
  const { id } = useParams<{ id: string }>()
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([
    { role: "system", content: "Welcome to your AI study assistant! Ask me anything about your documents." },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

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

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-bold">Mathematics - AI Chat</h1>
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Documents</TabsTrigger>
            <TabsTrigger value="selected">Selected Only</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-64 border-r p-4 hidden md:block">
          <h2 className="font-semibold mb-4">Available Documents</h2>
          <div className="space-y-2">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="p-3 cursor-pointer hover:bg-accent rounded-md border border-muted flex items-center space-x-2"
              >
                <FileText className="h-4 w-4 text-blue-500" />
                <span className="text-sm truncate">{doc.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : message.role === "system"
                          ? "bg-muted text-muted-foreground"
                          : "bg-accent"
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      {message.role === "user" ? (
                        <User className="h-4 w-4" />
                      ) : message.role === "assistant" ? (
                        <Bot className="h-4 w-4" />
                      ) : null}
                      <span className="font-medium capitalize">{message.role}</span>
                    </div>
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg p-3 bg-accent">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-4 w-4" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-current animate-bounce" />
                        <div className="w-2 h-2 rounded-full bg-current animate-bounce [animation-delay:0.2s]" />
                        <div className="w-2 h-2 rounded-full bg-current animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="p-4 border-t">
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
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
