const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send("All shelters")
})

router.post('/',(req,res)=>{
    res.send("Creating shelters")
})

router.get('/:id',(req,res)=>{
    res.send("Viewing one shelters")
})



router.get('/:id/edit',(req,res)=>{
    res.send("editing one shelters")
})



module.exports=router;



























































// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res) => {
//     res.send("ALL SHELTERS")
// })
// router.post('/', (req, res) => {
//     res.send("CREATING SHELTER")
// })
// router.get('/:id', (req, res) => {
//     res.send("VIEWING ONE SHELTER")
// })
// router.get('/:id/edit', (req, res) => {
//     res.send("EDITING ONE SHELTER")
// })

// module.exports = router;