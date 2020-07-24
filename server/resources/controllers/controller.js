var User = require("../models/model");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

exports.signup = (req, res, next) => {
  console.log(req.body);
  console.log(req.body.email);
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        fullName: req.body.fullName,
        password: hash,
        role: req.body.role,
      });
      console.log(user);
      user
        .save()
        .then(() =>
          res.status(201).json({ message: "User has been created !" })
        )
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "User NOT FOUND !" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Invalid password !" });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

const Guide = require("../models/model");
var selectAll = function (req, res) {
  Guide.find({}, function (err, items) {
    if (err) {
      console.log("error getting all the data from the DB");
    } else {
      res.send(items);
    }
  });
};
var add = function (req, res) {
  Guide.create(
    {
      name: req.body.name,
      description: req.body.description,
      age: req.body.age,
      gender: req.body.gender,
      languages: req.body.languages,
      city: req.body.city,
      show: true,
    },
    function (err, small) {
      if (err) console.log("error adding to the database");
      console.log("added successfully to the database");
      res.end();
    }
  );
};
var select = function (req, res) {
  Guide.find(
    {
      city: req.query.city,
      gender: req.query.gender,
      languages: { $in: [req.query.languages] },
    },
    (err, docs) => {
      res.send(docs);
    }
  );
};
var deleteAll = function () {
  Guide.deleteMany({}, function (err, succ) {
    if (err) console.log("error deleting all the items from the database");
    console.log("successfully deleted all the items from the database");
  });
};
var deleteOne = function (req, res) {
  Guide.deleteOne({ Todo: req.body.item }, function (err) {
    if (err) console.log("error deleting one item from the database ");
    console.log("successfully deleted one item from the database ");
    res.end();
  });
};
// var update = function (req, res) {
//   Item.updateOne({ Todo: req.body.old }, { $set: { Todo: req.body.new } }).then(
//     () => {
//       Item.find({}).then((data) => {
//         res.send(data);
//       });
//     }
//   );
// };

module.exports.deleteOne = deleteOne;
module.exports.deleteAll = deleteAll;
module.exports.add = add;
module.exports.selectAll = selectAll;
module.exports.select = select;
