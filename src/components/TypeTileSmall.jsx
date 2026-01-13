import { TYPE_ICONS } from "../assets/types/typeIcons";

export default function TypeTileSmall({ type }) {
  return (
    <div className="weakTile" title={type}>
      <img className="weakTileIcon" src={TYPE_ICONS[type]} alt={type} />
      <span className="weakTileLabel">{type}</span>
    </div>
  );
}
