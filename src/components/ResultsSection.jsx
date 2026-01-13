import TypeChip from "./TypeChip";

export default function ResultsSection({ title, types }) {
  if (!types || types.length === 0) return null;

  return (
    <div className="section">
      <h3>{title}</h3>
      <div className="chips">
        {types.map((t) => (
          <TypeChip key={t} type={t} />
        ))}
      </div>
    </div>
  );
}
