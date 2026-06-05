/* brand-logo.js — Composant officiel GRIOTTE
   Usage : <brand-logo></brand-logo>
   Variantes : variant="footer" | variant="auth"
*/
class BrandLogo extends HTMLElement {
  connectedCallback() {
    const v = this.getAttribute('variant') || 'default';

    const sizes = {
      default: { img: 38, radius: 11, font: '1.18rem', gap: '0.65rem', nameColor: 'var(--text-main, #1A1410)' },
      footer:  { img: 34, radius: 10, font: '1.1rem',  gap: '0.6rem',  nameColor: '#FFFFFF' },
      auth:    { img: 44, radius: 13, font: '1.25rem', gap: '0.7rem',  nameColor: 'var(--text-main, #1A1410)' },
    };
    const s = sizes[v] || sizes.default;

    this.style.cssText = `
      display: inline-flex;
      align-items: center;
      gap: ${s.gap};
      text-decoration: none;
      flex-shrink: 0;
      line-height: 1;
    `;

    this.innerHTML = `
      <img
        src="./logo-icon.png"
        alt="GRIOTTE"
        style="
          display: block;
          width: ${s.img}px;
          height: ${s.img}px;
          border-radius: ${s.radius}px;
          object-fit: contain;
          flex-shrink: 0;
        "
        onerror="this.style.display='none'"
      />
      <span style="
        font-family: 'Playfair Display', serif;
        font-size: ${s.font};
        font-weight: 700;
        color: ${s.nameColor};
        letter-spacing: -0.01em;
        line-height: 1;
      ">Grio<span style="color: #FF6B00;">tte</span></span>
    `;
  }
}
customElements.define('brand-logo', BrandLogo);
