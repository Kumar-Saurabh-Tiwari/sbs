# Quick Commands for GitHub Release

## 1️⃣ Configure Git (Run Once)

```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@gmail.com"
```

## 2️⃣ Push Code to GitHub (Run Once)

```powershell
cd "d:\Personal-Work\mobile-app\sbs"

git init
git add .
git commit -m "Initial commit: Netflix-like streaming app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/netflix-app.git
git push -u origin main
```

Then go to: `https://github.com/YOUR_USERNAME/netflix-app`

## 3️⃣ Create Release on GitHub (Manual)

1. Visit: `https://github.com/YOUR_USERNAME/netflix-app/releases/new`
2. Create new release with:
   - **Tag**: `v1.0.0`
   - **Title**: `Netflix App v1.0.0`
   - **Upload**: `d:\Personal-Work\netflix-app-v1.0.apk`
   - **Description**: Paste below

### Release Description Template

```markdown
🎬 Beautiful Netflix-like Streaming App v1.0.0

## Download & Install
Click the APK file below and download to install on your Android phone!

**Steps:**
1. Download netflix-app-v1.0.apk
2. On phone: Settings > Security > Enable "Unknown Sources"
3. Open APK > Tap Install
4. Done!

## Features
✨ Dark Netflix-style UI
🔍 Search movies
📂 Category filters
⭐ Ratings
📱 Responsive design

## Requirements
- Android 6.0 or higher

## Support
- Report issues: [Open an issue](../../issues)
```

## 4️⃣ Update Code (After Changes)

```powershell
cd "d:\Personal-Work\mobile-app\sbs"

git add .
git commit -m "Update: Your changes here"
git push
```

## 5️⃣ Build New APK (If Code Changed)

```powershell
cd "d:\Personal-Work\mobile-app\sbs"
npm install
npm run android
```

Then create a new release with updated APK.

---

## File Locations

| File | Location |
|------|----------|
| **APK** | `d:\Personal-Work\netflix-app-v1.0.apk` |
| **Source Code** | `d:\Personal-Work\mobile-app\sbs\` |
| **README** | `d:\Personal-Work\mobile-app\sbs\README.md` |

---

## URLs You'll Need

| Item | URL |
|------|-----|
| **Your Repo** | `https://github.com/YOUR_USERNAME/netflix-app` |
| **Releases Page** | `https://github.com/YOUR_USERNAME/netflix-app/releases` |
| **Download Page** | `https://github.com/YOUR_USERNAME/netflix-app/releases/tag/v1.0.0` |

---

## Common Git Commands

```powershell
# Check git status
git status

# View commit history
git log --oneline

# View remotes
git remote -v

# See recent changes
git diff

# Undo last commit (careful!)
git reset HEAD~1
```

---

**That's it! Your app is ready to share with the world! 🚀**
