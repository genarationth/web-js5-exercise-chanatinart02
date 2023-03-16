// Exercise #2
//loop each row
for(let i = 1; i <= 5; i++){
    let row = '';

    //loop each column in the current row
    for(let j = 1; j <= i; j++){
        row += '* ';
    }
    console.log(row);
}

//Exercise #3
let x = 10;
 while(x > 0){
    console.log(x)
    x-=0.5
 }

//part2
let number = 1;
while(number <= 100){
    console.log(number)
    number+=2;
}

//part3
let n = 1;
while(n <= 6){
    console.log(`[${n}]`)
    n++
}

//part 4
function sumOfPositiveIntegers(n) {
    let sum = 0;
    let i = 1;
  
    while (i <= n) {
      sum += i;
      i++;
    }
  
    return sum;
  }
  let sum = sumOfPositiveIntegers(5);
console.log(sum)

