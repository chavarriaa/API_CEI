const express = require('express');
const router = express.Router();

router.get('/hello',(req,res)=>{
  console.log('hola!');
    res.json({
      message:"success",
    })
})

module.exports = router;