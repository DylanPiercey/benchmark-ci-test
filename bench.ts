import fs from "node:fs";
import * as b from "mitata";

b.boxplot(() => {
  b.bench("deleting $keys from object", function* (state) {
    const keys = state.get("keys");

    const obj = {};
    for (let i = 0; i < keys; i++) obj[i] = i;

    yield {
      [0]() {
        return { ...obj };
      },

      bench(p0) {
        for (let i = 0; i < keys; i++) {
          for (let j = 10; j--;) {
            delete p0[i];
            delete p0[i];
            delete p0[i];
          }
        }
      },
    };
  }).args("keys", [1, 10, 100, 1000]);
});

const { benchmarks } = await b.run();
const results: {
  name: string;
  unit: string;
  value: number;
  range: string;
}[] = [];

for (const { runs } of benchmarks) {
  for (const run of runs) {
    if (run.stats) {
      results.push({
        name: run.name,
        unit: "ns/iter",
        value: run.stats.avg,
        range: `(${run.stats.min} ns … ${run.stats.max} ns)`,
      });
    }
  }
}

fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/benchmark.json", JSON.stringify(results, null, 2));
