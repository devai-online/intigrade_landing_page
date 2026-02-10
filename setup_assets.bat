@echo off
if not exist "src\assets" mkdir "src\assets"
if exist "intigrade.png" move "intigrade.png" "src\assets\intigrade.png"
echo Done
