let maximum=parseInt(prompt("Enter the maximum number:"));
while(!maximum){
    prompt("Enter the maximum number:");
}

const targetNum=Math.floor(Math.random()*maximum)+1;
// console.log(targetNum);
let attempts=1;

let guess=parseInt(prompt("Enter your guess!"));

while(parseInt(guess) !=targetNum){
    if(guess==='q') break;
    attempts++;
    if(guess>targetNum){
    guess=prompt("Too high! Enter a new guess");
    }else{
        guess=prompt("Too low! Enter a new guess");
    }
}
if(guess==='q'){
    console.log("Ok you quit");
}else{
console.log(`You got it!!It took you ${attempts} guesses`);
}