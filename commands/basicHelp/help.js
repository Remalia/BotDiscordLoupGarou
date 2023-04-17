const { MessageEmbed, Message } = require("discord.js");
const { PREFIXE } = require("../../config.js");
const { readdirSync } = require("fs");
const { MESSAGES } = require("../../util/constants");
const categorieList = readdirSync('./commands');

//renvoie les commandes disponible et comment les utiliser
module.exports.run = (bot, message, args) => {
    if (!args.length) {
        const embed = new MessageEmbed()
            .setColor("#dc143c")
            .addField("Liste des commandes", `Affiche toutes les catégories et commandes disponibles. Pour plus d'informations sur une commande\,
             tapez \`${PREFIXE} help <command_name>\``)
        for (const categorie of categorieList) {
            embed.addField(
                `${categorie}`,
                `${bot.commands.filter(category => category.help.categorie === categorie.toLowerCase()).map(commande => commande.help.name).join(', ')}`
            );
        };
        return message.channel.send(embed);
    } else {
        const command = bot.commands.get(args[0]) || bot.commands.find(command => command.help.aliases && command.help.aliases.includes(args[0]));
        const embed = new MessageEmbed()
            .setColor("#dc143c")
            .setTitle(`\`${command.help.name}\``)
            .addField("Description", `${command.help.description} (cd: ${command.help.cooldown} secs)`)
            .addField("Utilisation", command.help.usage ? `${PREFIXE} ${command.help.name} ${command.help.usage}` : `${PREFIXE} ${command.help.name}`, true)

            if (command.help.aliases.length > 1) embed.addField("Alias", `${command.help.aliases.join(', ')}`, true);
            return message.channel.send(embed)
    }
}
module.exports.help = MESSAGES.COMMANDS.BASICHELP.HELP;
