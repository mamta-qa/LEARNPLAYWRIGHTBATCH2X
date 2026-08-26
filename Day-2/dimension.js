//single dimension array let a =[1,2,3,4,5];
//multi

//index start from 0
//[0,0][0,1],[0,2]

//i / row
//j/ col

let grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < 3; i++) {
  for (j = 0; j < 3; j++) {
    console.log(grid[i][j]);
  }

  console.log("\n");
}
