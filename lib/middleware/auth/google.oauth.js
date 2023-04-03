"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.googleAuthCallback = exports.googleAuth = void 0;
var _passport = _interopRequireDefault(require("passport"));
var _passportGoogleOauth = require("passport-google-oauth20");
var _jwt = _interopRequireDefault(require("../../utils/jwt.util"));
var _models = _interopRequireDefault(require("../../database/models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// eslint-disable-next-line import/no-extraneous-dependencies

// eslint-disable-next-line import/no-extraneous-dependencies

// import google from 'googleapis';

const User = _models.default.users;
_passport.default.use(new _passportGoogleOauth.Strategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: 'http://localhost:8000/auth/google/callback',
  scope: ['profile', 'email']
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const user = {
      id: profile.id,
      email: profile.emails[0].value
    };
    // console.log('***THE USER***', user);

    const existingUser = await User.findOne({
      where: {
        email: user.email
      }
    });
    if (existingUser) {
      const token = await _jwt.default.generateToken(user);
      done(null, {
        user,
        token
      });
    } else {
      const newLoginUser = {
        fullname: `${profile.name.givenName} ${profile.name.familyName}`,
        email: profile.email,
        password: profile.password
      };
      // console.log('***THE NEW USER*** ', newLoginUser);
      const newUser = await User.create(newLoginUser);

      // const newUser = await User.create({

      //   fullname: `${profile.name.givenName} ${profile.name.familyName}`,
      //   email: profile.emails[0].value,
      //   // id: profile.id,

      //   // accessToken,
      //   // refreshToken,
      // });
      const token = await _jwt.default.generateToken(newUser);
      done(null, {
        user: newUser,
        token
      });

      // done(null, { user, token });
    }
  } catch (err) {
    done(err, null);
  }
}));
const googleAuth = _passport.default.authenticate('google', {
  scope: ['email', 'profile']
});
exports.googleAuth = googleAuth;
const googleAuthCallback = _passport.default.authenticate('google', {
  session: false
});
exports.googleAuthCallback = googleAuthCallback;