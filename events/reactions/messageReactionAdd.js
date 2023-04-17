    const { verifVoteVillage,verifVoteLoup } = require("../../function/game/verifVote.js")
    const { start } = require("../../function/game/start.js")
    var nbJoueurTotal;
  /**
  * Fonction permettant de récupérer les ajouts de réactions sur un message
  * Mentionne le nom et tag du bot
  */
   module.exports = (bot, messageReaction, user) => {
    const emojis = require("../../function/emoji/emojis.json");
    const message = messageReaction.message;
    const membre = message.guild.members.cache.get(user.id);
    const emoji = messageReaction.emoji.name;
    const joueurLG = message.guild.roles.cache.get("786270289498865694");
    if (membre.user.bot) return;

    if([emojis["door"],emojis["white_check_mark"]].includes(emoji) && message.channel.id === '786269780147306566' && message.author.bot) {
        switch (emoji) {
            case emojis["door"]:
                membre.roles.add(joueurLG);
                message.channel.send(`${membre} Vous participerez à la prochaine partie !` );
                nbJoueurTotal = Number(messageReaction.count-1);
                break;
            case emojis["white_check_mark"]:
                start(message,nbJoueurTotal);
                break;
            }
        }
    if([emojis["1"],emojis["2"],emojis["3"],emojis["4"],emojis["5"],emojis["6"],emojis["7"],emojis["8"],emojis["9"],emojis["10"],emojis["11"],emojis["12"],emojis["13"],emojis["14"],emojis["15"],emojis["16"],emojis["17"],emojis["18"],emojis["19"],emojis["20"]].includes(emoji) && message.channel.id === '823251026399592519' && message.author.bot) {
        switch (emoji) {
            case emojis["1"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteVillage(message,nbVote,1)
                break;
            case emojis["2"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteVillage(message,nbVote,2)
                break;
            case emojis["3"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteVillage(message,nbVote,3)
                break;
            case emojis["4"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteVillage(message,nbVote,4)
                break;
            case emojis["5"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteVillage(message,nbVote,5)
                break;
            case emojis["6"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteVillage(message,nbVote,6)
                break;
            case emojis["7"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteVillage(message,nbVote,7)
                break;
            case emojis["8"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteVillage(message,nbVote,8)
                break;
            case emojis["9"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteVillage(message,nbVote,9)
                break;
            case emojis["10"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteVillage(message,nbVote,10)
                break;
            case emojis["11"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteVillage(message,nbVote,11)
                break;
            case emojis["12"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteVillage(message,nbVote,12)
                break;
            case emojis["13"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteVillage(message,nbVote,13)
                break;
            case emojis["14"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteVillage(message,nbVote,14)
                break;
            case emojis["15"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteVillage(message,nbVote,15)
                break;
            case emojis["16"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteVillage(message,nbVote,16)
                break;
            case emojis["17"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteVillage(message,nbVote,17)
                break;
            case emojis["18"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteVillage(message,nbVote,18)
                break;
            case emojis["19"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteVillage(message,nbVote,19)
                break;
            case emojis["20"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteVillage(message,nbVote,20)
                break;
        }
    }
    if([emojis["1"],emojis["2"],emojis["3"],emojis["4"],emojis["5"],emojis["6"],emojis["7"],emojis["8"],emojis["9"],emojis["10"],emojis["11"],emojis["12"],emojis["13"],emojis["14"],emojis["15"],emojis["16"],emojis["17"],emojis["18"],emojis["19"],emojis["20"]].includes(emoji) && message.channel.id === '786270690495430697' && message.author.bot) {
        switch (emoji) {
            case emojis["1"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteLoup(message,nbVote,1)
                break;
            case emojis["2"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteLoup(message,nbVote,2)
                break;
            case emojis["3"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteLoup(message,nbVote,3)
                break;
            case emojis["4"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteLoup(message,nbVote,4)
                break;
            case emojis["5"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteLoup(message,nbVote,5)
                break;
            case emojis["6"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteLoup(message,nbVote,6)
                break;
            case emojis["7"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteLoup(message,nbVote,7)
                break;
            case emojis["8"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteLoup(message,nbVote,8)
                break;
            case emojis["9"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteLoup(message,nbVote,9)
                break;
            case emojis["10"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteLoup(message,nbVote,10)
                break;
            case emojis["11"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteLoup(message,nbVote,11)
                break;
            case emojis["12"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteLoup(message,nbVote,12)
                break;
            case emojis["13"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteLoup(message,nbVote,13)
                break;
            case emojis["14"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteLoup(message,nbVote,14)
                break;
            case emojis["15"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteLoup(message,nbVote,15)
                break;
            case emojis["16"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteLoup(message,nbVote,16)
                break;
            case emojis["17"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteLoup(message,nbVote,17)
                break;
            case emojis["18"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteLoup(message,nbVote,18)
                break;
            case emojis["19"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteLoup(message,nbVote,19)
                break;
            case emojis["20"]:
                nbVote = Number(messageReaction.count-1)
                verifVoteLoup(message,nbVote,20)
                break;
        }
    }
}