var nbLoupADistrib;
nbLoup= 0;
nbVil = 0;
var nbJoueuraDistrib;

//insique les roles a distribuer dans la partie en fonction des joueurs
const setNbJoueurForDistrib = (nbJoueurTotal) => {
    nbJoueuraDistrib = nbJoueurTotal;
    if (nbJoueurTotal < 7){
        nbLoupADistrib = 1;
    }else{
        if (nbJoueurTotal < 12){
            nbLoupADistrib = 2;
        }else{
            if (nbJoueurTotal < 16){
                nbLoupADistrib = 3;
            }else{
                nbLoupADistrib = 4;
            }
        }
    }
    nbVil = nbJoueurTotal-nbLoupADistrib;
    nbLoup = nbLoupADistrib;
}

//distribue un role a un joueur
const distribution = (message,joueur) => {
    const loup = message.guild.roles.cache.get("786269956601806850");
    const villageois = message.guild.roles.cache.get("786270117154783253");
    if (nbLoupADistrib == 0){
        joueur.roles.add(villageois);
    }else{ 
        if (nbJoueuraDistrib*Math.random() <= nbLoup){
            joueur.roles.add(loup);
            nbJoueuraDistrib--;
            nbLoupADistrib--;
        }else{
            joueur.roles.add(villageois);
            nbJoueuraDistrib--;
        }
    }
}

module.exports = {
    setNbJoueurForDistrib,
    distribution,
}