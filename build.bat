@echo off
echo Building Samyak's Portfolio...
echo Current directory: %CD%
echo.

REM Check if we're in the right directory
if not exist "package.json" (
    echo ERROR: package.json not found!
    echo Please run this script from the project root directory.
    echo.
    pause
    exit /b 1
)

REM Clean previous build
if exist "dist" (
    echo Cleaning previous build...
    rmdir /s /q "dist"
    echo Previous build cleaned.
    echo.
)

REM Run build
echo Running build...
npm run build

REM Check if build was successful
if exist "dist" (
    echo.
    echo Build successful!
    echo.
    echo Dist contents:
    dir /b "dist"
    echo.
    if exist "dist\index.html" (
        echo index.html found in dist folder.
    ) else (
        echo WARNING: index.html NOT found in dist folder!
    )
    echo.
    echo Build and test completed successfully!
    echo You can now deploy the contents of the dist folder.
) else (
    echo.
    echo Build failed - dist folder not created.
    pause
    exit /b 1
)

echo.
pause