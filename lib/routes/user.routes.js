"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _role = _interopRequireDefault(require("../controllers/role.controller"));
var _user = require("../controllers/user.controller");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import roles from './roles.routes';

const userRouter = _express.default.Router();

// Create a new Tutorial
userRouter.post('/signup', _user.verifyUser);
userRouter.get('/signup/:token', _user.createUser);
userRouter.post('/login', _user.login);
userRouter.post('/role', _role.default.setRole);
var _default = userRouter;
exports.default = _default;