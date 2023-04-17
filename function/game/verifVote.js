const { addPlayerAlive,resetPlayerList } = require("../player/naminglist.js")
pElimine = false;
//Verification du vote faire par le village, voit si un joueur doit être éliminé
const verifVoteVillage=(message,nbVote,numPlayer) => {
    const joueurLG = message.guild.roles.cache.get("786270289498865694");
    const mort = message.guild.roles.cache.get("823251231089623140");
    const loup = message.guild.roles.cache.get("786269956601806850");
    const villageois = message.guild.roles.cache.get("786270117154783253");
    if (nbJoueurAlive%2 == 1){
        var nbVoteNeed = (nbJoueurAlive+1)/2;
    }else{
        var nbVoteNeed = (nbJoueurAlive+2)/2;
    }
    if (nbVote >= nbVoteNeed){
        var playerGetter=1;
        resetPlayerList();
        joueurLG.members.forEach(m => {
            if (playerGetter == numPlayer){
                mortVil = m;
                nbJoueurAlive--;
                m.roles.remove(joueurLG);
                m.roles.remove(loup);
                m.roles.remove(villageois);
                m.roles.add(mort);
            }else{
                addPlayerAlive(m.user.username)
            }
            playerGetter++;
        });
        message.delete();
        pElimine = true;
    }else{
        pElimine = false;
    }
}

//Verification du vote faire par les loups, voit si un joueur doit être éliminé
const verifVoteLoup=(message,nbVote,numPlayer) => {
    const joueurLG = message.guild.roles.cache.get("786270289498865694");
    const loup = message.guild.roles.cache.get("786269956601806850");
    const mort = message.guild.roles.cache.get("823251231089623140");
    const villageois = message.guild.roles.cache.get("786270117154783253");
    lcount = 0;
    loup.members.forEach(l => {
        lcount++;
    });
    if (lcount%2 == 1){
        var nbVoteNeed = (lcount+1)/2;
    }else{
        var nbVoteNeed = (lcount+2)/2;
    }
    if (nbVote >= nbVoteNeed){
        var playerGetter = 1;
        resetPlayerList();
        joueurLG.members.forEach(m => {
            if (playerGetter == numPlayer){
                mortLoup = m;
                nbJoueurAlive--;
                m.roles.remove(joueurLG);
                m.roles.remove(loup);
                m.roles.remove(villageois);
                m.roles.add(mort);
            }else{
                addPlayerAlive(m.user.username)
            }
            playerGetter++;
        });
        message.delete();
        pElimine = true;
    }else{
        pElimine = false;
    }
}
module.exports = {
    verifVoteVillage,
    verifVoteLoup,
}