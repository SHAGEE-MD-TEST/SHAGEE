const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const fs = require('fs-extra')
const axios = require('axios')
const cheerio = require('cheerio')
const fetch = require('node-fetch')
let needus = "*Please give me a tiktok url!*" 

//========================================================================================
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
    console.error("Error fetching data:", error);
  }
}
//==================================================================

cmd({
    pattern: "tt",
    alias: ["tiktok"],
    react: '💫',
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply(needus)
let res = await fetchJson('https://api.tiklydown.eu.org/api/download?url='+q)
let wm = `> ᴘᴏᴡᴇʀᴇᴅ ʙʏ SHAGEE-MD ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®`
const msg = `ＴＩＫＴＯＫ ＤＬ
 *• Title :* ${res.title}
 *• Date:* ${res.created_at}
 *• Duration :* ${res.video.duration}

`

                let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Watch on TikTok',
                        url: q,
                        merchant_url: q
                    }),
                },
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "Without Watermark",
                        id: ".ttdl " +res.video.noWatermark
                    }),
                },
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "With Watermark",
                        id: ".ttdl " +res.video.watermark
                    }),
                },
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "Audio",
                        id: ".tikmp3 " +res.music.play_url
                    }),
                }
                ]
                let message = {
                    image: res.video.cover,
                    header: '',
                    footer: wm,
                    body: msg

                }
                return conn.sendButtonMessage(from, buttons, m, message)
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
} catch (e) {
      if (!q) return reply('🚩 *Please give me words to search*')
      const data = await dlPanda(q)
      let wm = `> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®`
      if (0 === data.video.length)
      for (let i = 0; i < data.image.length; i++) await conn.sendMessage(from, { image: { url: data.image[i].src }, caption: wm }, { quoted: mek })
      else
      for (let i = 0; i < data.video.length; i++) await conn.sendMessage(from, { video: { url: data.video[i].src }, caption: wm }, { quoted: mek })
console.log(e)
}
})
//===========================================================================
cmd({
    pattern: "ttdl",
    alias: ["tiktokdl"],
    react: '💫',
    dontAddCommandList: true,
    use: '.tt1 <tiktok link>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply(needus)
let wm = `> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅSHAGEE-MD ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®`
await conn.sendMessage(from, { video: { url: q }, caption: wm}, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
} catch (e) {
reply('*Error !*')
console.log(e)
}
})
//==============================================================================

cmd({
    pattern: "tikmp3",
    alias: ["tiktokmp3"],
    react: '💫',
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply(needus)
conn.sendMessage(from , { audio : { url : q  } ,mimetype: 'audio/mpeg' } , { quoted: mek })
//conn.sendMessage(from, { audio: await getBuffer(q), mimetype: 'audio/mpeg' }, { quoted: mek })
} catch (e) {
reply('*Error !*')
console.log(e)
}
})
