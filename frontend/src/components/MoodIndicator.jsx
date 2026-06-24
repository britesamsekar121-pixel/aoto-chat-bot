export default function MoodIndicator() {

  const mood = "Positive";

  return (
    <div className="mood-card">

      <h3>Current Mood</h3>

      <h1>😊</h1>

      <p>{mood}</p>

    </div>
  );
}