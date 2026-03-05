import { Mic, MicOff, User } from "lucide-react"

export function VideoTile({ name, isMuted, isLocal = false }) {
  const colors = [
    "from-blue-400 to-blue-600",
    "from-green-400 to-green-600",
    "from-purple-400 to-purple-600",
    "from-orange-400 to-orange-600",
    "from-pink-400 to-pink-600",
    "from-teal-400 to-teal-600"
  ]

  const colorIndex = name.charCodeAt(0) % colors.length
  const gradientColor = colors[colorIndex]

  return (
    // <div style={{ position: "relative",
    //   background: "#111827", 
    //   borderRadius: "0.5rem", overflow: "hidden", 
    //   aspectRatio: "16/9", 
    //   width:"450px", display: "flex", 
    //   justifyContent: "center", alignItems: "center",
    //   gap:"25px", padding: "14px 16px",flexWrap: "wrap" }}
    //    className="group">
    //   <div style={{ background: `#1f2937,linear-gradient(to bottom right, ${gradientColor})`, 
    //   borderRadius: "0.5rem",absolute: "absolute", 
    //   inset: "0", display: "flex", alignItems: "center", 
    //   justifyContent: "center" }}
    //   > padding: 14px 16px
     <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video w-full max-w-sm flex items-center justify-center gap-6 p-4 group">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientColor} opacity-20`}>
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
          <User className="w-16 h-16 text-white" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-white font-medium text-sm">
              {name} {isLocal && "(You)"}
            </span>
          </div>
          <div
            className={`p-1.5 rounded-full ${
              isMuted ? "bg-red-500" : "bg-gray-700/50"
            }`}
          >
            {isMuted ? (
              <MicOff className="w-4 h-4 text-white" />
            ) : (
              <Mic className="w-4 h-4 text-white" />
            )}
          </div>
        </div>
      </div>

      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg backdrop-blur-sm">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
