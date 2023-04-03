

// import db from '../database/models';

// import JwtUtility from '../utils/jwt.util';

// const User = db.users;
// const googleSignUp = async (req, res) => {
//     const { value } = req.user.emails[0];
//     const { familyName, givenName } = req.user.name;
//     const newUser = {
//       firstname: familyName,
//       lastname: givenName,
//       email: value,
//       avatar: req.user.photos[0].value,
//       verified: true,
//     };
//     const { id, email } = await User.register(newUser);
//     const token = JwtUtility.generateToken({
//     id,
//     email,
//     });
//     return res.redirect(`/api/v1/users/callback?key=${token}`);
//   }

//   export default googleSignUp;
// import db from '../database/models';

// const User = db.users;
// // import dontenv from 'dontenv'

// // dotenv.config()
// // eslint-disable-next-line import/prefer-default-export
// export const googleLogin = async (req, res) => {
//   try {
//     const { user, token } = req.user;
//     // const { user, token } = req.body;
//     // console.log(req.headers)
//     const existingUser = await User.findOne({ where: { email: user.email } });
//     if (!existingUser) {
//       res
//         .status(302)
//         .json({ status: 'fail', message: 'user email not found'});
//       return;
//     }
//     if (existingUser) {
//       const roles = await User.findOne({
//         where: { id: existingUser.role },
//       });
//       req.body.role = roles.name;
//       res.set('Authorization', `Bearer ${token}`);
//       // eslint-disable-next-line consistent-return
//       return res.status(200).json({
//         status: 'success',
//         email: user.email,
//         id: user.id,
//         token,
//         role: roles.name,
//       });
//     }
//   } catch (err) {
//     // eslint-disable-next-line no-console
//     console.error(err);
//     // eslint-disable-next-line consistent-return
//     return res.status(500).json({
//       status: 'fail',
//       message: 'internal server error',
//     });
//   }
// };
"use strict";