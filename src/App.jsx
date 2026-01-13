import { useMemo, useState } from "react";
import "./App.css";
import { ALL_TYPES, computeDefensiveMultipliers, groupWeaknesses } from "./lib/typeEffectiveness";
import { TYPE_ICONS } from "./assets/types/typeIcons";

export default function App() {
  const [selected, setSelected] = useState([]); // max 2

  function toggleType(t) {
    setSelected(prev => {
      if (prev.includes(t)) return prev.filter(x => x !== t);
      if (prev.length >= 2) return [prev[1], t]; // entra nuevo, sale el más antiguo
      return [...prev, t];
    });
  }

  const multMap = useMemo(() => computeDefensiveMultipliers(selected), [selected]);
  const { x4, x2 } = useMemo(() => groupWeaknesses(multMap), [multMap]);

  return (
    <div className="app">
      <h1>Pokémon Counters</h1>
      <p>Selecciona hasta 2 tipos (por ahora prueba <b>fire</b> y <b>flying</b>).</p>

      <div className="row">
        <span className="label">Seleccionados:</span>
        <span>{selected.length ? selected.join(" + ") : "ninguno"}</span>
        <button className="btn" onClick={() => setSelected([])}>Limpiar</button>
      </div>

      <div className="grid">
        {ALL_TYPES.map(t => (
          <button
            key={t}
            className={`typeBtn ${selected.includes(t) ? "active" : ""}`}
            onClick={() => toggleType(t)}
          >
            <img className="typeIcon" src={TYPE_ICONS[t]} alt={t} />
            <span className="typeText">{t}</span>
          </button>
        ))}
      </div>

      <h2>Debilidades</h2>

      {selected.length === 0 ? (
        <p>Elige 1 o 2 tipos para ver resultados.</p>
      ) : (
        <>
          {x4.length > 0 && (
            <div className="section">
              <h3>x4</h3>
              <div className="chips">
                {x4.map(t => 
                <span key={t} className="chip">
                  <img src={TYPE_ICONS[t]} alt={t} className="chipIcon" />
                  <span className="chipText">{t}</span>
                </span> 
                )}
              </div>
            </div>
          )}

          {x2.length > 0 && (
            <div className="section">
              <h3>x2</h3>
              <div className="chips">
                {x2.map(t => 
                <span key={t} className="chip">
                  <img src={TYPE_ICONS[t]} alt={t} className="chipIcon" />
                  <span className="chipText">{t}</span>
                </span> 
                )}
              </div>
            </div>
          )}

          {x4.length === 0 && x2.length === 0 && (
            <p>(Con el chart mínimo puede que no salgan muchas. Luego lo completamos.)</p>
          )}
        </>
      )}
    </div>
  );
}
