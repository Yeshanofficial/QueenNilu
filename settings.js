/*
===================================================================================================
💃 𝗤𝘂𝗲𝗲𝗻 𝗡𝗶𝗹𝘂 𝗕𝗼𝘁 𝗠𝗱 💃
   ____                           _   _ _ _       
  / __ \                         | \ | (_) |      
 | |  | |_   _  ___  ___ _ __    |  \| |_| |_   _ 
 | |  | | | | |/ _ \/ _ \ '_ \   | . ` | | | | | |
 | |__| | |_| |  __/  __/ | | |  | |\  | | | |_| |
  \___\_\\__,_|\___|\___|_| |_|  |_| \_|_|_|\__,_|
                                                  
                                                  BY Janiya
===================================================================================================
*/

const fs = require('fs')
const chalk = require('chalk')



//👇 if you need seen massage use " true "
global.READ_MASSAGE = 'true'
//👇 enable desable Girls Voice Reply
global.VOICE_REPLY =  'true'
// You Bots Owner Number 
global.owner = ['94725058757'] 
//👇 Your Caption ( Image Video )
global.cap = '© 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 @__Yeshan_Official_🎧♥️🍃)²⁰²³'
//👇 Do you want show time on your bio use "on" want desable use "off"
global.AUTO_BIO =  'off'
//👇 Inbox massage block PM block
global.INBOX_BLOCK =  'off'
//👇 Auto react 
global.AUTO_REACT =  'true'
//👇 Bad word Auto delete ( you must add bad words )
global.ANTI_BADWORD =  'true'
//👇 Your Bot Name
global.botnma =  '@__Yeshan_Official_Bot_🎧♥️🍃)' 
//👇 Your name
global.ownernma =  'Yeshan Basnayake' 
//👇 Sticker package name
global.packname =  '@Yeshan_Bro🐼⸙' 
//👇 Sticker Author Name
global.author =  '_Yeshan_' 
//👇 Kick And Auto Delete Group link Senders
global.antilink =  'true'
//👇 Inbox Block Massage 
global.INBOX_BLOCK_MSG = 'You Were Blocked !!!'
//👇 Owner React Imoji
global.OWNER_REACT =  '🐼'
global.BAD_KICK_MSG = '*Bad word Detected !*'
//👇 URL.button 1 name
global.BUTTON1 = 'My Whatsapp Bot Group ☠️♦️'
//👇 URL button 2 name
global.BUTTON2 = 'Contact Me 😙♥️'
//👇 Button 1 url 
global.BUTTON1_URL = 'https://chat.whatsapp.com/LtlKMQJ2L68LsXCQtBEfbO'
//👇 Button 2 url
global.BUTTON2_URL = 'https://youtube.com/c/Janithsadanuwan'
//👇 Your Add Massage 
global.ADD_MSG = '*✅ Success add Group*' 
//👇 Your Kick Massage 
global.KICK_MSG = '*✅ Success Remove from Group*' 
//👇 Song Download Massage 
global.SONG_DOWN = '```⬇️ Downloading Your Song By @Yeshan_Bro🐼⸙...```' 
//👇 Song Uplode massage 
global.SONG_UP = '```⬆️ Uploding Your Song By @Yeshan_Bro🐼⸙...```'
//👇 212 Number block
global.NUMBER_212_BLOCK = 'true'
//👇 Menu imoji 
global.MENU_IMOJI = '🥺|♥️'
//👇 Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/Colombo'
//👇 Removebg Api key
global.REMOVE_BG_API = 'UN5CqXp35xC2V97NPBd6Fvo5'
//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = process.env.SEX_VIDEO_DOWNLOAD || 'true'
//👇 Change Bot Language (English-' EN ', Sinhala , ' SI ' , Tamil - ' TL ')
global.LANG = 'EN'
//Alive logo
global.alivelogo = process.env.ALIVE_IMAGE || `https://i.ibb.co/Jzk5KKP/9f980a957a9033b30f21d73c48581c37-0.jpg`
//👇 Alive message
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || `_*Hi Dear I'm Alive Now...😙♥️*_

🌿꧇|꧇නු̷̭⃟බේ̽ සිත̶්͓⃔͢තම ය⃑න්̭̽න⃐ ම͓⃔͢ගේ හදව̭͓⃞ත ති̷ය⃦᷍න් 🍁⃮⃖මත⃢⃢̶ක☘️⃝⃮⃕⃔ පිටු⊱වක් ̶͢පෙර̳͢ළා꧇🧎‍♂️💔

*Type .menu For More Commands...🌚✌️*

@__Yeshan_Official_🎧♥️🍃)`
//👇 Welcome Mesaage
global.WELCOME = process.env.WELCOME || `හායි ඔයාව ගෲපට සාදරයෙන් පිලිගන්නවා..😙✌♥️
ඔයාගේ නම මොකක්ද..?😊♦️`
//👇 welcome image 
global.WELCOME_IMAGE = process.env.WELCOME_IMAGE || `https://i.ibb.co/XVmCZx3/IMG-20221104-210950.jpg`
//👇 Goodbye message 
global.GOODBYE = process.env.GOODBYE || `අහ්...බායි පරිස්සමින් පලයම්...😙🤟`
//👇 Good bye image
global.GOODBYE_IMAGE = process.env.GOODBYE_IMAGE || `https://i.ibb.co/Jzk5KKP/9f980a957a9033b30f21d73c48581c37-0.jpg`
//👇 Send Welcome ( true or false )
global.SEND_WELCOME = process.env.SEND_WELCOME || true
//👇 Send block command message (true or false )
global.BLOCK_CMD_MESSAGE_SEND = true
//👇 Desable PM Block
global.NO_BLOCK = ["94725058757"]







//MORE
global.zenzapi = '01ABEB1E11'
global.tiktokthub = 'https://telegra.ph/file/d83742c9e0a076364184e.jpg'
//other
global.pemilik = ['94725058757'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['94725058757'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = '_@Yeshan_Bro🐼⸙_' // Your name ඔබේ නම 
global.sessionName = 'session'
global.prefix = ['#','!','.'] 
global.sp = '🔵'


global.mess = {
    success: '✅ Done!',
    admin: '*Only admins can use this command !*',
    botAdmin: '*Please admin the bot first !*',
    owner: '*Sorry, this command is only for the owner !*',
    group: '*This command can only be used in groups !*',
    private: '*This command can only be used in Inbox !*',
    bot: '*This command can only be used by bot number !*',
    wait: '*♲ Please Wait ...*',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    BLOCK_CMD_MSG : '*⚠️ This Command is Block By Owner*',
    BLOCK : '',
    UNBLOCK : '',
    KICK : '',
    ADD : '',
    LEAVE : '',
    PROMOTE : '',
    DEMOTE : ''
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    




//global api
global.fbapi = 'dd79-1aeb-21a3'
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

global.thumb = fs.readFileSync('./Media/image/Nilu.jpg')
global.alivelogo = `https://te.legra.ph/file/3e57249993356ba15109f.jpg`
global.imgalive = fs.readFileSync('./Media/image/Nilu.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
