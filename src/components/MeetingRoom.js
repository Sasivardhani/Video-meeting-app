import { useState } from "react"
import { VideoTile } from "./VideoTile"
import { ControlBar } from "./ControlBar"
import { ChatPanel } from "./ChatPanel"
import { ParticipantsPanel } from "./ParticipantsPanel"
import { MoreOptionsMenu } from "./MoreOptionsMenu"
import { Copy, Check } from "lucide-react"
export function MeetingRoom({ meetingCode, onLeaveMeeting }) {
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)
  const [copied, setCopied] = useState(false)
  const [isScreenSharing, setIsScreenSharing] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isParticipantsOpen, setIsParticipantsOpen] = useState(false)
  const [isHandRaised, setIsHandRaised] = useState(false)
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false)
  const [messages, setMessages] = useState([
    { sender: "Sarah Johnson", text: "Hey everyone!", timestamp: "10:30 AM" },
    { sender: "You", text: "Hi Sarah!", timestamp: "10:31 AM" },
  ])

  const [participants, setParticipants] = useState([
    { id: "1", name: "You", isMuted: false, isLocal: true, isHost: true },
    { id: "2", name: "Sarah Johnson", isMuted: false, isLocal: false, isHost: false },
    { id: "3", name: "Mike Chen", isMuted: true, isLocal: false, isHost: false },
    {
      id: "4",
      name: "Emily Davis",
      isMuted: false,
      isHandRaised: true,
      isLocal: false,
      isHost: false
    }
  ])

  

  const handleToggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleToggleVideo = () => {
    setIsVideoOff(!isVideoOff)
  }

  const handleToggleScreenShare = () => {
    setIsScreenSharing(!isScreenSharing)
    // In a real app, this would trigger screen sharing logic
    console.log(isScreenSharing ? "Screen sharing stopped" : "Screen sharing started");
  }

  const handleToggleChat = () => {
    const nextState = !isChatOpen
    setIsChatOpen(nextState)
    if (nextState) {
      setIsParticipantsOpen(false)
    }
  }

  const handleToggleParticipants = () => {
    const nextState = !isParticipantsOpen
    setIsParticipantsOpen(nextState)
    if (nextState) {
      setIsChatOpen(false)
    }
  }

  const handleToggleMoreMenu = () => {
    setIsMoreMenuOpen(prev => !prev);
  };

  const handleToggleHand = () => {
    setIsHandRaised(!isHandRaised)
    console.log(isHandRaised ? "Hand lowered" : "Hand raised");
  }

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(meetingCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleToggleMuteParticipant = (participantId) => {
    // In a real app, you would send a signal to the participant.
    // For this simulation, we'll just update the state directly.
    setParticipants(prevParticipants =>
      prevParticipants.map(p =>
        p.id === participantId ? { ...p, isMuted: !p.isMuted } : p
      )
    );
  };

  const handleMuteAll = () => {
    if (!isHost) return;
    setParticipants(prevParticipants =>
      prevParticipants.map(p =>
        p.isLocal ? p : { ...p, isMuted: true }
      )
    );
  };

  const handleSendMessage = (text) => {
    const newMessage = {
      sender: "You",
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    setMessages([...messages, newMessage])
  }

  const getGridClass = () => {
    const count = participants.length
    if (count === 1) return "grid-cols-1"
    if (count === 2) return "grid-cols-2"
    if (count <= 4) return "grid-cols-2"
    if (count <= 6) return "grid-cols-3"
    return "grid-cols-4"
  }

  const currentParticipants = participants.map(p => {
    if (p.isLocal) {
      return { ...p, isMuted, isHandRaised }
    }
    return p
  })

  const isHost = !!currentParticipants.find(p => p.isLocal && p.isHost);

  return (
  <div className="relative min-h-screen bg-gray-950 flex flex-col">
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
          {currentParticipants.map(participant => (
            <VideoTile
              key={participant.id}
              name={participant.name}
              isMuted={participant.isMuted}
              isVideoOff={participant.isLocal && isVideoOff}
              isHandRaised={participant.isHandRaised}
              isLocal={participant.isLocal}
            />
          ))}
        </div>
      </div>

      <ControlBar
        isMuted={isMuted}
        isVideoOff={isVideoOff}
        isScreenSharing={isScreenSharing}
        isChatOpen={isChatOpen}
        isParticipantsOpen={isParticipantsOpen}
        isHandRaised={isHandRaised}
        isMoreMenuOpen={isMoreMenuOpen}
        onToggleMute={handleToggleMute}
        onToggleVideo={handleToggleVideo}
        onToggleScreenShare={handleToggleScreenShare}
        onLeaveMeeting={onLeaveMeeting}
        participantCount={participants.length}
        onToggleChat={handleToggleChat}
        onToggleParticipants={handleToggleParticipants}
        onToggleHand={handleToggleHand}
        onToggleMoreMenu={handleToggleMoreMenu}
      />
      {isChatOpen && (
        <ChatPanel
          messages={messages}
          onSendMessage={handleSendMessage}
          onClose={() => setIsChatOpen(false)}
        />
      )}
      {isParticipantsOpen && (
        <ParticipantsPanel
          participants={currentParticipants}
          onToggleMute={isHost ? handleToggleMuteParticipant : undefined}
          onClose={() => setIsParticipantsOpen(false)}
        />
      )}
      {isMoreMenuOpen && (
        <MoreOptionsMenu
          isHost={isHost}
          onMuteAll={handleMuteAll}
          onClose={() => setIsMoreMenuOpen(false)}
        />
      )}
    </div>
  )
}
