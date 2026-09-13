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

// Also auto-generate pages-directory.json for dev-tools
function generatePagesDirectory() {
  const ignored = ["node_modules", ".git", "dist", "scratch", "kam_doc_updates", "bak"];
  function getCategory(filePath) {
    if (filePath.startsWith("dev-tools/")) return "Dev Tools";
    if (filePath.startsWith("components/")) return "Section Components";
    if (filePath.startsWith("education/")) return "Education Hub";
    if (filePath.startsWith("internal/")) return "Internal & Campaigns";
    if (filePath.includes("policy") || filePath.includes("accessibility") || filePath.includes("cookie") || filePath.includes("hippa")) return "Legal & Compliance";
    if (filePath.includes("tox") || filePath.includes("filler") || filePath.includes("radiesse") || filePath.includes("injectables")) return "Injectables";
    if (["oligio-x.html", "dep.html", "needleless-infusion-therapy.html", "ldm-water-drop-lifting.html", "korean-scalp-hair-rejuvenation.html", "microneedling.html", "salmon-pn-facial.html", "tone-up-facial.html", "glass-skin-hydration-glow.html", "collagen-stimulation-facial.html", "bridal-glow.html", "one-day-glow.html", "seoul-man.html", "scar-treatment.html", "iv-infusion-wellness-therapy.html", "medical-weight-loss-dallas.html", "signature-treatment.html", "skin-health.html", "skin-quality-boosters.html"].includes(filePath)) return "Treatments & Modalities";
    return "Core Pages";
  }

  function cleanTitle(rawTitle, filename) {
    if (!rawTitle || rawTitle === filename) {
      return filename.replace(".html", "").replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    }
    let t = rawTitle.split("|")[0].trim();
    t = t.replace(/SuA K-Glow/i, "").replace(/SuA Glow/i, "").replace(/Korean Med Spa/i, "").replace(/Korean Medical Aesthetics/i, "").trim();
    t = t.replace(/^[-–—\s]+|[-–—\s]+$/g, "");
    if (!t) return rawTitle.split("|")[0].trim();
    return t;
  }

  function walk(dir, base = "") {
    let list = [];
    fs.readdirSync(dir).forEach(file => {
      const full = path.join(dir, file);
      const rel = path.join(base, file);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        if (!ignored.includes(file)) list = list.concat(walk(full, rel));
      } else if (file.endsWith(".html") && !file.startsWith("tmp_") && !file.startsWith("temp_")) {
        const content = fs.readFileSync(full, "utf8");
        const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/i);
        const rawTitle = titleMatch ? titleMatch[1].trim() : file;
        list.push({
          path: rel,
          filename: file,
          title: cleanTitle(rawTitle, file),
          fullTitle: rawTitle,
          category: getCategory(rel),
          sizeKb: Math.round(stat.size / 1024)
        });
      }
    });
    return list;
  }

  const items = walk(ROOT_DIR);
  const dirOut = path.join(ROOT_DIR, 'dev-tools', 'pages-directory.json');
  fs.writeFileSync(dirOut, JSON.stringify(items, null, 2), 'utf-8');
  console.log(`Generated dev-tools directory with ${items.length} pages in ${dirOut}`);
}

try {
  generatePagesDirectory();
} catch (e) {
  console.warn('Could not generate pages directory:', e.message);
}
