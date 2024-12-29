/*created by Kgtech 🕵
contact dev1 237656520674 ♻️
contact dev2 237650564445 ♻️
© Copy coder alert ⚠
*/




const axios = require('axios');
const { cmd, commands } = require('../command');

cmd({
    pattern: "dog",
    desc: "Fetch a random dog image.",
    category: "fun",
    react: "🐶",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://dog.ceo/api/breeds/image/random`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.message }, caption: '𝐓𝐀𝐊𝐀-𝐋𝐈𝐓𝐄 DOWNLOAD DOG 🐕 PICS\n\n\n> *🐕BY 𝐓𝐀𝐊𝐀-𝐋𝐈𝐓𝐄🐕*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`Error Fetching Dog Image🤕: ${e.message}`);
    }
});
cmd({
    pattern: "cat",
    desc: "Fetch a random cat image.",
    category: "fun",
    react: "🐱",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // API URL to fetch a random cat image
        const apiUrl = `https://api.thecatapi.com/v1/images/search`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        // Send the cat image with a caption
        await conn.sendMessage(from, { image: { url: data[0].url }, caption: 'ᴛᴀᴋᴀ-ʟɪᴛᴇ DOWNLOAD CAT 🐈 PICS\n\n> *🐈BY ᛕ꠸ꪀᧁꪻꪖᛕꪖ🐈*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`Error Fetching Cat Image 🤕: ${e.message}`);
    }
});