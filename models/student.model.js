const mongoose = require("mongoose");

var studentSchemas = new mongoose.Schema({
  fullName: {
    type: String,
    required: "This field is required",
  },
  email: {
    type: String,
    require: "This field is required",
  },
  mobile: {
    type: Number,
    required: "This field is required",
  },
  city: {
    type: String,
    required: "This field is required",
  },
});

mongoose.model("student", studentSchemas);
