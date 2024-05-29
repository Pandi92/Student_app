const express=require('express');
const router=express.Router()
const Student_Cont=require('./Controller/Student_controller')

router.get('/',Student_Cont.view)
router.post('/add-student',Student_Cont.insert)
router.put('/edit-student',Student_Cont.update)
router.delete('delete-student',Student_Cont.delete)

module.exports=router;