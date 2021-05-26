const Discord = require('discord.js')
const {PREFIX} = require('../ayarlar.json')
module.exports = {
  name: "help",
  description: "yardım", 
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription(
    `
\`${PREFIX}play <şarkı-adı>\` : **Bir Şarkıyı Oynatır.** \n
\`${PREFIX}next\` : **Sıradaki şarkıyı atlar.**\n
\`${PREFIX}loop\` : **Çalan şarkıyı sürekli tekrarlar.**\n
\`${PREFIX}pause\` : **Şarkıyı durdurur.**\n
\`${PREFIX}resume\` : **Duran şarkıyı devam ettirir.**\n
\`${PREFIX}queue\` : **Şarkı sırasını gösterir.**\n
\`${PREFIX}np\` : **Oynatılan şarkının adını söyler.**\n



`)
                       .setColor("ff0a0a")
                      )    
}
} 
