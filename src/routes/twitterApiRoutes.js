const getAllTweets = require("../controllers/twitterApiContoller")

module.exports = function (app) {
  app.route("/trump")
  .get(getAllTweets.getTrumpTweets);

  app.route("/hillary")
  .get(getAllTweets.getHillaryTweets);
};
