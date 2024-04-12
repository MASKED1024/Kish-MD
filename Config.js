const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['254789072122']
global.ownername = "𝙆𝙞𝙨𝙝𓅃"//owner name
global.ytname = "YT: Kish Md"
global.socialm = "GitHub: Brashokish"
global.location = "Kenyan"

global.botname = '𝑲𝑰𝑺𝑯-𝐌𝐃' //name of the bot

//sticker details
global.stickername = '𝙆𝙞𝙨𝙝𓅃'
global.packname = 'Sticker By'
global.author = 'Kish Bot'
//console view/theme
global.themeemoji = '🧩'
global.wm = "Kish botz inc."

//theme link
global.link = 'https://chat.whatsapp.com/LhBwWwQAS4y93XOsCKpxdv'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = false //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = true //auto view status/story
global.always_online = true // always online



//reply messages
global.mess = {
    done: '*here you go!* \n\n*𓅃 Kish Md 𓅃*\n\n*🧩 Bot link:* \nhttps://github.com/Brashokish/Kish-MD\n',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
