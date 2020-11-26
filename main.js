const ourArray = [];
for(let i = 0; i < 10; i += 2){ /* The 1+= 2 is being added by 2 */
    ourArray.push(i);
}
console.log(ourArray);

const oddArray = [];
for(let i = 1; i < 10; i+= 2){
    oddArray.push(i);
} // changing the i = 1 will print out the odd
console.log(oddArray);
//console.log(color());
