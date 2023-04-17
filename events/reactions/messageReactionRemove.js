  /**
  * Fonction permettant de récupérer les enlevement de réactions sur un message
  * Mentionne le nom et tag du bot
  */
   module.exports = (bot, messageReaction, user) => {
    const emojis = require("../../function/emoji/emojis.json");
    const message = messageReaction.message;
    const membre = message.guild.members.cache.get(user.id);
    const emoji = messageReaction.emoji.name;
    const channel = message.guild.channels.cache.find(c => c.id === '786269780147306566');
    const joueurLG = message.guild.roles.cache.get("786270289498865694")

    if (membre.user.bot) return;

    if([emojis["door"],emojis["white_check_mark"]].includes(emoji) && message.channel.id === channel.id && message.author.bot) {
        switch (emoji) {
            case emojis["door"]:
                membre.roles.remove(joueurLG);
                message.channel.send(`${membre} Vous ne participerez plus à la prochaine partie... ;(` );
                nbjoueurTotal = Number(messageReaction.count-1);
                break;
        }
    }
}