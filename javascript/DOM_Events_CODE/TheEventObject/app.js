document.querySelector('button').addEventListener('click',(evt)=>{
    console.log(evt);
})

// const input=document.querySelector('input');
// input.addEventListener('keydown',(e)=>{
//     console.log(e.key);
//     console.log(e.code);
// })


// input.addEventListener('keyup',()=>{
//     console.log("Keydown");
// })

window.addEventListener('keydown',(e)=>{
    switch(e.code){
        case 'ArrowUp':
            console.log("UPP");
            break;
        case 'ArrowDone':
            console.log('Down');
            break;
        default:
            console.log('Ignored');
            break;            
    }
})