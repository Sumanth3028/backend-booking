const express=require('express')

const router=express.Router()

const adminController=require('../controllers/admin')

router.get('/getdetails',adminController.getMemberDetails)


router.post('/postdetails',adminController.postMemberDetails)

router.post('/deletemember/:id',adminController.deleteMemberDetails)

module.exports=router  