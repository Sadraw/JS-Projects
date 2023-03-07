let number = 10
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

// A Fibonacci Sequence 

if (n1 < n2 ) {
    console.log("First number is bigger than the latter.");
} else {
    console.log("The second number is bigger than the first one");
        
}

// is n1 < n2 ? 
