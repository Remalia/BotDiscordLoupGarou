const { resetRoles } = require("../player/roles.js");
gameIsFinish = false;
isVilWin = false;

//Vérifie si une partie est finis ou non
const verifFinish=(nbLoup, nbVil) => {
    if(nbLoup >= nbVil){
        gameIsFinish = true;
        isVilWin = false;
    }
    if (nbLoup == 0){
        gameIsFinish = true;
        isVilWin = true;
    }
    return gameIsFinish;
}
//Envoie le message pour indiquer la fin de partie.
const finish=(message) => {
    const village = message.guild.channels.cache.get("786270592944308284");
    if (isVilWin){
        village.send(`La partie est terminée ! Le camp des villageois a gagné` );
    }else{
        village.send(`La partie est terminée ! Le camp des loups a gagné` );
    }
    resetRoles(message);
    partieOn = false;
    gameIsFinish = false;
    alreadySent = true;
}
module.exports = {
    verifFinish,
    finish,
}