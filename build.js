import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');

console.log('Building CSBS Presentation website...');

// Clean dist directory
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Copy index.html
fs.copyFileSync(path.join(rootDir, 'index.html'), path.join(distDir, 'index.html'));
console.log('✓ Copied index.html');

// Copy CNAME
const cnameSrc = fs.existsSync(path.join(rootDir, 'CNAME')) 
  ? path.join(rootDir, 'CNAME') 
  : path.join(rootDir, 'public', 'CNAME');
if (fs.existsSync(cnameSrc)) {
  fs.copyFileSync(cnameSrc, path.join(distDir, 'CNAME'));
  console.log('✓ Copied CNAME');
}

// Copy _headers
const headersSrc = fs.existsSync(path.join(rootDir, '_headers')) 
  ? path.join(rootDir, '_headers') 
  : path.join(rootDir, 'public', '_headers');
if (fs.existsSync(headersSrc)) {
  fs.copyFileSync(headersSrc, path.join(distDir, '_headers'));
  console.log('✓ Copied _headers');
}

// Copy favicon.svg
const faviconSrc = fs.existsSync(path.join(rootDir, 'favicon.svg')) 
  ? path.join(rootDir, 'favicon.svg') 
  : path.join(rootDir, 'public', 'favicon.svg');
if (fs.existsSync(faviconSrc)) {
  fs.copyFileSync(faviconSrc, path.join(distDir, 'favicon.svg'));
  console.log('✓ Copied favicon.svg');
}

// Create .nojekyll
fs.writeFileSync(path.join(distDir, '.nojekyll'), '');
console.log('✓ Created .nojekyll');

// Copy assets
const assetsSrc = path.join(rootDir, 'assets');
const assetsDist = path.join(distDir, 'assets');
if (fs.existsSync(assetsSrc)) {
  fs.mkdirSync(assetsDist, { recursive: true });
  const files = fs.readdirSync(assetsSrc);
  for (const file of files) {
    fs.copyFileSync(path.join(assetsSrc, file), path.join(assetsDist, file));
  }
  console.log(`✓ Copied ${files.length} assets to dist/assets/`);
}

// Also place 1014簡報.pdf in dist root for direct download convenience
const pdfSrc = path.join(assetsSrc, '1014簡報.pdf');
if (fs.existsSync(pdfSrc)) {
  fs.copyFileSync(pdfSrc, path.join(distDir, '1014簡報.pdf'));
  console.log('✓ Copied 1014簡報.pdf to dist root');
}

console.log('Build completed successfully! Dist output ready.');
