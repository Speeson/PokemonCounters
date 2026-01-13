import TypeTileSmall from "./TypeTileSmall";

export default function ResultsPanel({ selected, groups }) {
  if (!selected.length) return null;

  const hasAny =
    groups.x4.length ||
    groups.x2.length ||
    groups.x1_2.length ||
    groups.x1_4.length ||
    groups.x0.length;

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

      {groups.x0.length > 0 && (
        <div className="resultBlock">
          <h3 className="resultTitle">x0</h3>
          <div className="resultGrid">
            {groups.x0.map((t) => (
              <TypeTileSmall key={t} type={t} />
            ))}
          </div>
        </div>
      )}

      {groups.x1_2.length > 0 && (
        <div className="resultBlock">
          <h3 className="resultTitle">x1/2</h3>
          <div className="resultGrid">
            {groups.x1_2.map((t) => (
              <TypeTileSmall key={t} type={t} />
            ))}
          </div>
        </div>
      )}

      {groups.x1_4.length > 0 && (
        <div className="resultBlock">
          <h3 className="resultTitle">x1/4</h3>
          <div className="resultGrid">
            {groups.x1_4.map((t) => (
              <TypeTileSmall key={t} type={t} />
            ))}
          </div>
        </div>
      )}

      {!hasAny && <p className="emptyText">Sin resultados.</p>}
    </div>
  );
}
