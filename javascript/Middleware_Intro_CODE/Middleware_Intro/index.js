const express = require('express');
const app = express();
const morgan = require('morgan');

// app.use(morgan('tiny'))

// app.use(morgan('dev'))

app.use(morgan('tiny'))


app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})

app.use('/dogs',(req, res, next) => {
    console.log('I hate dogs');
    next();
})


const verifyPassword=(req, res, next) => {
    const { password } = (req.query);
    if(password==='chicken'){
        next();
    }
    res.send('Sorry You need a password')
}


// app.use((req,res,next)=>{
//     console.log('This is my first middleware')
//     return next();
//     console.log('This is my first middleware after calling next')
// })


// app.use((req,res,next)=>{
//     console.log('This is my second middleware')
//     return next();
// })

// app.use((req,res,next)=>{
//     console.log('This is my third middleware')
//     return next();
// })

app.get('/', (req, res) => {
    console.log(`Request date:${req.requestTime}`)
    res.send('Home page!!!')
})

app.get('/dogs',  verifyPassword,(req, res) => {
    console.log(`Request date:${req.requestTime}`)
    res.send('Woof !!')
})



// app.use((req,res,next)=>{
//     req.requestTime=Date.now();
//     console.log(req.method,req.path);
//     next();
// })


app.get('/secret',verifyPassword,(req,res)=>{
    res.send('My secrete is : I am my moms son')
})

app.use((req, res) => {
    res.status(404).send('Not found !!')
})


app.listen(3000, () => {
    console.log('App is running on localhost 3000')
})



































































































// const express = require('express');
// const app = express();
// const morgan = require('morgan');


// app.use(morgan('tiny'));

// app.use((req, res, next) => {
//     req.requestTime = Date.now();
//     console.log(req.method, req.path);
//     next();
// })

// app.use('/dogs', (req, res, next) => {
//     console.log("I LOVE DOGS!!")
//     next();
// })

// const verifyPassword = (req, res, next) => {
//     const { password } = req.query;
//     if (password === 'chickennugget') {
//         next();
//     }
//     res.send("YOU NEED A PASSWORD!")
// }


// // app.use((req, res, next) => {
// //     console.log("THIS IS MY FIRST MIDDLEWARE!!!")
// //     return next();
// //     console.log("THIS IS MY FIRST MIDDLEWARE - AFTER CALLING NEXT()")
// // })
// // app.use((req, res, next) => {
// //     console.log("THIS IS MY SECOND MIDDLEWARE!!!")
// //     return next();
// // })
// // app.use((req, res, next) => {
// //     console.log("THIS IS MY THIRD MIDDLEWARE!!!")
// //     return next();
// // })


// app.get('/', (req, res) => {
//     console.log(`REQUEST DATE: ${req.requestTime}`)
//     res.send('HOME PAGE!')
// })

// app.get('/dogs', (req, res) => {
//     console.log(`REQUEST DATE: ${req.requestTime}`)
//     res.send('WOOF WOOF!')
// })

// app.get('/secret', verifyPassword, (req, res) => {
//     res.send('MY SECRET IS: Sometimes I wear headphones in public so I dont have to talk to anyone')
// })

// app.use((req, res) => {
//     res.status(404).send('NOT FOUND!')
// })


// app.listen(3000, () => {
//     console.log('App is running on localhost:3000')
// })