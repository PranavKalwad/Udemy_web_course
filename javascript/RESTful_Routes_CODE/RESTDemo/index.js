const express=require('express');
const app=express();
const methodOverride=require('method-override');
const path=require('path');
const {v4:uuidv4}=require('uuid');
uuidv4();

app.get('/tacos',(req,res)=>{
    res.send('GET /tacos response');
})

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

let comments=[
    {
        id:uuidv4(),
        username:'Pranav',
        comment:'lol so funny'
    },
    {
        id:uuidv4(),
        username:'ram',
        comment:'csk'
    },
    {
        id:uuidv4(),
        username:'Rama',
        comment:'rcb'
    },
    {
        id:uuidv4(),
        username:'raman',
        comment:'dc'
    },
    {
        id:uuidv4(),
        username:'ramana',
        comment:'mi'
    },
    {
        id:uuidv4(),
        username:'singh',
        comment:'rr'
    },
    {
        id:uuidv4(),
        username:'sikh',
        comment:'pbks'
    },
    {
        id:uuidv4(),
        username:'chatterje',
        comment:'kkr'
    }
]

app.get('/comments',(req,res)=>{
    res.render('comments/index.ejs',{comments});
})

app.get('/comments/new',(req,res)=>{
    res.render('comments/new');
})


app.post('/comments',(req,res)=>{
    const {username,comment}=req.body;
    comments.push({username,comment,id:uuidv4()});
    res.redirect('/comments');
})

app.get('/comments/:id',(req,res)=>{
    const {id}=req.params;
    const comment=comments.find(c=>c.id ===id);
    res.render('comments/show',{comment});
})


app.get('/comments/:id/edit',(req,res)=>{
    const {id}=req.params;
    const comment=comments.find(c=>c.id === id);
    res.render('comments/edit.ejs',{comment});
})

app.patch('/comments/:id',(req,res)=>{
    const {id}=req.params;
    const newCommentText=req.body.comment;
    const foundComment=comments.find(c=>c.id === id);
    foundComment.comment=newCommentText;
    res.redirect('/comments');
})

app.delete('/comments/:id',(req,res)=>{
    const {id}=req.params;
    const foundComment=comments.find(c=>c.id === id);
    comments=comments.filter(c=> c.id!==id);
    res.redirect('/comments');
})

app.post('/tacos',(req,res)=>{
    const {meat,qty}=req.body;
    res.send(`Here are your ${qty} of ${meat} tacos`);
})

app.listen(3000,()=>{
    console.log('On port 3000');
})



