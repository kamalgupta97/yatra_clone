const mongoose = require('mongoose');

const stopSchema = new mongoose.Schema({
    city: {type: String, required: true},
    busId: {type: mongoose.Schema.Types.ObjectId, ref: "user", required: true},    
    points:{type: [{
        point: {type: String, required: true},
        time: {type: String, required: true}
    }]} 
}, {
    versionKey: false,
    timestamps: true
})

const Stop = mongoose.model("stop", stopSchema);

module.exports = Stop;