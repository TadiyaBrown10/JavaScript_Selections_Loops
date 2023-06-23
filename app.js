console.log("Hello World!\n==========\n");

for(let i = 0; i < 100; i++){
    if(i % 2 == 0){
        continue;
    }
    else{
        console.log(i);
    }
    
}
console.log("EXERCISE 1:\n==========\n");

for(let j = 1; j < 100;j++ ){
    if( j % 3 == 0 && j % 5 == 0) {
        console.log("FIZZBUZZ");
    } else {
        if (j % 3 == 0){
            console.log("FIZZ");
        }

        if (j % 5 == 0){
            console.log("BUZZ");
        }
    }
}


console.log("EXERCISE 2:\n==========\n");

x = 1;
do {
    if (x % 2 != 0){
        console.log(x);
    }
    x++;
} while (x < 100);

g = 1;
while (g < 100){
    if (g % 2 != 0){
        console.log(x);
    }
}

f = 1;

while(f <= 100){
    let output = "";

    if(f % 3 == 0){
        output = "FIZZ";

    }

    if (f % 5 == 0){
        output = "BUZZ";
    }

    console.log(`${f} ${output}`);
    f++;
}
do {
    let output = "";

    if(c % 3 == 0){
        output = "FIZZ";

    }

    if (c % 5 == 0){
        output = "BUZZ";
    }

    console.log(`${c} ${output}`);
    c++;
    
} while (c <= 100);




let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for ( let i = 1; i <= n; i++){
    if ( i == value) {
  
        console.log(`Found ${value}`);
    break;
    }
}
if ( i == 0) {
    console.log(`Did not find ${value}`);
}
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let b = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);


for( let i = start; i <= b; i++){
    let output = "";

    if (i % fizzDivisor == 0) {
        output += "FIZZ"
    }

    if (i % buzzDivisor == 0) {
        output += "BUZZ"
    }

    console.log(`${i} ${output}`);
}