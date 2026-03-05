import { Video, Calendar, LogIn, LogOut } from "lucide-react"
import { useState } from "react"

export function HomePage({
  onJoinMeeting,
  onCreateMeeting,
  signedInUser,
  onSignIn,
  onSignOut
}) {
  const [meetingCode, setMeetingCode] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [signInError, setSignInError] = useState("")

  const isSignedIn = Boolean(signedInUser)

  const handleSignIn = e => {
    e.preventDefault()
    const trimmedEmail = email.trim().toLowerCase()

    if (!trimmedEmail || !password.trim()) {
      setSignInError("Enter both email and password.")
      return
    }

    onSignIn(trimmedEmail)
    setPassword("")
    setSignInError("")
  }

  const handleCreateMeeting = () => {
    if (isSignedIn) {
      onCreateMeeting()
    }
  }

  const handleJoinMeeting = e => {
    e.preventDefault()
    if (isSignedIn && meetingCode.trim()) {
      onJoinMeeting(meetingCode.trim())
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom right, #dbeafe, #f1f5f9)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}>
      <div style={{ maxWidth: "4xl", width: "100%" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
            <Video style={{ width: "3rem", height: "3rem", color: "#2563eb" }} />
          </div>
          <h1 style={{ fontSize: "2.25rem", fontWeight: "bold", color: "#1f2937", marginBottom: "0.5rem" }}>
            Video Conferencing
          </h1>
          <p style={{ color: "#6b7280", fontSize: "1.125rem" }}>
            Premium video meetings. Now free for everyone.
          </p>
        </div>

        <div style={{ background: "#fff", borderRadius: "0.5rem", boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)", padding: "1.5rem", width: "450px", margin: "1.5rem auto 0" }}>
          {!isSignedIn ? (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <LogIn style={{ width: "1.25rem", height: "1.25rem", color: "#2563eb" }} />
                <h2 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#1f2937", margin: 0 }}>
                  Sign In
                </h2>
              </div>
              <p style={{ color: "#6b7280", marginBottom: "1rem" }}>
                Sign in to create or join meetings.
              </p>
              <form onSubmit={handleSignIn}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter email"
                  style={{ width: "100%", padding: "0.75rem", border: "1px solid #d1d5db", borderRadius: "0.5rem", marginBottom: "0.75rem" }}
                />
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter password"
                  style={{ width: "100%", padding: "0.75rem", border: "1px solid #d1d5db", borderRadius: "0.5rem", marginBottom: "0.75rem" }}
                />
                {signInError ? (
                  <p style={{ color: "#dc2626", marginTop: 0, marginBottom: "0.75rem", fontSize: "0.875rem" }}>
                    {signInError}
                  </p>
                ) : null}
                <button
                  type="submit"
                  style={{ width: "100%", background: "#2563eb", color: "#fff", fontWeight: "500", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", border: "none", cursor: "pointer" }}
                >
                  Sign In
                </button>
              </form>
            </>
          ) : (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
              <div>
                <p style={{ margin: 0, fontSize: "0.875rem", color: "#6b7280" }}>Signed in as</p>
                <p style={{ margin: "0.25rem 0 0", fontWeight: "600", color: "#1f2937" }}>{signedInUser}</p>
              </div>
              <button
                onClick={onSignOut}
                style={{ background: "#ef4444", color: "#fff", fontWeight: "500", padding: "0.625rem 1rem", borderRadius: "0.5rem", border: "none", display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}
              >
                <LogOut style={{ width: "1rem", height: "1rem" }} />
                Sign Out
              </button>
            </div>
          )}
        </div>

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

        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <p style={{ color: "#6b7280" }}>
            Learn more about our{" "}
            {/* <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium"
            > */}
          </p>
        </div>
      </div>
    </div>
 
  )
}
