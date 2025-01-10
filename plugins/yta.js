const config = require('../config')
const fg = require('api-dylux')
const fs = require('fs')
const {
    getBuffer,
    getGroupAdmins,
    getRandom,
    getsize,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson
} = require('../lib/functions')
const {
    cmd,
    commands
} = require('../command')
const ufs = require('../lib/ufs');

let foot = `> ᴘᴏᴡᴇʀᴇᴅ ʙʏ SHAGEE-MD ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®`

cmd({
    pattern: "audsong",
    react: "🎧",
    dontAddCommandList: true,
    filename: __filename
},

    async (conn, mek, m, { from, q, reply }) => {
        try {
           if (!q) return await reply('*Need a youtube url!*')
           	const fgdlyt = await fg.yta(q) 
		    let { title, dl_url, quality, size } = fgdlyt
		
           const sizeB = await ufs(dl_url)
		   if (sizeB >= config.MAX_SIZE * 1024 * 1024) return await conn.sendMessage(from, { text: '*This Video Too Big* 💥' }, { quoted: mek })
           if (sizeB <= 100 * 1024 * 1024) return conn.sendMessage(from, { audio: await getBuffer(dl_url), mimetype: 'audio/mpeg' }, { quoted: mek })
	       else conn.sendMessage(from, { document: await getBuffer(dl_url), mimetype: 'audio/mpeg', fileName: title + '.mp3', caption: foot}, { quoted: mek })
         } catch (e) {
	       console.log(e)
        }
    })

cmd({
    pattern: "docsong",
    react: "🎧",
    dontAddCommandList: true,
    filename: __filename
},

    async (conn, mek, m, { from, q, reply }) => {
        try {
           if (!q) return await reply('*Need a youtube url!*')
           	const fgdlyt = await fg.yta(q) 
		    let { title, dl_url, quality, size } = fgdlyt
		
           const sizeB = await ufs(dl_url)
           if (sizeB >= config.MAX_SIZE * 1024 * 1024) return await conn.sendMessage(from, { text: '*This Video Too Big* 💥' }, { quoted: mek })
	       else conn.sendMessage(from, { document: await getBuffer(dl_url), mimetype: 'audio/mpeg', fileName: title + '.mp3', caption: foot}, { quoted: mek })
        } catch (e) {
        console.log(e)
        }
    })
