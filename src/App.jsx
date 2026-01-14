import { useMemo, useState } from "react";
import "./App.css";
import { ALL_TYPES, computeDefensiveMultipliers, groupMultipliers } from "./lib/typeEffectiveness";
import TypeGrid from "./components/TypeGrid";
import ResultsPanel from "./components/ResultsPanel";
import titleImage from "./assets/logo/pokemon-counters.png";


export default function App() {
  const [selected, setSelected] = useState([]); // max 2

  function toggleType(t) {
    setSelected((prev) => {
      if (prev.includes(t)) return prev.filter((x) => x !== t);
      if (prev.length >= 2) return [prev[1], t];
      return [...prev, t];
    });
  }

  const multMap = useMemo(() => computeDefensiveMultipliers(selected), [selected]);
  const groups = useMemo(() => groupMultipliers(multMap), [multMap]);

  return (
    <div className="page">
      <header className="header">
        <img
          src={titleImage}
          alt="Pokémon Counters"
          className="titleImage"/>
      </header>


      <main className="layout">
        <section className="panel">
          <h2 className="panelTitle">Choose your type(s)</h2>

          <TypeGrid types={ALL_TYPES} selected={selected} onToggle={toggleType} />
        </section>

        <section className="panel">
          <ResultsPanel selected={selected} groups={groups} />
        </section>
      </main>
    </div>
  );
}
