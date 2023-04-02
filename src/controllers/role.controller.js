import db from '../database/models';

const Users = db.users;
const { Roles } = db;

class roleToSet {
  static async setRole(req, res) {
    const { email, role } = req.body;
    const user = await Users.findOne({ where: { email } });
    console.log(user);
    user.roleId = role;
    await user.save();
  }
}

export default roleToSet;
