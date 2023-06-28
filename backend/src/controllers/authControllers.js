const models = require("../models");

const getCandidateByEmailMiddleWare = (req, res, next) => {
  // We just wanna check if candidate exist with this mail
  const { email } = req.body;
  models.candidate
    .findByEmailWithPassword(email)
    .then(([candidates]) => {
      if (candidates[0]) {
        // if candidate exist, push it to req.candidate so we can access like req.candidate.id, req.candidate.firstname, etc
        [req.candidate] = candidates;
        next();
      } else {
        // If candidate with this mail doesnt exist
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
  getCandidateByEmailMiddleWare,
};
