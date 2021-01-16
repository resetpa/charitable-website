var mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DATABASEADMIN, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,
useCreateIndex: true});
var conn = mongoose.Collection;

var contactUsSchema = new mongoose.Schema({

Name : {
    type: String,
    required: true
},
Email : {
    type: String
    
},
Mobile : {
    type: String,
    required: true
},
Message : {
    type: String,
    required: true
    
},

Date: {
    type: Date,
    default: Date.now
}
});

var contactUsModel = mongoose.model('CustomerMessages', contactUsSchema);
module.exports = contactUsModel;