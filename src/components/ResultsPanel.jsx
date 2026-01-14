import TypeTileSmall from "./TypeTileSmall";

function ResultBlock({ title, types }) {
  if (!types || types.length === 0) return null;

  return (
    <div className="resultBlock">
      <h3 className="resultTitle">{title}</h3>

      {/* 👇 WRAPPER para centrar el grid */}
      <div className="resultGridWrap">
        <div className="resultGrid">
          {types.map((t) => (
            <TypeTileSmall key={t} type={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ResultsPanel({ selected, groups }) {
  if (!selected.length) return null;

  const hasWeaknesses =
    (groups.x4?.length ?? 0) > 0 || (groups.x2?.length ?? 0) > 0;
  const hasImmunities = (groups.x0?.length ?? 0) > 0;
  const hasResistances =
    (groups.x1_2?.length ?? 0) > 0 || (groups.x1_4?.length ?? 0) > 0;

  const hasAny = hasWeaknesses || hasImmunities || hasResistances;

  return (
    <div className="results">
      {hasWeaknesses && (
        <div className="resultSection">
          <h2 className="resultSectionTitle">Weaknesses</h2>
          <div className="resultSectionBody">
            <ResultBlock title="x4" types={groups.x4} />
            <ResultBlock title="x2" types={groups.x2} />
          </div>
        </div>
      )}

      {hasImmunities && (
        <div className="resultSection">
          <h2 className="resultSectionTitle">Immunity</h2>
          <div className="resultSectionBody">
            <ResultBlock title="x0" types={groups.x0} />
          </div>
        </div>
      )}

      {hasResistances && (
        <div className="resultSection">
          <h2 className="resultSectionTitle">Resistances</h2>
          <div className="resultSectionBody">
            <ResultBlock title="x1/2" types={groups.x1_2} />
            <ResultBlock title="x1/4" types={groups.x1_4} />
          </div>
        </div>
      )}

      {!hasAny && <p className="emptyText">No results.</p>}
    </div>
  );
}
