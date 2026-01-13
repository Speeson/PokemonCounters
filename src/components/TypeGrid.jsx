import { TYPE_ICONS } from "../assets/types/typeIcons";

export default function TypeGrid({ types, selected, onToggle }) {
  return (
    <div className="grid">
      {types.map((t) => (
        <button
          key={t}
          className={`typeBtn ${selected.includes(t) ? "active" : ""}`}
          onClick={() => onToggle(t)}
        >
          <img className="typeIcon" src={TYPE_ICONS[t]} alt={t} />
          <span className="typeText">{t}</span>
        </button>
      ))}
    </div>
  );
}
