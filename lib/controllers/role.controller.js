"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _models = _interopRequireDefault(require("../database/models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Users = _models.default.users;
const {
  Roles
} = _models.default;
class roleToSet {
  static async setRole(req, res) {
    const {
      email,
      role
    } = req.body;
    const user = await Users.findOne({
      where: {
        email
      }
    });
    console.log(user);
    user.roleId = role;
    await user.save();

    // Users.findOne({ where: { email } })
    //   .then((result) => {
    //     Users.roleId = role;
    //     // res.status(200).send(result);
    //     // console.log(result);
    //     return Users.save();
    //   });
  }
}
var _default = roleToSet;
exports.default = _default;