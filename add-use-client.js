'use client';

const fs = require('fs');
const path = require('path');

const directory = './'; // Root directory of your project

// Recursively find all JavaScript/TypeScript files
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

// Check if a file uses useTranslations and is missing 'use client'
function needsUseClient(file) {
    const content = fs.readFileSync(file, 'utf-8');
    return content.includes('useTranslations') && !content.startsWith("'use client'");
}

// Add 'use client' to the top of a file
function addUseClient(file) {
    const content = fs.readFileSync(file, 'utf-8');
    const updatedContent = `'use client';\n\n${content}`;
    fs.writeFileSync(file, updatedContent, 'utf-8');
    console.log(`Added 'use client' to: ${file}`);
}

// Main script
function processFiles() {
    const files = findFiles(directory);
    const filesToUpdate = files.filter(needsUseClient);

    if (filesToUpdate.length === 0) {
        console.log('No files need updating.');
    } else {
        filesToUpdate.forEach(addUseClient);
        console.log('All applicable files have been updated.');
    }
}

processFiles();
