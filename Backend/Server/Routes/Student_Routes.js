const express=require('express');
const router=express.Router()
const Student_Cont=require('./Controller/Student_controller')

router.get('/',Student_Cont.view)
router.post('/add-student',Student_Cont.insert)

module.exports=router;