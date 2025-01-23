'use client';

const fs = require('fs');
const path = require('path');

const directory = './'; // Root of your project

function findFiles(dir) {
    let results = [];
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat && stat.isDirectory()) {
            results = results.concat(findFiles(fullPath));
        } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.tsx')) {
            results.push(fullPath);
        }
    });

    return results;
}

function checkFile(file) {
    const content = fs.readFileSync(file, 'utf-8');
    if (content.includes('useTranslations') && !content.startsWith("'use client'")) {
        return file;
    }
    return null;
}

const files = findFiles(directory);
const missingUseClient = files
    .map((file) => checkFile(file))
    .filter(Boolean);

if (missingUseClient.length > 0) {
    console.log('Files missing "use client":');
    console.log(missingUseClient.join('\n'));
} else {
    console.log('All files with useTranslations have "use client".');
}
