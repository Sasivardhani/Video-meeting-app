import { useState } from "react"
import { VideoTile } from "./VideoTile"
import { ControlBar } from "./ControlBar"
import { Copy, Check } from "lucide-react"
export function MeetingRoom({ meetingCode, onLeaveMeeting }) {
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)
  const [copied, setCopied] = useState(false)

  const [participants] = useState([
    { id: "1", name: "You", isMuted: false, isLocal: true },
    { id: "2", name: "Sarah Johnson", isMuted: false, isLocal: false },
    { id: "3", name: "Mike Chen", isMuted: true, isLocal: false },
    { id: "4", name: "Emily Davis", isMuted: false, isLocal: false }
  ])

  const handleToggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleToggleVideo = () => {
    setIsVideoOff(!isVideoOff)
  }

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(meetingCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getGridClass = () => {
    const count = participants.length
    if (count === 1) return "grid-cols-1"
    if (count === 2) return "grid-cols-2"
    if (count <= 4) return "grid-cols-2"
    if (count <= 6) return "grid-cols-3"
    return "grid-cols-4"
  }

  return (
  <div className="min-h-screen bg-gray-950 flex flex-col">
      <div className="bg-gray-900 border-b border-gray-800 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-white font-medium">Meeting Room</h1>
          <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1.5 rounded-lg">
            <code className="text-gray-300 text-sm">{meetingCode}</code>
            <button
              onClick={handleCopyCode}
              className="text-gray-400 hover:text-white transition-colors"
              title="Copy meeting code"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
        <div className="text-gray-400 text-sm">
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>

      <div className="flex-1 p-6 pb-24 overflow-auto">
        <div className={`grid ${getGridClass()} gap-4 max-w-7xl mx-auto`}>
          {participants.map(participant => (
            <VideoTile
              key={participant.id}
              name={participant.name}
              isMuted={participant.isLocal ? isMuted : participant.isMuted}
              isLocal={participant.isLocal}
            />
          ))}
        </div>
      </div>

      <ControlBar
        isMuted={isMuted}
        isVideoOff={isVideoOff}
        onToggleMute={handleToggleMute}
        onToggleVideo={handleToggleVideo}
        onLeaveMeeting={onLeaveMeeting}
        participantCount={participants.length}
      />
    </div>
  )
}
