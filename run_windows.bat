@echo off
echo Starting Rain Night Station...
cd /d "%~dp0"
if not exist node_modules (
  echo Installing dependencies...
  npm install
)
echo.
echo Starting local dev server...
npm run dev
pause
