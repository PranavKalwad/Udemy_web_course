// let totalEggs=0;
// function collectEggs(){
//     totalEggs=6;
// }
// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);

// let bird="Scarlet Macaw";
// function birdWatch()
// {
//     // let bird="Greate Blue Heron";
//     console.log(bird);
// }
// birdWatch();
// console.log(bird);


// let radius=8;
// if(radius>0){
//     const PI=3.14;
//     let msg='HII';   
// }

// // console.log(radius);
// console.log(msg);

// for(var i=0;i<5;i++){
//     var msg="JHIHGUGU";
//     // console.log(msg);
// }
// console.log(msg)
// console.log(i);


function bankRobbery(){
    const heros=['spiderman','wolverine','batman'];
    function cryForHelp(){
        let color="purple";
        function inner(){
        for(let hero of heros)
        {
            console.log(color);
            console.log(`Please help us, ${hero.toUpperCase()}`);
        }
    }
    inner();
    }
    cryForHelp();
}