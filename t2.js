// const { TwitterScraper } = require("@tcortega/twitter-scraper");

// // Tweet Metadata by tweet url.
// (async () => {
//     try {
//         const twtScraper = await TwitterScraper.create();
//         const tweetMeta = await twtScraper.getTweetMeta("https://twitter.com/ShouldHaveCat/status/1713842460567253493?s=20");
//         console.log(tweetMeta);
//     } catch (error) {
//         console.log(error);
//     }
// })();

const getTwitterMedia = require('get-twitter-media');
getTwitterMedia("https://twitter.com/choquei/status/1714052293924970738?s=20", {
    text: true
}).then((result) => {

    console.log(result);
});