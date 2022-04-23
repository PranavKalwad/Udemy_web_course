const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("connection open!!");
})
.catch(err=>{
    console.log("Error!!");
    console.log(err);
})

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:20
    },
    price:{
        type:Number,
        min:0
    },
    onSale:{
        type:Boolean,
        default:false
    },
    categories:[String],

    qty:{
        online:{
            type:Number,
            default:0
        },
        inStore:{
            type:Number,
            default:0
        }
    }
});



const Product =mongoose.model('Product',productSchema);

const bike =new Product({name:'Biker Helmet',price:29.99,categories:['cycling','safety']});
bike.save()
.then(data=>{
    console.log('It worked');
    console.log(data);
})
.catch(err=>{
    console.log("Oh no error");
});


























