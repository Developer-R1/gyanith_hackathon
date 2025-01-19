const express = require("express");
const router = express.Router();
const pool = require("../db/db");


router.get("/api/v1/hackathonDb",(req,res)=>{
    const sql = "Select * from registration_table";
    pool.query(sql,(err,result)=>{
        if (err) return res.json(err);
        return res.json(result);
    })
})

router.post("/api/v1/hackathonDb",(req,res)=>{
    const sql = "insert into registration_table(`name`,`email`,`contact_number`,`university_name`,`study_year`) values(?,?,?,?,?) ";
    pool.query(sql,[req.body.name,req.body.email,req.body.contact_number,req.body.university_name,req.body.study_year],(err,result)=>{
        if (err) return res.json(err);
        return res.json(result);
    })
})


router.put("/api/v1/hackathonDb/:email",(req,res)=>{
    const sql = "update registration_table set `name`=?,`contact_number`=?,`university_name`=?,`study_year`=?";
    pool.query(sql,[req.body.name,req.body.email,req.body.contact_number,req.body.university_name,req.body.study_year],(err,result)=>{
        if (err) return res.json(err);
        return res.json(result);
    })
})


router.delete("/api/v1/hackathonDb/:email",(req,res)=>{
    const sql = "delete from registration_table where email=?";
    const email = (req.params.email);
    pool.query(sql,[email],(err,result)=>{
        if (err) return res.json(err);
        return res.json(result);
    })
})



module.exports = router;