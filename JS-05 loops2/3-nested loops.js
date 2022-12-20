// * ============================================
// *            NESTED LOOPS
// * ============================================

console.log("*** NESTED FOR ***");

let result;
let line = "";

for (let row = 1; row <= 10; row++) {
  for (let col = 1; col <= 10; col++) {
    result = row * col;
    line = line + result + "\t";
  }
  line += "\n";
}

console.log(line);
