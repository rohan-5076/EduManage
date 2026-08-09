import { useState } from "react";

function ChatInput({ onSend, loading }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);
    setMessage("");
  };

  return (
    <div className="input-group">s

      <input
        type="text"
        className="form-control"
        placeholder="Ask AI Assistant..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSend();
        }}
      />

      <button
        className="btn btn-primary"
        onClick={handleSend}
        disabled={loading}
      >
        {loading ? "Sending..." : "Send"}
      </button>

    </div>
  );
}

export default ChatInput;