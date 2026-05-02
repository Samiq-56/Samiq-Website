const sharp = require('sharp');
const path = require('path');

async function extract() {
  const input = path.resolve(__dirname, '../public/sequence/finalmyvideo-ezgif.com-video-to-webp-converter.webp');
  const outDir = path.resolve(__dirname, '../public/sequence/');
  
  const metadata = await sharp(input, { animated: true }).metadata();
  const totalPages = metadata.pages || 1;
  const pagesToExtract = Math.min(119, totalPages);
  
  console.log(`Found ${totalPages} frames, extracting ${pagesToExtract} frames...`);
  
  for (let i = 0; i < pagesToExtract; i++) {
    const numStr = i.toString().padStart(3, '0');
    const outName = path.join(outDir, `frame_${numStr}_delay-0.067s.webp`);
    try {
      await sharp(input, { animated: true, page: i })
        .resize({ width: 800 }) // Reduce resolution
        .webp({ quality: 50, effort: 6 }) // Reduce quality
        .toFile(outName);
    } catch(e) {
      console.error('Error on frame ' + i + ': ' + e.message);
      break;
    }
  }
  console.log(`Done extracting frames.`);
}
extract().catch(console.error);
