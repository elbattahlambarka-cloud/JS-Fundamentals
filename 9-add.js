
function add(a, b) {
    return a + b;
}

const num1 = parseInt(process.argv[2], 10) || 0;
const num2 = parseInt(process.argv[3], 10) || 0;

console.log(add(num1, num2));