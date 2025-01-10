const { copy } = require('fs-extra')
const config = require('../config')
const os = require('os')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, Func, fetchJson} = require('../lib/functions')
let cap = '> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®'
//=====================================================================================
cmd({
        pattern: "owner",
        react: "👨‍💻",
        alias: ["status"],
        desc: "Check bot owner cmd.",
        category: "other",
        use: '.owner',
        filename: __filename
    },
    async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply,react}) => {
    try{
        
    
    const rtime = await runtime(process.uptime())
    
    const txt =`👋*Hey* *${pushname}*,

> ʙᴏᴛ ɴᴀᴍᴇ : ᴅᴇɴᴇᴛʜ-ᴍᴅ
> ᴠᴇʀꜱɪᴏɴ : 1.0.0
> ʀᴜɴ ᴛɪᴍᴇ : ${runtime(process.uptime())}
> ᴘʟᴀᴛꜰᴏʀᴍ : ${hostname}
> ​🇨​​🇷​​🇪​​🇦​​🇹​​🇴​​🇷​ : ​🇩​​🇪​​🇳​​🇪​​🇹​​🇭​_​🇽​​🇩​

𝔍𝔬𝔦𝔫 𝔚𝔦𝔱𝔥 𝔐𝔢
🪀 ᴡʜᴀᴛꜱᴀᴘᴘ : https://whatsapp.com/channel/0029Vamo0kT2ER6qNXgykO0B
😺 ɢɪᴛʜᴜʙ : https://github.com/denethhansaka
♦ ʏᴏᴜᴛᴜʙᴇ : https://youtube.com/@Deneth_Hansaka_Keerthirathna
👨‍💻 ᴄᴏɴᴛᴀᴄᴛ : https://wa.me/94761864425

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®`
    
    let buttons = [{
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: 'Owner',
                    url: `https://wa.me/94774500937?text=*Hi_DENETH_XD🥵⃟💥⃝☙*`,
                    merchant_url: `https://wa.me/94774500937?text=*Hi_DENETH_XD🥵⃟💥⃝☙*`
          }),
      },

    
    ]
    
    let message = {
        image: config.LOGO,
      header: '',
      footer: config.FOOTER,
      
    
    
      body: txt
    
    }
    
    
    
    
    
    
    return await conn.sendButtonMessage(from, buttons, m, message)
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
    })
    
cmd({
        pattern: "alive",
        react: "👻",
        alias: ["online", "test", "bot"],
        desc: "Check bot online or no.",
        category: "other",
        use: '.alive',
        filename: __filename
    },
    async (conn, mek, m, {
        from,
        prefix,
        pushname,
        reply
    }) => {
        try {
            if (os.hostname().length == 12) hostname = 'replit'
            else if (os.hostname().length == 36) hostname = 'heroku'
            else if (os.hostname().length == 8) hostname = 'koyeb'
            else hostname = os.hostname()
            let monspace = '```'
            const sssf = `👋*Hey* *${pushname}* *I'm alive now.*

ＤＥＮＥＴＨ－ＭＤ Ｖ１

> ʙᴏᴛ ɴᴀᴍᴇ : ᴅᴇɴᴇᴛʜ-ᴍᴅ
> ᴠᴇʀꜱɪᴏɴ : 1.0.0
> ʀᴜɴ ᴛɪᴍᴇ : ${runtime(process.uptime())}
> ᴍᴇᴍᴏʀʏ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
> ᴘʟᴀᴛꜰᴏʀᴍ : ${hostname}

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®`

            let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: config.BTN,
                        url: config.BTNURL,
                        merchant_url: config.BTNURL
                    }),
                },
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "Menu",
                        id: ".menu"
                    }),
                }
            ]
            let opts = {
                image: config.LOGO,
                header: '',
                footer: config.FOOTER,
                body: sssf

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })

