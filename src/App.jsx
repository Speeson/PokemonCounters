import { useMemo, useState } from "react";
import "./App.css";
import { ALL_TYPES, computeDefensiveMultipliers, groupMultipliers } from "./lib/typeEffectiveness";
import TypeGrid from "./components/TypeGrid";
import ResultsSection from "./components/ResultsSection";
import SelectedSlots from "./components/SelectedSlots";

export default function App() {
  const [selected, setSelected] = useState([]);
  const [showAll, setShowAll] = useState(false);

  function toggleType(t) {
    setSelected((prev) => {
      if (prev.includes(t)) return prev.filter((x) => x !== t);
      if (prev.length >= 2) return [prev[1], t];
      return [...prev, t];
    });
  }

  function removeType(t) {
    setSelected((prev) => prev.filter((x) => x !== t));
  }

  const multMap = useMemo(() => computeDefensiveMultipliers(selected), [selected]);
  const groups = useMemo(() => groupMultipliers(multMap), [multMap]);

  return (
    <div className="app">
      <h1>Pokémon Counters</h1>
      <p>Selecciona hasta 2 tipos y verás debilidades (x4/x2) en tiempo real.</p>

      <SelectedSlots
        selected={selected}
        onClear={() => setSelected([])}
        onRemove={removeType}
      />

      <label className="toggle">
        <input
          type="checkbox"
          checked={showAll}
          onChange={(e) => setShowAll(e.target.checked)}
        />
        <span>Mostrar resistencias e inmunidades</span>
      </label>

      <TypeGrid types={ALL_TYPES} selected={selected} onToggle={toggleType} />

      <h2>Resultados</h2>

      {selected.length === 0 ? (
        <p>Elige 1 o 2 tipos para ver resultados.</p>
      ) : (
        <>
          <ResultsSection title="x4 (muy débil)" types={groups.x4} />
          <ResultsSection title="x2 (débil)" types={groups.x2} />

          {!showAll && groups.x4.length === 0 && groups.x2.length === 0 && (
            <p>No hay debilidades x2/x4 con esta combinación.</p>
          )}

          {showAll && (
            <>
              <ResultsSection title="x0 (inmune)" types={groups.x0} />
              <ResultsSection title="x1/2 (resiste)" types={groups.x1_2} />
              <ResultsSection title="x1/4 (resiste mucho)" types={groups.x1_4} />
            </>
          )}
        </>
      )}
    </div>
  );
}
