import { TYPE_ICONS } from "../assets/types/typeIcons";

export default function TypeChip({ type }) {
  return (
    <span className="chip">
      <img src={TYPE_ICONS[type]} alt={type} className="chipIcon" />
      <span className="chipText">{type}</span>
    </span>
  );
}
