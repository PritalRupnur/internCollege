const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const internSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        trim:true,
        lowercase:true
        
    },
    mobile: {
        type: String,
        trim:true,
        unique:true
    },
    collegeId: {
        type: ObjectId,
        required: true,
        ref: "College"
    },
   isDeleted:{
    type:Boolean,
    default:false

   }

}, { timestamps: true });

module.exports = mongoose.model('internproject_interns', internSchema)




