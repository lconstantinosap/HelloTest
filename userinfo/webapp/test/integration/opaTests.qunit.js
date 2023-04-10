sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'home/userinfo/test/integration/FirstJourney',
		'home/userinfo/test/integration/pages/USERList',
		'home/userinfo/test/integration/pages/USERObjectPage'
    ],
    function(JourneyRunner, opaJourney, USERList, USERObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('home/userinfo') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheUSERList: USERList,
					onTheUSERObjectPage: USERObjectPage
                }
            },
            opaJourney.run
        );
    }
);