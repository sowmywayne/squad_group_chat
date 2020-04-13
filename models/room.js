const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const roomSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlenght: 20,
    trim: true,
  },
  
});
