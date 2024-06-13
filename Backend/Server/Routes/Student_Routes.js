const express = require('express');
const router = express.Router();
const Student_Cont = require('../Controller/Student_controller')


router.get('/getdata', Student_Cont.view)
router.get('/getdata/:id', Student_Cont.viewById)
router.post('/add-student', Student_Cont.insert)
router.put('/edit-student/:id', Student_Cont.update)
router.delete('/delete-student/:id', Student_Cont.delete)


module.exports = router;