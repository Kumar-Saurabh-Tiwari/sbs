#!/bin/bash
# Quick GitHub setup script
# Run this after creating your GitHub repo

echo "========================================="
echo "Netflix App - GitHub Setup Script"
echo "========================================="
echo ""

# Get user input
read -p "Enter your GitHub username: " GITHUB_USER
read -p "Enter your full name: " FULL_NAME
read -p "Enter your email: " EMAIL

echo ""
echo "Configuring git..."

# Configure git
git config --global user.name "$FULL_NAME"
git config --global user.email "$EMAIL"

# Initialize repo
git init
git add .
git commit -m "Initial commit: Netflix-like streaming app"
git branch -M main

# Add remote
git remote add origin https://github.com/$GITHUB_USER/netflix-app.git

echo ""
echo "Ready to push? Run this command:"
echo "git push -u origin main"
echo ""
echo "After pushing, go to:"
echo "https://github.com/$GITHUB_USER/netflix-app/releases"
echo ""
echo "Then create a new release and upload the APK!"
