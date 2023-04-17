const {Collection} = require("discord.js");
const {PREFIXE} = require("../../config.js"); //pour savoir sur quel bot utiliser le code

module.exports = async (bot,message) => {
  /**
  * Fonction recuperant les messages envoyes
  */
//CAS OU LES MESSAGES NE SONT PAS PRIS EN COMPTE
//dans le cas ou le message ne commence pas par le prefixe ou que son auteur est un bot
    if (!message.content.startsWith(PREFIXE) || message.author.bot) return;

    //SEPARATION DES ARGUMENTS DE LA COMMANDE
    //on enleve le prefixe de la commande et les espaces autours de la commande (.trim()) puis on separe chaque arguments dans le tableau
    const args = message.content.slice(PREFIXE.length).trim().split(/ +/);
    //supprime le premier argument du tableau (soit le nom de la commande) et l affecte a commande
    const commandName = args.shift().toLowerCase();

    //récupère les commandes par leur noms ou leur aliases => associe l'aliase au nom
    const command = bot.commands.get(commandName) || bot.commands.find(command => command.help.aliases && command.help.aliases.includes(commandName));
    if (!command) return;
    //gère la mauvaise utilisation d'une commande
    if (command.help.args && !args.length) {
        let noArgsReply = `Nombre d'arguments insufisant pour cette commande, ${message.author}`;
    if (command.help.usage) noArgsReply += `\nPour utiliser la commande faites : \`${PREFIXE} ${command.help.name}${command.help.usage}\``
        return message.channel.send(noArgsReply);
    }

    if (!bot.cooldowns.has(command.help.name)) {
        //création d'un stockage pour chaque commande pour effectuer le cooldown
        bot.cooldowns.set(command.help.name, new Collection());
    }

    const timeNow = Date.now();
    const tStamps = bot.cooldowns.get(command.help.name);
    //Cooldown de base = 5000 milisecondes sinon value * 1000
    const cdValue = (command.help.cooldown || 5) * 1000;
    console.log(bot.cooldowns)
    //vérifie si l'utilisateur est en cooldown dans la collection d'attente
    if(tStamps.has(message.author.id)){
       const cdWait = tStamps.get(message.author.id) + cdValue;
       //Verification si il reste du cooldown
       if (timeNow , cdWait) {
           timeLeft = (cdWait - timeNow) / 1000;
           return message.reply (`Il vous reste ${timeLeft.toFixed(0)} seconde(s) avant de pouvoir réutiliser la commade \`${command.help.name}\``)
       }
    }
    //ajout de l'utilisateur dans la collection d'attente gérant les cooldowns
    tStamps.set(message.author.id, timeNow);
    //suppresion de l'utilisateur dans la collection d'attente pour les cooldowns si il est terminé
    setTimeout(() => tStamps.delete(message.author.id), cdValue);
    command.run(bot, message, args);
}