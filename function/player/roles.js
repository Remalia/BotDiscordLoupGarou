
//Remet les roles de partie a 0
const resetRoles=(message) => {
    const joueurLG = message.guild.roles.cache.get("786270289498865694");
    const mort = message.guild.roles.cache.get("823251231089623140");
    const loup = message.guild.roles.cache.get("786269956601806850");
    const villageois = message.guild.roles.cache.get("786270117154783253");
    mort.members.forEach(m => {
        m.roles.remove(mort);
    });
    joueurLG.members.forEach(m => {
        m.roles.remove(joueurLG);
        m.roles.remove(loup);
        m.roles.remove(villageois);
    });
}

module.exports = {
    resetRoles
}