let bugs = [
  { id: 1, description: "Bug 1", severity: "high" },
  { id: 2, description: "Bug 2", severity: "medium" },
  { id: 3, description: "Bug 3", severity: "low" },
];

let severbug = bugs.filter((bug) => bug.severity === "high");
console.log(severbug);
