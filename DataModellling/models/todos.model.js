import mongoose from ('mongoose');


const todoschema= new mongoose.schema({
 
    todos:{
        type:String,
        required:true,
        
    }


},{timestapms:true})

export const Todo= mongoose.model("Todo",todoschema);