const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minLength: 6},
    name: {type: String, required: false},
}, {
    versionKey: false,
    timestamps: true
})

userSchema.pre("save", function(next) {
    if(!this.isModified("password")) return next();

    bcrypt.hash(this.password, 8, (err, hash) => {
        if(err) return next(err);

        this.password = hash;
        next();
    })
})

userSchema.methods.checkPassword = function (pass) {
    const passwordHash = this.password

    return new Promise ((resolve, reject) => {
        bcrypt.compare(pass, passwordHash, (err, same) => {
            if(err) return reject(err);

            resolve(same)
        })
    })
}

const User = mongoose.model("user", userSchema);

module.exports = User;