let executionTime = [120, 200, 150, 300];

let totalTime = executionTime.reduce((total, time) => total + time, 0);
console.log("totaltime:", totalTime);
