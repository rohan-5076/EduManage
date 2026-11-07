import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/github-dark.css";
import "./AiChat.css";

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
        className={`chat-message p-3 rounded shadow-sm ${
          message.sender === "user"
            ? "bg-primary text-white"
            : "bg-light"
        }`}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
          components={{
            // Paragraph
            p: ({ children }) => (
              <p className="chat-paragraph">{children}</p>
            ),

            // Headings
            h1: ({ children }) => (
              <h5 className="chat-heading">{children}</h5>
            ),

            h2: ({ children }) => (
              <h6 className="chat-heading">{children}</h6>
            ),

            h3: ({ children }) => (
              <h6 className="chat-heading">{children}</h6>
            ),

            h4: ({ children }) => (
              <h6 className="chat-heading">{children}</h6>
            ),

            h5: ({ children }) => (
              <h6 className="chat-heading">{children}</h6>
            ),

            h6: ({ children }) => (
              <h6 className="chat-heading">{children}</h6>
            ),

            // Unordered list
            ul: ({ children }) => (
              <ul className="chat-list">{children}</ul>
            ),

            // Ordered list
            ol: ({ children }) => (
              <ol className="chat-list">{children}</ol>
            ),

            // List item
            li: ({ children }) => (
              <li className="chat-list-item">{children}</li>
            ),

            // Bold text
            strong: ({ children }) => (
              <strong>{children}</strong>
            ),

            // Blockquote
            blockquote: ({ children }) => (
              <blockquote className="chat-blockquote">
                {children}
              </blockquote>
            ),

            // Table
            table: ({ children }) => (
              <div className="table-responsive my-2">
                <table className="table table-sm table-bordered mb-0">
                  {children}
                </table>
              </div>
            ),

            thead: ({ children }) => (
              <thead className="table-dark">{children}</thead>
            ),

            // Code
            code: ({ children, className }) => {
              const isBlock = className?.includes("language-");

              if (isBlock) {
                return (
                  <code className={className}>
                    {children}
                  </code>
                );
              }

              return (
                <code className="inline-code">
                  {children}
                </code>
              );
            },
          }}
        >
          {message.text}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default ChatMessage;