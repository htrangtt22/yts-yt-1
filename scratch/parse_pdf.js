const fs = require('fs');
const path = require('path');

// Dynamically require pdf-parse
const pdf = require('pdf-parse');

const pdfPath = path.join(__dirname, '..', 'pdf', '到達目標（医学・医療編）v7.pdf');
const outputPath = path.join(__dirname, 'curriculum_text.txt');

console.log('Reading PDF from:', pdfPath);
let dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync(outputPath, data.text, 'utf8');
    console.log("Success! Extracted characters: " + data.text.length);
}).catch(err => {
    console.error('Error during extraction:', err);
    process.exit(1);
});
