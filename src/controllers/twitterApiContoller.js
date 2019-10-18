const Twit = require("twit");
const config = require("../config");
const T = new Twit(config);


////////////////////// Trump's Tweets /////////////////

module.exports.getTrumpTweets = function(req,res){
    T.get("statuses/user_timeline",
     { screen_name: "realDonaldTrump" }, 
     function(
        err,
        data,
        response
      ) {
        res.json(data)
       
      });
}

//////////////////////Hillary's Tweets //////////////////

module.exports.getHillaryTweets = function(req,res){
    T.get("statuses/user_timeline",
    { screen_name: "HillaryClinton" }, 
    function(
       err,
       data,
       response
     ) {
       res.json(data)
     });

}