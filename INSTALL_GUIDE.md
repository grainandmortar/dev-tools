# Installation Guide

Simple step-by-step instructions for installing development tools from this repository using Claude Code.

## 🚀 Quick Install

### Step 1: Open Claude Code
Open Claude Code in your website project directory.

### Step 2: Give the Install Command
Copy and paste this command:

```
Install the outline toggle tool from https://github.com/grain-and-mortar/dev-tools
```

### Step 3: Done! 
Claude Code will automatically:
- Detect if you're using WordPress or static HTML
- Download the necessary files
- Install them in the correct location
- Add the integration code
- Test that everything works

---

## 🎯 Alternative Commands

You can also use any of these phrases:

```
Get the outline toggle from the dev-tools repo and set it up
```

```
Add the outline debugging tool from grain-and-mortar/dev-tools
```

```
Install outline toggle from https://github.com/grain-and-mortar/dev-tools
```

---

## 🔧 What Happens Automatically

### For WordPress Sites
Claude Code will:
1. Download `outline-toggle.css` and `outline-toggle.js`
2. Place them in your active theme directory
3. Add code to `functions.php` to load the files
4. Add the toggle button to `footer.php`
5. Test that it appears only for administrators

### For Static HTML Sites
Claude Code will:
1. Download the CSS and JS files to your assets folder
2. Add CSS link to your HTML `<head>`
3. Add the toggle button and script before `</body>`
4. Test functionality across your pages

---

## 📋 What You'll Get

After installation:
- ✅ **Floating toggle button** in bottom-right corner
- ✅ **Three modes**: Off → Divs Only → All Elements  
- ✅ **Color-coded outlines** for different HTML elements
- ✅ **Keyboard shortcut**: `Ctrl/Cmd + Shift + O`
- ✅ **Only visible** to administrators (WordPress) or in development
- ✅ **Usage instructions** from Claude Code

---

## 🎨 How to Use the Tool

1. **Click the button** in the bottom-right corner to cycle through modes
2. **Use keyboard shortcut**: `Ctrl + Shift + O` (or `Cmd + Shift + O` on Mac)
3. **Three modes available**:
   - **Off**: Normal view
   - **Divs**: Red outlines on div elements only
   - **All**: Color-coded outlines on all elements

### Color Coding (All Elements Mode)
- 🔴 **Red**: Div elements
- 🔵 **Blue**: Text elements (p, span, a, li)
- 🟢 **Green**: Headings (h1-h6)
- 🟠 **Orange**: Media elements (img, video)
- 🟣 **Purple**: Form elements (button, input, select, textarea)
- 🔴 **Dark Red (thick)**: Structural elements (section, article, main, header, footer, nav)

---

## ⚠️ Important Reminders

### Before Production
**Always remove development tools before going live!**

Claude Code will remind you, but make sure to:
- Remove the CSS and JS files
- Remove the integration code from your theme/HTML
- Test that your site works normally without the tool

### Security
- Tools only show for administrators in WordPress
- No data is collected or sent anywhere
- Tools only modify visual appearance locally
- Safe for development and staging environments

---

## 🆘 Troubleshooting

### Tool Not Appearing?
1. Check browser console for JavaScript errors
2. Verify files were downloaded correctly
3. Check that you're logged in as administrator (WordPress)
4. Ask Claude Code to verify the installation

### Wrong Project Type Detected?
If Claude Code detects the wrong type of site, just clarify:
```
This is a WordPress site, install the outline toggle tool
```
or
```
This is a static HTML site, install the outline toggle tool
```

---

## 🔄 Future Tools

As new tools are added to this repository, use the same pattern:
```
Install the [tool-name] from https://github.com/grain-and-mortar/dev-tools
```

Claude Code will automatically handle any new tools following the same installation process.

---

## 📞 Need Help?

If you run into issues:
1. Ask Claude Code to troubleshoot the installation
2. Check the individual tool's README in the `tools/` folder
3. [Open an issue](https://github.com/grain-and-mortar/dev-tools/issues) on GitHub

---

**That's it!** Just one command and you're ready to debug your layouts visually.