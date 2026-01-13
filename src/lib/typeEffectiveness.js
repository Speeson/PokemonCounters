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
    result[atk] = mult === 0 ? 0 : Math.round(mult * 100) / 100;
  }

  return result;
}

export function groupMultipliers(multMap) {
  const groups = { x4: [], x2: [], x1_2: [], x1_4: [], x0: [] };

  for (const [type, mult] of Object.entries(multMap)) {
    if (mult === 4) groups.x4.push(type);
    else if (mult === 2) groups.x2.push(type);
    else if (mult === 0.5) groups.x1_2.push(type);
    else if (mult === 0.25) groups.x1_4.push(type);
    else if (mult === 0) groups.x0.push(type);
  }

  Object.values(groups).forEach(arr => arr.sort());
  return groups;
}
