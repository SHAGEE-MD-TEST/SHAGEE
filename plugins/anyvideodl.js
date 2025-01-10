const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const axios = require('axios')
const cheerio = require('cheerio')
const fetch = require('node-fetch')

async function dlPanda(url) {
  try {
    const response = await fetch(`https://dlpanda.com/id?url=${url}&token=G7eRpMaa`),
      html = await response.text(),
      $ = cheerio.load(html),
      results = {
        image: [],
        video: []
      };
    return $("div.hero.col-md-12.col-lg-12.pl-0.pr-0 img, div.hero.col-md-12.col-lg-12.pl-0.pr-0 video").each(function() {
      const element = $(this),
        isVideo = element.is("video"),
        src = isVideo ? element.find("source").attr("src") : element.attr("src"),
        fullSrc = src.startsWith("//") ? "https:" + src : src;
      results[isVideo ? "video" : "image"].push({
        src: fullSrc,
        width: element.attr("width"),
        ...isVideo ? {
          type: element.find("source").attr("type"),
          controls: element.attr("controls"),
          style: element.attr("style")
        } : {}
      });
    }), results;
  } catch (error) {
    console.error("Error Fetching Data:", error);
  }
}
//==================================================================

cmd({
    pattern: "dlpanda",
    alias: ["tiktok2"],
    use: '.dlpanda <url>',
    react: "🍟",
    desc: "Search and DOWNLOAD VIDEOS from tiktok.",
    category: "download",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isMe) return await reply('🚩 You are not a premium user\nbuy via message to owner!!')
if (!q) return reply('🚩 *Please Give Me Words To Search*')
const data = await dlPanda(q)
let wm = `> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®`
    if (0 === data.video.length)
      for (let i = 0; i < data.image.length; i++) await conn.sendMessage(from, { image: { url: data.image[i].src }, caption: wm }, { quoted: mek })
    else
      for (let i = 0; i < data.video.length; i++) await conn.sendMessage(from, { video: { url: data.video[i].src }, caption: wm }, { quoted: mek })
} catch (e) {
    console.log(e)
  await conn.sendMessage(from, { text: '🚩 *Error !*' }, { quoted: mek } )
}
})
