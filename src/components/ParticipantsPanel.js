import { X, Mic, MicOff } from "lucide-react"

export function ParticipantsPanel({ participants, onClose, onToggleMute }) {
  return (
    <div className="absolute top-0 right-0 h-full w-80 bg-gray-900 border-l border-gray-800 flex flex-col">
      <div className="p-4 border-b border-gray-800 flex justify-between items-center">
        <h2 className="text-white font-medium">
          Participants ({participants.length})
        </h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-4">
          {participants.map(p => (
            <li key={p.id} className="flex items-center justify-between text-white">
              <span className="flex items-center">
                {p.name} {p.isLocal && "(You)"}
              </span>
              {onToggleMute && !p.isLocal ? (
                <button
                  onClick={() => onToggleMute(p.id)}
                  className="p-1 rounded-full hover:bg-gray-700"
                  title={p.isMuted ? "Unmute participant" : "Mute participant"}
                >
                  {p.isMuted ? <MicOff className="w-5 h-5 text-red-500" /> : <Mic className="w-5 h-5 text-gray-400 hover:text-white" />}
                </button>
              ) : (
                p.isMuted ? <MicOff className="w-5 h-5 text-red-500" /> : <Mic className="w-5 h-5 text-gray-400" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}