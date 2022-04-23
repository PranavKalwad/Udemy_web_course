const express=require('express');
const app=express();
const path=require('path');
const redditData=require('./data.json');

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'/views'));

app.get('/rand',(req,res)=>{
    const num=Math.floor((Math.random()*10)+1);
    res.render('random.ejs',{rand:num});
})

app.get('/r/:subreddit',(req,res)=>{
    const  {subreddit}=req.params;
    const data=redditData[subreddit];
    if(data){
        res.render('subreddit.ejs',{...data});
    }
    else{
        res.render('notfound.ejs',{subreddit});
    }
    
});




app.get('/cats',(req,res)=>{
    const cats=[
        'Blue','rocket','stephany','winston'
    ]
    res.render('cats.ejs',{cats});
});

// app.use(express.static('public',path.join(__dirname,'public')));









app.get('/',(req,res)=>{
    res.render('home.ejs');
});


app.listen(3000,()=>{
    console.log("Listening on port 3000");
})