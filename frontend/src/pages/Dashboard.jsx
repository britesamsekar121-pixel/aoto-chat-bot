import MainLayout from "../layouts/MainLayout";

export default function Dashboard() {
  return (
    <MainLayout>

      <h1>
        Welcome to Mind Mate AI
      </h1>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>Total Chats</h3>
          <p>120</p>
        </div>

        <div className="dashboard-card">
          <h3>AI Responses</h3>
          <p>845</p>
        </div>

        <div className="dashboard-card">
          <h3>Personality Score</h3>
          <p>89%</p>
        </div>

      </div>

    </MainLayout>
  );
}