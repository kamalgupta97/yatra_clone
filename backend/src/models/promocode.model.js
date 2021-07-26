const mongoose = require('mongoose');

const promocodeSchema = new mongoose.Schema({
    code: {type: String, required: true},
}, {
    versionKey: false,
    timestamps: true
})

const Promocode = mongoose.model("post", promocodeSchema);

module.exports = Promocode;