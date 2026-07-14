import { readFileSync } from 'fs';
// This is just to see if we have any obvious syntax error in the built js
try {
  const js = readFileSync('dist/assets/index-DNak5YgA.js', 'utf8');
  console.log("Length:", js.length);
} catch (e) {
  console.error(e);
}
