/**
 * Configuration du bot
 */
 const {Client, Collection} = require("discord.js");
 const {loadCommands, loadEvents} = require("./util/loader.js")
 const {BOT_TOKEN} = require("./config.js"); //pour savoir sur quel bot utiliser le code

 /**
  * Initialisation du bot
  * client represente le bot afin de reagir avec l API Discord
  */
 const bot = new Client();

 //création des listes de collection => Stockage
 ["commands","cooldowns"].forEach(array => bot[array] = new Collection());
 
 loadCommands(bot);
 loadEvents(bot);
   //permet de se connecter au bot
   bot.login(BOT_TOKEN);
