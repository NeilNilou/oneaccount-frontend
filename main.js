const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let appWindow;

// Listen for the app to be ready
app.on('ready', function(){

	// Create a new window
	appWindow = new BrowserWindow({width:800, height:600, icon: path.join(__dirname, './resource/img/logo-nav.png')});

	// Load HTML into the window
	appWindow.loadURL(url.format({
		pathname: path.join(__dirname, './html/index.html'),
		protocol:'file:',
		slashes: true
	}));

	// Remove menu bar
	appWindow.setMenu(null);

	// Closing window ~> closing everything
    appWindow.on('closed', () => {
		appWindow = null;
    });

    // Quit application when all the windows are closed
    appWindow.on('window-all-closed', () => {
		// MacOSX?
		if(process.platform !== 'darwin'){
	    	appWindow.quit();
		}
    });
});
