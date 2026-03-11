import { MicOff } from "lucide-react";

export function MoreOptionsMenu({ isHost, onMuteAll, onClose }) {
  // In a real app, you'd add more options here.
  const hasOptions = isHost;

  if (!hasOptions) {
    return null;
  }

  return (
    <div
      className="absolute bottom-24 right-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700 w-60"
      onMouseLeave={onClose}
    >
      <ul className="text-white">
        {isHost && (
          <li onClick={onMuteAll} className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer">
            <MicOff className="w-5 h-5 mr-3" />
            <span>Mute All Participants</span>
          </li>
        )}
      </ul>
    </div>
  );
}