const express=require('express');
const app=express();
// console.dir(app);

// app.use((req,res)=>{
//     // console.log("we got a new request!!!");
//     // res.send("Hello we got your request!!this is your response");
//     // res.send("<h1>This is my webpage</h1>");
// })


app.get('/',(req,res)=>{
    res.send("Hello welcome to the main page!!");
})


// app.get('/r/:subreddit',(req,res)=>{
//     const {subreddit}=req.params;
//     res.send(`<h1>Browsing the subreddit${subreddit} subreddit</h1>`);
// })

app.get('/r/:subreddit/:postId',(req,res)=>{
    const {subreddit,postId}=req.params;
    res.send(`<h1>Viewing the postId: ${postId} on ${subreddit}</h1>`);
})

app.get('/cats',(req,res)=>{
    res.send("MEOW!!");
})

app.post('/cats',(req,res)=>{
    res.send("Post request to cats.this is different");
})

app.get('/dogs',(req,res)=>{
    res.send("WOOF!!");
})


app.get('/r/search',(req,res)=>{
        const {q}=req.query;
        if(!q){
            res.send("Nothing found if nothing searched!!!");
        }
        res.send(`<h1>Search results for : ${q}</h1>`);
})

app.get('*',(req,res)=>{
    res.send("This can be any path!!!");
})

app.listen(3000,()=>{
    console.log("listening on port 3000");
})

