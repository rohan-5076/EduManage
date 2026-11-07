import { useState, useRef, useEffect } from "react";

import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import ReactMarkdown from "react-markdown";
import { sendMessage } from "../services/aiService";

function AiChat() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello Admin \n\nI can help you with:\n\n• Students\n• Courses\n• Attendance\n• Subjects\n• Reports",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handleSend = async (text) => {
    const userMessage = {
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const res = await sendMessage(text);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: res.data.reply,
        },
      ]);
    } catch (err) {
      console.log(err);

      if (err.response) {
        console.log("Status:", err.response.status);
        console.log("Data:", err.response.data);
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: err.response?.data?.error || err.message,
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="container-fluid">
      <h4 className="my-4 ">🤖 AI Chat Assistant</h4>
      <div className="card shadow">
        {/* <div className="card-header bg-dark text-white">
        </div> */}

        <div
          className="card-body"
          style={{
            height: "500px",
            overflowY: "auto",
          }}
        >
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg} />
          ))}

          <div ref={bottomRef}></div>
        </div>

        <div className="card-footer">
          <ChatInput onSend={handleSend} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default AiChat;
