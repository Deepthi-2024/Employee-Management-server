const mongoose =  require('mongoose');
const empSChema = mongoose.Schema ({
    firstName:String,
    lastName:String,
    age:String,
    salary:String
})
const EmpModel = mongoose.model('employees', empSChema);

module.exports = EmpModel;
