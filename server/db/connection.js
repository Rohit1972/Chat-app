const mongoose = require('mongoose');

const uri = "mongodb+srv://chat_app_admin:Rohit%40572@cluster0.45bgb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri)
  .then(() => console.log('Connected to DB'))
  .catch((e) => console.log('Error', e));
