const express=require('express');
const router=express.Router();


router.get('/topsecret',(req,res)=>{
    res.send('This is top secret');
})


router.get('/deleteeverything',(req,res)=>{
    res.send('ok deleting everything!!');
})



module.exports=router;
















































































































// const express = require('express');
// const router = express.Router();

// router.use((req, res, next) => {
//     if (req.query.isAdmin) {
//         return next();
//     }
//     return res.send("SORRY NOT AN ADMIN!")
// })

// router.get('/topsecret', (req, res) => {
//     res.send('THIS IS TOP SECRET')
// })
// router.get('/deleteeverything', (req, res) => {
//     res.send('OK DELETED IT ALL!')
// })

// module.exports = router;
