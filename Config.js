const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['254700437079']
global.ownername = "A thug𓅃"//owner name
global.ytname = "YT: Thug Md"
global.socialm = "GitHub: victorthug"
global.location = "Kenyan"

global.botname = 'thug-𝐌𝐃' //name of the bot

//sticker details
global.stickername = 'thug𓅃'
global.packname = 'Sticker By'
global.author = 'thug Bot'
//console view/theme
global.themeemoji = '🧩'
global.wm = "thug botz inc."

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
    done: '*here you go!* \n\n*𓅃 thug Md 𓅃*\n\n*🧩 Bot link:* \nhttps://github.com/victorthug/Kish-MD\n',
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
