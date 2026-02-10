const fs = require('fs');
const path = require('path');

const srcAssets = path.join(__dirname, 'src', 'assets');
const sourceFile = path.join(__dirname, 'intigrade black.png');
const destFile = path.join(srcAssets, 'intigrade_black.png');

console.log('Starting black logo move...');

try {
    if (!fs.existsSync(srcAssets)) {
        console.log('Creating directory:', srcAssets);
        fs.mkdirSync(srcAssets, { recursive: true });
    }

    if (fs.existsSync(sourceFile)) {
        console.log('Moving file from', sourceFile, 'to', destFile);
        fs.renameSync(sourceFile, destFile);
        console.log('File moved successfully.');
    } else {
        console.log('Source file not found:', sourceFile);
        if (fs.existsSync(destFile)) {
            console.log('File already exists at destination.');
        }
    }
} catch (error) {
    console.error('Error occurred:', error);
}
