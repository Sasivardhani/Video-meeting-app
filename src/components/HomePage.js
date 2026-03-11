import { Video, Calendar } from "lucide-react"
import { useState } from "react"

export function HomePage({
  onJoinMeeting,
  onCreateMeeting,
  signedInUser,
}) {
  const [meetingCode, setMeetingCode] = useState("")
  const isSignedIn = Boolean(signedInUser)

  const handleJoinMeeting = e => {
    e.preventDefault()
    if (isSignedIn && meetingCode.trim()) {
      onJoinMeeting(meetingCode.trim())
    }
  }

  const handleCreateMeeting = () => {
    if (isSignedIn) {
      onCreateMeeting()
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom right, #dbeafe, #f1f5f9)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}>
      <div style={{ maxWidth: "4xl", width: "100%" }}>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(1, minmax(0, 1fr))", gap: "1.5rem", width: "450px", margin: "0 auto", marginTop: "50px" }}>
          <div style={{ background: "#fff", borderRadius: "0.5rem", boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)", padding: "2rem", transition: "box-shadow 0.3s" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "3rem", height: "3rem", background: "#dbeafe", borderRadius: "50%", marginBottom: "1rem" }}>
              <Video style={{ width: "1.75rem", height: "1.75rem", color: "#2563eb" }} />
            </div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#1f2937", marginBottom: "0.75rem" }}>
              Instant meetings
            </h2>
            <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>Start an instant meeting</p>
            <button
              onClick={handleCreateMeeting}
              disabled={!isSignedIn}
              style={{ width: "100%", background: isSignedIn ? "#2563eb" : "#9ca3af", color: "#fff", fontWeight: "500", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", border: "none", cursor: isSignedIn ? "pointer" : "not-allowed" }}
            >
              Create Meeting
            </button>
          </div>
          <div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#1f2937", marginBottom: "0.75rem" }}>
              New Meeting
            </h2>
        
          </div>

          <div style={{ background: "#fff", borderRadius: "0.5rem", boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)", padding: "2rem", transition: "box-shadow 0.3s" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "3rem", height: "3rem", background: "#dbeafe", borderRadius: "50%", marginBottom: "1rem" }}>
              <Calendar style={{ width: "1.75rem", height: "1.75rem", color: "#2563eb" }} />
            </div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#1f2937", marginBottom: "0.75rem" }}>
              Join Meeting
            </h2>
            <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>Via invitation link or code</p>
            <form onSubmit={handleJoinMeeting}>
              <input
                type="text"
                value={meetingCode}
                onChange={e => setMeetingCode(e.target.value)}
                placeholder="Enter meeting code"
                style={{ width: "100%", padding: "0.75rem", border: "1px solid #d1d5db", borderRadius: "0.5rem", marginBottom: "1.5rem", focus: { outline: "none", ring: "2px solid #10b981", border: "transparent" } }}
              />
              <button
                type="submit"
                disabled={!isSignedIn}
                style={{ width: "100%", background: isSignedIn ? "#10b981" : "#9ca3af", color: "#fff", fontWeight: "500", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", border: "none", cursor: isSignedIn ? "pointer" : "not-allowed" }}
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div> 
    </div>
 
  )
}
