const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");
partieOn = false;

//Permet au utilisateur de demander une partie au bot
module.exports.run = (bot, message) => {
    emojichoise = 0
    if (!partieOn){
     const embed = new MessageEmbed()
     .setColor("#dc143c")
     .setTitle("PARTIE LOUP GAROU")
     .setThumbnail(bot.user.displayAvatarURL())
     .addFields(
        { name: 'Veuillez réagir avec l\'émoji : '+ "🚪", value: 'Si vous voulez rejoindre la partie', inline: false },
         { name: 'Veuillez réagir avec l\'émoji : '+ "✅", value: 'Si vous voulez lancer la partie', inline: false }
     )
     bot.channels.cache.get('786269780147306566').send(embed).then(async msgBot => {
            await msgBot.react("🚪");
            await msgBot.react("✅");
     });
    }
    else{
        message.reply(" Une partie est déjà en cours ! Patiente un peu :3")
    }
}
module.exports.help = MESSAGES.COMMANDS.LOUPGAROU.PARTIE;