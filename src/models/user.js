const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true },
    dateTime: {type: Date, required: true, default: Date.now},
});
userSchema.methods.toJSON = function(){
    const {__v,_id,...data} = this.toObject();
    data.id = _id;
    return data;
}
const user = mongoose.model('users', userSchema);

module.exports = user;