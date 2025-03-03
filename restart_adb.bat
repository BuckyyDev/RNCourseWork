@echo off
echo Killing ADB server...
X:\AndroidSDK\platform-tools\adb.exe kill-server

echo Starting ADB server...
X:\AndroidSDK\platform-tools\adb.exe start-server

echo ADB server restarted successfully.
pause