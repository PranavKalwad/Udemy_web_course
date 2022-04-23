const req=new XMLHttpRequest();

req.onload=function(){
    console.log("All done with request");
    const data=JSON.parse(this.responseText);
    console.log(data.bpi.USD.rate);
}

req.onerror=function(){
    console.log("Error");
    console.log(this);
}

req.open('GET','https://api.coindesk.com/v1/bpi/currentprice.json');
req.send();
