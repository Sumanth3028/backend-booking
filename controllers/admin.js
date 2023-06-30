const members=require('../models/memberdetails')
const date = new Date(Date.now())

console.log(date)
exports.getMemberDetails=(req,res,next)=>{
    members.findAll().then(member=>{
        res.json({alluser:member})

    }).catch(err=>console.log(err))
}

exports.postMemberDetails=async(req,res,next)=>{
    const name= req.body.name;
    const email=req.body.email;
    const phone=req.body.number;
    const date=req.body.date
    const time=req.body.time

    console.log('req',req.body )

   const data= await members.create({
        // id: Math.floor(Math.random() * 100000),

        Name:name,
        Email:email,
        Phone:phone,
        date:date,
        time:time
    })

    res.status(201).json({getData:data})
}

exports.deleteMemberDetails=(req,res,next)=>{
    const memberId=req.params.uid

    
    members.findByPk(memberId).then(mem=>{
        mem.destroy()
    }).catch(err=>console.log(err))
}