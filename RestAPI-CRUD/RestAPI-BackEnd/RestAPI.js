const express = require('express');
const mongoose = require('mongoose');
const Student = require('./model/Student');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/',{useNewUrlParser : true}).then(()=>{
    const app = express();
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());

    app.get('/',async (req,res)=>{
        const stuData = await Employee.find()
        res.send(stuData);
    });

    app.get('/Student/:id',async (req,res)=>{
        const stuData = await Student.findOne({Rno : req.params.id});
        res.send(stuData);
        console.log("data is coming");
    });

    app.delete('/Student/:id',async (req,res)=>{
        const stuData = await Student.findOne({Rno : req.params.id});
        await stuData.deleteOne();
        res.send(stuData);
    });

    app.post('/',async (req,res)=>{
        const stu = new Student({
            Rno : req.body.Rno,
            StuName : req.body.StuName
        });
        await stu.save();
        res.send(stu);
    });

    // you also use patch method instend of put.
    app.put('/Student/:id',async (req,res)=>{
        console.log(req.body);
        const data = await Student.findOne({Rno : req.params.id});
        data.Rno = req.body.Rno;
        data.StuName = req.body.StuName;
        await data.save();
        res.send(data);
    });

    app.listen(8080,()=>{
        console.log("Server Started At @ 8080.");
    });

});