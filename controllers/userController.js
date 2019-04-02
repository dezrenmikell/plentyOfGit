const express = require("express");
const User = require("../models/User.js");
const Stuff = require("../models/Stuff");
const router = express.Router();

router.get("/", (req, res) => {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => console.log(err));
});

router.post("/", (req, res) => {
  const newUser = new User(req.body.user);

  newUser
    .save()
    .then(user => {
      res.json(user);
    })
    .catch(err => console.log(err));
});

// /api/users/:userId
router.get("/:userId", (req, res) => {
  User.findById(req.params.userId)
    .then(user => {
      user.stuffs = user.stuffs.reverse();
      res.json(user);
    })
    .catch(err => console.log(err));
});

router.delete("/:userId", (req, res) => {
  User.findByIdAndRemove(req.params.userId).then(user => {
    user.save();
    res.json("200 status");
  });
});

router.post("/:userId/stuffs", (req, res) => {
  User.findById(req.params.userId).then(user => {
    const newStuff = new Stuff({});
    user.stuffs.push(newStuff);

    user.save().then(user => {
      res.json(newStuff);
    });
  });
});

router.delete("/:userId/stuffs/:stuffId", (req, res) => {
  User.findById(req.params.userId).then(user => {
    const filteredStuff = user.stuffs.filter(
      stuff => stuff._id.toString() !== req.params.stuffId
    );

    user.stuffs = filteredStuff;

    user.save().then(user => {
      user.stuffs = user.stuffs.reverse();
      res.json(user.stuffs);
    });
  });
});

router.patch("/:userId/stuffs/:stuffId", (req, res) => {
  User.findById(req.params.userId).then(user => {
    const update = req.body.stuff;
    const stuff = user.stuffs.id(req.params.stuffId);
    if (update.title) {
      stuff.title = update.title;
    }
    if (update.description) {
      stuff.description = update.description;
    }

    user.save().then(user => {
      user.stuffs = user.stuffs.reverse();
      res.json(user);
    });
  });
});

module.exports = router;
