const Notes=require('../models/notesModels')

exports.addNotes=async(req,res)=>{

    try{
        const addNotes=await Notes.create(req.body)

        res.status(200).json({
            status:"success",
            data:{
                addNotes
            }
        })
    }
    catch(err){
        res.status(404).json({
            status:"FAIL;",
            message:err.message,

        })
    }
}

exports.viewAllNotes=async(req,res)=>{

    try{
        const getAllNotes=await Notes.find()
        res.status(200).json({
            status:"success",
            data:{
                getAllNotes
            }
        })
    }
    catch(err){
        res.status(404).json({
            status:"FAIL;",
            message:err.message,

        })
    }
}

exports.viewNote=async(req,res)=>{

    try{
        const getAllNotes=await Notes.findById(req.params.id)
        res.status(200).json({
            status:"success",
            data:{
                getAllNotes
            }
        })
    }
    catch(err){
        res.status(404).json({
            status:"FAIL;",
            message:err.message,

        })
    }
}

exports.updateNote=async(req,res)=>{
    try{
        const updateNote=await Notes.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        })
        res.status(200).json({
            status:"SUCCESS",
            data:{
                updateNote
            }
        })
    }
    catch(err){
     
        res.status(404).json({
            status:"FAIL",
            message:err.message
        })
    }
}


exports.deleteNote=async(req,res)=>{
    try {
        await Notes.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: "SUCCESS",
            data:"Successfully deleted"
        })
    }
    catch (err) {
        res.status(404).json({
            status: 'FAIL',
            message: err.message
        })
    }
}