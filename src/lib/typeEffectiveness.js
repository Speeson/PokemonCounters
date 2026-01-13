import chart from "../data/typeChart.json";

export const ALL_TYPES = [
  "normal","fire","water","electric","grass","ice",
  "fighting","poison","ground","flying","psychic","bug",
  "rock","ghost","dragon","dark","steel","fairy"
];

function effVs(defType, atkType) {
  return chart?.[defType]?.[atkType] ?? 1;
}

export function computeDefensiveMultipliers(selectedTypes) {
  const defs = selectedTypes.filter(Boolean);
  const result = {};

  for (const atk of ALL_TYPES) {
    let mult = 1;
    for (const def of defs) mult *= effVs(def, atk);
    // normaliza por si hay floats raros
    result[atk] = mult === 0 ? 0 : Math.round(mult * 100) / 100;
  }

  return result;
}

export function groupWeaknesses(multMap) {
  const x4 = [];
  const x2 = [];
  for (const [type, mult] of Object.entries(multMap)) {
    if (mult === 4) x4.push(type);
    if (mult === 2) x2.push(type);
  }
  return { x4, x2 };
}
