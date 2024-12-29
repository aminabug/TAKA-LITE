const { cmd } = require("../command");

cmd({
    pattern: "family",
    desc: "Kerm Family",
    category: "fun",
    react: "👨‍👩‍👧‍👦",
    filename: __filename
}, async (conn, mek, m, { reply }) => {
    const familyList = `
         *[ • 𝐓𝐀𝐊𝐀 𝖥𝖠𝖬𝖨𝖫𝖸 • ]*

    [ • 𝖣𝖠𝖬𝖤 𝐓𝐀𝐊𝐀: 🤣🤣 ]
       *•────────────•⟢*
                *𝖥𝖱𝖨𝖤𝖭𝖣’𝖲*
      *╭┈───────────────•*
      *│  ◦* *▢➠ LORD KERM*
      *│  ◦* *▢➠ CASSANDRA*
      *│  ◦* *▢➠ SAÏDA*
      *│  ◦* *▢➠ BRAYAN*
      *│  ◦* *▢➠ AMIR*
      *│  ◦* *▢➠ ÉMILIE*
      *│  ◦* *▢➠ LÉA*
      *│  ◦* *▢➠ YAYA*
      *│  ◦* *▢➠ 𝖱𝖠𝖯𝖧𝖠𝖤̈𝖫*
      *│  ◦* *▢➠ GREY*
      *│  ◦* *▢➠ RYAN*
      *│  ◦* *▢➠ BLANCHE*
      *│  ◦* *▢➠ KING ZE VIE*
      *│  ◦* *▢➠ RAHIM*
      *│  ◦* *▢➠ SEVEN*
      *│  ◦* *▢➠ FRANK*
      *│  ◦* *▢➠ SEBAS*
      *│  ◦* *▢➠ RHAMA*
      *│  ◦* *▢➠ ARTHUR*
      *╰┈───────────────•*
        *•────────────•⟢*
    `;

    try {
        // Envoi de la réponse avec l'image et la liste de la famille
        await conn.sendMessage(m.chat, {
            image: { url: "https://files.catbox.moe/i60346.jpeg" },
            caption: familyList.trim()
        }, { quoted: mek });
    } catch (error) {
        console.error(error);
        reply("❌ *An error occurred while fetching the family list. Please try again.*");
    }
});