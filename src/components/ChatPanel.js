import { useState } from "react";
import { Send, X } from "lucide-react";

export function ChatPanel({ messages, onSendMessage, onClose }) {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(newMessage.trim());
      setNewMessage("");
    }
  };

  return (
    <div className="absolute top-0 right-0 h-full w-80 bg-gray-900 border-l border-gray-800 flex flex-col">
      <div className="p-4 border-b border-gray-800 flex justify-between items-center">
        <h2 className="text-white font-medium">Chat</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="mb-4">
            <p className="font-medium text-sm text-blue-400">{msg.sender}</p>
            <p className="text-gray-300 bg-gray-800 rounded-lg p-2 inline-block">{msg.text}</p>
            <p className="text-xs text-gray-500 mt-1">{msg.timestamp}</p>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-800">
        <form onSubmit={handleSendMessage} className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-gray-800 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}