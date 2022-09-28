const Discord = require('discord.js')
const { MessageEmbed, Client, MessageActionRow, MessageButton } = require('discord.js');
module.exports = {
  conf: {
    aliases: ["sil"],
    name: "clear"
  },
  run: async (client, message, args, embed) => {
    
 if (!message.member.permissions.has("ADMINISTRATOR")) return message.react(`${emoji2}`)
    
let emoji1 = client.emojis.cache.find(x => x.name === "yes") 
    let emoji2 = client.emojis.cache.find(x => x.name === "hayir") 
    
    const row = new MessageActionRow()
    .addComponents(

new MessageButton()
.setCustomId("1")
.setLabel("10")
.setStyle("DANGER"),
      
new MessageButton()
.setCustomId("2")
.setLabel("30")
.setStyle("DANGER"),
      
new MessageButton()
.setCustomId("3")
.setLabel("50")
.setStyle("DANGER"),

new MessageButton()
.setCustomId("4")
.setLabel("70")
.setStyle("DANGER"),

 new MessageButton()
.setCustomId("5")
.setLabel("100")
.setStyle("DANGER"),
);
  
  
let delete = new MessageEmbed()
.setDescription(`Merhabalar ${message.member.toString()}, aşağıdan kaç adet mesaj silineceğini seçebilirsin!`)
.setAuthor({ name: message.member.displayName, iconURL: message.member.displayAvatarURL({ dynamic: true }) })

let msg = await message.channel.send({ embeds: [delete], components : [row] })

var filter = (button) => button.user.id === message.author.id;
let collector = await msg.createMessageComponentCollector({ filter, time: 60000 })


      collector.on("collect", async (button) => {

    if (button.customId === '1') {
    
      await button.deferUpdate();
              message.channel.bulkDelete(10).catch(err => console.log(`Sunucuda Mesaj Silinirken Hata Oluştu! ${err}`)); 

       msg.edit({ components: [row] }); 

    }
})

collector.on("collect", async (button) => {

    if (button.customId === '2') {
await button.deferUpdate();

      message.channel.bulkDelete(30).catch(err => console.log(`Sunucuda Mesaj Silinirken Hata Oluştu! ${err}`)); 
        
      msg.edit({ components: [row] }); 

    }
    
})

collector.on("collect", async (button) => {

    if (button.customId === '3') {
        await button.deferUpdate();
        message.channel.bulkDelete(50).catch(err => console.log(`Sunucuda Mesaj Silinirken Hata Oluştu! ${err}`)); 
        msg.edit({ components: [row] }); 

    }
})

collector.on("collect", async (button) => {

    if (button.customId === '4') {
        await button.deferUpdate();
        message.channel.bulkDelete(80).catch(err => console.log(`Sunucuda Mesaj Silinirken Hata Oluştu! ${err}`)); 
        msg.edit({ components: [row] }); 

    }
})

    collector.on("collect", async (button) => {

    if (button.customId === '5') {
        await button.deferUpdate();
        message.channel.bulkDelete(100).catch(err => console.log(`Sunucuda Mesaj Silinirken Hata Oluştu! ${err}`)); 
        msg.edit({ components: [row] }); 

    }
})
    
}
}
