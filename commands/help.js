const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╔════════════════════════════════════╗
║                                    ║
║   *🤖 ${settings.botName || '𝕊𝔓𝔄ℂ𝔈 𝕏 𝕄𝔇 𝔹𝕆𝕻'}*
║   Version: *${settings.version || '3.0.0'}*
║   by ${settings.botOwner || 'precieux Labs'}
║   YT: ${global.ytch}
║                                    ║
╚════════════════════════════════════╝

*✨ Available Commands ✨*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌐 *GENERAL COMMANDS*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
║ ► .help, .menu
║ ► .ping
║ ► .alive
║ ► .tts <text>
║ ► .owner
║ ► .joke
║ ► .quote
║ ► .fact
║ ► .weather <city>
║ ► .news
║ ► .attp <text>
║ ► .lyrics <song_title>
║ ► .8ball <question>
║ ► .groupinfo
║ ► .staff, .admins
║ ► .vv
║ ► .trt <text> <lang>
║ ► .ss <link>
║ ► .jid
║ ► .url

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👮‍♂️ *ADMIN COMMANDS*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
║ ► .ban @user
║ ► .promote @user
║ ► .demote @user
║ ► .mute <minutes>
║ ► .unmute
║ ► .delete, .del
║ ► .kick @user
║ ► .warnings @user
║ ► .warn @user
║ ► .antilink
║ ► .antibadword
║ ► .clear
║ ► .tag <message>
║ ► .tagall
║ ► .tagnotadmin
║ ► .hidetag <message>
║ ► .chatbot
║ ► .resetlink
║ ► .antitag <on/off>
║ ► .welcome <on/off>
║ ► .goodbye <on/off>
║ ► .setgdesc <description>
║ ► .setgname <name>
║ ► .setgpp (reply to image)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔒 *OWNER COMMANDS*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
║ ► .mode <public/private>
║ ► .clearsession
║ ► .antidelete
║ ► .cleartmp
║ ► .update
║ ► .settings
║ ► .setpp <reply to image>
║ ► .autoreact <on/off>
║ ► .autostatus <on/off>
║ ► .autotyping <on/off>
║ ► .autoread <on/off>
║ ► .anticall <on/off>
║ ► .pmblocker <on/off>
║ ► .setmention <reply to msg>
║ ► .mention <on/off>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎨 *IMAGE & STICKER COMMANDS*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
║ ► .blur <image>
║ ► .simage <reply to sticker>
║ ► .sticker <reply to image>
║ ► .removebg
║ ► .remini
║ ► .crop <reply to image>
║ ► .tgsticker <link>
║ ► .meme
║ ► .take <packname>
║ ► .emojimix <emj1>+<emj2>
║ ► .igs <insta link>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🖼️ *PIE COMMANDS*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
║ ► .pies <country>
║ ► .china, .indonesia, .japan, .korea, .hijab

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎮 *GAME COMMANDS*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
║ ► .tictactoe @user
║ ► .hangman
║ ► .guess <letter>
║ ► .trivia
║ ► .answer <answer>
║ ► .truth
║ ► .dare

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🤖 *AI COMMANDS*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
║ ► .gpt <question>
║ ► .gemini <question>
║ ► .imagine <prompt>
║ ► .flux <prompt>
║ ► .sora <prompt>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 *FUN COMMANDS*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
║ ► .compliment @user
║ ► .insult @user
║ ► .flirt
║ ► .shayari
║ ► .goodnight
║ ► .roseday
║ ► .character @user
║ ► .wasted @user
║ ► .ship @user
║ ► .simp @user
║ ► .stupid @user [text]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔤 *TEXT MAKER*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
║ ► .metallic, .ice, .snow, .impressive
║ ► .matrix, .light, .neon, .devil, .purple
║ ► .thunder, .leaves, .1917, .arena
║ ► .hacker, .sand, .blackpink, .glitch, .fire

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📥 *DOWNLOADER*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
║ ► .play <song_name>
║ ► .song <song_name>
║ ► .spotify <query>
║ ► .instagram <link>
║ ► .facebook <link>
║ ► .tiktok <link>
║ ► .video <song name>
║ ► .ytmp4 <link>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧩 *MISC COMMANDS*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
║ ► .heart, .horny, .circle, .lgbt, .lolice
║ ► .namecard, .oogway, .tweet, .ytcomment
║ ► .comrade, .gay, .glass, .jail, .passed, .triggered

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎬 *ANIME COMMANDS*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
║ ► .nom, .poke, .cry, .kiss, .pat
║ ► .hug, .wink, .facepalm

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💻 *GITHUB COMMANDS*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
║ ► .git, .github, .sc, .script, .repo

╔════════════════════════════════════╗
║  *📢 Join our channel for updates!*  ║
║     *Thank you for using me!* 💙   ║
╚════════════════════════════════════╝`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.png');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363422932202026@newsletter',
                        newsletterName: 'C   ',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363422932202026@newsletter',
                        newsletterName: '𝕊𝔓𝔄ℂ𝔈 𝕏 𝕄𝔇 𝔹𝕆𝕻 by precieux Labs',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;


