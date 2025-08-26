/**
* CyberYube Ad Skipper - Compiled JavaScript Module
* Automatically detects and skips video advertisements
*/
class CyberAdSkipper {
constructor(config ={}) {
this.observer = null;
this.skipInterval = null;
this.adsSkipped = 0;
this.isActive = false;
this.config = {
enabled: true,
skipDelay: 100,
aggressiveMode: true,
showNotificaion: true,
...config
};
this.init();
}
init() {
}
}