//1
let ages = [3, 9, 23, 64, 2, 8, 28, 93]

console.log(ages.pop()-ages.shift())

ages = [3, 9, 23, 64, 2, 8, 28, 93, 17]
console.log(ages.pop()-ages.shift())

let total = 0;
for (let i = 0; i < ages.length; i++){
    total = total + ages[i];
}
let avg = total/ages.length;
console.log(avg)

//2
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalLength = 0
for (i=0; i<names.length; i++){
    totalLength = names[i].length + totalLength
}
console.log(totalLength/names.length)

let namesString = ""
for (i=0; i<names.length; i++){
    namesString = namesString + " " + names[i]
}
console.log(namesString);

//3
//array.pop

//4
//array.shift

//5
let nameLengths = []
for (i=0; i<names.length; i++){
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

//6
let sumNames = 0
for (i=0;i<nameLengths.length; i++){
    sumNames = sumNames + nameLengths[i]
}
console.log(sumNames);

//7
function saySeveral(word, n){
    words = "";
    for (i=0; i<n; i++){
        words = words + word;
    }
    console.log(words);
}

saySeveral("Hello", 3);

//8
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(fullName("Kalon", "Ohmstede"));

//9
function over100(nums){
    return (nums > 100) ? true : false;
}
 console.log(over100(99));
 console.log(over100(101));

//10
function numberAvg(array){
    let totals = 0;
    for (i=0;i<array.length; i++){
        totals = totals + array[i]
    }
    return totals/array.length;
}
console.log(numberAvg(ages));

//11
function oneOverTwo(arrayOne, arrayTwo) {
    return (numberAvg(arrayOne) > numberAvg(arrayTwo) ? true: false)
}

console.log(oneOverTwo([0,1],[3,4]));
console.log(oneOverTwo([10,1],[3,4]));
//12
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && (moneyInPocket > 10.50)
}

console.log(willBuyDrink(true, 12));
console.log(willBuyDrink(false, 20));
console.log(willBuyDrink(true, 3.50));
console.log(willBuyDrink(false, 0));

//13
//this one takes a starting number and an ending number, and then makes an array including all
//numbers between the start and end in order. If the end is greater than the start, the numbers 
//count upward, but if the start is greater than the end, they numbers count downward. 
function reversibleInclusiveList(start, end){
    let newList = [];
    if (start <= end){
        for (i = start; i <= end; i++){
            newList.push(i);
        }
    }
    else {
        for (i = start; i >= end; i--){
            newList.push(i);
        }
    }
    return newList
}

console.log(reversibleInclusiveList( 1, 5));
console.log(reversibleInclusiveList(4 , 11));
console.log(reversibleInclusiveList( -1, 19));
console.log(reversibleInclusiveList( 16, -3));
console.log(reversibleInclusiveList( 12, 17));
console.log(reversibleInclusiveList( 3, -11));
console.log(reversibleInclusiveList( 3, -3));
console.log(reversibleInclusiveList( -0, 0));
