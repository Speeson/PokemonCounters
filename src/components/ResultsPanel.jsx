import TypeTileSmall from "./TypeTileSmall";

export default function ResultsPanel({ selected, groups }) {
  if (!selected.length) {
    return null;
  }

  const hasWeakness = groups.x4.length || groups.x2.length;

  return (
    <div className="results">
      {groups.x4.length > 0 && (
        <div className="resultBlock">
          <h3 className="resultTitle">x4</h3>
          <div className="resultGrid">
            {groups.x4.map((t) => (
              <TypeTileSmall key={t} type={t} />
            ))}
          </div>
        </div>
      )}

      {groups.x2.length > 0 && (
        <div className="resultBlock">
          <h3 className="resultTitle">x2</h3>
          <div className="resultGrid">
            {groups.x2.map((t) => (
              <TypeTileSmall key={t} type={t} />
            ))}
          </div>
        </div>
      )}

      {!hasWeakness && (
        <p className="emptyText">No hay debilidades x2/x4 con esta combinación.</p>
      )}
    </div>
  );
}
