const mongoose = require("mongoose");

const schema = mongoose.Schema({
    Rno: Number,
    StuName : String
});

module.exports = mongoose.model("Student",schema);