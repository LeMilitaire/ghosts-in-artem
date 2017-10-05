'user strict';
var mongoose = require('mongoose'), User = mongoose.model('Users');

exports.list_users = function(req, res) {
    User.find({}, function(err, users) {
        if (err) {
            res.send(err);
        }else {
            res.json(users);
        };
    });
};

exports.create_user = function(req, res) {
    var new_user = new User(req.body);
    new_user.save(function(err, user) {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    });
};

exports.read_user = function(req, res) {
    User.findById(req.params.userId, function(err, user) {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    });
}

exports.delete_user = function(req, res) {
    user.remove({
        _id: req.params.userId
    }, function(err, user) {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'User successfully deleted' })
        }
    });
};
