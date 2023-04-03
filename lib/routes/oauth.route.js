"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _passport = _interopRequireDefault(require("passport"));
require("../middleware/auth/passport.auth");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const route = (0, _express.default)();
route.get('/success', (req, res) => {
  res.render('pages/profile.ejs', {
    name: req.user.displayName,
    email: req.user.emails[0].value,
    pic: req.user.photos[0].value
  });
});
route.get('/auth/google', _passport.default.authenticate('google', {
  scope: ['email', 'profile']
}));
route.get('/auth/google/callback', _passport.default.authenticate('google', {
  failureRedirect: '/failed'
}), (req, res) => {
  res.redirect('/success');
});
var _default = route;
exports.default = _default;