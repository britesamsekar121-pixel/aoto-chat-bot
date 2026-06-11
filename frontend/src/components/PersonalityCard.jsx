export default function PersonalityCard({
  title,
  value
}) {
  return (
    <div className="personality-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}