class FeedItems {
  constructor(title, body, linkUrl, imageUrl) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
  }
}
//written in part by a very tired 15yo
module.exports = FeedItems;