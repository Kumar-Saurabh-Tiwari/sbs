# Netflix App 🎬

A beautiful Netflix-like streaming application built with React Native.

![License](https://img.shields.io/badge/license-MIT-blue)
![Platform](https://img.shields.io/badge/platform-Android-green)
![React Native](https://img.shields.io/badge/React%20Native-0.83-blue)

## Features ✨

- 🌙 **Dark Theme** - Netflix-style dark UI with red accents
- 🔍 **Search Movies** - Find movies and shows by title
- 📂 **Category Filter** - Browse by Sci-Fi, Drama, Thriller, Comedy, Action
- ⭐ **Ratings** - View ratings for each title
- 📱 **Fully Responsive** - Works on all Android devices (6.0+)
- ⚡ **Fast Performance** - Optimized React Native app
- 🎨 **Beautiful UI** - Custom styled components and smooth interactions

## Quick Start

### Download & Install (Easiest)

1. Go to [Releases](../../releases)
2. Download the latest `netflix-app.apk`
3. On your Android phone:
   - Settings → Security → Enable "Unknown Sources"
   - Open the APK file and tap Install
4. Done! 🎉

### Build from Source

**Requirements:**
- Node.js 20+
- Android SDK / Android Studio
- Git

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/netflix-app.git
cd netflix-app

# Install dependencies
npm install

# Run on Android
npm run android

# Or start development server
npm start
```

## Project Structure

```
.
├── App.tsx                 # Main app component
├── package.json            # Dependencies
├── android/                # Android native code
├── ios/                    # iOS native code (future)
└── README.md              # This file
```

## Tech Stack

- **React Native** - Cross-platform mobile framework
- **TypeScript** - Type-safe JavaScript
- **React Hooks** - State management
- **React Native Safe Area** - Safe area support

## Included Movies

The app comes with 8 sample movies:
- Stranger Things
- The Crown
- Squid Game
- Money Heist
- Breaking Bad
- Narcos
- Dark
- The Witcher

## Customization

Edit [App.tsx](App.tsx) to:
- Change colors and styling
- Add/remove movies from the list
- Modify category filters
- Add navigation/deep linking

## Performance

- APK Size: ~107 MB
- Min Android: 6.0 (API 23)
- Target Android: 13+ (API 33+)

## Contributing

Feel free to fork this project and submit pull requests for improvements!

## License

MIT License - see LICENSE file for details

## Support

- 📧 Report issues via GitHub Issues
- 💬 Discussions for feature requests
- 🐛 Found a bug? Open an issue!

---

**Made with ❤️ using React Native**
