# Netflix App 🎬

A beautiful Netflix-like streaming application built with [React Native](https://reactnative.dev).

## Features ✨

- 🌙 **Dark Theme** - Netflix-style dark UI with red accents
- 🔍 **Search Movies** - Find movies and shows by title
- 📂 **Category Filter** - Browse by Sci-Fi, Drama, Thriller, Comedy, Action
- ⭐ **Ratings** - View ratings for each title
- 📱 **Fully Responsive** - Works on all Android devices (6.0+)
- ⚡ **Fast Performance** - Optimized React Native app

## Download & Install

### Easiest Way: Download APK

1. Go to [Releases](https://github.com/Kumar-Saurabh-Tiwari/sbs/releases)
2. Download `netflix-app.apk`
3. On Android phone:
   - Go to **Settings > Security > Enable "Unknown Sources"**
   - Open the APK file and tap **Install**
4. Launch the app! 🎉

### Build from Source

> **Note**: Make sure you have completed the [React Native setup](https://reactnative.dev/docs/set-up-your-environment).

```sh
# Clone the repo
git clone https://github.com/Kumar-Saurabh-Tiwari/sbs.git
cd netflix-app

# Install dependencies
npm install

# Run on Android device/emulator
npm run android

# Or start Metro bundler
npm start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
