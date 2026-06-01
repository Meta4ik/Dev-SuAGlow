const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const ROOT_DIR = __dirname;
const EXCLUDED_FILES = [
  'sitemap.html',
  'sua_glow_sitemap_v2.html',
  'dev.html',
  'tmp_test.html',
  'temp_show_assets.html',
  'coming-soon.html',
  'about.html.bak',
  'specials.html.bak'
];

const searchIndex = [];

function processFile(filePath) {
  const filename = path.basename(filePath);
  if (EXCLUDED_FILES.includes(filename) || filename.endsWith('.bak')) {
    return;
  }

  const relativePath = path.relative(ROOT_DIR, filePath);
  const html = fs.readFileSync(filePath, 'utf8');
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  const pageTitle = doc.querySelector('title')?.textContent.split('|')[0].trim() || 'SuA Glow';
  
  // Try to find breadcrumbs or badges for category
  let category = 'Spa Treatments';
  const badge = doc.querySelector('.badge-glass, .badge-standard');
  if (badge) {
    const text = badge.textContent.trim();
    if (text.includes('›')) {
      const parts = text.split('›');
      category = parts[parts.length - 1].trim();
    } else {
      category = text.trim();
    }
  }

  const sections = doc.querySelectorAll('section');
  if (sections.length > 0) {
    sections.forEach(section => {
      const id = section.getAttribute('id');
      const heading = section.querySelector('h1, h2, h3, h4');
      const headingText = heading ? heading.textContent.replace(/[\n\t]+/g, ' ').replace(/\s+/g, ' ').trim() : '';
      
      const texts = [];
      section.querySelectorAll('p, li, h5, h6').forEach(el => {
        if (el.closest('button') || el.closest('a') || el.closest('#footer-placeholder') || el.closest('#nav-placeholder')) {
          return;
        }
        texts.push(el.textContent.trim());
      });

      const fullText = texts.filter(t => t.length > 0).join(' ').replace(/[\n\t]+/g, ' ').replace(/\s+/g, ' ').trim();
      
      if (fullText.length > 20) {
        searchIndex.push({
          url: id ? `${relativePath}#${id}` : relativePath,
          title: headingText || pageTitle,
          pageTitle: pageTitle,
          category: category,
          content: fullText,
          snippet: fullText.substring(0, 160) + (fullText.length > 160 ? '...' : '')
        });
      }
    });
  } else {
    // Fallback: Index body content
    const body = doc.querySelector('body');
    if (body) {
      const texts = [];
      body.querySelectorAll('p, li, h1, h2, h3, h4, h5, h6').forEach(el => {
        if (el.closest('button') || el.closest('a') || el.closest('#footer-placeholder') || el.closest('#nav-placeholder')) {
          return;
        }
        texts.push(el.textContent.trim());
      });
      
      const fullText = texts.filter(t => t.length > 0).join(' ').replace(/[\n\t]+/g, ' ').replace(/\s+/g, ' ').trim();
      if (fullText.length > 20) {
        searchIndex.push({
          url: relativePath,
          title: pageTitle,
          pageTitle: pageTitle,
          category: category,
          content: fullText,
          snippet: fullText.substring(0, 160) + (fullText.length > 160 ? '...' : '')
        });
      }
    }
  }
}

// Scrape dev-site root
const files = fs.readdirSync(ROOT_DIR);
files.forEach(file => {
  if (file.endsWith('.html')) {
    processFile(path.join(ROOT_DIR, file));
  }
});

// Also scrape subfolders if any (e.g. education/) - Disabled for now
/*
const eduPath = path.join(ROOT_DIR, 'education');
if (fs.existsSync(eduPath) && fs.statSync(eduPath).isDirectory()) {
  const eduFiles = fs.readdirSync(eduPath);
  eduFiles.forEach(file => {
    if (file.endsWith('.html')) {
      processFile(path.join(eduPath, file));
    }
  });
}
*/

const outputPath = path.join(ROOT_DIR, 'search-index.js');
const jsContent = `// Auto-generated Search Index for SuA K-Glow. Do not edit directly.
const SEARCH_INDEX = ${JSON.stringify(searchIndex, null, 2)};
`;

fs.writeFileSync(outputPath, jsContent, 'utf-8');
console.log(`Generated search index with ${searchIndex.length} entries in ${outputPath}`);
