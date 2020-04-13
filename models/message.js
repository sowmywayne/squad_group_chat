const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const messageSchema = mongoose.Schema({
  message: {
    type: String,
    maxlenght: 900,
    required: true
  },
  user: {
    type: ObjectId,
    ref: "User"
  }
},
{ timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);