import MainLayout from "../layouts/MainLayout";

export default function Dashboard() {
  const personality = [
    {
      title: "Confidence",
      value: 82,
      color: "#2563eb",
      icon: "💪"
    },
    {
      title: "Creativity",
      value: 74,
      color: "#8b5cf6",
      icon: "🎨"
    },
    {
      title: "Empathy",
      value: 91,
      color: "#10b981",
      icon: "❤️"
    },
    {
      title: "Analytical",
      value: 78,
      color: "#f59e0b",
      icon: "🧠"
    }
  ];

  return (
    <MainLayout>

      <div className="dashboard">

        <div className="dashboard-header">

          <div>

            <h1>Personality Dashboard</h1>

            <p>
              Welcome back! Here's your AI-powered personality overview.
            </p>

          </div>

          <button className="dashboard-btn">
            Refresh Analysis
          </button>

        </div>

        {/* Personality Cards */}

        <div className="dashboard-cards">

          {personality.map((item) => (

            <div
              className="dashboard-card"
              key={item.title}
            >

              <div className="card-top">

                <span className="emoji">

                  {item.icon}

                </span>

                <h3>{item.title}</h3>

              </div>

              <h2>{item.value}%</h2>

              <div className="progress">

                <div
                  className="progress-fill"
                  style={{
                    width: `${item.value}%`,
                    background: item.color
                  }}
                ></div>

              </div>

            </div>

          ))}

        </div>

        {/* Dashboard Grid */}

        <div className="dashboard-grid">

          <div className="dashboard-box">

            <h2>Today's Mood</h2>

            <div
              style={{
                fontSize: "65px",
                margin: "20px 0"
              }}
            >
              😊
            </div>

            <h3>Happy & Motivated</h3>

            <p style={{ marginTop: "15px" }}>
              Your recent conversations indicate a
              positive mindset with increased
              confidence and motivation.
            </p>

          </div>

          <div className="dashboard-box">

            <h2>Weekly Statistics</h2>

            <ul className="stats-list">

              <li>
                💬 Conversations
                <span>18</span>
              </li>

              <li>
                😊 Mood Analyses
                <span>6</span>
              </li>

              <li>
                🧠 Personality Tests
                <span>9</span>
              </li>

              <li>
                💡 AI Suggestions
                <span>15</span>
              </li>

            </ul>

          </div>

        </div>

        {/* AI Insights */}

        <div className="dashboard-box">

          <h2>AI Insights</h2>

          <p style={{ marginTop: "15px" }}>
            ✔ Confidence increased by 12% this week.
          </p>

          <p style={{ marginTop: "12px" }}>
            ✔ You respond best during evening hours.
          </p>

          <p style={{ marginTop: "12px" }}>
            ✔ Creativity has remained consistently high.
          </p>

          <p style={{ marginTop: "12px" }}>
            ✔ Recommended activity:
            Journaling for 10 minutes today.
          </p>

        </div>

      </div>

    </MainLayout>
  );
}