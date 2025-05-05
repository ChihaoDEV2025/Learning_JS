function unboundedKnapsackGreedy(capacity, items) {
  // Tính tỷ lệ value/weight
  items.forEach((item) => {
    item.ratio = item.value / item.weight;
  });

  // Sắp xếp giảm dần theo valcd
  for (let item of items) {
    let count = Math.floor(capacity / item.weight);
    if (count > 0) {
      capacity -= count * item.weight;
      totalValue += count * item.value;
      selected.push({ name: item.name, count });
    }
    if (capacity === 0) break;
  }

  return {
    totalValue,
    selected,
    "The rest of capacity ": capacity,
  };
}

// Dữ liệu vật phẩm
const items = [
  { name: "a", weight: 15, value: 30 },
  { name: "b", weight: 10, value: 25 },
  { name: "c", weight: 2, value: 2 },
  { name: "d", weight: 4, value: 6 },
];

console.log(unboundedKnapsackGreedy(37, items));
