const models = require("../models");

const getUserByEmailMiddleWare = (req, res, next) => {
  // We just wanna check if user exist with this mail
  const { email } = req.body;
  models.user
    .findByEmailWithPassword(email)
    .then(([users]) => {
      if (users[0]) {
        // if user exist, push it to req.user so we can access like req.user.id, req.user.firstname, etc
        [req.user] = users;
        next();
      } else {
        // If user with this mail doesnt exist
        console.warn("Mail doesnt exist");
        res.sendStatus(401);
      }
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

module.exports = {
  getUserByEmailMiddleWare,
};
