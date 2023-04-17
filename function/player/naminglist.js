const { tirePlus } = require("../emoji/afficheEmoji");
allplayer = "";
//Ajoute un joueur a liste des joueurs en vie en affichant son emoji de vote 
const addPlayerAlive=(playerName) => {
    allplayer += playerName +` => ${tirePlus()}\n`
}
//Remet a 0 la liste de joueur en vie
const resetPlayerList=() => {
    allplayer="";
}
module.exports = {
    addPlayerAlive,
    resetPlayerList
}