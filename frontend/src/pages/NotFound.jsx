export default function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#f4f7fb"
      }}
    >
      <h1
        style={{
          fontSize: "90px",
          color: "#2563eb"
        }}
      >
        404
      </h1>

      <h2>Page Not Found</h2>

      <p>This page does not exist.</p>
    </div>
  );
}