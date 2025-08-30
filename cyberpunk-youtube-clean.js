// CyberTube - Advanced Cyberpunk YouTube Interface
// Enhanced with neural animations and cyberpunk effects

class CyberTube {
    constructor() {
        this.isInitialized = false;
        this.glitchEffects = [];
        this.neuralConnections = [];
        this.matrixRainActive = false;
        this.systemStatus = 'ONLINE';
        
        this.init();
    }

    init() {
        if (this.isInitialized) return;
        
        console.log('%c🔮 CyberTube Neural Interface Initializing...', 'color: #00ffff; font-size: 16px; font-weight: bold;');
        
        this.setupEventListeners();
        this.initializeNeuralNetwork();
        this.runSystemDiagnostics();
        this.startCyberpunkAnimations();
        
        this.isInitialized = true;
        console.log('%c✨ CyberTube Neural Interface Online', 'color: #00ff00; font-size: 14px;');
    }

    setupEventListeners() {
        // Video card hover effects
        document.addEventListener('mouseover', (e) => {
            if (e.target.closest('.video-card')) {
                this.activateNeuralHover(e.target.closest('.video-card'));
            }
        });

        // Search input neural effects
        const searchInput = document.querySelector('#search-input, .search-input, input[type="search"]');
        if (searchInput) {
            searchInput.addEventListener('focus', () => this.activateSearchNeuralMode());
            searchInput.addEventListener('blur', () => this.deactivateSearchNeuralMode());
        }

        // Glitch effect triggers
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.shiftKey && e.key === 'G') {
                this.triggerGlobalGlitch();
            }
        });

        // Matrix rain trigger
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.shiftKey && e.key === 'M') {
                this.createMatrixRain();
            }
        });
    }

    runSystemDiagnostics() {
        console.log('%c🔍 Running Neural Network Diagnostics...', 'color: #ff6b35;');
        console.log('%c├── Memory Core: OPTIMAL', 'color: #00ff00;');
        console.log('%c├── Neural Pathways: ACTIVE', 'color: #00ff00;');
        console.log('%c├── Glitch Matrix: STABLE', 'color: #00ff00;');
        console.log('%c├── Cyberpunk Protocols: ENGAGED', 'color: #00ff00;');
        console.log('%c└── System Status: ' + this.systemStatus, 'color: #00ffff;');
    }

    activateGlitchEffect(element) {
        if (!element) return;
        
        element.classList.add('glitch-effect');
        
        setTimeout(() => {
            element.classList.remove('glitch-effect');
        }, 500);
        
        console.log('%c⚡ Glitch protocol activated', 'color: #ff0080;');
    }

    activateNeuralHover(card) {
        if (!card) return;

        // Create neural pulse effect
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

        // Remove effect after animation
        setTimeout(() => {
            if (pulse.parentNode) {
                pulse.parentNode.removeChild(pulse);
            }
        }, 2000);
        
        console.log('%c🧠 Neural processing activated on video node', 'color: #00ffff;');
    }

    createMatrixRain() {
        if (this.matrixRainActive) return;
        this.matrixRainActive = true;

        const matrixContainer = document.createElement('div');
        matrixContainer.className = 'matrix-rain-container';
        matrixContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1000;
            overflow: hidden;
        `;

        // Create matrix columns
        for (let i = 0; i < 50; i++) {
            const column = document.createElement('div');
            column.className = 'matrix-column';
            column.style.cssText = `
                position: absolute;
                top: -100%;
                left: ${Math.random() * 100}%;
                width: 2px;
                height: 100px;
                background: linear-gradient(to bottom, transparent, #00ff00, transparent);
                animation: matrixRain ${3 + Math.random() * 3}s linear infinite;
                animation-delay: ${Math.random() * 2}s;
            `;
            matrixContainer.appendChild(column);
        }

        // Add matrix rain keyframes if not exists
        if (!document.getElementById('matrix-rain-styles')) {
            const style = document.createElement('style');
            style.id = 'matrix-rain-styles';
            style.textContent = `
                @keyframes matrixRain {
                    0% { transform: translateY(-100vh); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateY(100vh); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(matrixContainer);
        
        console.log('%c🌧️ Matrix rain protocol activated', 'color: #00ff00;');
        
        // Remove after 10 seconds
        setTimeout(() => {
            if (matrixContainer.parentNode) {
                matrixContainer.parentNode.removeChild(matrixContainer);
            }
            this.matrixRainActive = false;
        }, 10000);
    }

    triggerGlobalGlitch() {
        const elements = document.querySelectorAll('.video-card, .header, .sidebar, .main-content');
        elements.forEach((el, index) => {
            setTimeout(() => {
                this.activateGlitchEffect(el);
            }, index * 100);
        });
        
        console.log('%c💥 Global glitch cascade initiated', 'color: #ff0080; font-weight: bold;');
    }

    activateSearchNeuralMode() {
        const searchContainer = document.querySelector('.search-container, .search-box');
        if (searchContainer) {
            searchContainer.classList.add('neural-search-active');
        }
        console.log('%c🔍 Neural search mode activated', 'color: #00ffff;');
    }

    deactivateSearchNeuralMode() {
        const searchContainer = document.querySelector('.search-container, .search-box');
        if (searchContainer) {
            searchContainer.classList.remove('neural-search-active');
        }
    }

    initializeNeuralNetwork() {
        // Create neural connection lines between video cards
        const videoCards = document.querySelectorAll('.video-card');
        if (videoCards.length > 1) {
            this.createNeuralConnections(videoCards);
        }
    }

    createNeuralConnections(cards) {
        const connections = document.createElement('div');
        connections.className = 'neural-connections';
        connections.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        `;

        // Create connection lines between random cards
        for (let i = 0; i < Math.min(5, cards.length - 1); i++) {
            const line = document.createElement('div');
            line.className = 'neural-line';
            line.style.cssText = `
                position: absolute;
                height: 1px;
                background: linear-gradient(90deg, transparent, #00ffff, transparent);
                animation: neuralPulse 3s ease-in-out infinite;
                animation-delay: ${i * 0.5}s;
                opacity: 0.3;
            `;
            connections.appendChild(line);
        }

        document.body.appendChild(connections);
        this.neuralConnections.push(connections);
    }

    startCyberpunkAnimations() {
        // Add cyberpunk glow to video cards
        const videoCards = document.querySelectorAll('.video-card');
        videoCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('cyberpunk-enhanced');
        });

        // Periodic glitch effects
        setInterval(() => {
            if (Math.random() < 0.1) { // 10% chance every interval
                const randomCard = document.querySelector('.video-card:nth-child(' + (Math.floor(Math.random() * 10) + 1) + ')');
                if (randomCard) {
                    this.activateGlitchEffect(randomCard);
                }
            }
        }, 5000);

        console.log('%c🎮 Cyberpunk animation protocols engaged', 'color: #ff6b35;');
    }

    // Enhanced holographic effects
    createHolographicOverlay(element) {
        const overlay = document.createElement('div');
        overlay.className = 'holographic-overlay';
        overlay.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, 
                rgba(0,255,255,0.1) 0%, 
                rgba(255,0,255,0.1) 50%, 
                rgba(0,255,255,0.1) 100%);
            animation: holographicFlicker 2s ease-in-out infinite;
            pointer-events: none;
            border-radius: inherit;
        `;
        
        element.style.position = 'relative';
        element.appendChild(overlay);
        
        setTimeout(() => {
            if (overlay.parentNode) {
                overlay.parentNode.removeChild(overlay);
            }
        }, 3000);
    }

    // Data corruption effect
    createDataCorruption(element) {
        element.classList.add('data-corruption');
        setTimeout(() => {
            element.classList.remove('data-corruption');
        }, 1000);
        
        console.log('%c📊 Data corruption detected and contained', 'color: #ff4444;');
    }

    // System status updates
    updateSystemStatus(status) {
        this.systemStatus = status;
        console.log('%c🔄 System status updated: ' + status, 'color: #ffaa00;');
    }

    // Cleanup method
    destroy() {
        this.neuralConnections.forEach(connection => {
            if (connection.parentNode) {
                connection.parentNode.removeChild(connection);
            }
        });
        this.neuralConnections = [];
        this.isInitialized = false;
        console.log('%c🔌 CyberTube Neural Interface disconnected', 'color: #ff4444;');
    }
}

// Initialize CyberTube when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.cyberTube = new CyberTube();
});

// Fallback initialization for already loaded pages
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (!window.cyberTube) {
            window.cyberTube = new CyberTube();
        }
    });
} else {
    if (!window.cyberTube) {
        window.cyberTube = new CyberTube();
    }
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CyberTube;
}
