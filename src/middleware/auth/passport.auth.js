/* eslint-disable prefer-arrow-callback */
import passport from 'passport';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import BcryptUtility from '../../utils/bcrypt.util';
import db from '../../database/models';

const User = db.users;
const generatePassword = () => {
  const length = 8;
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
};

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:8000/api/v1/auth/google/callback',
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      try {
        const user = await User.findOne({ where: { email: profile.email } });
        if (!user) {
          const password = generatePassword();
          const hashedPassword = await BcryptUtility.hashPassword(password);
          const newUser = {
            fullname: `${profile.given_name} ${profile.family_name}`,
            email: profile.email,
            password: profile.password || hashedPassword,
          };
          const theGoogleUser = await User.create(newUser);
          console.log(
            '***🟢The Google user is saved in our db!🟢***',
            theGoogleUser
          );
          done(null, theGoogleUser);
        } else {
          console.log('🚨The Google user is already saved in our db!🚨', user);
          done(null, user);
        }
      } catch (error) {
        console.log('Error happened on the User Profile: ', profile);
        if (error) {
          console.log(` 🔴 Error while Logging in user: ${error.message} 🔴`);
          console.log(error);
        } else {
          console.log('Unexpected error', error);
        }
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
