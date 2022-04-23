// console.log("ITS WORKING!!!!");
// console.log("before conditional");
// let random=Math.random();
// if(random<0.5){
//     console.log("Your number is less than .5");
//     console.log(random);
// }else{
//     console.log("Your number is greater than .5");
//     console.log(random);
// }


// const dayOfWeek=prompt("Enter a day of the Week").toLowerCase();

// if(dayOfWeek==='monday'){
//     console.log(":(");
// }
// else if(dayOfWeek==='saturday'){
//     console.log(":)");
// }else if(dayOfWeek==='friday'){
//     console.log("Peace!!");
// }else if(dayOfWeek==='tuesday'){
//     console.log("Boring!");
// }else if(dayOfWeek==='wednesday'){
//     console.log("Mid week!!");
// }else{
//     console.log("Definitely Thrusday");
// }


// const age=8;
// if(age<5){
//     console.log("You are child");
// }else if(age<10){
//     console.log("$10");
// }else if(age<65){
//     console.log("$20");
// }else if(age>65){
//     console.log("$10");
// }else{
//     console.log("$10");
// }


const password=prompt("Enter a new password:");
if(password.length>6){
    if(password.indexOf(" ")==-1){
        console.log("Valid Passwword");
    }else{
        console.log("Password cannot have space");
    }
}else{
    console.log("Too short");
}



























