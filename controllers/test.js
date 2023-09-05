const mongodb = require('mongodb');
const Test = require('../models/test');
const Test2 = require('../models/test2');
const path = require('path');
const fs = require('fs');

exports.testImageUpload = (req,res,next)=>{
    const achive ={
    username: req.body.username,
    imageUrl: `/test/${req.file.filename}`
    }
    console.log(achive);
    const x = new Test(achive);
    x.save();
    res.status(200).send({message:'Submited Successfuly'})
    // Test.create(achive,(err,resp)=>{
    // if(err) throw err;
    //     if(resp){
    //         res.status(200).send({message:'Submited Successfuly'})
    //     }
    // }).catch(err=>{res.status(422).send(err)});
}
exports.testApi = (req,res,next)=>{
    console.log(req.body)
    const x = new Test2(req.body)
//     const achive ={
//     title: req.body.title,
//     class: req.body.class,
//     date: req.body.date,
//     description: req.body.description,
//     aadhar: req.body.aadhar.split(','),
//     fullName: req.body.fullName.split(','),
//     mobile: req.body.mobile,
//     teacher: req.body.teacher,
//     imageUrl: `/achivement/${req.file.filename}`
// }
x.save();
res.status(200).send({message:'Submited Successfuly'})
// ,(err,resp)=>{
// if(err) throw err;
// if(resp){
//     res.status(200).send({message:'Submited Successfuly'})
// }
// }).catch(err=>{res.status(422).send(err)});
}