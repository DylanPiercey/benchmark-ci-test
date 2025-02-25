window.BENCHMARK_DATA = {
  "lastUpdate": 1740453400936,
  "repoUrl": "https://github.com/DylanPiercey/benchmark-ci-test",
  "entries": {
    "Marko Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "dpiercey@ebay.com",
            "name": "dpiercey",
            "username": "DylanPiercey"
          },
          "committer": {
            "email": "dpiercey@ebay.com",
            "name": "dpiercey",
            "username": "DylanPiercey"
          },
          "distinct": true,
          "id": "665c5ce1855fd922a181bd64396d530f0991f605",
          "message": "chore: setup test project",
          "timestamp": "2025-02-24T20:14:10-07:00",
          "tree_id": "dc242fce5fd97be88febf376d0e01bac00f94ba0",
          "url": "https://github.com/DylanPiercey/benchmark-ci-test/commit/665c5ce1855fd922a181bd64396d530f0991f605"
        },
        "date": 1740453276993,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "deleting 1 from object",
            "value": 46.80205652652167,
            "unit": "ns/iter",
            "range": "(43.046875 ns … 100.40747070324142 ns)"
          },
          {
            "name": "deleting 10 from object",
            "value": 406.3460783673926,
            "unit": "ns/iter",
            "range": "(396.652587890625 ns … 708.850341796875 ns)"
          },
          {
            "name": "deleting 100 from object",
            "value": 5398.331708635603,
            "unit": "ns/iter",
            "range": "(5320.7734375 ns … 5596.831787109375 ns)"
          },
          {
            "name": "deleting 1000 from object",
            "value": 54156.47528076174,
            "unit": "ns/iter",
            "range": "(53113.76904296875 ns … 55771.15966796875 ns)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dpiercey@ebay.com",
            "name": "dpiercey",
            "username": "DylanPiercey"
          },
          "committer": {
            "email": "dpiercey@ebay.com",
            "name": "dpiercey",
            "username": "DylanPiercey"
          },
          "distinct": true,
          "id": "8209c56e8ff92da270295f7f38d67e7ab10d6761",
          "message": "chore: make slower",
          "timestamp": "2025-02-24T20:16:15-07:00",
          "tree_id": "a8997b9ee013b533bd2531a32e86faef0b0ae34f",
          "url": "https://github.com/DylanPiercey/benchmark-ci-test/commit/8209c56e8ff92da270295f7f38d67e7ab10d6761"
        },
        "date": 1740453400702,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "deleting 1 from object",
            "value": 97.97723954977361,
            "unit": "ns/iter",
            "range": "(93.7099609375 ns … 194.50341796886642 ns)"
          },
          {
            "name": "deleting 10 from object",
            "value": 943.9604066998771,
            "unit": "ns/iter",
            "range": "(914.739013671875 ns … 1678.23291015625 ns)"
          },
          {
            "name": "deleting 100 from object",
            "value": 10797.30088297526,
            "unit": "ns/iter",
            "range": "(10659.734619140625 ns … 11052.11962890625 ns)"
          },
          {
            "name": "deleting 1000 from object",
            "value": 107332.37848605578,
            "unit": "ns/iter",
            "range": "(104395 ns … 190826 ns)"
          }
        ]
      }
    ]
  }
}