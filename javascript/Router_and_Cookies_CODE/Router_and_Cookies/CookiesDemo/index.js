const express=require('express');
const app=express();

const cookieParser=require('cookie-parser');
app.use(cookieParser('thisismysecret'));

app.get('/greet',(req,res)=>{
    const {name='No-name'}=req.cookies;
    res.send(`Hey There ${name}!!`);
})

app.get('/setname',(req,res)=>{
    res.cookie('name','steve chicken');
    res.cookie('animal','nayie')
    res.send('Ok sent you a cookie');
})

app.get('/getsignedcookie',(req,res)=>{
    res.cookie('fruit','grape',{signed:true});
    res.send('Ok signed Your fruit cookie');
})


app.get('/verifyfruit',(req,res)=>{
    console.log(req.signedCookies);
    console.log(req.cookies);
    res.send(req.signedCookies);
})

app.listen(3000,()=>{
    console.log("Serving!!");
})









































































































// const express = require('express');
// const app = express();

// const cookieParser = require('cookie-parser');
// app.use(cookieParser('thisismysecret'));

// app.get('/greet', (req, res) => {
//     const { name = 'No-name' } = req.cookies;
//     res.send(`Hey there, ${name}`)
// })

// app.get('/setname', (req, res) => {
//     res.cookie('name', 'henrietta');
//     res.cookie('animal', 'harlequin shrimp')
//     res.send('OK SENT YOU A COOKIE!!!')
// })

// app.get('/getsignedcookie', (req, res) => {
//     res.cookie('fruit', 'grape', { signed: true })
//     res.send('OK SIGNED YOUR FRUIT COOKIE!')
// })

// app.get('/verifyfruit', (req, res) => {
//     console.log(req.cookies)
//     console.log(req.signedCookies)
//     res.send(req.signedCookies)
// })

// app.listen(3000, () => {
//     console.log("SERVING!")
// })