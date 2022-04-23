// let count=0;
// while(count<10)
// {
//     console.log(count);
//     count++;
// }


// const secret="babyhipo";
// let guess = prompt("Enter the secret code:");
// while(guess!=="babyhipo")
// {
//     guess = prompt("Enter the secret code:");
// }
// console.log("congrats you got the secret!!");

let input=prompt("Hey say something:");
while(true)
{
    input=prompt(input);   
    if(input.toLowerCase()==='copy cat killer rat !!')
    {
        break;
    }
}

console.log("OK you win!!");