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
        this.setupAuth();
        this.setupAI();
        this.startPerformanceMonitoring();
        
        console.log('%c🚀 CyberTube Neural Interface Initialized', 'color: #00ffff; font-weight: bold;');
    }

    init() {
        console.log('%c🚀 Initializing CyberTube...', 'color: #00ffff; font-weight: bold;');
        this.runSystemDiagnostics();
        
        // Wait for DOM to be fully ready
        setTimeout(() => {
            this.setupVideoCards();
            this.initializeAnimations();
        }, 100);
    }

    setupEventListeners() {
        // Setup hover effects for video cards
        document.addEventListener('mouseover', (e) => {
            if (e.target.closest('.video-card')) {
                this.activateNeuralHover(e.target.closest('.video-card'));
            }
        });

        // Setup search input neural activation
        const searchInputs = document.querySelectorAll('input[type="search"], .search-input, .cyber-search');
        searchInputs.forEach(searchInput => {
            if (searchInput) {
                searchInput.addEventListener('focus', () => {
                    this.activateNeuralSearch();
                });
            }
        });

        // Setup video play buttons
        document.addEventListener('click', (e) => {
            if (e.target.closest('.play-btn')) {
                e.preventDefault();
                const videoCard = e.target.closest('.video-card');
                if (videoCard) {
                    this.playVideo(videoCard);
                }
            }
        });

        // Setup video card clicks
        document.addEventListener('click', (e) => {
            if (e.target.closest('.video-card') && !e.target.closest('.play-btn')) {
                const videoCard = e.target.closest('.video-card');
                this.playVideo(videoCard);
            }
        });
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
        console.log(`%c🎬 Found ${videoCards.length} video cards`, 'color: #00ffff; font-weight: bold;');
        
        if (videoCards.length === 0) {
            console.log('%c⚠️ No video cards found! Checking HTML structure...', 'color: #ffaa00;');
            const videoGrid = document.querySelector('.video-grid');
            if (videoGrid) {
                console.log('%c✓ Video grid found', 'color: #00ff00;');
                console.log('Video grid innerHTML:', videoGrid.innerHTML.substring(0, 200) + '...');
            } else {
                console.log('%c❌ Video grid not found!', 'color: #ff0000;');
            }
        }
        
        videoCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('cyber-enhanced');
            console.log(`%c✓ Enhanced video card ${index + 1}`, 'color: #00ff00;');
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

    // Authentication functions
    setupAuth() {
        const loginBtn = document.getElementById('loginBtn');
        const authModal = document.getElementById('authModal');
        const closeModal = document.getElementById('closeModal');
        const loginTab = document.getElementById('loginTab');
        const signupTab = document.getElementById('signupTab');
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');

        loginBtn?.addEventListener('click', () => {
            authModal.style.display = 'flex';
            this.addGlitchEffect(authModal);
        });

        closeModal?.addEventListener('click', () => {
            authModal.style.display = 'none';
        });

        loginTab?.addEventListener('click', () => {
            this.switchAuthTab('login');
        });

        signupTab?.addEventListener('click', () => {
            this.switchAuthTab('signup');
        });

        // Social login handlers
        document.getElementById('googleLogin')?.addEventListener('click', () => this.handleSocialLogin('google'));
        document.getElementById('facebookLogin')?.addEventListener('click', () => this.handleSocialLogin('facebook'));
        document.getElementById('discordLogin')?.addEventListener('click', () => this.handleSocialLogin('discord'));
        document.getElementById('twitterLogin')?.addEventListener('click', () => this.handleSocialLogin('twitter'));
        document.getElementById('twitchLogin')?.addEventListener('click', () => this.handleSocialLogin('twitch'));
    }

    switchAuthTab(tab) {
        const loginTab = document.getElementById('loginTab');
        const signupTab = document.getElementById('signupTab');
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');

        if (tab === 'login') {
            loginTab.classList.add('active');
            signupTab.classList.remove('active');
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
        } else {
            signupTab.classList.add('active');
            loginTab.classList.remove('active');
            signupForm.style.display = 'block';
            loginForm.style.display = 'none';
        }
    }

    handleSocialLogin(provider) {
        console.log(`%c🔗 Initiating ${provider.toUpperCase()} neural link...`, 'color: #ff00ff; font-weight: bold;');
        this.showNotification(`Connecting to ${provider.toUpperCase()} neural network...`, 'info');
        
        // Simulate authentication
        setTimeout(() => {
            this.currentUser = {
                name: `CyberUser_${Math.random().toString(36).substr(2, 6)}`,
                provider: provider,
                avatar: provider.charAt(0).toUpperCase()
            };
            this.updateUserInterface();
            document.getElementById('authModal').style.display = 'none';
            this.showNotification(`Neural link established with ${provider.toUpperCase()}!`, 'success');
        }, 2000);
    }

    updateUserInterface() {
        const loginBtn = document.getElementById('loginBtn');
        const userAvatar = document.getElementById('userAvatar');
        
        if (this.currentUser) {
            loginBtn.style.display = 'none';
            userAvatar.style.display = 'flex';
            userAvatar.textContent = this.currentUser.avatar;
            userAvatar.title = this.currentUser.name;
        }
    }

    // AI Assistant functions
    setupAI() {
        const aiBtn = document.getElementById('aiAssistantBtn');
        const aiModal = document.getElementById('aiModal');
        const closeAiModal = document.getElementById('closeAiModal');
        const aiSendBtn = document.getElementById('aiSendBtn');
        const aiInput = document.getElementById('aiInput');

        aiBtn?.addEventListener('click', () => {
            aiModal.style.display = 'flex';
            this.addGlitchEffect(aiModal);
        });

        closeAiModal?.addEventListener('click', () => {
            aiModal.style.display = 'none';
        });

        aiSendBtn?.addEventListener('click', () => {
            this.sendAIMessage();
        });

        aiInput?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendAIMessage();
            }
        });

        // Quick action buttons
        document.querySelectorAll('.ai-quick-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.target.dataset.action;
                this.handleAIQuickAction(action);
            });
        });
    }

    sendAIMessage() {
        const aiInput = document.getElementById('aiInput');
        const message = aiInput.value.trim();
        
        if (!message) return;

        this.addAIMessage(message, 'user');
        aiInput.value = '';

        // Simulate AI response
        setTimeout(() => {
            const responses = [
                "Neural processing complete. I've analyzed your request and found relevant cyberpunk content.",
                "Quantum algorithms suggest these video recommendations based on your neural patterns.",
                "AI matrix scan complete. Here are the most relevant results from the digital realm.",
                "Neural network analysis indicates high compatibility with these content streams.",
                "Cyberpunk AI activated. Processing your request through the digital matrix..."
            ];
            const response = responses[Math.floor(Math.random() * responses.length)];
            this.addAIMessage(response, 'ai');
        }, 1500);
    }

    addAIMessage(message, sender) {
        const messagesContainer = document.getElementById('aiMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `ai-message ${sender}`;
        
        if (sender === 'ai') {
            messageDiv.innerHTML = `
                <div class="message-content">
                    <span class="ai-avatar">🤖</span>
                    <div class="message-text">${message}</div>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-content">
                    <span class="user-avatar">👤</span>
                    <div class="message-text">${message}</div>
                </div>
            `;
        }
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    handleAIQuickAction(action) {
        const actions = {
            recommend: "🎯 Analyzing your neural patterns for personalized recommendations...",
            search: "🔍 Activating AI-powered search algorithms...",
            coding: "💻 Loading cyberpunk coding tutorials and programming content...",
            sports: "⚽ Scanning for sports content in the digital matrix...",
            food: "🍳 Finding culinary content streams...",
            create: "✨ Initializing playlist creation protocols..."
        };

        const message = actions[action] || "Processing your request...";
        this.addAIMessage(message, 'ai');
    }

    // Notification system
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `cyber-notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${this.getNotificationIcon(type)}</span>
                <span class="notification-message">${message}</span>
            </div>
        `;

        // Add notification styles if not present
        if (!document.querySelector('#notification-styles')) {
            const styles = document.createElement('style');
            styles.id = 'notification-styles';
            styles.textContent = `
                .cyber-notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: var(--cyber-bg-card);
                    border: 2px solid var(--cyber-primary);
                    border-radius: 8px;
                    padding: 15px;
                    z-index: 10000;
                    font-family: 'Orbitron', monospace;
                    color: var(--cyber-text);
                    box-shadow: 0 0 20px var(--cyber-primary);
                    animation: slideInRight 0.3s ease-out;
                    max-width: 300px;
                }
                .cyber-notification.success { border-color: var(--cyber-success); box-shadow: 0 0 20px var(--cyber-success); }
                .cyber-notification.error { border-color: var(--cyber-danger); box-shadow: 0 0 20px var(--cyber-danger); }
                .cyber-notification.info { border-color: var(--cyber-accent); box-shadow: 0 0 20px var(--cyber-accent); }
                .notification-content { display: flex; align-items: center; gap: 10px; }
                .notification-icon { font-size: 18px; }
                .notification-message { flex: 1; font-size: 14px; }
                @keyframes slideInRight { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
            `;
            document.head.appendChild(styles);
        }

        document.body.appendChild(notification);

        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideInRight 0.3s ease-out reverse';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    getNotificationIcon(type) {
        const icons = {
            success: '✅',
            error: '❌',
            info: 'ℹ️',
            warning: '⚠️'
        };
        return icons[type] || 'ℹ️';
    }

    // Enhanced glitch effects
    addGlitchEffect(element) {
        element.classList.add('glitch-active');
        setTimeout(() => {
            element.classList.remove('glitch-active');
        }, 500);
    }

    // Performance monitoring
    startPerformanceMonitoring() {
        setInterval(() => {
            const perfData = {
                memory: window.performance.memory ? Math.round(window.performance.memory.usedJSHeapSize / 1048576) : 0,
                timing: window.performance.timing ? window.performance.timing.loadEventEnd - window.performance.timing.navigationStart : 0
            };
            
            if (Math.random() < 0.1) { // 10% chance to log
                console.log('%c📊 Neural Performance Metrics:', 'color: #00ffff; font-weight: bold;');
                console.log(`%c   Memory Usage: ${perfData.memory}MB`, 'color: #00ffaa;');
                console.log(`%c   Load Time: ${perfData.timing}ms`, 'color: #00ffaa;');
            }
        }, 5000);
    }

    // Video player functionality

    playVideo(videoCard) {
        const videoTitle = videoCard.querySelector('.video-title')?.textContent || 'Unknown Video';
        const channelName = videoCard.querySelector('.channel-name')?.textContent || 'Unknown Channel';
        const videoStats = videoCard.querySelector('.video-stats')?.textContent || 'No stats';
        const videoDuration = videoCard.querySelector('.video-duration')?.textContent || '0:00';
        const videoId = videoCard.dataset.videoId || Math.random().toString(36).substr(2, 9);
        const videoSrc = videoCard.dataset.videoSrc || 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

        console.log(`%c🎬 Playing video: ${videoTitle}`, 'color: #00ffff; font-weight: bold;');
        this.showNotification(`Loading ${videoTitle}...`, 'info');

        this.createVideoPlayer(videoTitle, channelName, videoStats, videoDuration, videoId, videoSrc);
    }

    createVideoPlayer(title, channel, stats, duration, videoId, videoSrc) {
        // Remove existing player
        const existingPlayer = document.querySelector('.video-player-modal');
        if (existingPlayer) {
            existingPlayer.remove();
        }

        const playerModal = document.createElement('div');
        playerModal.className = 'video-player-modal';
        playerModal.innerHTML = `
            <div class="video-player-container">
                <div class="video-player-header">
                    <h2 class="player-title">${title}</h2>
                    <button class="close-player" onclick="window.cyberTube.closeVideoPlayer()">×</button>
                </div>
                
                <div class="video-screen">
                    <video class="cyber-video" controls autoplay preload="metadata" playsinline>
                        <source src="${videoSrc}" type="video/mp4">
                        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
                        <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div class="video-loading" style="display: none;">
                        <div class="loading-spinner"></div>
                        <span>NEURAL LINK ESTABLISHED...</span>
                    </div>
                </div>
                
                <div class="video-info-panel">
                    <div class="video-meta">
                        <div class="channel-info">
                            <div class="channel-avatar">${channel.charAt(0)}</div>
                            <div class="channel-details">
                                <div class="channel-name">${channel}</div>
                                <div class="video-stats">${stats}</div>
                            </div>
                        </div>
                        <div class="video-actions">
                            <button class="action-btn like-btn" onclick="window.cyberTube.toggleLike('${videoId}')">
                                <span class="action-icon">👍</span>
                                <span class="action-text">LIKE</span>
                            </button>
                            <button class="action-btn share-btn" onclick="window.cyberTube.shareVideo('${videoId}')">
                                <span class="action-icon">📤</span>
                                <span class="action-text">SHARE</span>
                            </button>
                            <button class="action-btn save-btn" onclick="window.cyberTube.saveVideo('${videoId}')">
                                <span class="action-icon">💾</span>
                                <span class="action-text">SAVE</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Add player styles
        this.addVideoPlayerStyles();
        
        document.body.appendChild(playerModal);
        
        // Initialize video player
        setTimeout(() => {
            playerModal.classList.add('active');
            this.initializeVideoPlayer();
        }, 100);
    }

    addVideoPlayerStyles() {
        if (document.querySelector('#video-player-styles')) return;

        const styles = document.createElement('style');
        styles.id = 'video-player-styles';
        styles.textContent = `
            .video-player-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: rgba(0, 0, 0, 0.9);
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            .video-player-modal.active { opacity: 1; }
            .video-player-container {
                background: var(--cyber-bg-card);
                border: 2px solid var(--cyber-primary);
                border-radius: 15px;
                width: 90%;
                max-width: 1200px;
                max-height: 90vh;
                overflow: hidden;
                box-shadow: 0 0 30px var(--cyber-primary);
            }
            .video-player-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 15px 20px;
                background: var(--cyber-bg-darker);
                border-bottom: 1px solid var(--cyber-primary);
            }
            .player-title {
                color: var(--cyber-primary);
                font-family: 'Orbitron', monospace;
                font-size: 18px;
                margin: 0;
            }
            .close-player {
                background: var(--cyber-danger);
                border: none;
                color: white;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                cursor: pointer;
                font-size: 18px;
                font-weight: bold;
            }
            .video-screen {
                position: relative;
                background: #000;
            }
            .cyber-video {
                width: 100%;
                height: auto;
                max-height: 60vh;
                outline: none;
            }
            .video-loading {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: var(--cyber-primary);
                text-align: center;
            }
            .loading-spinner {
                width: 40px;
                height: 40px;
                border: 3px solid var(--cyber-primary);
                border-top: 3px solid transparent;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin: 0 auto 10px;
            }
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
            .video-info-panel {
                padding: 20px;
            }
            .video-meta {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 20px;
            }
            .channel-info {
                display: flex;
                align-items: center;
                gap: 15px;
            }
            .channel-avatar {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: var(--cyber-secondary);
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                color: white;
            }
            .channel-name {
                color: var(--cyber-text);
                font-weight: bold;
                margin-bottom: 5px;
            }
            .video-stats {
                color: var(--cyber-text-secondary);
                font-size: 14px;
            }
            .video-actions {
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
            }
            .action-btn {
                background: var(--cyber-bg-darker);
                border: 1px solid var(--cyber-primary);
                color: var(--cyber-text);
                padding: 8px 15px;
                border-radius: 5px;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 8px;
                font-family: 'Orbitron', monospace;
                font-size: 12px;
                transition: all 0.3s ease;
            }
            .action-btn:hover {
                background: var(--cyber-primary);
                color: var(--cyber-bg);
                transform: translateY(-2px);
            }
            .action-btn.active {
                background: var(--cyber-secondary);
                border-color: var(--cyber-secondary);
            }
        `;
        document.head.appendChild(styles);
    }

    initializeVideoPlayer() {
        const video = document.querySelector('.cyber-video');
        const loadingOverlay = document.querySelector('.video-loading');
        
        if (video) {
            video.volume = 0.8;
            
            video.addEventListener('loadstart', () => {
                if (loadingOverlay) loadingOverlay.style.display = 'flex';
            });
            
            video.addEventListener('canplay', () => {
                if (loadingOverlay) loadingOverlay.style.display = 'none';
                this.showNotification('Neural stream activated', 'success');
            });
            
            video.addEventListener('error', () => {
                if (loadingOverlay) loadingOverlay.style.display = 'none';
                this.showNotification('Video loading failed', 'error');
            });
        }
    }

    closeVideoPlayer() {
        const playerModal = document.querySelector('.video-player-modal');
        if (playerModal) {
            playerModal.classList.remove('active');
            setTimeout(() => {
                playerModal.remove();
            }, 300);
        }
    }

    toggleLike(videoId) {
        const likeBtn = document.querySelector('.like-btn');
        const isLiked = likeBtn.classList.contains('active');
        
        if (isLiked) {
            likeBtn.classList.remove('active');
            this.showNotification('Like removed', 'info');
        } else {
            likeBtn.classList.add('active');
            this.showNotification('Video liked!', 'success');
        }
    }

    shareVideo(videoId) {
        const shareUrl = `https://cybertube.com/watch?v=${videoId}`;
        navigator.clipboard.writeText(shareUrl).then(() => {
            this.showNotification('Neural link copied to clipboard!', 'success');
        }).catch(() => {
            this.showNotification('Share link generated', 'success');
        });
    }

    saveVideo(videoId) {
        const saveBtn = document.querySelector('.save-btn');
        const isSaved = saveBtn.classList.contains('active');
        
        if (isSaved) {
            saveBtn.classList.remove('active');
            this.showNotification('Removed from neural storage', 'info');
        } else {
            saveBtn.classList.add('active');
            this.showNotification('Saved to neural storage', 'success');
        }
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
