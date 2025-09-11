#!/usr/bin/node

if (process.argv[2] === undefined) {
    console.log('Missing size');
} else {
    const size = parseInt(process.argv[2], 10);
    
    // Check if the parsing resulted in NaN OR if the original string doesn't represent a valid integer
    if (isNaN(size) || process.argv[2].trim() === '' || !Number.isInteger(parseFloat(process.argv[2]))) {
        console.log('Missing size');
    } else if (size > 0) {
        for (let i = 0; i < size; i++) {
            let row = '';
            for (let j = 0; j < size; j++) {
                row += 'X';
            }
            console.log(row);
        }
    }
}