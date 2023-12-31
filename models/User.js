const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: false, minlength: 3, maxlength: 50 },
    email: { type: String, required: false, minlength: 3, maxlength: 50 },
    password: { type: String, required: false, minlength: 8, maxlength: 100 },
    admin: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User', userSchema);