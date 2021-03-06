const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const AppError=require('./AppError')

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand2', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))

const categories = ['fruit', 'vegetable', 'dairy'];

app.get('/',(req,res)=>{
    res.send("Home page of grocery store");
})


app.get('/products', async (req, res,next) => {
    try{
        const { category } = req.query;
        if (category) {
            const products = await Product.find({ category })
            res.render('products/index', { products, category })
        } else {
            const products = await Product.find({})
            res.render('products/index', { products, category: 'All' })
        }
    }catch(e){
        next(e)
    }
})

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories })
})


function wrapAsync(fn){
    return function (req,res,next){
        return fn (req,res,next).catch(e=> next(e))
    }
}

app.post('/products',wrapAsync(async (req, res,next) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
}))

app.get('/products/:id', wrapAsync(async (req, res,next) => {
        const { id } = req.params;
        const product = await Product.findById(id)
        if(!product){
            throw new AppError('Product not found',404);
        }
        res.render('products/show', { product })
}))

app.get('/products/:id/edit',wrapAsync(async (req, res,next) => {
        const { id } = req.params;
        const product = await Product.findById(id);
        if(!product){
             throw new AppError('Product not found',404);
        }
        res.render('products/edit', { product, categories })
}))

app.put('/products/:id', wrapAsync(async (req, res,next) => {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
        res.redirect(`/products/${product._id}`);
}))

app.delete('/products/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
}))


app.use((err,req,res,next)=>{
    console.log(err.name);
    next(err);
})

app.use((err,req,res,next)=>{
    const {status=500, message="Something went wrong"}=err
    res.status(status).send(message)
})


app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})


