const { MESSAGES } = require("../../util/constants");

//Permet de tester les performances du bot
module.exports.run = (bot, message, args) => {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`pong ! Ce message a ${timeTaken}ms de latence`);
}
module.exports.help = MESSAGES.COMMANDS.BASICHELP.PING;
