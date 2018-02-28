(function() {

	$.bind('command', function(event) {

		var command = event.getCommand();
		var sender = event.getSender();
		var arguments = event.getArguments();
		var args = event.getArgs();
	
		// Alright, let's say you only want one argument. This is where you would use the `getArgs()` method.
		// This command would work as the following. `!color [color argument]`
		if (command.equalsIgnoreCase('so')) {

            var shoutoutHeader = '/me Make sure to follow this amazing person!!! ltcDerp ltcDerp ltcDerp ▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ '

			if (args[7] !== undefined) {
                $.say(shoutoutHeader + 'www.twitch.tv/' + args[0] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[1] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[2] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[3] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[4] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[5] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[6] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[7] + ' ltcLove ltcLove ltcLove ');
			} else if (args[6] !== undefined) {
				$.say(shoutoutHeader + 'www.twitch.tv/' + args[0] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[1] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[2] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[3] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[4] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[5] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[6] + ' ltcLove ltcLove ltcLove ');
			} else if (args[5] !== undefined) {
				$.say(shoutoutHeader + 'www.twitch.tv/' + args[0] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[1] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[2] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[3] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[4] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[5] + ' ltcLove ltcLove ltcLove ');
			} else if (args[4] !== undefined) {
				$.say(shoutoutHeader + 'www.twitch.tv/' + args[0] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[1] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[2] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[3] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[4] + ' ltcLove ltcLove ltcLove ');
			} else if (args[3] !== undefined) {
				$.say(shoutoutHeader + 'www.twitch.tv/' + args[0] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[0] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[1] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[1] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[2] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[2] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[3] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[3] + ' ltcLove ltcLove ltcLove ');
			} else if (args[2] !== undefined) {
				$.say(shoutoutHeader + 'www.twitch.tv/' + args[0] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[0] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[1] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[1] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[2] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[2] + ' ltcLove ltcLove ltcLove ');
			} else if (args[1] !== undefined) {
				$.say(shoutoutHeader + 'www.twitch.tv/' + args[0] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[0] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[0] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[1] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[1] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[1] + ' ltcLove ltcLove ltcLove ');
			} else if (args[0] !== undefined) {
				$.say(shoutoutHeader + 'www.twitch.tv/' + args[0] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[0] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[0] + ' ltcLove ltcLove ltcLove ' + 'www.twitch.tv/' + args[0] + ' ltcLove ltcLove ltcLove ');
			} else {
                $.say("Gotta specify someone to shoutout ltcYe");
            }
		}
	});
	
	
	$.bind('initReady', function() {

        $.registerChatCommand('./custom/multiShoutout.js', 'so', 2);
        
	});
})();


