/**
 * CyberTube Ad Skipper - Compiled JavaScript Module
 * Automatically detects and skips video advertisements
 */
class CyberAdSkipper {
    constructor(config = {}) {
        this.observer = null;
        this.skipInterval = null;
        this.adsSkipped = 0;
        this.isActive = false;
        this.config = {
            enabled: true,
            skipDelay: 100,
            aggressiveMode: true,
            showNotifications: true,
            ...config
        };
        this.init();
    }
    init() {
        console.log('🚀 CyberTube Ad Skipper initialized');
        if (this.config.enabled) {
            this.startAdDetection();
            this.setupKeyboardShortcuts();
            this.injectAdSkipUI();
        }
    }
    startAdDetection() {
        this.isActive = true;
        this.observer = new MutationObserver((mutations) => {
            mutations.forEach(() => {
                this.detectAndSkipAds();
            });
        });
        this.observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class', 'id', 'style']
        });
        this.skipInterval = setInterval(() => {
            this.detectAndSkipAds();
        }, this.config.skipDelay);
        this.showNotification('🛡️ Neural ad-blocker activated', 'success');
    }
    detectAndSkipAds() {
        const video = document.querySelector('.cyber-video');
        if (!video) {
            return { isAd: false, adType: 'unknown', skipAvailable: false };
        }
        const adDetected = this.checkForAdIndicators();
        if (adDetected.isAd) {
            this.handleAdDetection(adDetected, video);
        }
        return adDetected;
    }
    checkForAdIndicators() {
        const adSelectors = [
            '.ad-showing',
            '.video-ads',
            '[class*="ad-"]',
            '[id*="ad-"]',
            '.advertisement',
            '.sponsored-content',
            '.preroll-ad',
            '.midroll-ad'
        ];
        for (const selector of adSelectors) {
            const adElement = document.querySelector(selector);
            if (adElement && this.isElementVisible(adElement)) {
                return {
                    isAd: true,
                    adType: this.determineAdType(selector),
                    skipAvailable: this.hasSkipButton()
                };
            }
        }
        const video = document.querySelector('.cyber-video');
        if (video && video.duration > 0 && video.duration <= 30) {
            return {
                isAd: true,
                adType: 'preroll',
                skipAvailable: true,
                timeRemaining: Math.ceil(video.duration - video.currentTime)
            };
        }
        const skipButtons = document.querySelectorAll('button, [role="button"]');
        for (const button of Array.from(skipButtons)) {
            const text = button.textContent?.toLowerCase() || '';
            if (text.includes('skip') && (text.includes('ad') || text.includes('in'))) {
                return {
                    isAd: true,
                    adType: 'preroll',
                    skipAvailable: true
                };
            }
        }
        return { isAd: false, adType: 'unknown', skipAvailable: false };
    }
    handleAdDetection(adInfo, video) {
        if (this.config.aggressiveMode) {
            this.trySkipMethods();
        }
        if (video.duration > 0 && video.duration <= 30) {
            video.currentTime = video.duration - 0.1;
            this.adsSkipped++;
            if (this.config.showNotifications) {
                this.showNotification(`⚡ Ad skipped! Total: ${this.adsSkipped}`, 'success');
            }
        }
        this.hideAdElements();
    }
    trySkipMethods() {
        const skipSelectors = [
            '.ytp-ad-skip-button',
            '.ytp-skip-ad-button',
            '[aria-label*="Skip"]',
            'button[class*="skip"]',
            '.skip-button',
            '.ad-skip'
        ];
        for (const selector of skipSelectors) {
            const skipBtn = document.querySelector(selector);
            if (skipBtn && this.isElementVisible(skipBtn)) {
                skipBtn.click();
                this.adsSkipped++;
                this.showNotification('🎯 Skip button clicked', 'success');
                return;
            }
        }
        this.simulateKeyPress('Tab');
        setTimeout(() => this.simulateKeyPress('Enter'), 50);
        const closeButtons = document.querySelectorAll('.close, .dismiss, [aria-label*="Close"]');
        Array.from(closeButtons).forEach(btn => {
            if (this.isElementVisible(btn)) {
                btn.click();
            }
        });
    }
    hideAdElements() {
        const adElements = document.querySelectorAll(`
            [class*="ad-"], [id*="ad-"], .advertisement, .sponsored,
            .overlay-ad, .banner-ad, .popup-ad
        `);
        Array.from(adElements).forEach(element => {
            element.style.display = 'none';
            element.style.visibility = 'hidden';
            element.style.opacity = '0';
        });
    }
    determineAdType(selector) {
        if (selector.includes('preroll'))
            return 'preroll';
        if (selector.includes('midroll'))
            return 'midroll';
        if (selector.includes('overlay'))
            return 'overlay';
        if (selector.includes('banner'))
            return 'banner';
        return 'unknown';
    }
    hasSkipButton() {
        const skipSelectors = ['.skip', '[aria-label*="Skip"]', 'button[class*="skip"]'];
        return skipSelectors.some(selector => {
            const element = document.querySelector(selector);
            return element && this.isElementVisible(element);
        });
    }
    isElementVisible(element) {
        if (!element)
            return false;
        const rect = element.getBoundingClientRect();
        const style = window.getComputedStyle(element);
        return rect.width > 0 &&
            rect.height > 0 &&
            style.display !== 'none' &&
            style.visibility !== 'hidden' &&
            style.opacity !== '0';
    }
    simulateKeyPress(key) {
        const event = new KeyboardEvent('keydown', {
            key: key,
            code: key,
            bubbles: true,
            cancelable: true
        });
        document.dispatchEvent(event);
    }
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.shiftKey && e.key === 'S') {
                e.preventDefault();
                this.toggle();
            }
            if (e.ctrlKey && e.shiftKey && e.key === 'A') {
                e.preventDefault();
                this.forceSkipAd();
            }
        });
    }
    injectAdSkipUI() {
        const adSkipPanel = document.createElement('div');
        adSkipPanel.className = 'cyber-ad-skipper-panel';
        adSkipPanel.innerHTML = `
            <div class="ad-skip-header">
                <span class="ad-skip-title">🛡️ AD SKIPPER</span>
                <button class="ad-skip-toggle" onclick="window.cyberAdSkipper?.toggle()">
                    ${this.config.enabled ? 'ON' : 'OFF'}
                </button>
            </div>
            <div class="ad-skip-stats">
                <span>Ads Blocked: <span class="ads-count">${this.adsSkipped}</span></span>
            </div>
            <div class="ad-skip-controls">
                <button onclick="window.cyberAdSkipper?.forceSkipAd()">Force Skip</button>
                <button onclick="window.cyberAdSkipper?.clearStats()">Clear Stats</button>
            </div>
        `;
        const styles = document.createElement('style');
        styles.textContent = `
            .cyber-ad-skipper-panel {
                position: fixed;
                top: 120px;
                right: 20px;
                background: var(--cyber-bg-secondary, #1a1a2e);
                border: 2px solid var(--cyber-primary, #00ffff);
                border-radius: 10px;
                padding: 15px;
                z-index: 10000;
                font-family: 'Orbitron', monospace;
                color: var(--cyber-text, #ffffff);
                box-shadow: 0 0 20px var(--cyber-primary, #00ffff);
                min-width: 200px;
            }
            
            .ad-skip-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 10px;
            }
            
            .ad-skip-title {
                font-weight: bold;
                color: var(--cyber-primary, #00ffff);
            }
            
            .ad-skip-toggle {
                background: var(--cyber-secondary, #ff00ff);
                border: none;
                color: white;
                padding: 5px 10px;
                border-radius: 5px;
                cursor: pointer;
                font-family: inherit;
                font-size: 12px;
            }
            
            .ad-skip-stats {
                margin: 10px 0;
                font-size: 14px;
            }
            
            .ads-count {
                color: var(--cyber-secondary, #ff00ff);
                font-weight: bold;
            }
            
            .ad-skip-controls button {
                background: var(--cyber-bg-darker, #0f0f1e);
                border: 1px solid var(--cyber-primary, #00ffff);
                color: var(--cyber-text, #ffffff);
                padding: 5px 8px;
                margin: 2px;
                border-radius: 3px;
                cursor: pointer;
                font-size: 11px;
                font-family: inherit;
            }
            
            .ad-skip-controls button:hover {
                background: var(--cyber-primary, #00ffff);
                color: var(--cyber-bg, #000);
            }
        `;
        document.head.appendChild(styles);
        document.body.appendChild(adSkipPanel);
    }
    toggle() {
        this.config.enabled = !this.config.enabled;
        if (this.config.enabled) {
            this.startAdDetection();
        }
        else {
            this.stopAdDetection();
        }
        const toggleBtn = document.querySelector('.ad-skip-toggle');
        if (toggleBtn) {
            toggleBtn.textContent = this.config.enabled ? 'ON' : 'OFF';
        }
        this.showNotification(`Ad Skipper ${this.config.enabled ? 'enabled' : 'disabled'}`, this.config.enabled ? 'success' : 'info');
    }
    forceSkipAd() {
        const video = document.querySelector('.cyber-video');
        if (video && video.duration > 0) {
            video.currentTime = video.duration - 0.1;
            this.adsSkipped++;
            this.updateStatsUI();
            this.showNotification('⚡ Ad force-skipped!', 'success');
        }
        else {
            this.trySkipMethods();
        }
    }
    clearStats() {
        this.adsSkipped = 0;
        this.updateStatsUI();
        this.showNotification('📊 Stats cleared', 'info');
    }
    updateStatsUI() {
        const statsElement = document.querySelector('.ads-count');
        if (statsElement) {
            statsElement.textContent = this.adsSkipped.toString();
        }
    }
    stopAdDetection() {
        this.isActive = false;
        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }
        if (this.skipInterval) {
            clearInterval(this.skipInterval);
            this.skipInterval = null;
        }
        this.showNotification('🛡️ Ad skipper deactivated', 'info');
    }
    showNotification(message, type) {
        if (!this.config.showNotifications)
            return;
        if (window.cyberTube && typeof window.cyberTube.showNotification === 'function') {
            window.cyberTube.showNotification(message, type);
        }
        else {
            console.log(`[AdSkipper] ${message}`);
        }
    }
    getStats() {
        return {
            adsSkipped: this.adsSkipped,
            isActive: this.isActive,
            config: { ...this.config }
        };
    }
}
export default CyberAdSkipper;
