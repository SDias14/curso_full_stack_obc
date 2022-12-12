const weightedAverage = (...entries) => {
    
    const sum = entries.reduce((acc, {number, weight}) => acc + (number * weight), 0);
    
    const weightSum = entries.reduce((acc, entry) => acc + entry.weight , 0);

    return sum / weightSum;

}


console.log(weightedAverage(
    {number: 9, weight: 3}, 
    {number: 7, weight: 1}, 
    {number: 10, weight: 1}));


////////////////////////////    



function averageScore(...numbers) {
    return numbers.reduce((total, number) => total + number, 0) / numbers.length;
    }

    //////////






const median = (...numbers) => {

    const orderedNumbers = [...numbers].sort((a, b) => a - b);

    const middle = Math.floor(orderedNumbers.length / 2);

    if (orderedNumbers.length % 2 !== 0) {
        return orderedNumbers[middle];
    } else {
         const firstMiddle = orderedNumbers[middle - 1];

        const secondMiddle = orderedNumbers[middle];

        return averageScore(firstMiddle, secondMiddle);

    }

}


console.log(median(2,5,99,4,42, 7));
console.log(median(15,14,8,7,3));


///////////////////////


const mode = (...numbers) => {

    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => n === num).length
    ]);

    quantities.sort((a, b) => b[1] - a[1]);

    return quantities[0][0];

}

console.log(mode(1,1,5,4,9,7,4,3,5,2,4,0,4))

       
    