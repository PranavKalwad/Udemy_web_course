// axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
// .then(res=>{
//     console.log(res.data.bpi.USD.rate);
// })
// .catch(err=>{
//     console.log("something wrong",e);
// })

const fetchBitCoinPrice=async ()=>{
    try{
        const res=await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        console.log(res.data.bpi.USD.rate);
    }catch(e){
        console.log("ERROR",e);
    }
}

const jokes=document.querySelector("#jokes");
const button=document.querySelector('button');
const addNewJoke=async ()=>{
    const jokeText=await getDadJoke();
    const newLi=document.createElement('LI');
    newLi.append(jokeText);
    jokes.append(newLi);
}
const getDadJoke=async()=>{
    try{
        const config={headers:{Accept:'application/json'}};
        const res=await axios.get("https://icanhazdadjoke.com/",config);
        return res.data.joke
    }catch(e){
        return "OOps something went wrong!!"+e
    }
    
}
button.addEventListener('click',addNewJoke);




//https://icanhazdadjoke.com/

//https://api.coindesk.com/v1/bpi/currentprice.json