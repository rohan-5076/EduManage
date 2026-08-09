const Testing = require("../models/Testing");


exports.add = async (req, res)=> {
    try{
        const data = await Testing.create(req.body);
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