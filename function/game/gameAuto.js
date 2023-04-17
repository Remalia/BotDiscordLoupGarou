const { verifFinish, finish } = require("./verifFinish.js");
const { envoieVoteLoup,envoieVoteVillage } = require("./envoieVote.js");

//Automatise la partie, se relance pour le moment qu'une partie n'est pas finis
const auto = (message) => {
    const village = message.guild.channels.cache.get("786270592944308284");
    const campLoup = message.guild.channels.cache.get("786270690495430697");
    if (!gameIsFinish) {
        setTimeout(function(){village.send("Le village s'endort, pour une longue et paisible nuit...").then(async m => {
            await setTimeout(function(){stepOne(village)},2000);
            await setTimeout(function(){stepTwo(campLoup)},2500);
            await setTimeout(function(){stepThree(village,message,campLoup)},30500);
            });
        },2000); 
    }else{
        finish(message);
    }
}

module.exports = {
    auto,
}
//Notifie le village de ce qui se passe
function stepOne(village){
    village.send("Les loups sont en train de choisir qui manger ce soir...");
}
//Envoie du vote de Loup garou + attente vote
function stepTwo(campLoup){
    envoieVoteLoup(campLoup);
    campLoup.send("Vous avez 30 secondes pour choisir votre cible !");
    setTimeout(function(){
        campLoup.send("Il vous reste 10 secondes pour choisir qui manger ce soir si ce n'est pas déjà fait...");
    },20000);
}

//Verification et affichage du vote de Loup garou au village
function stepThree(village,message,campLoup){
    const loup = message.guild.roles.cache.get("786269956601806850");
    const villageois = message.guild.roles.cache.get("786270117154783253");
    const voteChannel = message.guild.channels.cache.get("823251026399592519");
    setTimeout(function(){village.send("Le village se réveille...").then(async m => {
            if (pElimine){
                village.send(`Le joueur : ${mortLoup.user} a été mangé par les loups cette nuit !`).then(async m => {
                    pElimine = false;
                    var loupCount = 0;
                    var vilCount = 0;
                    loup.members.forEach(m =>{
                        loupCount++;       
                    })
                    villageois.members.forEach(m =>{
                        vilCount++;   
                    })
                    isfinish = verifFinish(loupCount,vilCount);
                    if (isfinish){
                        finish(message);
                    }else{
                        await setTimeout(function(){stepFour(voteChannel,message)},5500);
                        //Verification et affichage du vote du village au village
                        await setTimeout(function(){
                            if (pElimine){
                                setTimeout(function(){village.send(`Le joueur : ${mortVil.user} a été éliminé par le village`).then(async m =>{
                                    pElimine = false;
                                    var loupCount = 0;
                                    var vilCount = 0;
                                    loup.members.forEach(m =>{
                                        loupCount++;       
                                    })
                                    villageois.members.forEach(m =>{
                                        vilCount++;   
                                    })
                                    isfinish = verifFinish(loupCount,vilCount);
                                    if (isfinish){
                                        finish(message);
                                    }else{
                                     setTimeout(function(){auto(message)},5000);
                                    }
                                });},2000);
                            }else{
                                setTimeout(function(){village.send(`Le village n'a pas réussi à se décider. Personne ne sera tué aujourd'hui !`);},2000);
                                setTimeout(function(){auto(message)},5000);
                            }   
                        },66500);
                    }
                })
            }else{
                village.send(`Les loups n'ont pas réussi à se décider cette nuit, personne n'est mort`).then(async m => {
                    await setTimeout(function(){stepFour(voteChannel,message)},5500);
                    //Verification et affichage du vote du village au village
                    await setTimeout(function(){
                        if (pElimine){
                            setTimeout(function(){village.send(`Le joueur : ${mortVil.user} a été éliminé par le village`).then(async m =>{
                                pElimine = false;
                                var loupCount = 0;
                                var vilCount = 0;
                                loup.members.forEach(m =>{
                                    loupCount++;       
                                })
                                villageois.members.forEach(m =>{
                                    vilCount++;   
                                })
                                isfinish = verifFinish(loupCount,vilCount);
                                if (isfinish){
                                    finish(message);
                                }else{
                                 setTimeout(function(){auto(message)},5000);
                                }
                            });},2000);
                        }else{
                            setTimeout(function(){village.send(`Le village n'a pas réussi à se décider. Personne ne sera tué aujourd'hui !`);},2000);
                            setTimeout(function(){auto(message)},5000);
                        }   
                    },66500);
                })
            }
        
        })
    },2000);
}

//Envoie du vote de village + attente vote
function stepFour(voteChannel){
    envoieVoteVillage(voteChannel);
    voteChannel.send("\`/!\\ Un vote de majorité est directement comptabilisé même avant la fin du compte à rebourg ! Faites attention pour qui vous votez\` \n --> Vous avez 1 minute pour débattre pour qui voter <--");
    setTimeout(function(){
        voteChannel.send("Il vous reste 10 secondes pour voter si ce n'est pas déjà fait !");
    },50000);
}

function stepFive(village){
        
}