# Artha Advisory Publish Script
# This script builds the site and zips the output for cPanel upload

$projectName = "website_publish"
$distPath = "docs-site/docs/.vitepress/dist"

Write-Host "--- Starting Build Process ---" -ForegroundColor Cyan

# Check if node_modules exists
if (-not (Test-Path "docs-site/node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    Set-Location docs-site
    npm install
    Set-Location ..
}

# Run the build
Write-Host "Building the site..." -ForegroundColor Yellow
Set-Location docs-site
npm run docs:build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed! Please check for errors (e.g., dead links)." -ForegroundColor Red
    Set-Location ..
    exit 1
}

Set-Location ..

# Create the zip file
Write-Host "Creating zip package..." -ForegroundColor Yellow
if (Test-Path "$projectName.zip") {
    Remove-Item "$projectName.zip"
}

Compress-Archive -Path "$distPath\*" -DestinationPath "$projectName.zip"

Write-Host "--- Publication Ready! ---" -ForegroundColor Green
Write-Host "Please upload '$projectName.zip' to your cPanel public_html folder." -ForegroundColor Green
