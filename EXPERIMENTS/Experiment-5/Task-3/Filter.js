let numbers = [10, 25, 30, 45, 50];
let below40 = numbers.filter((value) =>{
    return (value<40);
})
console.log("Below 40 numbers: " + below40)