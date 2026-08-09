const Student = require("../models/Student");


exports.add = async (req, res)=> {
    try{
        const data = await Student.create(req.body);
            res.status(201).json({
                success:true,
                message:"Data Added successfully",
                data:data,
            });
        
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
    
}