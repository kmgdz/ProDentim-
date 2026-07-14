const fs = require('fs');
const code = fs.readFileSync('src/assets/images.ts', 'utf8');
const match = code.match(/logoImg = 'data:image\/png;base64,([^']+)'/);
if (match) {
  const b64 = match[1];
  const buffer = Buffer.from(b64, 'base64');
  fs.writeFileSync('public/favicon.png', buffer);
  console.log('Saved favicon.png');
} else {
  console.log('Not found');
}
