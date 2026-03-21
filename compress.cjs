const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public', 'results');

fs.readdir(dir, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    if (file.endsWith('.jpg') || file.endsWith('.png')) {
      const inputPath = path.join(dir, file);
      const outputName = file.replace(/\.(jpg|png)$/, '.webp');
      const outputPath = path.join(dir, outputName);

      sharp(inputPath)
        .resize({ width: 600, withoutEnlargement: true }) // Resize to max 600px width
        .webp({ quality: 75 }) // Compress aggressively to WebP
        .toFile(outputPath)
        .then(() => {
          console.log(`Compressed: ${outputName}`);
          fs.unlinkSync(inputPath); // Delete original
        })
        .catch(err => {
          console.error(`Error processing ${file}:`, err);
        });
    }
  });
});
