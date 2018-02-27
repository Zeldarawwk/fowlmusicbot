(function() {

    $.bind('command', function(event) {

        var command = event.getCommand();
        var sender = event.getSender();
        var arguments = event.getArguments();
        var args = event.getArgs();
   

        // LUL count controller (check and set amount)
        if (command.equalsIgnoreCase('lulcount')) {

            if (args[0] !== undefined) {
                var lulnewcount = args[0];
                $.inidb.SetString('counters_lul','', 'lul', lulnewcount)
                $.say(sender + ' has set the LUL counter to ' + lulnewcount);
                
			} else {

                var lulcount = $.inidb.GetString('counters_lul','', 'lul')
                $.say('Current LUL count: ' + lulcount);

			}
		}
    
        // Burp count controller (check and set amount)
        if (command.equalsIgnoreCase('burpcount')) {

            if (args[0] !== undefined) {
                var burpnewcount = args[0];
                $.inidb.SetString('counters_burp','', 'burp', burpnewcount)
                $.say(sender + ' has set the ltcBurp counter to ' + burpnewcount);
                
			} else {

                var burpcount = $.inidb.GetString('counters_burp','', 'burp')
                $.say('Current ltcBurp count: ' + burpcount);

			}
		}

        // Burp count command (to add burps)
        if (command.equalsIgnoreCase('burp')) {
	
            var bcount = $.inidb.GetString('counters_burp','', 'burp')
            var bcountint = parseInt(bcount);
            var newbcount = bcountint + 1;
            $.inidb.SetString('counters_burp','', 'burp', newbcount)
            $.say('ltcBurp ' + newbcount + ' times and counting...');
        }




    });
	
	$.bind('ircChannelMessage', function(event) {

		var message = event.getMessage();
		var sender = event.getSender();
		var tags = event.getTags();

		// LUL Counter (to add LULs)
		if (message.contains('LUL')) {
            
            var count = $.inidb.GetString('counters_lul','', 'lul')
            var newcount;
            var newcountint = parseInt(count);
            newcount = newcountint + 1;
            $.inidb.SetString('counters_lul','', 'lul', newcount)
            $.say('LUL ' + newcount + ' LUL');

		}

	});
	
	$.bind('initReady', function() {
        $.registerChatCommand('./custom/keywordCounters.js', 'lulcount', 2);
        $.registerChatCommand('./custom/keywordCounters.js', 'burp', 2);
        $.registerChatCommand('./custom/keywordCounters.js', 'burpcount', 2);
	});
})();