@echo off
REM Netflix App - GitHub Deployment Script
REM Run this in PowerShell to deploy your app

echo.
echo ========================================
echo NETFLIX APP - GITHUB DEPLOYMENT
echo ========================================
echo.

echo Step 1: Setting up git...
git config --global user.name "Netflix App Developer"
git config --global user.email "dev@netflix-app.com"

echo.
echo Step 2: Initializing repository...
cd /d "d:\Personal-Work\mobile-app\sbs"
git init
git add .
git commit -m "Initial commit: Beautiful Netflix-like streaming app built with React Native"
git branch -M main

echo.
echo Step 3: Adding GitHub remote...
echo.
echo IMPORTANT: You need to create a repository first!
echo.
echo 1. Go to https://github.com/new
echo 2. Create repo named "netflix-app"
echo 3. Copy the URL that looks like:
echo    https://github.com/YOUR_USERNAME/netflix-app.git
echo.

set /p GITHUB_REPO="Paste your GitHub repository URL: "

git remote add origin %GITHUB_REPO%

echo.
echo Step 4: Pushing code to GitHub...
git push -u origin main

echo.
echo ========================================
echo SUCCESS! Your code is now on GitHub!
echo ========================================
echo.
echo Next steps:
echo 1. Go to your GitHub repo
echo 2. Click "Releases"
echo 3. Create a new release
echo 4. Upload netflix-app-v1.0.apk
echo 5. Publish!
echo.
echo For detailed instructions, see DEPLOY_TO_GITHUB.md
echo.
pause
