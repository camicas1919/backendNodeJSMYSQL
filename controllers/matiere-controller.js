const matiereModel = require('../models/matiere-model')


module.exports = {
    get : (req,res) => {
        matiereModel.selectAll((result)=>{res.json(result)})
    },
    getById : (req,res)=>{
        matiereModel.selectById(req.params.id, result =>{res.json(result)})
    },
    post : (req,res) => {
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login1."})
        matiereModel.insert(req.body, message =>{res.json({success : true, message})})
    },
    put : (req,res)=>{
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        matiereModel.update(req.params.id,req.body, result =>{res.json({success : true, result})})
    },
    delete : (req,res)=>{
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        matiereModel.delete(req.params.id, result =>{res.json({success : true, result})})
    }
}

