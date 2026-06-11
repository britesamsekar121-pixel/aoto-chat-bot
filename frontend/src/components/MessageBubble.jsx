export default function MessageBubble({
  message
}) {
  return (
    <div
      className={
        message.sender === "user"
          ? "message user-message"
          : "message ai-message"
      }
    >
      {message.text}
    </div>
  );
}