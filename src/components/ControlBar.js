import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  PhoneOff,
  Monitor,
  MoreVertical,
  Users,
  MessageSquare,
  Hand
} from "lucide-react"

export function ControlBar({
  isMuted,
  isVideoOff,
  onToggleMute,
  onToggleVideo,
  onLeaveMeeting,
  onToggleScreenShare,
  isScreenSharing,
  participantCount,
  onToggleChat,
  onToggleParticipants,
  onToggleHand,
  isChatOpen,
  isParticipantsOpen,
  isHandRaised,
  isMoreMenuOpen,
  onToggleMoreMenu
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={onToggleParticipants}
            className={`text-white text-sm px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${
              isParticipantsOpen ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>
              {participantCount} participant{participantCount !== 1 ? "s" : ""}
            </span>
          </button>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={onToggleMute}
            className={`p-4 rounded-full transition-all ${
              isMuted
                ? "bg-red-500 hover:bg-red-600"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <MicOff className="w-6 h-6 text-white" />
            ) : (
              <Mic className="w-6 h-6 text-white" />
            )}
          </button>

          <button
            onClick={onToggleVideo}
            className={`p-4 rounded-full transition-all ${
              isVideoOff
                ? "bg-red-500 hover:bg-red-600"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            title={isVideoOff ? "Turn on camera" : "Turn off camera"}
          >
            {isVideoOff ? (
              <VideoOff className="w-6 h-6 text-white" />
            ) : (
              <Video className="w-6 h-6 text-white" />
            )}
          </button>

          <button
            onClick={onLeaveMeeting}
            className="p-4 rounded-full bg-red-500 hover:bg-red-600 transition-all"
            title="Leave meeting"
          >
            <PhoneOff className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={onToggleChat}
            className={`p-4 rounded-full transition-all ${isChatOpen ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
            title="Chat"
          >
            <MessageSquare className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={onToggleScreenShare}
            className={`p-4 rounded-full transition-all ${isScreenSharing ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
            title={isScreenSharing ? 'Stop sharing' : 'Share screen'}
          >
            <Monitor className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={onToggleHand}
            className={`p-4 rounded-full transition-all ${isHandRaised ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gray-700 hover:bg-gray-600'}`}
            title="Raise hand"
          >
            <Hand className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={onToggleMoreMenu}
            className={`p-4 rounded-full transition-all ${isMoreMenuOpen ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
            title="More options"
          >
            <MoreVertical className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="w-32"></div>
      </div>
    </div>
  )
}
