const { addPlayerAlive,resetPlayerList } = require("../player/naminglist.js");
const { auto } = require("./gameAuto.js");
const { setNbJoueurForDistrib,distribution } = require("./distribution.js");

//Lance la partie si le nombre de joueur est suffisant
const start = (message,nbJoueurTotal) => {
    const joueurLG = message.guild.roles.cache.get("786270289498865694");
    const loup = message.guild.roles.cache.get("786269956601806850");
    const campLoup = message.guild.channels.cache.get("826906369215037490");
    if (nbJoueurTotal >= 4 && nbJoueurTotal <= 21){
        partieOn = true;
        resetPlayerList();
        message.channel.send(`La partie va commencer !`);
        nbJoueurAlive = nbJoueurTotal;
        setNbJoueurForDistrib(nbJoueurTotal);
        joueurLG.members.forEach(m => {
            distribution(message,m);
            addPlayerAlive(m.user.username)
        });
        message.delete();
        setTimeout(function(){
        message.channel.send(`Les personnes participant sont : ${joueurLG.members.map(m => m.user).join(' , ')}`)
            .then(async m => {
                    await auto(message);
                    await campLoup.send(`${loup.members.map(m => m.user).join(' , ')} vous êtes le(s) loup(s) de cette partie !`);
            });
        },2000);
    }else{
        if(nbJoueurTotal < 4){
            message.channel.send(`Il manque des joueurs pour commencer la partie (4 joueurs minimum)`);
        }else{
            message.channel.send(`Il y a trop de joueurs pour commencer la partie (20 joueurs maximum)`);
        }
    }
}

module.exports = {
    start,
}