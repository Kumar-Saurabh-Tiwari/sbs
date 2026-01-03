# 🔧 FIX: "Unable to Load Script" Error

## ⚠️ THE PROBLEM

The error you're seeing means:
```
"Unable to load script"
Make sure you're running Metro...
```

This happens because you installed a **DEBUG APK** that needs Metro bundler.

---

## ✅ THE SOLUTION

Build a **RELEASE APK** instead - it has everything bundled inside!

Release APK = **No Metro needed** ✓

---

## 📦 WHAT'S THE DIFFERENCE?

### DEBUG APK (What you have now)
- ❌ Requires Metro bundler running
- ❌ Requires USB connection or WiFi to computer
- ❌ Doesn't work standalone
- ✓ Fast to build
- ✓ Good for development

### RELEASE APK (What you need)
- ✅ Works standalone (no Metro)
- ✅ Works on any phone, anywhere
- ✅ Professional quality
- ✅ Can be shared freely
- ⚠️ Takes longer to build

---

## 🚀 HOW TO FIX IT

### Step 1: Uninstall Old App
On your phone:
1. Settings → Apps
2. Find "sbs" or "Netflix App"
3. Tap → Uninstall

OR use command:
```powershell
adb uninstall com.sbs
```

### Step 2: Build Release APK
```powershell
cd "d:\Personal-Work\mobile-app\sbs\android"
cmd /c "gradlew.bat assembleRelease"
```

Wait for it to complete (takes ~2-3 minutes)

### Step 3: Install Release APK
```powershell
adb install "d:\Personal-Work\mobile-app\sbs\android\app\build\outputs\apk\release\app-release.apk"
```

### Step 4: Launch App
1. Tap app icon on phone
2. It should load instantly! ✅

---

## 📁 APK LOCATIONS

**After build completes, you'll have:**

| Type | Location |
|------|----------|
| **Release APK** (Use this!) | `android/app/build/outputs/apk/release/app-release.apk` |
| Debug APK | `android/app/build/outputs/apk/debug/app-debug.apk` |

---

## ✨ WHY RELEASE APK WORKS

Release APK includes:
- ✅ All JavaScript code bundled inside
- ✅ All resources included
- ✅ Optimized for production
- ✅ No external dependencies
- ✅ Works anywhere!

Debug APK tries to:
- ❌ Load JavaScript from Metro
- ❌ Expects Metro running on port 8081
- ❌ Needs network connection to computer
- ❌ Fails if Metro not available

---

## 🎯 QUICK INSTALL COMMAND

Once release APK is built:

```powershell
adb uninstall com.sbs
adb install "d:\Personal-Work\mobile-app\sbs\android\app\build\outputs\apk\release\app-release.apk"
adb shell am start -n com.sbs/.MainActivity
```

---

## 💡 KEY POINTS

✨ **Never share DEBUG APK**
- It doesn't work without Metro
- Users will get the same error

✨ **Always use RELEASE APK**
- Standalone and complete
- Works offline
- Professional quality

✨ **For GitHub**
- Upload RELEASE APK
- Not debug APK

---

## 🎉 EXPECTED RESULT

After installing release APK:

1. App opens instantly
2. Netflix UI displays
3. Search works
4. Movies show up
5. Categories work
6. Tap on movies
7. Everything works! ✅

---

## ⏱️ BUILD TIME

Release APK build takes:
- First build: ~2-3 minutes
- Subsequent builds: ~1-2 minutes

Be patient, it's creating a complete, standalone app!

---

## 📞 IF IT STILL DOESN'T WORK

1. Make sure old app is fully uninstalled
2. Wait for build to complete (watch terminal)
3. Install the RELEASE APK (not debug)
4. Restart phone if needed
5. Tap app icon

---

**Now your app will work perfectly! 🚀**

