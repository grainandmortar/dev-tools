# Claude Code Integration Guide

This guide explains how Claude Code can automatically install and enable development tools from this repository.

## 🤖 For Claude Code

When a user provides this GitHub repo link and asks you to install a tool, follow these patterns:

### WordPress Sites
```bash
# Download the tool files
curl -o outline-toggle.css https://raw.githubusercontent.com/grain-and-mortar/dev-tools/main/tools/outline-toggle/dist/outline-toggle.css
curl -o outline-toggle.js https://raw.githubusercontent.com/grain-and-mortar/dev-tools/main/tools/outline-toggle/dist/outline-toggle.js

# Move to theme directory
mv outline-toggle.css wp-content/themes/active-theme/
mv outline-toggle.js wp-content/themes/active-theme/
```

Add to `functions.php`:
```php
// Development Tool: Outline Toggle (REMOVE BEFORE PRODUCTION)
function add_outline_toggle_dev_tool() {
    if (WP_DEBUG || current_user_can('administrator')) {
        wp_enqueue_style('outline-toggle-dev', get_template_directory_uri() . '/outline-toggle.css');
        wp_enqueue_script('outline-toggle-dev', get_template_directory_uri() . '/outline-toggle.js');
    }
}
add_action('wp_enqueue_scripts', 'add_outline_toggle_dev_tool');
```

Add to `footer.php` (before closing `</body>`):
```php
<?php if (WP_DEBUG || current_user_can('administrator')) : ?>
<!-- DEVELOPMENT TOOL - REMOVE BEFORE PRODUCTION -->
<button id="outlineToggle" class="outline-toggle-btn state-off">
    <span id="outlineToggleText">Outline Mode</span>
</button>
<?php endif; ?>
```

### Static HTML/CSS Sites
```bash
# Download files to project
curl -o assets/css/outline-toggle.css https://raw.githubusercontent.com/grain-and-mortar/dev-tools/main/tools/outline-toggle/dist/outline-toggle.css
curl -o assets/js/outline-toggle.js https://raw.githubusercontent.com/grain-and-mortar/dev-tools/main/tools/outline-toggle/dist/outline-toggle.js
```

Add to HTML `<head>`:
```html
<!-- DEVELOPMENT TOOL - REMOVE BEFORE PRODUCTION -->
<link rel="stylesheet" href="assets/css/outline-toggle.css">
```

Add before closing `</body>`:
```html
<!-- DEVELOPMENT TOOL - REMOVE BEFORE PRODUCTION -->
<button id="outlineToggle" class="outline-toggle-btn state-off">
    <span id="outlineToggleText">Outline Mode</span>
</button>
<script src="assets/js/outline-toggle.js"></script>
```

## 🎯 Available Tools & Commands

### Outline Toggle Tool
**User Command**: "Install the outline toggle tool from the dev-tools repo"

**What Claude should do**:
1. Detect if it's WordPress or static HTML
2. Download the CSS and JS files
3. Add the appropriate integration code
4. Test that it works
5. Remind user to remove before production

**Files needed**:
- `tools/outline-toggle/dist/outline-toggle.css`
- `tools/outline-toggle/dist/outline-toggle.js`

**Integration points**:
- WordPress: `functions.php` + `footer.php`
- Static: Add to existing HTML files

### Future Tools
As new tools are added, follow this pattern:
- Each tool has a `dist/` folder with ready-to-use files
- Each tool has integration examples in `examples/` folder
- Claude should auto-detect the project type and use appropriate integration method

## 🔍 Auto-Detection Logic

Claude should check for:
1. **WordPress**: Look for `wp-config.php`, `functions.php`, or `wp-content/` directory
2. **Static HTML**: Look for `.html` files and typical static site structure
3. **Framework sites**: Check for `package.json`, build tools, etc.

## 🚨 Important Reminders

Claude should always:
1. **Add clear comments** marking development tools
2. **Warn about production removal** 
3. **Test the integration** after installation
4. **Provide removal instructions**

## 📋 Standard Installation Pattern

For any tool from this repo:

1. **Identify project type** (WordPress/Static/Framework)
2. **Download required files** from GitHub raw URLs
3. **Place files in appropriate directory**
4. **Add integration code** using the tool's examples
5. **Test functionality**
6. **Provide usage instructions and removal reminder**

## 🔗 GitHub Raw File URLs

Base URL: `https://raw.githubusercontent.com/grain-and-mortar/dev-tools/main/`

Examples:
- Outline Toggle CSS: `tools/outline-toggle/dist/outline-toggle.css`
- Outline Toggle JS: `tools/outline-toggle/dist/outline-toggle.js`
- Tool README: `tools/outline-toggle/README.md`

## ✅ Success Checklist

After installing any tool, Claude should verify:
- [ ] Files downloaded successfully
- [ ] Integration code added correctly
- [ ] Tool appears and functions on the site
- [ ] No JavaScript errors in console
- [ ] Tool is only visible to administrators/in dev mode
- [ ] User knows how to use the tool
- [ ] User reminded to remove before production