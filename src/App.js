import { useState } from "react"
import { MeetingRoom } from "./components/MeetingRoom"
import { LoginPage } from "./components/LoginPage"
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
        <LoginPage
          signedInUser={signedInUser}
          onSignIn={handleSignIn}
          onSignOut={handleSignOut}
          onCreateMeeting={handleCreateMeeting}
          onJoinMeeting={handleJoinMeeting}
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
