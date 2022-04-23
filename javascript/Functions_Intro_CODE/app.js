// singSong()
// singSong()
// singSong()
// singSong()
// singSong()

// function singSong(){
//     console.log("Do");
//     console.log("RE");
//     console.log("MI");
// }


// function greet(firstname,lastName){
//     console.log(`Hi ${firstname} ${lastName[0]}`);
// }
// greet('Pranav','Kalwad');




// function repeat(msg,numTimes){
//     let result='';
//     for(let i=0;i<numTimes;i++)
//     {
//         result+=msg;
//     }
//     console.log(result);
// }


// repeat('hi',3);


function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return false;
    }
    let sum = num1 + num2;
    return sum;
}

let res = add(1, 2);
console.log(res);