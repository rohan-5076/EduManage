import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/github-dark.css";
import "./AiChat.css"

function ChatMessage({ message }) {
  return (
    <div
      className={`d-flex mb-3 ${
        message.sender === "user"
          ? "justify-content-end"
          : "justify-content-start"
      }`}
    >
      <div
        className={`p-3 rounded shadow-sm ${
          message.sender === "user"
            ? "bg-primary text-white"
            : "bg-light"
        }`}
        style={{
          maxWidth: "75%",
          lineHeight: "1.6",
          fontSize: "15px",
          wordBreak: "break-word",
        
        }}
      >
        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <p className="mb-2">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="mb-2 ps-3">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="mb-2 ps-3">{children}</ol>
            ),
            li: ({ children }) => (
              <li className="mb-1">{children}</li>
            ),
            h1: ({ children }) => (
              <h5 className="fw-bold mb-2">{children}</h5>
            ),
            h2: ({ children }) => (
              <h6 className="fw-bold mb-2">{children}</h6>
            ),
            strong: ({ children }) => (
              <strong className="fw-bold">{children}</strong>
            ),
          }}
          remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeHighlight]}
        >
          {message.text}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default ChatMessage;