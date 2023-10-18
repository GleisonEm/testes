var twitterUrl = require('twitter-url-parser')
var ytdl = require('ytdl-core')
var fs = require('fs')

function downloadVideo(url) {
    ytdl(url)
        .pipe(fs.createWriteStream('video.mp4'));
}

async function getVideoLink(tweetLink) {
    try {
        const info = await twitterUrl(tweetLink)
        console.log(info)
        const variants = info[0].video_info.variants
        const url = variants.filter(variant => variant.content_type === "video/mp4").sort((a, b) => b.bitrate - a.bitrate)[0].url
        downloadVideo(url)
    }
    catch (error) {
        console.error(error)
    }
}

getVideoLink('https://x.com/choquei/status/1714052293924970738?s=20')
