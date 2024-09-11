const mongoose = require('mongoose');
const Users = require('./Users');

const conversationSchema=mongoose.Schema({
    members: {
        type: Array,
        required:true,
   }
});

const Conversation = mongoose.model('Conversation',conversationSchema);
module.exports=Conversation;
