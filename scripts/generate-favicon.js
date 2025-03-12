const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, '../public');
const SVG_PATH = path.join(PUBLIC_DIR, 'logo.svg');
const svgBuffer = fs.readFileSync(SVG_PATH);

// Generate favicon.ico (16x16, 32x32, 48x48)
Promise.all([
  sharp(svgBuffer).resize(16, 16).toBuffer(),
  sharp(svgBuffer).resize(32, 32).toBuffer(),
  sharp(svgBuffer).resize(48, 48).toBuffer()
])
.then(([icon16, icon32, icon48]) => {
  const ICO = require('sharp-ico');
  const icoBuffer = ICO.encode([icon16, icon32, icon48]);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.ico'), icoBuffer);
  console.log('favicon.ico created');
})
.catch(err => {
  console.error('Error creating favicon.ico:', err);
});

// Generate apple-touch-icon.png (180x180)
sharp(svgBuffer)
  .resize(180, 180)
  .png()
  .toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png'))
  .then(() => console.log('apple-touch-icon.png created'))
  .catch(err => console.error('Error creating apple-touch-icon.png:', err));

// Generate favicon-32x32.png
sharp(svgBuffer)
  .resize(32, 32)
  .png()
  .toFile(path.join(PUBLIC_DIR, 'favicon-32x32.png'))
  .then(() => console.log('favicon-32x32.png created'))
  .catch(err => console.error('Error creating favicon-32x32.png:', err));

// Generate favicon-16x16.png
sharp(svgBuffer)
  .resize(16, 16)
  .png()
  .toFile(path.join(PUBLIC_DIR, 'favicon-16x16.png'))
  .then(() => console.log('favicon-16x16.png created'))
  .catch(err => console.error('Error creating favicon-16x16.png:', err)); 