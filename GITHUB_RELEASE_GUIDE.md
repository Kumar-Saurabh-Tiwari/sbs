# How to Create a GitHub Release & Upload APK

## Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in (create account if needed)
2. Click **+ New Repository**
3. Name: `netflix-app`
4. Description: `Beautiful Netflix-like streaming app built with React Native`
5. Make it **Public** (so anyone can download)
6. Click **Create Repository**

---

## Step 2: Push Your Code to GitHub

Copy and paste these commands in PowerShell (one after another):

```powershell
cd "d:\Personal-Work\mobile-app\sbs"

git config --global user.name "Your Name"
git config --global user.email "your.email@gmail.com"

git init
git add .
git commit -m "Initial commit: Netflix-like streaming app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/netflix-app.git
git push -u origin main
```

**Replace:**
- `Your Name` with your actual name
- `your.email@gmail.com` with your GitHub email
- `YOUR_USERNAME` with your GitHub username

---

## Step 3: Create a Release on GitHub

### Option A: Using GitHub Website (Easiest)

1. Go to your repo: `https://github.com/YOUR_USERNAME/netflix-app`
2. Click **Releases** (right side)
3. Click **Create a new release**
4. **Tag version:** `v1.0.0`
5. **Release title:** `Netflix App v1.0.0`
6. **Description:**
   ```
   🎬 Beautiful Netflix-like Streaming App
   
   Features:
   - Dark theme with Netflix styling
   - Search movies functionality
   - Category filtering
   - Beautiful UI with Emojis
   
   Installation:
   1. Download the APK file below
   2. Open on your Android phone
   3. Install and enjoy!
   
   Supported: Android 6.0+
   ```
7. **Upload binary:** Drag & drop `netflix-app.apk` from `d:\Personal-Work\mobile-app\`
8. Click **Publish release**

### Option B: Using GitHub CLI (if installed)

```powershell
cd "d:\Personal-Work\mobile-app\sbs"
gh release create v1.0.0 "d:\Personal-Work\mobile-app\netflix-app.apk" --title "Netflix App v1.0.0" --notes "Beautiful Netflix-like streaming app built with React Native"
```

---

## Step 4: Share Your App

Once released, users can download from:
```
https://github.com/YOUR_USERNAME/netflix-app/releases
```

Anyone can click the APK and download it directly!

---

## Step 5: Update Your README.md

Edit [README.md](README.md) and add:

```markdown
# Netflix App 🎬

A beautiful Netflix-like streaming application built with React Native.

## Features

✨ **Dark Theme** - Netflix-style dark UI  
🔍 **Search** - Find movies and shows  
📂 **Categories** - Filter by genre  
⭐ **Ratings** - View ratings for each title  

## Download

Get the latest APK from [Releases](https://github.com/YOUR_USERNAME/netflix-app/releases)

## Installation

1. Download `netflix-app.apk`
2. On Android phone, go to Settings > Security > Enable "Unknown Sources"
3. Open APK file and tap Install
4. Launch the app from your home screen

## Supported Platforms

- Android 6.0 and above

## Build from Source

```bash
git clone https://github.com/YOUR_USERNAME/netflix-app.git
cd netflix-app
npm install
npm run android
```

## License

MIT License
```

---

## Done! 🎉

Your app is now:
- ✅ On GitHub (version controlled)
- ✅ Released publicly
- ✅ Downloadable as APK
- ✅ Ready for users to install

Anyone can visit your GitHub releases page and download your app anytime!
