const { MessageEmbed } = require("discord.js");
const { tirePlus } = require("../../function/emoji/afficheEmoji.js")
//Envoie le vote du Village
const envoieVoteVillage=(village) =>{
    emojichoise=0;
     const embed = new MessageEmbed()
     .setColor("#dc143c")
     .setTitle("VOTE")
     .addField('Players : ',allplayer)
     village.send(embed).then(async msgBot => {
          for (i=0; i < nbJoueurAlive; i++){
               await msgBot.react(tirePlus());
          }
          emojichoise=0;
     });
}

//Envoie le vote des loups
const envoieVoteLoup=(campLoup) => {
    emojichoise=0;
     const embed = new MessageEmbed()
     .setColor("#dc143c")
     .setTitle("VOTE")
     .addField('Players : ',allplayer)
     campLoup.send(embed).then(async msgBot => {
          for (i=0; i < nbJoueurAlive; i++){
               await msgBot.react(tirePlus());
          }
          emojichoise=0;
     });
}

module.exports = {
    envoieVoteVillage,
    envoieVoteLoup,
}

