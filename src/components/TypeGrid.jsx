import { TYPE_ICONS } from "../assets/types/typeIcons";

const TYPE_NEON = {
  normal: "200,200,200",
  fire: "255, 80, 80",
  water: "0, 160, 255",
  electric: "255, 220, 0",
  grass: "0, 220, 120",
  ice: "130, 230, 255",
  fighting: "255, 120, 70",
  poison: "190, 70, 255",
  ground: "210, 170, 90",
  flying: "120, 190, 255",
  psychic: "255, 80, 180",
  bug: "170, 255, 80",
  rock: "210, 200, 140",
  ghost: "150, 110, 255",
  dragon: "90, 120, 255",
  dark: "120, 120, 140",
  steel: "160, 200, 220",
  fairy: "255, 150, 220",
};

export default function TypeGrid({ types, selected, onToggle }) {
  return (
    <div className="typeGrid">
      {types.map((t) => {
        const isSelected = selected.includes(t);
        const index = isSelected ? selected.indexOf(t) : -1;

        return (
          <button
            key={t}
            className={`typeTile ${isSelected ? "active" : ""}`}
            onClick={() => onToggle(t)}
            type="button"
            style={{
              // color neón por tipo (fallback aqua)
              "--neon": TYPE_NEON[t] ?? "0, 255, 200",
            }}
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
