const Discord = require('discord.js')

module.exports = {
    name:"help",
    run: async(client, message, args) => {
     
     message.channel.send(new Discord.MessageEmbed()
     .setColor('RED')
      .setTitle("information for commands")
     .setDescription(`/`credits/` Show your balance or somemone
     /`daily/`claim your daily reward
     /`trans/`transefr your balance to somemone`)
                         .setFooter(`${client.user.tag}`))
       
    }
}

//Made by Привет ⁞ 💘ֆ ⁽ʜɪᴇ ⁞ ⁾↵⇣℡#2000
