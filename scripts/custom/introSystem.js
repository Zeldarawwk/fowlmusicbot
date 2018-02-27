(function() {

    var zeldatriggerintro = false;
    var shirotriggerintro = false;
    var gumbytriggerintro = false;
    var shinytriggerintro = false;
    var rhiowtriggerintro = false;
    var richiitriggerintro = false;
    var airbournetriggerintro = false;
    var judgetriggerintro = false;
    var gosailtriggerintro = false;
    var kevintriggerintro = false;
    var kindledtriggerintro = false;
    var ezgflighttriggerintro = false;

    var streamstatus;

    // Command event.
    $.bind('command', function(event) {

        var command = event.getCommand();
        var sender = event.getSender();
        var arguments = event.getArguments();
        var args = event.getArgs();

        // Just for testing purposes, while I work on automating it.
        if (command.equalsIgnoreCase('resetintros') && sender.equalsIgnoreCase('zeldarawwk_testing')){
            zeldatriggerintro = false;
            shirotriggerintro = false;
            gumbytriggerintro = false;
            shinytriggerintro = false;
            rhiowtriggerintro = false;
            richiitriggerintro = false;
            airbournetriggerintro = false;
            judgetriggerintro = false;
            gosailtriggerintro = false;
            kevintriggerintro = false;
            kindledtriggerintro = false;
            ezgflighttriggerintro = false;
            $.say(sender + ' has reset the intro triggers.');
            $.consoleLn('All intro triggers set to false!');
        }

    });

    $.bind('twitchOffline', function(event) {

        streamstatus = "offline";
        zeldatriggerintro = false;
        shirotriggerintro = false;
        gumbytriggerintro = false;
        shinytriggerintro = false;
        rhiowtriggerintro = false;
        richiitriggerintro = false;
        airbournetriggerintro = false;
        judgetriggerintro = false;
        gosailtriggerintro = false;
        kevintriggerintro = false;
        kindledtriggerintro = false;
        ezgflighttriggerintro = false;
        $.consoleLn('All intro triggers set to false!');
    });


    $.bind('ircChannelMessage', function(event) {

        var message = event.getMessage();
        var sender = event.getSender();
        var tags = event.getTags();

        // zeldarawwk INTRO
        if (sender.equalsIgnoreCase('zeldarawwk')) {
            if (zeldatriggerintro === false) {
                zeldatriggerintro = true;
                $.consoleLn(sender + ' has spoken - Triggering audio hook!');
                $.panelsocketserver.triggerAudioPanel('Zeldarawwk_Intro');
            } else {
                // Again just for testing
                $.consoleLn('zeldarawwk\'s intro has already triggered. Not firing.');
            }
        }

        // rhiow2 INTRO
        if (sender.equalsIgnoreCase('rhiow2')) {
            if (rhiowtriggerintro === false) {
                rhiowtriggerintro = true;
                $.consoleLn(sender + ' has spoken - Triggering audio hook!');
                $.panelsocketserver.triggerAudioPanel('Rhiow_Intro');
            } else {
                // Again just for testing
                $.consoleLn('rhiow\'s intro has already triggered. Not firing.');
            }
        }

        // richii INTRO
        if (sender.equalsIgnoreCase('richii')) {
            if (richiitriggerintro === false) {
                richiitriggerintro = true;
                $.consoleLn(sender + ' has spoken - Triggering audio hook!');
                $.panelsocketserver.triggerAudioPanel('Richii_Intro');
            } else {
                // Again just for testing
                $.consoleLn('richii\'s intro has already triggered. Not firing.');
            }
        }


        // judgeheimdall INTRO
        if (sender.equalsIgnoreCase('judgeheimdall')) {
            if (judgetriggerintro === false) {
                judgetriggerintro = true;
                $.consoleLn(sender + ' has spoken - Triggering audio hook!');
                $.panelsocketserver.triggerAudioPanel('Judge_Intro');
            } else {
                // Again just for testing
                $.consoleLn('judge\'s intro has already triggered. Not firing.');
            }
        }


        // xxxgumby INTRO
        if (sender.equalsIgnoreCase('xxxgumby')) {
            if (gumbytriggerintro === false) {
                gumbytriggerintro = true;
                $.consoleLn(sender + ' has spoken - Triggering audio hook!');
                $.panelsocketserver.triggerAudioPanel('Gumby_Intro');
            } else {
                // Again just for testing
                $.consoleLn('gumby\'s intro has already triggered. Not firing.');
            }
        }


        // theairbourne7 INTRO
        if (sender.equalsIgnoreCase('theairbourne7')) {
            if (airbournetriggerintro === false) {
                airbournetriggerintro = true;
                $.consoleLn(sender + ' has spoken - Triggering audio hook!');
                $.panelsocketserver.triggerAudioPanel('Airbourne_Intro');
            } else {
                // Again just for testing
                $.consoleLn('airbourne\'s intro has already triggered. Not firing.');
            }
        }


        // shirojune INTRO
        if (sender.equalsIgnoreCase('shirojune')) {
            if (shirotriggerintro === false) {
                shirotriggerintro = true;
                $.consoleLn(sender + ' has spoken - Triggering audio hook!');
                $.panelsocketserver.triggerAudioPanel('ShiroJune_Intro');
            } else {
                // Again just for testing
                $.consoleLn('shirojune\'s intro has already triggered. Not firing.');
            }
        }


        // go_sail_a_boat INTRO
        if (sender.equalsIgnoreCase('go_sail_a_boat')) {
            if (gosailtriggerintro === false) {
                gosailtriggerintro = true;
                $.consoleLn(sender + ' has spoken - Triggering audio hook!');
                $.panelsocketserver.triggerAudioPanel('GoSailABoat_Intro');
            } else {
                // Again just for testing
                $.consoleLn('go_sail_a_boat\'s intro has already triggered. Not firing.');
            }
        }



        // kevin888829 INTRO
        if (sender.equalsIgnoreCase('kevin888829')) {
            if (kevintriggerintro === false) {
                kevintriggerintro = true;
                $.consoleLn(sender + ' has spoken - Triggering audio hook!');
                $.panelsocketserver.triggerAudioPanel('Kevin888829_Intro');
            } else {
                // Again just for testing
                $.consoleLn('kevin888829\'s intro has already triggered. Not firing.');
            }
        }



        // shinyspartan92 INTRO
        if (sender.equalsIgnoreCase('shinyspartan92')) {
            if (shinytriggerintro === false) {
                shinytriggerintro = true;
                $.consoleLn(sender + ' has spoken - Triggering audio hook!');
                $.panelsocketserver.triggerAudioPanel('ShinySpartan_Intro');
            } else {
                // Again just for testing
                $.consoleLn('shinyspartan92\'s intro has already triggered. Not firing.');
            }
        }



        // kindledhollow INTRO
        if (sender.equalsIgnoreCase('kindledhollow')) {
            if (kindledtriggerintro === false) {
                kindledtriggerintro = true;
                $.consoleLn(sender + ' has spoken - Triggering audio hook!');
                $.panelsocketserver.triggerAudioPanel('KindledHollow_Intro');
            } else {
                // Again just for testing
                $.consoleLn('kindledhollow\'s intro has already triggered. Not firing.');
            }
        }



        // ezg_flight INTRO
        if (sender.equalsIgnoreCase('ezg_flight')) {
            if (ezgflighttriggerintro === false) {
                ezgflighttriggerintro = true;
                $.consoleLn(sender + ' has spoken - Triggering audio hook!');
                $.panelsocketserver.triggerAudioPanel('EZGFlight_Intro');
            } else {
                // Again just for testing
                $.consoleLn('ezg_flight\'s intro has already triggered. Not firing.');
            }
        }



    });

    $.bind('initReady', function() {
        $.registerChatCommand('./custom/introSystem.js', 'resetintros', 1);
    });
})();