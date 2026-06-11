export default function PersonalityChart() {

  const data = [
    { trait: "Friendly", score: 85 },
    { trait: "Confident", score: 70 },
    { trait: "Analytical", score: 90 },
    { trait: "Creative", score: 75 }
  ];

  return (
    <div>
      <h2>Personality Traits</h2>

      {data.map((item, index) => (
        <div key={index}>
          <p>
            {item.trait} - {item.score}%
          </p>

          <progress
            value={item.score}
            max="100"
          />
        </div>
      ))}
    </div>
  );
}