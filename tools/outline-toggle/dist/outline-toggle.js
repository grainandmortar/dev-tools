/**
 * Outline Toggle Development Tool JavaScript
 * 
 * DEVELOPMENT ONLY - DO NOT INCLUDE IN PRODUCTION
 * 
 * This script provides a floating toggle button that cycles through different outline modes:
 * - Off: No outlines (default)
 * - Normal: Red outlines on div elements only
 * - Enhanced: Color-coded outlines on all elements
 * 
 * Features:
 * - Persists state in localStorage
 * - Keyboard shortcut: Ctrl/Cmd + Shift + O
 * - Works with any HTML structure
 * 
 * Usage:
 * 1. Include outline-toggle.css in your HTML
 * 2. Include this JavaScript file
 * 3. Add the button HTML element to your page:
 *    <button id="outlineToggle" class="outline-toggle-btn state-off">
 *        <span id="outlineToggleText">Outline Mode</span>
 *    </button>
 */

(function() {
    'use strict';
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initOutlineToggle);
    } else {
        initOutlineToggle();
    }
    
    function initOutlineToggle() {
        const toggleButton = document.getElementById('outlineToggle');
        const toggleText = document.getElementById('outlineToggleText');
        
        if (!toggleButton || !toggleText) {
            console.warn('Outline Toggle: Button elements not found. Make sure you have elements with IDs "outlineToggle" and "outlineToggleText"');
            return;
        }

        const STORAGE_KEY = 'outlineMode';

        // States: 'off', 'normal', 'enhanced'
        let currentState = localStorage.getItem(STORAGE_KEY) || 'off';

        /**
         * Set the outline mode and update button appearance
         * @param {string} mode - The mode to set ('off', 'normal', or 'enhanced')
         */
        function setOutlineMode(mode) {
            // Remove all outline classes from body
            document.body.classList.remove('outline-mode', 'outline-mode-enhanced');
            
            // Remove all state classes from button
            toggleButton.classList.remove('state-off', 'state-normal', 'state-enhanced');

            switch(mode) {
                case 'normal':
                    document.body.classList.add('outline-mode');
                    toggleButton.classList.add('state-normal');
                    toggleText.textContent = 'Outline: Divs';
                    localStorage.setItem(STORAGE_KEY, 'normal');
                    break;
                    
                case 'enhanced':
                    document.body.classList.add('outline-mode-enhanced');
                    toggleButton.classList.add('state-enhanced');
                    toggleText.textContent = 'Outline: All';
                    localStorage.setItem(STORAGE_KEY, 'enhanced');
                    break;
                    
                case 'off':
                default:
                    toggleButton.classList.add('state-off');
                    toggleText.textContent = 'Outline Mode';
                    localStorage.removeItem(STORAGE_KEY);
                    currentState = 'off';
                    return;
            }
            currentState = mode;
        }

        /**
         * Cycle to the next outline mode
         */
        function cycleOutlineMode() {
            switch(currentState) {
                case 'off':
                    setOutlineMode('normal');
                    break;
                case 'normal':
                    setOutlineMode('enhanced');
                    break;
                case 'enhanced':
                    setOutlineMode('off');
                    break;
                default:
                    setOutlineMode('off');
            }
        }

        // Apply saved state on load
        setOutlineMode(currentState);

        // Add click event listener to toggle button
        toggleButton.addEventListener('click', cycleOutlineMode);

        // Add keyboard shortcut: Ctrl/Cmd + Shift + O
        document.addEventListener('keydown', function(e) {
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'O') {
                e.preventDefault();
                cycleOutlineMode();
            }
        });

        // Expose API for programmatic control (optional)
        if (typeof window !== 'undefined') {
            window.outlineToggle = {
                setMode: setOutlineMode,
                cycle: cycleOutlineMode,
                getCurrentMode: function() { return currentState; }
            };
        }
    }
})();