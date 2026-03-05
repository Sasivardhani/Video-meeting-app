import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  PhoneOff,
  Monitor,
  MoreVertical,
  Users
} from "lucide-react"

export function ControlBar({
  isMuted,
  isVideoOff,
  onToggleMute,
  onToggleVideo,
  onLeaveMeeting,
  participantCount
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-white text-sm bg-gray-700 px-4 py-2 rounded-lg flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>
              {participantCount} participant{participantCount !== 1 ? "s" : ""}
            </span>
          </div>
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
            className="p-4 rounded-full bg-gray-700 hover:bg-gray-600 transition-all"
            title="Share screen"
          >
            <Monitor className="w-6 h-6 text-white" />
          </button>

          <button
            className="p-4 rounded-full bg-gray-700 hover:bg-gray-600 transition-all"
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
