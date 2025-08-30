/**
 * CyberTube Main Entry Point - Compiled JavaScript
 * Initializes the Ad Skipper module
 */
import CyberAdSkipper from './AdSkipper.js';

// Initialize the ad skipper when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 CyberTube modules loading...');
    
    // Create ad skipper instance with configuration
    const adSkipperConfig = {
        enabled: true,
        skipDelay: 50,
        aggressiveMode: true,
        showNotifications: true
    };
    
    // Initialize the ad skipper
    const cyberAdSkipper = new CyberAdSkipper(adSkipperConfig);
    
    // Make it globally accessible for UI controls
    window.cyberAdSkipper = cyberAdSkipper;
    
    console.log('✅ CyberTube Ad Skipper ready');
});
