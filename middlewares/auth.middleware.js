const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    const decoded = jwt.verify(token, "nidhi");
    if (decoded) {
      req.body.userID = decoded.userID;
      next();
    } else {
      res.send({ msg: "you are not authorized " });
    }
  } else {
    res.send({ msg: "you are not authorized " });
  }
};
// exporting authentication middleware
module.exports = { auth };
