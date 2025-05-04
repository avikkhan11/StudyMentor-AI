import { Routes, Route } from "react-router-dom"
import { AppSidebar } from "./components/app-sidebar"
import HomePage from "./pages/home"
import DashboardPage from "./pages/dashboard"
import SubjectsPage from "./pages/subjects"
import NewSubjectPage from "./pages/subjects/new"
import SubjectDetailPage from "./pages/subjects/detail"
import SubjectChatPage from "./pages/subjects/chat"
import CalendarPage from "./pages/calendar"
import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"
import FeaturesPage from "./pages/features"
import SettingsPage from "./pages/settings"
import ProfilePage from "./pages/profile"
import AchievementsPage from "./pages/achievements"

function App() {
  return (
    <div className="flex h-screen hexagon-bg">
      <AppSidebar />
      <main className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/subjects" element={<SubjectsPage />} />
          <Route path="/subjects/new" element={<NewSubjectPage />} />
          <Route path="/subjects/:id" element={<SubjectDetailPage />} />
          <Route path="/subjects/:id/chat" element={<SubjectChatPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
