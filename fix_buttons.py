import re

# Update footer.js
with open('footer.js', 'r', encoding='utf-8') as f:
    footer_content = f.read()

finance_html = """<!-- Floating Financing Button -->
<a id="floating-finance-btn" href="financing.html">
    <div class="finance-btn-icon">
        <i data-lucide="percent" class="w-4 h-4 stroke-[3]"></i>
    </div>
    <div class="finance-btn-text">
        <p class="finance-btn-title">Pay over time</p>
        <p class="finance-btn-subtitle">0% APR options</p>
    </div>
</a>"""

footer_content = re.sub(
    r'<!-- Floating Pill Holder -->.*</div>',
    finance_html,
    footer_content,
    flags=re.DOTALL
)

with open('footer.js', 'w', encoding='utf-8') as f:
    f.write(footer_content)

# Update style.css
with open('style.css', 'r', encoding='utf-8') as f:
    css_content = f.read()

old_css_pattern = re.compile(r'/\* --- Floating Pill Container --- \*/.*?/\* Print / PDF Export Styling', re.DOTALL)
match = old_css_pattern.search(css_content)

finance_css = """/* --- Floating Finance Button --- */
#floating-finance-btn {
  position: fixed;
  bottom: 5.5rem;
  right: 1.5rem;
  z-index: 90;
  display: flex;
  align-items: center;
  gap: 0;
  background-color: #A8977B;
  color: #fff;
  text-decoration: none;
  border-radius: 50px;
  padding: 6px;
  width: 44px;
  height: 44px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.3s ease,
    opacity 0.4s ease,
    transform 0.4s ease;
  will-change: width;
}

#floating-finance-btn:hover {
  width: 200px;
  background-color: #8F857B;
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

/* Hidden state — controlled by JS scroll */
#floating-finance-btn.finance-btn-hidden {
  opacity: 0;
  pointer-events: none;
  transform: translateY(12px);
}

/* Icon circle */
.finance-btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  min-width: 32px;
  background: #fff;
  border-radius: 50%;
  color: #A8977B;
  transition: color 0.3s ease;
}

#floating-finance-btn:hover .finance-btn-icon {
  color: #8F857B;
}

/* Text container */
.finance-btn-text {
  white-space: nowrap;
  opacity: 0;
  padding-left: 0;
  transition: opacity 0.25s ease 0s,
    padding-left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

#floating-finance-btn:hover .finance-btn-text {
  opacity: 1;
  padding-left: 10px;
  transition: opacity 0.3s ease 0.15s,
    padding-left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.finance-btn-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  line-height: 1.2;
}

.finance-btn-subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  opacity: 0.85;
  margin-top: 1px;
}

/* Mobile: position center-bottom */
@media (max-width: 767px) {
  #floating-finance-btn {
    right: auto;
    left: 50%;
    margin-left: -22px;
    bottom: 5.5rem;
  }

  #floating-finance-btn:hover {
    margin-left: -100px;
  }
}

/* Print / PDF Export Styling"""

if match:
    css_content = css_content[:match.start()] + finance_css + css_content[match.end()-32:]

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css_content)

