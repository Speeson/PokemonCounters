import TypeChip from "./TypeChip";

export default function SelectedSlots({ selected, onClear, onRemove }) {
  return (
    <div className="row">
      <span className="label">Seleccionados:</span>

      <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
        {[0, 1].map((i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            {selected[i] ? (
              <>
                <TypeChip type={selected[i]} />
                <button className="btn" onClick={() => onRemove(selected[i])}>Quitar</button>
              </>
            ) : (
              <span style={{ opacity: 0.7 }}>— vacío —</span>
            )}
          </span>
        ))}
      </div>

      <button className="btn" onClick={onClear}>Limpiar</button>
    </div>
  );
}
