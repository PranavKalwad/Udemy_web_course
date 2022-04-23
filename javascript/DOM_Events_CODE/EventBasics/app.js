const btn=document.querySelector('#v2');

// btn.onclick=function(){
//     console.log("You clicked me !!");
//     console.log('I hope it worked');
// }



btn.onmouseenter=function(){
    console.log("You clicked me !!");
    console.log('I hope it worked');
}

document.querySelector('h1').onclick=()=>{
    console.log("I am h1");
}
const btn3=document.querySelector('#v3');
btn3.addEventListener('mousedown',()=>{
    alert("Event listner added");
})

function twist(){
    console.log("twist");
}

function shout(){
    console.log("shout");
}

const tasButton=document.querySelector('#tas');
tasButton.onclick=twist;
tasButton.onclick=shout;






tasButton.addEventListener('click',shout,{once:true});

tasButton.addEventListener('click',twist);






