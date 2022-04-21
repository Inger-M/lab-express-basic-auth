const express = require('express');
const router = new express.Router();
const User = require('./../models/user');
const bcryptjs = require('bcryptjs');

//home page
router.get('/', (req, res, next) => {
  res.render('index');
});

//login page
router.get('/login', (req, res) => {
  res.render('login');
});

//signup page
router.get('/signup', (req, res) => {
  res.render('signup');
});

//sign up post to database
router.post('/signup', (req, res, next) => {
  const { name, username, password } = req.body;
  console.log(req.body);
  bcryptjs
    .hash(password, 10)
    .then((passwordHashAndSalt) => {
      return User.create({
        name,
        username,
        passwordHashAndSalt
      });
    })
    .then((user) => {
      //req.session.userId = user._id;
      res.redirect('/login');
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
