const mongoose = require("mongoose");
const { Schema } = mongoose;

const tasksSchema = new Schema({
    name: {
        type: String,
    },
    status:{
        type: String,
    }
}, {timestamp: true});

module.exports = mongoose.model("Tasks", tasksSchema);;
