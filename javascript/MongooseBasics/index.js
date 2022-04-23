const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("connection open!!");
})
.catch(err=>{
    console.log("Error!!");
    console.log(err);
})

const movieSchema = new mongoose.Schema({
    title:String,
    year:Number,
    score:Number,
    rating:String
})


const Movie=mongoose.model('Movie',movieSchema);
const Amdeus= new Movie({title:'Amdeus',year:1986,score:9.2,rating:'R'})



// Movie.insertMany([
//     {title:'abc',year:2001,score:8.3,rating:'E'},
//     {title:'def',year:2001,score:6.7,rating:'A'},
//     {title:'hij',year:2001,score:7.3,rating:'B'},
//     {title:'xyz',year:2001,score:9.3,rating:'T'},
//     {title:'uvw',year:2001,score:10.3,rating:'E'}
// ])
// .then(data=>{
//     console.log("It worked!!");
//     console.log(data);
// })

