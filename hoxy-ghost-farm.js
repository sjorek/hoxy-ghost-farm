/**
This plugin hosts a whole ghost-farm, as opposed to a single ghost-server
usage: @ghost-farm('path/to/ghost-farm-root', 'index.html')
eg.:
	request: @ghost-farm('path/to/ghost-farm-root', 'index.html')
*/

// this is a plugin file
exports.run = function(api) {
    // use the api
    // and/or do anything node.js can do
    api.notify(); // and done
};
