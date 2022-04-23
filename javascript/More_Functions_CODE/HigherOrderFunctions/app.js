// function callTwice(func){
//     func();
//     func();
// }
// function rollDie(){
//     const roll=Math.floor(Math.random()*6)+1;
//     console.log(roll);
// }

// callTwice(rollDie);

// function callTenTimes(f){
//     for(let i=0;i<10;i++)
//     {
//         f()
//     }
// }



// function makeMysteryFunc(){
//     const rand=Math.random();
//     if(rand>0.5)
//     {
//         return function(){
//             console.log("I am a good function");
//         }
//     }
//     else
//     {
//         alert("You are irritating");
//         alert("You are irritating");
//         alert("You are irritating");
//         alert("You are irritating");
//         alert("You are irritating");
//         alert("You are irritating");
//     }
// }


function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}


// function isBetween(num)
// {
//     return num>=50 && num<=100;
// }

// function isBetween2(num){
//     return num>=1 && num<=10;
// }