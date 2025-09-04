# Grain & Mortar Development Tools

A collection of lightweight development and debugging tools for frontend developers. These tools are designed to be framework-agnostic and easily integrated into any web project.

![Development Tools](https://img.shields.io/badge/Tools-Frontend%20Development-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Maintained](https://img.shields.io/badge/Maintained-Yes-brightgreen)

## 🛠️ Available Tools

### [Outline Toggle](./tools/outline-toggle/)
A visual debugging tool for HTML layout analysis with color-coded element outlines.

- **Purpose**: Visualize element layouts and structure
- **Features**: Three modes (off/divs/all elements), color-coding, keyboard shortcuts
- **Integration**: WordPress, static HTML, any web framework
- **Status**: ✅ Ready

[→ View Documentation](./tools/outline-toggle/README.md) | [→ Try Demo](./tools/outline-toggle/examples/demo.html)

---

## 🚀 Quick Start

### For Claude Code Users
Simply provide Claude Code with this repository link and say:
> "Install the [tool-name] from the dev-tools repo"

Claude will automatically detect your project type (WordPress/Static HTML) and install the tool with proper integration.

### Manual Installation
Each tool in this repository is self-contained and can be used independently:

1. **Browse the tools** in the `tools/` directory
2. **Check each tool's README** for specific installation instructions
3. **Download or clone** the files you need
4. **Integrate** into your project following the documentation

### 🤖 Claude Code Integration
See [CLAUDE_INTEGRATION.md](./CLAUDE_INTEGRATION.md) for detailed instructions on how Claude Code can automatically install these tools.

## 📁 Repository Structure

```
dev-tools/
├── README.md                    # This file
├── tools/                       # Individual development tools
│   └── outline-toggle/          # Outline Toggle Tool
│       ├── README.md            # Tool documentation
│       ├── package.json         # NPM package info
│       ├── dist/                # Ready-to-use files
│       │   ├── outline-toggle.css
│       │   ├── outline-toggle.js
│       │   └── outline-toggle-standalone.html
│       └── examples/            # Usage examples
│           ├── demo.html
│           ├── wordpress-example.html
│           └── custom-styling.html
└── [future-tools]/              # Additional tools will be added here
```

## 🎯 Tool Categories

Our development tools are organized by purpose:

### 🔍 **Debugging & Visualization**
- [Outline Toggle](./tools/outline-toggle/) - Element layout visualization

### 📝 **Coming Soon**
- Form validation helpers
- Performance monitoring widgets
- Accessibility testing tools
- Color palette extractors
- And more...

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Adding a New Tool

1. **Create a new directory** in `tools/` with a descriptive name
2. **Follow the structure** of existing tools:
   ```
   tools/your-tool-name/
   ├── README.md          # Tool documentation
   ├── package.json       # Package info (optional)
   ├── dist/              # Distribution files
   └── examples/          # Usage examples
   ```
3. **Include comprehensive documentation** with:
   - Clear installation instructions
   - Usage examples for different frameworks
   - Browser compatibility info
   - Security considerations (if applicable)

### Improving Existing Tools

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/improvement-name`
3. Make your changes
4. Test across different browsers and frameworks
5. Update documentation if needed
6. Submit a pull request

## 📋 Tool Standards

All tools in this repository follow these standards:

### ✅ **Requirements**
- **Framework agnostic** - Works with any web technology
- **Zero dependencies** - Pure HTML/CSS/JavaScript when possible
- **Development focused** - Designed for dev/staging environments
- **Well documented** - Clear README with examples
- **Browser compatible** - Works in modern browsers
- **Security conscious** - No data collection, safe for development

### 🔒 **Security Guidelines**
- Tools should be **development-only** and removed before production
- Include **environment checks** (e.g., `WP_DEBUG`, admin permissions)
- **No external requests** unless absolutely necessary
- **No sensitive data handling** - these are debugging tools only

## 📜 License

All tools are released under the MIT License unless otherwise specified in individual tool directories. Feel free to use, modify, and distribute these tools in your projects.

## 🏢 About Grain & Mortar

These tools are developed and maintained by Grain & Mortar, a web development team focused on creating efficient, practical solutions for frontend development challenges.

- 🌐 **Website**: [grainandmortar.com](https://grainandmortar.com)
- 📧 **Contact**: [Contact us](mailto:hello@grainandmortar.com)
- 🐛 **Issues**: [Report bugs or request features](https://github.com/grain-and-mortar/dev-tools/issues)

---

**⚠️ Important**: These are development tools. Always remove them before deploying to production environments.

**💡 Have an idea for a tool?** [Open an issue](https://github.com/grain-and-mortar/dev-tools/issues) and let us know what would be helpful for your development workflow!