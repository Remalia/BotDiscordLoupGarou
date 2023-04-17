const MESSAGES = {
    COMMANDS: {
        BASICHELP: {
            HELP:{
                name : 'help',
                categorie: 'basichelp',
                aliases: ['help','aide'],
                description : 'Renvoie la liste des commandes ou l\'info sur une seule commande.',
                cooldown : 5,
                usage: '<command_name>',
                args: false
            },
            PING:{
                name : 'ping',
                categorie: 'basichelp',
                aliases: ['ping'],
                description : 'Renvoie la latence du bot.',
                cooldown : 1,
                usage: '',
                args: false 
            },
        },
        LOUPGAROU:{
            PARTIE:{
                name : 'partie',
                categorie: 'loupgarou',
                aliases : ['partie','start', 'begin'], 
                description : 'Renvoie un message permettant de créer une partie.',
                cooldown : 30,
                usage: '',
                args : false
            },
        }
    }
}

exports.MESSAGES = MESSAGES;