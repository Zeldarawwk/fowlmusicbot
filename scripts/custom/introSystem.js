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
        if (command.equalsIgnoreCase('resetintros') && sender.equalsIgnoreCase('zeldarawwk')){
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
    // Resets the intros when stream goes live
    $.bind('twitchOnline', function(event) {

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

        // NEED TO ADD ONLINE CHECKS FOR ALL INTROS
        
        // zeldarawwk INTRO
        if (sender.equalsIgnoreCase('zeldarawwk')) {
            if (zeldatriggerintro === false) {
                zeldatriggerintro = true;
                $.consoleLn(sender + ' has spoken - Triggering audio hook!');
                $.panelsocketserver.triggerAudioPanel('Zeldarawwk_Intro');
            } 
        }

        // rhiow2 INTRO
        if (sender.equalsIgnoreCase('rhiow2')) {
            if (rhiowtriggerintro === false) {
                rhiowtriggerintro = true;
                $.consoleLn(sender + ' has spoken - Triggering audio hook!');
                $.panelsocketserver.triggerAudioPanel('Rhiow_Intro');
            }  
        }

        // richii INTRO
        if (sender.equalsIgnoreCase('richii')) {
            if (richiitriggerintro === false) {
                richiitriggerintro = true;
                $.consoleLn(sender + ' has spoken - Triggering audio hook!');
                $.panelsocketserver.triggerAudioPanel('Richii_Intro');
            } 
        }


        // judgeheimdall INTRO
        if (sender.equalsIgnoreCase('judgeheimdall')) {
            if (judgetriggerintro === false) {
                judgetriggerintro = true;
                $.consoleLn(sender + ' has spoken - Triggering audio hook!');
                $.panelsocketserver.triggerAudioPanel('Judge_Intro');
            } 
        }


        // xxxgumby INTRO
        if (sender.equalsIgnoreCase('xxxgumby')) {
            if (gumbytriggerintro === false) {
                gumbytriggerintro = true;
                $.consoleLn(sender + ' has spoken - Triggering audio hook!');
                $.panelsocketserver.triggerAudioPanel('Gumby_Intro');
            } 
        }


        // theairbourne7 INTRO
        if (sender.equalsIgnoreCase('theairbourne7')) {
            if (airbournetriggerintro === false) {
                airbournetriggerintro = true;
                $.consoleLn(sender + ' has spoken - Triggering audio hook!');
                $.panelsocketserver.triggerAudioPanel('Airbourne_Intro');
            } 
        }


        // shirojune INTRO
        if (sender.equalsIgnoreCase('shirojune')) {
            if (shirotriggerintro === false) {
                shirotriggerintro = true;
                $.consoleLn(sender + ' has spoken - Triggering audio hook!');
                $.panelsocketserver.triggerAudioPanel('ShiroJune_Intro');
            } 
        }


        // go_sail_a_boat INTRO
        if (sender.equalsIgnoreCase('go_sail_a_boat')) {
            if (gosailtriggerintro === false) {
                gosailtriggerintro = true;
                $.consoleLn(sender + ' has spoken - Triggering audio hook!');
                $.panelsocketserver.triggerAudioPanel('GoSailABoat_Intro');
            } 
        }



        // kevin888829 INTRO
        if (sender.equalsIgnoreCase('kevin888829')) {
            if (kevintriggerintro === false) {
                kevintriggerintro = true;
                $.consoleLn(sender + ' has spoken - Triggering audio hook!');
                $.panelsocketserver.triggerAudioPanel('Kevin888829_Intro');
            } 
        }



        // shinyspartan92 INTRO
        if (sender.equalsIgnoreCase('shinyspartan92')) {
            if (shinytriggerintro === false) {
                shinytriggerintro = true;
                $.consoleLn(sender + ' has spoken - Triggering audio hook!');
                $.panelsocketserver.triggerAudioPanel('ShinySpartan_Intro');
            } 
        }



        // kindledhollow INTRO
        if (sender.equalsIgnoreCase('kindledhollow')) {
            if (kindledtriggerintro === false) {
                kindledtriggerintro = true;
                $.consoleLn(sender + ' has spoken - Triggering audio hook!');
                $.panelsocketserver.triggerAudioPanel('KindledHollow_Intro');
            } 
        }



        // ezg_flight INTRO
        if (sender.equalsIgnoreCase('ezg_flight')) {
            if (ezgflighttriggerintro === false) {
                ezgflighttriggerintro = true;
                $.consoleLn(sender + ' has spoken - Triggering audio hook!');
                $.panelsocketserver.triggerAudioPanel('EZGFlight_Intro');
            } 
        }



    });

    $.bind('initReady', function() {
        $.registerChatCommand('./custom/introSystem.js', 'resetintros', 1);
    });
})();