# Outline Toggle Tool

A lightweight development debugging tool for visualizing HTML element layouts with colored outlines. Perfect for frontend developers who need to quickly understand page structure and alignment.

![Outline Toggle Demo](https://img.shields.io/badge/Status-Development%20Tool-orange)
![License](https://img.shields.io/badge/License-MIT-blue)

## Features

- 🎯 **Three modes**: Off → Divs Only → All Elements
- 🎨 **Color-coded outlines** for different element types
- 💾 **Persistent state** using localStorage
- ⌨️ **Keyboard shortcut**: `Ctrl/Cmd + Shift + O`
- 🚀 **Zero dependencies** - vanilla JavaScript
- 📱 **Responsive design** - works on all screen sizes
- 🔧 **Easy integration** with WordPress, static sites, or any HTML

## Quick Start

### Option 1: Standalone HTML (Fastest)

Copy the standalone HTML file and open it in your browser:

```html
<!-- Just include this single file -->
<script src="dist/outline-toggle-standalone.html"></script>
```

### Option 2: Modular Installation

1. **Download the files:**
   ```bash
   curl -O https://raw.githubusercontent.com/yourusername/outline-toggle-tool/main/dist/outline-toggle.css
   curl -O https://raw.githubusercontent.com/yourusername/outline-toggle-tool/main/dist/outline-toggle.js
   ```

2. **Add to your HTML:**
   ```html
   <link rel="stylesheet" href="outline-toggle.css">
   <script src="outline-toggle.js"></script>
   
   <!-- Add this button anywhere in your HTML -->
   <button id="outlineToggle" class="outline-toggle-btn state-off">
       <span id="outlineToggleText">Outline Mode</span>
   </button>
   ```

### Option 3: WordPress Integration

1. **Upload files** to your theme's directory
2. **Enqueue in functions.php** (development only):
   ```php
   function add_outline_toggle_tool() {
       if (WP_DEBUG || current_user_can('administrator')) {
           wp_enqueue_style('outline-toggle', get_template_directory_uri() . '/outline-toggle.css');
           wp_enqueue_script('outline-toggle', get_template_directory_uri() . '/outline-toggle.js');
       }
   }
   add_action('wp_enqueue_scripts', 'add_outline_toggle_tool');
   ```

3. **Add button to footer.php**:
   ```php
   <?php if (WP_DEBUG || current_user_can('administrator')) : ?>
   <button id="outlineToggle" class="outline-toggle-btn state-off">
       <span id="outlineToggleText">Outline Mode</span>
   </button>
   <?php endif; ?>
   ```

## How It Works

The tool provides three visualization modes:

### 🔴 **Normal Mode** (Divs Only)
- Shows red outlines on all `<div>` elements
- Perfect for understanding layout structure
- Helps identify alignment issues

### 🌈 **Enhanced Mode** (All Elements)
- **Red**: Div elements
- **Blue**: Text elements (p, span, a, li)
- **Green**: Headings (h1-h6)
- **Orange**: Media elements (img, video)
- **Purple**: Form elements (button, input, select, textarea)
- **Dark Red (thick)**: Structural elements (section, article, main, header, footer, nav)

### ⚫ **Off Mode**
- No outlines visible
- Normal site appearance

## Keyboard Shortcut

Press `Ctrl + Shift + O` (or `Cmd + Shift + O` on Mac) to cycle through modes.

## API

The tool exposes a global API for programmatic control:

```javascript
// Set specific mode
window.outlineToggle.setMode('enhanced');

// Cycle through modes
window.outlineToggle.cycle();

// Get current mode
console.log(window.outlineToggle.getCurrentMode()); // 'off', 'normal', or 'enhanced'
```

## Examples

Check the `examples/` folder for:
- Basic HTML implementation
- WordPress theme integration
- Custom styling examples

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## Development

This tool is designed for **development use only**. Make sure to:

1. Remove before production deployment
2. Only load for administrators/developers
3. Use environment checks (like `WP_DEBUG`)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different browsers
5. Submit a pull request

## License

MIT License - feel free to use in your projects!

## Security

This tool is for development purposes only. It:
- Does not collect any data
- Does not send network requests
- Only modifies visual appearance locally
- Stores preferences in browser localStorage

---

**⚠️ Important**: This is a development tool. Always remove it before deploying to production!

Made with ❤️ by Grain & Mortar