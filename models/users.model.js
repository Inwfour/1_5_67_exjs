const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, unique: true, required: true },
  age: { type: Number }
}, {
    timestamps: true
});

module.exports = mongoose.model('users', userSchema)