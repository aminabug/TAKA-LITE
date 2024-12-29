/*created by Kgtech 🕵
contact dev1 237656520674 ♻️
contact dev2 237650564445 ♻️
© Copy coder alert ⚠
*/






const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *KG TECH🇨🇲*

> *TAKA-LITE REPO:*
*|* *https://github.com/Takatech85/TAKA-LITE*

> *SUPPORT GROUP:*
*|* *https://whatsapp.com/channel/0029Vark1I1AYlUR1G8YMX31*
*╰──────────────●●►*

> *CREATED BY KG TECH*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363321386877609@newsletter',
      newsletterName: "ᴛᴀᴋᴀ ᴄʜᴀɴɴᴇʟ",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'ᴛᴀᴋᴀ-ʟɪᴛᴇ' 
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/Takatech85/TAKA-LITE" ,
thumbnailUrl: "https://files.catbox.moe/bv9qgj.jpeg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
