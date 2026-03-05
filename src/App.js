import { useState } from "react"
import { HomePage } from "./components/HomePage"
import { MeetingRoom } from "./components/MeetingRoom"

function App() {
  const [currentView, setCurrentView] = useState("home")
  const [meetingCode, setMeetingCode] = useState("")
  const [signedInUser, setSignedInUser] = useState("")

  const generateMeetingCode = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz"
    const segments = []
    for (let i = 0; i < 3; i++) {
      let segment = ""
      for (let j = 0; j < 3; j++) {
        segment += chars[Math.floor(Math.random() * chars.length)]
      }
      segments.push(segment)
    }
    return segments.join("-")
  }

  const handleCreateMeeting = () => {
    const code = generateMeetingCode()
    setMeetingCode(code)
    setCurrentView("meeting")
  }

  const handleJoinMeeting = code => {
    setMeetingCode(code)
    setCurrentView("meeting")
  }

  const handleLeaveMeeting = () => {
    setCurrentView("home")
    setMeetingCode("")
  }

  const handleSignIn = email => {
    setSignedInUser(email)
  }

  const handleSignOut = () => {
    setSignedInUser("")
  }

  return (
    <>
      {currentView === "home" ? (
        <HomePage
          onCreateMeeting={handleCreateMeeting}
          onJoinMeeting={handleJoinMeeting}
          signedInUser={signedInUser}
          onSignIn={handleSignIn}
          onSignOut={handleSignOut}
        />
      ) : (
        <MeetingRoom
          meetingCode={meetingCode}
          onLeaveMeeting={handleLeaveMeeting}
        />
      )}
    </>
  )
}

export default App
