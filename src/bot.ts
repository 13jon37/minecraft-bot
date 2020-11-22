const Discord = require('discord.js')

const bot = new Discord.Client()

const ping = require('minecraft-server-util')

const token = ''

const PREFIX = '!'

bot.on('ready', () => {
    console.log('Bot online.')
})

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(' ')

    switch(args[0]) {
        case 'mc':
            ping.status('nullisblack.mooo.com', { port: 25565, enableSRV: true, timeout: 5000, protocolVersion: 47 }) // These are the default options
                .then((response) => {
                    const Embed = new Discord.MessageEmbed()
                    .setTitle('Server Status')
                    .addField('Server IP', response.host)
                    .addField('Server Version', response.version)
                    .addField('Online Players', response.onlinePlayers)
                    .addField('Max Players', response.maxPlayers)
    
                    message.channel.send(Embed)
                 })
                .catch((error) => {
                    throw error;
            })
        break
    }
    
})

bot.login(token)