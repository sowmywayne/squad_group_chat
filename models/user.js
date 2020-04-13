const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    rooms: {
      type: Array,
      default: [] 
    }
  },

  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
