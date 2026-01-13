import { TYPE_ICONS } from "../assets/types/typeIcons";

export default function TypeGrid({ types, selected, onToggle }) {
  return (
    <div className="typeGrid">
      {types.map((t) => {
        const isSelected = selected.includes(t);
        const index = isSelected ? selected.indexOf(t) : -1; // 0 o 1

        return (
          <button
            key={t}
            className={`typeTile ${isSelected ? "active" : ""}`}
            onClick={() => onToggle(t)}
            type="button"
          >
            {isSelected && <span className="pickBadge">{index + 1}</span>}

            <img className="typeTileIcon" src={TYPE_ICONS[t]} alt={t} />
            <span className="typeTileLabel">{t}</span>
          </button>
        );
      })}
    </div>
  );
}