cmd({
        pattern: "rules",
        react: "🗿",
        alias: ["online", "test", "bot"],
        desc: "Check bot rules.",
        category: "other",
        use: '.rules',
        filename: __filename
    },
    async (conn, mek, m, {
        from,
        prefix,
        pushname,
        reply
    }) => {
        try {
            if (os.hostname().length == 12) hostname = 'replit'
            else if (os.hostname().length == 36) hostname = 'heroku'
            else if (os.hostname().length == 8) hostname = 'koyeb'
            else hostname = os.hostname()
            let monspace = '```'
            const sssf = `🛑 𝗥𝗨𝗟𝗘𝗦 𝗢𝗙 𝗗𝗘𝗡𝗘𝗧𝗛-𝗠𝗗 🛑

> ʙᴏᴛ ɴᴀᴍᴇ : ᴅᴇɴᴇᴛʜ-ᴍᴅ
> ᴠᴇʀꜱɪᴏɴ : 1.0.0
> ʀᴜɴ ᴛɪᴍᴇ : ${runtime(process.uptime())}
> ᴘʟᴀᴛꜰᴏʀᴍ : ${hostname}

• ᴅᴏɴ'ᴛ ꜱᴇɴᴅ ꜱᴘᴀᴍ ᴍᴇꜱꜱᴀɢᴇꜱ ᴀɴᴅ ʙᴜɢꜱ ᴛᴏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ.
• ᴏᴛʜᴇʀ ʙᴏᴛꜱ ᴀʀᴇ ɴᴏᴛ ᴀʟʟᴏᴡᴇᴅ.
• ᴅᴏɴ'ᴛ ʙʟᴀᴍᴇ ᴛʜᴇ ʙᴏᴛ ᴡɪᴛʜ ʙᴀᴅ ᴡᴏʀᴅꜱ.
• ᴅᴏɴ'ᴛ ᴀꜱᴋ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ'ꜱ ꜱᴄʀɪᴘᴛ.
• ʟᴇᴛ ᴛʜᴇ ᴏᴡɴᴇʀ ᴋɴᴏᴡ ɪꜰ ᴛʜᴇʀᴇ ᴀʀᴇ ʙᴏᴛ'ꜱ ᴇʀʀᴏʀꜱ ᴀɴᴅ ʙᴜɢꜱ
    
𝚃𝚑𝚊𝚗𝚔𝚜 𝙵𝚘𝚛 𝚁𝚎𝚊𝚍𝚒𝚗𝚐 𝙱𝚘𝚝 𝚁𝚞𝚕𝚎𝚜

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®`

            let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: config.BTN,
                        url: config.BTNURL,
                        merchant_url: config.BTNURL
                    }),
                },
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "DENETH-MD",
                        id: ".alive"
                    }),
                }
            ]
            let opts = {
                image: config.LOGO,
                header: '',
                footer: config.FOOTER,
                body: sssf

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })
    
    cmd({
        pattern: "animes",
        react: "😽",
        alias: ["status"],
        desc: "Check bot system status.",
        category: "anime",
        use: '.animes',
        filename: __filename
    },
    async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply,react}) => {
    try{
        
    
    const rtime = await runtime(process.uptime())
    
    const txt =`💭ᴄᴏᴍᴍᴀɴᴅ : ᴀɴɪᴍᴇ
📃ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : ʏᴏᴜ ᴄᴀɴ ɢᴇᴛ ᴀɴɪᴍᴇ ɪᴍᴀɢᴇꜱ.
💡ᴜꜱᴇ: .ᴀɴɪᴍᴇ

💭ᴄᴏᴍᴍᴀɴᴅ : ᴀɴɪᴍᴇᴇɢ
📃ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : ʏᴏᴜ ᴄᴀɴ ꜱᴇᴀʀᴄʜ ᴀɴɪᴍᴇꜱ.
💡ᴜꜱᴇ: .ᴀɴɪᴍᴇᴇɢ

💭ᴄᴏᴍᴍᴀɴᴅ : ʟᴏʟɪ
📃ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : ᴀɴɪᴍᴇ ᴄᴍᴅ.
💡ᴜꜱᴇ: .ʟᴏʟɪ

💭ᴄᴏᴍᴍᴀɴᴅ : ᴡᴀɪꜰᴜ
📃ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : ᴀɴɪᴍᴇ ᴄᴍᴅ.
💡ᴜꜱᴇ: .ᴡᴀɪꜰᴜ

💭ᴄᴏᴍᴍᴀɴᴅ : ɴᴇᴋᴏ
📃ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : ᴀɴɪᴍᴇ ᴄᴍᴅ.
💡ᴜꜱᴇ: .ɴᴇᴋᴏ

💭ᴄᴏᴍᴍᴀɴᴅ : ᴍᴇɢᴜᴍɪɴ
📃ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : ᴀɴɪᴍᴇ ᴄᴍᴅ.
💡ᴜꜱᴇ: .ᴍᴇɢᴜᴍɪɴ

💭ᴄᴏᴍᴍᴀɴᴅ : ᴍᴀɪᴅ
📃ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : ᴀɴɪᴍᴇ ᴄᴍᴅ.
💡ᴜꜱᴇ: .ᴍᴀɪᴅ

💭ᴄᴏᴍᴍᴀɴᴅ : ᴀᴡᴏᴏ
📃ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : ᴀɴɪᴍᴇ ᴄᴍᴅ.
💡ᴜꜱᴇ: .ᴀᴡᴏᴏ

💭ᴄᴏᴍᴍᴀɴᴅ : ᴀɴɪᴍᴇ1
📃ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : ᴀɴɪᴍᴇ ᴄᴍᴅ.
💡ᴜꜱᴇ: .ᴀɴɪᴍᴇ1

💭ᴄᴏᴍᴍᴀɴᴅ : ᴀɴɪᴍᴇ2
📃ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : ᴀɴɪᴍᴇ ᴄᴍᴅ.
💡ᴜꜱᴇ: .ᴀɴɪᴍᴇ2

💭ᴄᴏᴍᴍᴀɴᴅ : ᴀɴɪᴍᴇ3
📃ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : ᴀɴɪᴍᴇ ᴄᴍᴅ.
💡ᴜꜱᴇ: .ᴀɴɪᴍᴇ3

💭ᴄᴏᴍᴍᴀɴᴅ : ᴀɴɪᴍᴇ4
📃ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : ᴀɴɪᴍᴇ ᴄᴍᴅ.
💡ᴜꜱᴇ: .ᴀɴɪᴍᴇ4

💭ᴄᴏᴍᴍᴀɴᴅ : ᴀɴɪᴍᴇ5
📃ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : ᴀɴɪᴍᴇ ᴄᴍᴅ.
💡ᴜꜱᴇ: .ᴀɴɪᴍᴇ5

💭ᴄᴏᴍᴍᴀɴᴅ : ɴꜱꜰᴡ1
📃ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : ᴀɴɪᴍᴇ ᴄᴍᴅ.
💡ᴜꜱᴇ: .ɴꜱꜰᴡ1

💭ᴄᴏᴍᴍᴀɴᴅ : ɴꜱꜰᴡ2
📃ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : ᴀɴɪᴍᴇ ᴄᴍᴅ.
💡ᴜꜱᴇ: .ɴꜱꜰᴡ2

💭ᴄᴏᴍᴍᴀɴᴅ : ɴꜱꜰᴡ3
📃ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : ᴀɴɪᴍᴇ ᴄᴍᴅ.
💡ᴜꜱᴇ: .ɴꜱꜰᴡ3

💭ᴄᴏᴍᴍᴀɴᴅ : ɴꜱꜰᴡ4
📃ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : ᴀɴɪᴍᴇ ᴄᴍᴅ.
💡ᴜꜱᴇ: .ɴꜱꜰᴡ4

💭ᴄᴏᴍᴍᴀɴᴅ : ɴꜱꜰᴡ5
📃ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : ᴀɴɪᴍᴇ ᴄᴍᴅ.
💡ᴜꜱᴇ: .ɴꜱꜰᴡ5`
    
    let buttons = [
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "ᴀɴɪᴍᴇᴇɢ",
              id: ".animeeg"
          }),
      },
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "ʟᴏʟɪ",
              id: ".loli"
          }),
      },
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "ᴡᴀɪꜰᴜ",
              id: ".waifu"
          }),
      },
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "ɴᴇᴋᴏ",
              id: "neko"
          }),
      },
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "ᴍᴇɢᴜᴍɪɴ",
              id: ".megumin"
          }),
      },
            {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "ᴍᴀɪᴅ",
              id: "maid"
          }),
      },
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "ᴀᴡᴏᴏ",
              id: ".awoo"
          }),
      },
            {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "ᴀɴɪᴍᴇ 1",
              id: ".anime1"
          }),
      },
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "ᴀɴɪᴍᴇ 2",
              id: ".anime2"
          }),
      },
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "ᴀɴɪᴍᴇ 3",
              id: ".anime3"
          }),
      },
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "ᴀɴɪᴍᴇ 4",
              id: ".anime4"
          }),
      },
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "ᴀɴɪᴍᴇ 5",
              id: ".anime5"
          }),
      },
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "ɴꜱꜰᴡ 1",
              id: ".nsfw1"
          }),
      },
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "ɴꜱꜰᴡ 2",
              id: ".nsfw2"
          }),
      },
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "ɴꜱꜰᴡ 3",
              id: ".nsfw3"
          }),
      },
      {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: "ɴꜱꜰᴡ 4",
              id: ".nsfw4"
          }),
      },
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
            display_text: "ɴꜱꜰᴡ 5",
            id: ".nsfw5"
        }),
    },

    
    ]
    
    let message = {
        image: config.LOGO,
      header: '',
      footer: config.FOOTER,
      
    
    
      body: txt
    
    }
    
    
    
    
    
    
    return await conn.sendButtonMessage(from, buttons, m, message)
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
    })

