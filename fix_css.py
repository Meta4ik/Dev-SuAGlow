css_addition = """
/* Accessibility: Global Focus Styles */
*:focus-visible {
    outline: 2px solid #D5CBB9; /* taupe color */
    outline-offset: 2px;
    border-radius: 2px;
}
"""
with open('style.css', 'a', encoding='utf-8') as f:
    f.write(css_addition)
