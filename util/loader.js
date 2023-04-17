const { readdirSync } = require("fs");

 //Permet de récupérer toutes les commandes dans fichier/fichier/file
 const loadCommands = (bot, dir = "./commands/") => {
    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

        for (const file of commands) {
            const getFileName = require(`../${dir}/${dirs}/${file}`);
            bot.commands.set(getFileName.help.name, getFileName);
            console.log(`Commande chargée : ${getFileName.help.name}`);
        };
    });
};
//Permet de récupérer tout les évenements dans fichier/fichier/file (les events sont les sorties du bot)
const loadEvents = (bot, dir = "./events/") => {
   readdirSync(dir).forEach(dirs => {
       const events = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

       for (const event of events) {
           const evnt = require(`../${dir}/${dirs}/${event}`);
           const evntName = event.split(".")[0];
           bot.on(evntName, evnt.bind(null, bot));
           console.log(`Evénement chargé : ${evntName}`);
       };
   });
};

module.exports = {
    loadCommands,
    loadEvents
}