const config = require('../config');
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const cheerio = require('cheerio')
const fetch = require('node-fetch')

var needus = "🚩*Please Give Me Facebook URL !*" 
var cantf = "🚩 *I Cant Find This Video!*" 

async function animeVideo() {
  const response = await fetch("https://shortstatusvideos.com/anime-video-status-download/"),
    html = await response.text(),
    $ = cheerio.load(html),
    videos = [];
  $("a.mks_button.mks_button_small.squared").each((index, element) => {
    const href = $(element).attr("href"),
      title = $(element).closest("p").prevAll("p").find("strong").text();
    videos.push({
      title: title,
      source: href
    });
  });
  const randomIndex = Math.floor(Math.random() * videos.length);
  return videos[randomIndex];
}


cmd({
    pattern: "status",
    alias: ["wastatus"],
    react: '💫',
    desc: "Download status videos.",
    category: "download",
    use: '.status',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let resl = await animeVideo()
let wm = `> ᴘᴏᴡᴇʀᴇᴅ ʙʏ SHAGEE MD ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®`
let cap = `📝 *Title:* ${resl.title}`
let newwm = `${cap}

${wm}
`
await conn.sendMessage(from, { video: { url: resl.source }, caption: newwm}, { quoted: mek })
} catch (e) {
reply(cantf)
console.log(e)
}
})
