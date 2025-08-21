let varA = 'A' // B
let varB = 'B' // C
let varC = 'C' // A
let varD

// or const varD = varA;
// or [varA, varB, varC] = [varB, varC, varA]
varD = varA
varA = varB
varB = varC
varC = varD

console.log(varA, varB, varC)