cmd({
    pattern: "menu",
    react: "📜",
    alias: ["panel", "list", "commands", "cmd"],
    desc: "Get bot\'s command list.",
    category: "other",
    use: '.menu',
    filename: __filename
}, async (conn, mek, m, { from, pushname, reply }) => {
    try {
        let wm = `> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®`
        if (os.hostname().length == 12) hostname = 'replit'
        else if (os.hostname().length == 36) hostname = 'heroku'
        else if (os.hostname().length == 8) hostname = 'koyeb'
        else hostname = os.hostname()
        let monspace = '```'
        const MNG = `👋 *Hey, ${pushname}* 
        
ɪ'ᴍ ᴀɴ ᴀᴜᴛᴏᴍᴀᴛᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ. ɪ ᴄᴀɴ ʜᴇʟᴘ ʏᴏᴜ ᴡɪᴛʜ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅꜱ ʀᴇʟᴀᴛᴇᴅ ᴛᴏ ᴛʜᴇ ᴍᴇɴᴜ ᴏᴘᴛɪᴏɴ ʙᴇʟᴏᴡ.

> ʙᴏᴛ ɴᴀᴍᴇ : ᴅᴇɴᴇᴛʜ-ᴍᴅ
> ᴠᴇʀꜱɪᴏɴ : 1.0.0
> ʀᴜɴ ᴛɪᴍᴇ : ${runtime(process.uptime())}
> ᴘʟᴀᴛꜰᴏʀᴍ : ${hostname}

𝘗𝘳𝘦𝘴𝘴 𝘴𝘦𝘭𝘦𝘤𝘵 𝘢 𝘤𝘢𝘵𝘦𝘨𝘰𝘳𝘺 𝘣𝘶𝘵𝘵𝘰𝘯 𝘵𝘰 𝘰𝘱𝘦𝘯 𝘵𝘩𝘦 𝘮𝘦𝘯𝘶,
`

        const categories = [];
        const categoryMap = new Map();

        for (let i = 0; i < commands.length; i++) {
            const cmd = commands[i];
            if (!cmd.dontAddCommandList && cmd.pattern !== undefined) {
                const category = cmd.category.toUpperCase();
                if (!categoryMap.has(category)) {
                    categories.push(category);
                    categoryMap.set(category, []);
                }
                categoryMap.get(category).push(cmd.pattern);
            }
        }

        const rows = []
        for (const category of categories) {
            rows.push({
                header: '',
                title: `${category} MENU`,
                description: '',
                id: `.category ${category}`
            })
        }

        let buttons = [{
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: 'Info DENETH-MD',
                    url: `https://whatsapp.com/channel/0029Vamo0kT2ER6qNXgykO0B`,
                    merchant_url: `https://whatsapp.com/channel/0029Vamo0kT2ER6qNXgykO0B`
                }),
                  },
            {
                name: "single_select",
                buttonParamsJson: JSON.stringify({
                    title: 'Select A Category',
                    sections: [{
                        title: 'Please select a category',
                        highlight_label: 'ᴅᴇɴᴇᴛʜ-ᴍᴅ',
                        rows: rows
                    }]
                }),
            }
        ]

        let opts = {
            image: `https://github.com/denethhansaka/DENETH-MD-Files/blob/main/Images/DENETH-MD.jpg?raw=true`,
            header: '',
            footer: wm,
            body: MNG
        }

        return await conn.sendButtonMessage(from, buttons, m, opts)
    } catch (e) {
        reply('*Error !*')
        console.log(e)
    }
})

cmd({
    pattern: "category",
    dontAddCommandList: true,
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        let wm = '> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴠ1 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ®'
        const category = q.trim().toUpperCase();
        let commandList = ` ${category} ℭ𝔬𝔪𝔪𝔞𝔫𝔡 𝔏𝔦𝔰𝔱:\n\n`;

        for (let i = 0; i < commands.length; i++) {
            const cmd = commands[i];
            if (cmd.category.toUpperCase() === category) {
                commandList += ` • *${cmd.use}* \n`;
            }
        }

        commandList += `\n*TOTAL COMMANDS IN ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: commandList,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: 'https://whatsapp.com/channel/0029Vamo0kT2ER6qNXgykO0B',
      newsletterName: "DENETH-MD",
      serverMessageId: 1234
    },
externalAdReply: { 
title: 'ᴅᴇɴᴇᴛʜ-ᴍᴅ ᴠ1',
body: 'ᴀ ᴡᴏʀʟᴅ ᴘᴏᴡᴇʀꜰᴜʟʟ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://github.com/denethhansaka" ,
thumbnailUrl: 'https://github.com/denethhansaka/DENETH-MD-Files/blob/main/images/Main.jpg?raw=true' ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})
