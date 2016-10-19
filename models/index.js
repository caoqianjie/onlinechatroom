var mongoose = require('mongoose');
mongoose.Promise = Promise;
//mongoose.connect('mongodb://123.57.143.189/zhufengchat');
//mongoose.connect('mongodb://localhost/zhufengchat');
mongoose.connect('mongodb://edward:1991cqj@ds061246.mlab.com:61246/chatroom');
exports.User = mongoose.model('User',require('./user'));
exports.Room = mongoose.model('Room',require('./room'));