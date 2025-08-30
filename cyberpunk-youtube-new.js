// CyberTube - Advanced Cyberpunk YouTube Interface
// Enhanced with neural animations and cyberpunk effects

class CyberTube {
    constructor() {
        // Core system variables
        this.videos = [];
        this.currentUser = null;
        this.isRecording = false;
        this.likedVideos = JSON.parse(localStorage.getItem('likedVideos')) || [];
        this.watchLaterVideos = JSON.parse(localStorage.getItem('watchLaterVideos')) || [];
        
        // Enhanced cyberpunk features
        this.matrixRainActive = false;
        this.glitchIntensity = 0.3;
        this.neuralNetworkActive = false;
        this.systemCorruption = 0;
        
        // Initialize all systems
        this.init();
        this.setupEventListeners();
        this.setupKeyboardShortcuts();
        
        console.log('%c🚀 CyberTube Neural Interface Initialized', 'color: #00ffff; font-weight: bold;');
    }

    init() {
        this.runSystemDiagnostics();
        this.setupVideoCards();
        this.initializeAnimations();
    }

    setupEventListeners() {
        // Setup hover effects for video cards
        document.addEventListener('mouseover', (e) => {
            if (e.target.closest('.video-card')) {
                this.activateNeuralHover(e.target.closest('.video-card'));
            }
        });

        // Setup search input neural activation
        const searchInput = document.querySelector('input[type="search"], .search-input');
        if (searchInput) {
            searchInput.addEventListener('focus', () => {
                this.activateNeuralSearch();
            });
        }
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'g') {
                e.preventDefault();
                this.activateGlobalGlitch();
            }
            if (e.ctrlKey && e.key === 'm') {
                e.preventDefault();
                this.toggleMatrixRain();
            }
        });
    }

    runSystemDiagnostics() {
        console.log('%c⚡ Running system diagnostics...', 'color: #ffff00; font-weight: bold;');
        console.log('%c✓ Neural pathways: ACTIVE', 'color: #00ff00;');
        console.log('%c✓ Quantum encryption: ENABLED', 'color: #00ff00;');
        console.log('%c✓ Matrix interface: CONNECTED', 'color: #00ff00;');
        console.log('%c✓ Glitch protocols: STANDBY', 'color: #00ff00;');
    }

    setupVideoCards() {
        const videoCards = document.querySelectorAll('.video-card, .ytd-rich-item-renderer, .ytd-video-renderer');
        videoCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('cyber-enhanced');
        });
    }

    initializeAnimations() {
        // Add base cyberpunk styling to body if not present
        if (!document.body.classList.contains('cyberpunk-theme')) {
            document.body.classList.add('cyberpunk-theme');
        }
    }

    activateNeuralHover(card) {
        const pulse = document.createElement('div');
        pulse.className = 'neural-pulse-effect';
        pulse.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, rgba(0,255,255,0.1) 0%, transparent 70%);
            border-radius: 15px;
            animation: cyberwaveRipple 2s ease-out;
            pointer-events: none;
            z-index: 10;
        `;
        card.style.position = 'relative';
        card.appendChild(pulse);
        setTimeout(() => {
            if (pulse.parentNode) {
                pulse.parentNode.removeChild(pulse);
            }
        }, 2000);
        console.log('%c🧠 Neural processing activated on video node', 'color: #00ffff;');
    }

    activateNeuralSearch() {
        console.log('%c🔍 Neural search mode activated', 'color: #ff00ff; font-weight: bold;');
        const searchContainer = document.querySelector('#search, .search-container, #masthead-search');
        if (searchContainer) {
            searchContainer.classList.add('neural-search-active');
            setTimeout(() => {
                searchContainer.classList.remove('neural-search-active');
            }, 3000);
        }
    }

    activateGlitchEffect(element) {
        element.classList.add('glitch-effect');
        setTimeout(() => {
            element.classList.remove('glitch-effect');
        }, 500);
        console.log('%c⚡ Glitch effect triggered', 'color: #ff0040;');
    }

    activateGlobalGlitch() {
        const videoCards = document.querySelectorAll('.video-card, .ytd-rich-item-renderer, .ytd-video-renderer');
        videoCards.forEach((card, index) => {
            setTimeout(() => {
                this.activateGlitchEffect(card);
            }, index * 100);
        });
        console.log('%c🌐 Global glitch protocol activated', 'color: #ff0040; font-weight: bold;');
    }

    createMatrixRain() {
        if (this.matrixRainActive) return;
        
        const matrixContainer = document.createElement('div');
        matrixContainer.className = 'matrix-rain-container';
        matrixContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: 1000;
            overflow: hidden;
        `;
        
        // Create matrix characters
        for (let i = 0; i < 50; i++) {
            const char = document.createElement('div');
            char.textContent = String.fromCharCode(0x30A0 + Math.random() * 96);
            char.style.cssText = `
                position: absolute;
                color: #00ff00;
                font-family: 'Courier New', monospace;
                font-size: 14px;
                left: ${Math.random() * 100}vw;
                animation: matrixRain ${3 + Math.random() * 3}s linear infinite;
                animation-delay: ${Math.random() * 2}s;
            `;
            matrixContainer.appendChild(char);
        }
        
        document.body.appendChild(matrixContainer);
        this.matrixRainActive = true;
        
        setTimeout(() => {
            if (matrixContainer.parentNode) {
                matrixContainer.parentNode.removeChild(matrixContainer);
            }
            this.matrixRainActive = false;
        }, 10000);
        
        console.log('%c🌧️ Matrix rain activated', 'color: #00ff00; font-weight: bold;');
    }

    toggleMatrixRain() {
        if (!this.matrixRainActive) {
            this.createMatrixRain();
        }
    }

    createNeuralConnections() {
        const videoCards = document.querySelectorAll('.video-card, .ytd-rich-item-renderer');
        if (videoCards.length < 2) return;
        
        const connections = document.createElement('div');
        connections.className = 'neural-connections';
        connections.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: 5;
        `;
        
        // Create connection lines between random video cards
        for (let i = 0; i < Math.min(5, videoCards.length - 1); i++) {
            const line = document.createElement('div');
            line.style.cssText = `
                position: absolute;
                height: 1px;
                background: linear-gradient(90deg, transparent, #00ffff, transparent);
                animation: neuralPulse 2s ease-in-out infinite;
                animation-delay: ${i * 0.5}s;
            `;
            connections.appendChild(line);
        }
        
        document.body.appendChild(connections);
        
        setTimeout(() => {
            if (connections.parentNode) {
                connections.parentNode.removeChild(connections);
            }
        }, 8000);
        
        console.log('%c🔗 Neural connections established', 'color: #00ffff;');
    }

    cleanup() {
        // Remove any temporary effects
        document.querySelectorAll('.neural-pulse-effect, .matrix-rain-container, .neural-connections').forEach(el => {
            if (el.parentNode) {
                el.parentNode.removeChild(el);
            }
        });
    }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.cyberTube = new CyberTube();
    });
} else {
    window.cyberTube = new CyberTube();
}

// Console branding
console.log('%c' + `
 ██████╗██╗   ██╗██████╗ ███████╗██████╗ ████████╗██╗   ██╗██████╗ ███████╗
██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗╚══██╔══╝██║   ██║██╔══██╗██╔════╝
██║      ╚████╔╝ ██████╔╝█████╗  ██████╔╝   ██║   ██║   ██║██████╔╝█████╗  
██║       ╚██╔╝  ██╔══██╗██╔══╝  ██╔══██╗   ██║   ██║   ██║██╔══██╗██╔══╝  
╚██████╗   ██║   ██████╔╝███████╗██║  ██║   ██║   ╚██████╔╝██████╔╝███████╗
 ╚═════╝   ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═════╝ ╚══════╝
`, 'color: #00ffff; font-family: monospace;');
console.log('%cWelcome to CyberTube - Neural Interface Active', 'color: #ff00ff; font-weight: bold; font-size: 16px;');
console.log('%cKeyboard Shortcuts: Ctrl+G (Global Glitch) | Ctrl+M (Matrix Rain)', 'color: #ffff00;');

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CyberTube;
}
