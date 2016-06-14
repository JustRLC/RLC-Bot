(function () {

    //Custom Vars
        
    var resolver = "";

    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;
        
        //Load custom settings set below
        bot.retrieveSettings();


        bot.commands.curryCommand = {
            command: 'curry',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Curry Goat!!!");
                }
            }
        };
        
        bot.commands.fruitCommand = {
            command: 'fruit',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me We like da, Banana!!!");
                }
            }
        };
		
		bot.commands.rcsCommand = {
            command: 'rcs',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me RCS Extension: https://rcs.radiant.dj/ <3");
                }
            }
        };
		
		bot.commands.cmdCommand = {
            command: 'cmd',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me RLC Commands are here: https://goo.gl/EPpKS8 <3");
                }
            }
        };
        
        /*
        bot.commands.hangman = {
            command: 'hangman',  //The command to be called. With the standard command literal this would be: !rastaresolve
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'startsWith' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                	var msg = chat.message;
                	var argument = msg.substring(cmd.length + 1);
                	
                	var words ["Music","Curry","Bike","Website","Chuck Noris","Mum"]
                	var random =  1 + Math.floor(Math.random() * 6);
                	for (var i = 0, len = words[random].length; i < len; i++) { API.sendChat("/me " + i);}


        }
        }
        };*/
        
        bot.commands.rastaresolve = {
            command: 'rastaresolve',  //The command to be called. With the standard command literal this would be: !rastaresolve
            rank: 'manager', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'startsWith' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                	//API.sendChat("/me yes");
                	var msg = chat.message;
                	var argument = msg.substring(cmd.length + 1);
                	var resolveaddr = "" + argument;
                    //API.sendChat("/me " + resolveaddr);
                    $.ajax({
   					type:     "GET",
   	 				url:      resolveaddr,
    				dataType: "jsonp",
    				success: function(data){
        				console.log(data);
    				}
					});


                }
            }
        };


        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch
	
	var fork = "";
	
    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "RLCBot",
        language: "english",
        chatLink: "https://rawgit.com/Yemasthui/basicBot/master/lang/en.json",
		cmdLink: "http://community.rlcnetwork.com/commands.php",
        startupCap: 1, // 1-200
        startupVolume: 100, // 0-100
        startupEmoji: true, // true or false
        autowoot: true,
        autoskip: false,
        smartSkip: true,
        cmdDeletion: true,
        maximumAfk: 120,
        afkRemoval: true,
        maximumDc: 60,
        bouncerPlus: true,
        blacklistEnabled: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        voteSkip: false,
        voteSkipLimit: 10,
        historySkip: false,
        timeGuard: true,
        maximumSongLength: 10,
        autodisable: true,
        commandCooldown: 30,
        usercommandsEnabled: true,
        skipPosition: 3,
        skipReasons: [
            ["theme", "This song does not fit the room theme. "],
            ["op", "This song is on the OP list. "],
            ["history", "This song is in the history. "],
            ["mix", "You played a mix, which is against the rules. "],
            ["sound", "The song you played had bad sound quality or no sound. "],
            ["nsfw", "The song you contained was NSFW (image or sound). "],
            ["unavailable", "The song you played was not available for some users. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: true,
        motdInterval: 15,
        motd: "If guys haven't already put this community as one of your favorites, make sure you do. You might even miss us! https://gyazo.com/9d5a3ca971b9490efe65a4257fc8517a",
        filterChat: true,
        etaRestriction: false,
        welcome: true,
        opLink: null,
        rulesLink: "http://community.rlcnetwork.com/rules.php",
        themeLink: null,
        fbLink: null,
        youtubeLink: null,
        website: "http://community.rlcnetwork.com/",
        intervalMessages: [],
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/NSFWlist.json",
            OP: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/OPlist.json",
            BANNED: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/BANNEDlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/Yemasthui/basicBot/master/basicBot.js", extend);

}).call(this);