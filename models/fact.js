require("../Db/connect");
const mongoose = require("mongoose");

const fact_schema = mongoose.Schema(
    {
    fact : {
    type : String,
    required : true,
}
 })
 const fact = mongoose.model("fun_fact", fact_schema);
 module.exports = fact;