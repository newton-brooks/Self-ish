var express = require('express');
var router = express.Router();
var db = require('../db/queries')
var passport = require('../auth/local')
const { loginRequired } = require("../auth/helpers");





/* GET users listing. */
router.post('/new', db.registerUser);
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json(req.user);
})
router.get('/logout',loginRequired, db.logoutUser)
router.get('/all', db.getAllUsers)
router.get('/getUser', loginRequired, db.getUser)
// router.get('/getFeed', loginRequired, db.getFeed)
module.exports = router;