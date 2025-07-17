const FeedItems = require ('../model/feedItem')
let feedItem1 = new FeedItems('blah','fart','six','seven','fan','faith','mod1')
let feedItem2 = new FeedItems('bah','frt','si','even','an','fith','md1')
let feedItem3 = new FeedItems('bh','ft','i','een','n','fth','d1')


let feedItem = [feedItem1, feedItem2, feedItem3]


exports.getAllFeedItems = (req,res) => {
  console.log("blah")
  res.setHeader('content-type','application/json');
  res.send(JSON.stringify(feedItem));
}
//written in part by a very tired 15yo
