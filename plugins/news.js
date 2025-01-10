const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const Esana = require('@sl-code-lords/esana-news')
var api = new Esana()

var tmsg = "It Gives WhatsApp Beta News."


cmd({
    pattern: "wabeta",
    alias: ["wabetainfo","betawa"],
    react: "✔️",
    desc: tmsg,
    category: "news",
    use: '.wabeta',
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const data = await fetchJson('https://api.maher-zubair.tech/details/wabetainfo')
let info = `*🥏 Title :* ${data.result.title}
*📅 Date :* ${data.result.date}
*🖥️ Platform :* ${data.result.updateFor}
*🔗 URL :* ${data.result.link}
*🗞️ Short Desc :*
${data.result.desc}

*ℹ️ FAQ*

*❓ Question :* ${data.result.QandA[0].question}
*👨🏻‍💻 Answer :* ${data.result.QandA[0].answer}

*❓ Question :* ${data.result.QandA[1].question}
*👨🏻‍💻 Answer :* ${data.result.QandA[1].answer}

*❓ Question :* ${data.result.QandA[2].question}
*👨🏻‍💻 Answer :* ${data.result.QandA[2].answer}

*❓ Question :* ${data.result.QandA[3].question}
*👨🏻‍💻 Answer :* ${data.result.QandA[3].answer}

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ SHAGEE-MD WHATHSAPP BOT®`
return await conn.sendMessage(from, { image: { url: data.result.image} , caption: info } , { quoted: mek })
} catch (e) {
console.log(e)
}
})

//=============================================================================================================================

cmd({
    pattern: "esana",
    react: '📰',
    desc: "To see esana news",
    category: "news",
    use: '.esana',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    const latst = await api.latest_id();
            const nws = latst.results.news_id
            let nn = q || nws
            const ress = await api.news(nn);
            const res = ress.results;

            const txt2 = await conn.sendMessage(from, {image: 
	    {url: res.COVER},caption: `\n┃◉⇨ 𝚃𝙸𝚃𝙻𝙴 :${res.TITLE}\n\n┃◉⇨ 𝙳𝙰𝚃𝙴 :${res.PUBLISHED}\n\n┃◉⇨ 𝚄𝚁𝙻 :${res.URL}\n\n┃◉ ⇨ 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽 : ${res.DESCRIPTION}\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®\n\n`},
			{ quoted: mek });
await conn.sendMessage(from, { react: { text: `🗞️`, key: mek.key }}) 
} catch (e) {
reply()
console.log(e)
}
})       

//=======================================================================================================

cmd({
    pattern: "ios",
    alias: ["apple","applenews"],
    react: "🍎",
    desc: "It gives IOS news.",
    category: "news",
    use: '.ios',
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const data = await fetchJson('https://api.maher-zubair.tech/details/ios')
let info = `*📃 Title :* ${data.result.title}
*🕒 Time:* ${data.result.time} 
*⛓️ Link:* ${data.result.link}
*📚 Description:* ${data.result.desc}

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ SHAGEE-MD WHATHSAPP BOT®
`
return await conn.sendMessage(from, { image: { url: data.result.images} , caption: info } , { quoted: mek })
} catch (e) {
console.log(e)
}
})

//================================================================================================================

cmd({
    pattern: "technews",
    alias: ["tech","gadgets360"],
    react: "📡",
    desc: "It gives Tech news.",
    category: "news",
    use: '.technews',
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const data = await fetchJson('https://api.maher-zubair.tech/details/tnews')
let info = `*📃 Title :* ${data.result.title}
*⛓️ Link:* ${data.result.link}
*📚 Description:* ${data.result.desc}

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ SHAGEE-MD WHATHSAPP BOT®
`
return await conn.sendMessage(from, { image: { url: data.result.img} , caption: info } , { quoted: mek })
} catch (e) {
console.log(e)
}
})

//=================================================================================================================

cmd({
    pattern: "derana",
    alias: ["tvderana","derananews"],
    react: "📡",
    desc: "It gives derana news.",
    category: "news",
    use: '.derana',
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const data = await fetchJson('https://ada-derana-news-pink-venom.vercel.app')
let info = `*📃 Title :* ${data.title}
*⛓️ Link:* ${data.new_url}
*📅 Time :* ${data.time}
*📚 Description:* ${data.description}

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ SHAGEE-MD WHATHSAPP BOT®
`
return await conn.sendMessage(from, { image: { url: data.image} , caption: info } , { quoted: mek })
} catch (e) {
console.log(e)
}
})

//=================================================================================================================

cmd({
    pattern: "hiru",
    alias: ["hnews","hirunews"],
    react: "🍎",
    desc: "It gives hiru news.",
    category: "news",
    use: '.hnews',
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const data = await fetchJson('https://app-97e3fc0d-9aec-4ff1-a518-b7b72a127d7c.cleverapps.io/api/latest')
let info = `*📃 Title :* ${data.title}
*🕒 Time:* ${data.time} 
*⛓️ Id:* ${data.id}
*📚 Description:* ${data.desc}

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ SHAGEE-MD WHATHSAPP BOT®
`
return await conn.sendMessage(from, { image: { url: data.image} , caption: info } , { quoted: mek })
} catch (e) {
console.log(e)
}
})

//====================================================================================================================
