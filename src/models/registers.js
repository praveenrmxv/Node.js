const mongoose = require('mongoose')
const employeeSchema = new mongoose.Schema({
    firstName:{
        type:string,
        required:true
    },
    middleName:{
        type:string,
        required:true
    },
    lastName:{
        type:string,
        required:true
    },
    firstName:{
        type:string,
        required:true
    },
    email:{
        type:string,
        required:true,
        unique:true
    },
    gender:{
        type:string,
        required:true
    },
    phone:{
        type:string,
        required:true,
        unique:true
    },
    fAge:{
        type:string,
        required:true
    },
    confirmpassword:{
        type:string,
        required:true
    },
})
const Register = new mongoose.model('Register',employeeSchema)
module.exports = Register;