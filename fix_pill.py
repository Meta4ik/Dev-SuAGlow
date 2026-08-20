import re

# Read footer.js
with open('footer.js', 'r', encoding='utf-8') as f:
    footer_content = f.read()

# Replace the single finance button with a pill container in footer.js
pill_html = """<!-- Floating Pill Holder -->
<div id="floating-pill-container">
    <a class="pill-btn" href="financing.html">
        <div class="pill-btn-icon">
            <i data-lucide="percent" class="w-4 h-4 stroke-[3]"></i>
        </div>
        <div class="pill-btn-text">
            <p class="pill-btn-title">Pay over time</p>
            <p class="pill-btn-subtitle">0% APR options</p>
        </div>
    </a>
    <button class="pill-btn" onclick="window.UserWayWidget ? window.UserWayWidget.open() : null">
        <div class="pill-btn-icon">
            <i data-lucide="accessibility" class="w-4 h-4 stroke-[3]"></i>
        </div>
        <div class="pill-btn-text">
            <p class="pill-btn-title">Accessibility</p>
            <p class="pill-btn-subtitle">Adjust settings</p>
        </div>
    </button>
</div>"""

footer_content = re.sub(
    r'<!-- Floating Financing Button -->.*</a>', 
    pill_html, 
    footer_content, 
    flags=re.DOTALL
)

with open('footer.js', 'w', encoding='utf-8') as f:
    f.write(footer_content)

# Update style.css
with open('style.css', 'r', encoding='utf-8') as f:
    css_content = f.read()

# We will remove the old #floating-finance-btn styles and append the new ones.
# Actually, since it's hard to safely regex remove a large chunk of CSS, I will just append the new styles,
# and they will override because they are later in the file, but it's cleaner to remove them.
# The old styles start at /* --- Floating Finance Button --- */ and end around @media print
old_css_pattern = re.compile(r'/\* --- Floating Finance Button --- \*/.*?/\* Print / PDF Export Styling', re.DOTALL)
match = old_css_pattern.search(css_content)

new_css = """/* --- Floating Pill Container --- */
#floating-pill-container {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 90;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #A8977B;
  border-radius: 50px;
  padding: 6px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s ease;
}

.pill-btn {
  display: flex;
  align-items: center;
  gap: 0;
  background-color: transparent;
  color: #fff;
  text-decoration: none;
  border-radius: 50px;
  width: 32px;
  height: 32px;
  overflow: hidden;
  cursor: pointer;
  border: none;
  padding: 0;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: width;
}

.pill-btn:hover {
  width: 170px;
}

/* Hide native UserWay button if it exists so we just use our pill button */
body > .uwy { display: none !important; }

/* Hidden state — controlled by JS scroll if needed */
#floating-pill-container.pill-hidden {
  opacity: 0;
  pointer-events: none;
  transform: translateY(12px);
}

.pill-btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  min-width: 32px;
  background: #fff;
  border-radius: 50%;
  color: #A8977B;
  transition: color 0.3s ease, background 0.3s ease;
}

.pill-btn:hover .pill-btn-icon {
  color: #fff;
  background: #8F857B;
}

.pill-btn-text {
  white-space: nowrap;
  opacity: 0;
  padding-left: 0;
  text-align: left;
  transition: opacity 0.25s ease 0s, padding-left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.pill-btn:hover .pill-btn-text {
  opacity: 1;
  padding-left: 10px;
  transition: opacity 0.3s ease 0.15s, padding-left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.pill-btn-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  line-height: 1.2;
}

.pill-btn-subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 9px;
  opacity: 0.85;
  margin-top: 1px;
}

@media (max-width: 767px) {
  #floating-pill-container {
    right: 50%;
    transform: translateX(50%);
  }
}

/* Print / PDF Export Styling"""

if match:
    css_content = css_content[:match.start()] + new_css + css_content[match.end()-32:]
else:
    css_content += "\n" + new_css

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css_content)
