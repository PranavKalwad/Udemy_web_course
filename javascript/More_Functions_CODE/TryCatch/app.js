// try{
//     hello.toUpperCase();
// } 
// catch{
//     console.error("Error");
// }
console.log("After");

function yell(msg)
{
    try{
        console.log(msg.toUpperCase());
    }catch (e){
        // console.log(e);
        console.log("Please pass a string!");
    }
}