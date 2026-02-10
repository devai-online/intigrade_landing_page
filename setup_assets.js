const fs = require('fs');
const path = require('path');

const srcAssets = path.join(__dirname, 'src', 'assets');
const sourceFile = path.join(__dirname, 'intigrade.png');
const destFile = path.join(srcAssets, 'intigrade.png');

console.log('Starting asset setup...');

try {
    if (!fs.existsSync(srcAssets)) {
        console.log('Creating directory:', srcAssets);
        fs.mkdirSync(srcAssets, { recursive: true });
    } else {
        console.log('Directory already exists:', srcAssets);
    }

    if (fs.existsSync(sourceFile)) {
        console.log('Moving file from', sourceFile, 'to', destFile);
        fs.renameSync(sourceFile, destFile);
        console.log('File moved successfully.');
    } else {
        console.log('Source file not found:', sourceFile);
        if (fs.existsSync(destFile)) {
            console.log('File already exists at destination.');
        } else {
            console.log('CRITICAL: Source file missing and not at destination.');
            // List root directory to see what's there
            console.log('Root directory contents:', fs.readdirSync(__dirname));
        }
    }
} catch (error) {
    console.error('Error occurred:', error);
}
