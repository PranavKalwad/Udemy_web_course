// fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
// .then(res=>{
//     console.log("Response waiting to parse",res);
//     return res.json(); //returns a promise
// })
// .then(data=>{
//     console.log("data parsed",data.bpi.USD.rate);
// })
// .catch(e=>{
//     console.log("Oh no..",e);
// })


const fetchBitCoinPrice=async()=>{
    try{
        const res=await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
        console.log(res);
        const data=await res.json();
        console.log(data.bpi.USD.rate);
    }catch(e){
        console.log("Something went wrong!!!",e);
    }
}