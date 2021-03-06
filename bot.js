var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // .quagsire
            case 'quagsire':
                bot.sendMessage({
                    to: channelID,
                    message: 'Quagsire is the God of all things'
                });
            break;
            // Just add any case commands if you want to..
         }
        args = args.splice(1);
        switch(cmd) {
            // .knack
            case 'knack':
                bot.sendMessage({
                    to: channelID,
                    message: 'KNACK II BABYYYY!'
                });
            break;
            // Just add any case commands if you want to..
         }
        args = args.splice(1);
        switch(cmd) {
            // .ice
            case 'ice':
                bot.sendMessage({
                    to: channelID,
                    message: 'Ice is Nice'
                });
            break;
            // Just add any case commands if you want to..
         }
        args = args.splice(1);
        switch(cmd) {
            // .catdog
            case 'catdog':
                bot.sendMessage({
                    to: channelID,
                    message: 'Cats are Superior to Dogs in every Way'
                });
            break;
            // Just add any case commands if you want to..
         }
        args = args.splice(1);
        switch(cmd) {
            // .bayo
            case 'bayo':
                bot.sendMessage({
                    to: channelID,
                    message: 'If you main Gayonetta I will ban you'
                });
            break;
            // Just add any case commands if you want to..
         }
        args = args.splice(1);
        switch(cmd) {
            // .starter
            case 'starter':
                bot.sendMessage({
                    to: channelID,
                    message: 'Here are all starter pokemon ranked 1:Swampert 2:Torterra 3:Charizard 4:Feraligatr 5:Sceptile 6:Blastoise 7:Greninja 8:Incineroar 9:Typhlosion 10:Decidueye 11:Serperior 12:Venusaur 13:Chesnaught 14:Meganium 15:Primarina 16:Samurott 17:Delphox 18:Emboar'
                });
            break;
            // Just add any case commands if you want to..
         }
        args = args.splice(1);
        switch(cmd) {
            // .bestpokemon
            case 'bestpokemon':
                bot.sendMessage({
                    to: channelID,
                    message: 'Garchomp is CLEARLY the Best Pokemon'
                });
            break;
            // Just add any case commands if you want to..
         }
        args = args.splice(1);
        switch(cmd) {
            // .bestfighter
            case 'bestfighter':
                bot.sendMessage({
                    to: channelID,
                    message: 'Heracross of Course! Why would you ask my that? I'm obvioulsy going to say myself because i am a fighting type'
                });
            break;
            // Just add any case commands if you want to..
         }
        args = args.splice(1);
        switch(cmd) {
            // .naveen
            case 'naveen':
                bot.sendMessage({
                    to: channelID,
                    message: 'Naveen is a Cool Dude, even if he can be the Saltiest Boi Ever sometimes'
                });
            break;
            // Just add any case commands if you want to..
         }
        args = args.splice(1);
        switch(cmd) {
            // .incredible
            case 'incredible':
                bot.sendMessage({
                    to: channelID,
                    message: 'Nobody's laughing @Mr Incrediboi#4404'
                });
            break;
            // Just add any case commands if you want to..
         }
        args = args.splice(1);
        switch(cmd) {
            // .zephyr
            case 'zephyr':
                bot.sendMessage({
                    to: channelID,
                    message: '@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone'
                });
            break;
            // Just add any case commands if you want to..
         }
        args = args.splice(1);
        switch(cmd) {
            // .b
            case 'b':
                bot.sendMessage({
                    to: channelID,
                    message: ':b::b::b::b::b::b::b::b::b::b::b::b::b::b::b::b::b::b::b::b::b::b::b::b::b::b::b::b::b::b::b::b::b::b::b::b::b::b:'
                });
            break;
            // Just add any case commands if you want to..
         }
        args = args.splice(1);
        switch(cmd) {
            // .smash
            case 'smash':
                bot.sendMessage({
                    to: channelID,
                    message: 'Melee is the best Super Smash Bros Game, But Project M and Ultimate are definetly close contenders'
                });
            break;
            // Just add any case commands if you want to..
         }
        args = args.splice(1);
        switch(cmd) {
            // .help
            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: 'here's a list of commands; .help, .zephyr, .incredible, .naveen, .bestfighter, .bestpokemon, .starter, .bayo, .catdog, .ice, .knack, .quagsire, .b, .smash'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});