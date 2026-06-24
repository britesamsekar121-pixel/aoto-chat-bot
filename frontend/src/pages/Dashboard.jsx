import PersonalityCard from "../components/PersonalityCard";
import PersonalityChart from "../components/PersonalityChart";
import MoodIndicator from "../components/MoodIndicator";
import ProgressBar from "../components/ProgressBar";

export default function Dashboard() {

  const traits = {
    confidence: 80,
    creativity: 70,
    empathy: 90,
    analytical: 75
  };

  return (
    <div className="dashboard">

      <h1>
        Personality Dashboard
      </h1>

      <div className="card-grid">

        <PersonalityCard
          title="Confidence"
          value={traits.confidence}
        />

        <PersonalityCard
          title="Creativity"
          value={traits.creativity}
        />

        <PersonalityCard
          title="Empathy"
          value={traits.empathy}
        />

        <PersonalityCard
          title="Analytical"
          value={traits.analytical}
        />

      </div>

      <PersonalityChart />

      <MoodIndicator />

      <div className="progress-section">

        <ProgressBar
          label="Confidence"
          value={traits.confidence}
        />

        <ProgressBar
          label="Creativity"
          value={traits.creativity}
        />

        <ProgressBar
          label="Empathy"
          value={traits.empathy}
        />

        <ProgressBar
          label="Analytical"
          value={traits.analytical}
        />

      </div>

    </div>
  );
}