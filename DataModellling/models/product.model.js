import mongoose from mongoose;

const productscema= new mongoose.schema({
name:{
    type:String,
    required:true,
    unique:true,

}
});


