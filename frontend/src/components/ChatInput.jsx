import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    onSend(message);
    setMessage("");
  };

  return (
    <form
      className="chat-input-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
      />

      <button type="submit">
        Send
      </button>
    </form>
  );
}