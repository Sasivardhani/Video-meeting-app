import { Video, LogIn, LogOut } from "lucide-react"
import { useState } from "react"
import { HomePage } from "./HomePage"
export function LoginPage({
  signedInUser,
  onSignIn,
  onSignOut,
  onCreateMeeting,
  onJoinMeeting
}) {

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


  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom right, #dbeafe, #f1f5f9)", display: "flex", alignItems: "center", justifyContent: "center", padding: "14px 16px" }}>
      <div style={{ maxWidth: "4xl", width: "100%" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "left", justifyContent: "center", marginBottom: "1rem" }}>
            <Video style={{ width: "3rem", height: "3rem", color: "#2563eb" }} />
          </div>
          <h1 style={{ fontSize: "2.25rem", fontWeight: "bold", color: "#1f2937", marginBottom: "0.5rem" }}>
            Video Conferencing
          </h1>
          <p style={{ color: "#6b7280", fontSize: "1.125rem" }}>
            Premium video meetings. Now free for everyone.
          </p>
        </div>

        <div >
          {!isSignedIn ? (
            <div style={{ background: "#fff", borderRadius: "0.5rem", boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)", padding: "1.5rem", width: "450px", margin: "1.5rem auto 0", }}>
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
            </div>
          ) : (
          <div style={{ background: "#fcfbfb", borderRadius: "0.5rem", boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)", padding: "1.5rem" ,}}> 
            <div  style={{ display: "flex", justifyContent: "space-between",boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)", padding: "1.5rem", width: "450px", }}>
              <div>
                <p style={{ margin: 0, fontSize: "0.875rem", color: "#6b7280" }}>Signed in as</p>
                <p style={{ margin: "0.25rem 0 0", fontWeight: "600", color: "#1f2937" }}>{signedInUser}</p>
              </div>
              <button
                onClick={onSignOut}
                style={{ background: "#ef4444", color: "#fff", fontWeight: "500", padding: "0.625rem 1rem", borderRadius: "0.5rem", border: "none", alignItems: "center", gap: "0.5rem", cursor: "pointer", display: "flex" }}
              >
                <LogOut style={{ width: "1rem", height: "1rem" }} />
                Sign Out
              </button>
            </div>
            
            <HomePage
              signedInUser={signedInUser}
              onSignOut={onSignOut}
              onCreateMeeting={onCreateMeeting}
              onJoinMeeting={onJoinMeeting}
            />
          </div>
          )}
        </div>
        

        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <p style={{ color: "#6b7280" }}>
            Learn more about our{" "}
            
          
            <a href="https://www.example.com/features" style={{ color: "#2563eb", textDecoration: "underline" }}>
              Features
            </a>
            ,
          </p>
        </div>
      </div>
    </div>
 
  )
}
