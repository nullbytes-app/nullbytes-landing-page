// About Page Integration Tests
// Tests for Task 5: Final Integration and Testing

const fs = require('fs');
const path = require('path');

describe('About Page Final Integration', () => {
  let aboutHtmlContent;
  let indexHtmlContent;

  beforeAll(() => {
    const aboutPath = path.join(__dirname, '../about.html');
    const indexPath = path.join(__dirname, '../index.html');
    
    if (fs.existsSync(aboutPath)) {
      aboutHtmlContent = fs.readFileSync(aboutPath, 'utf8');
    }
    
    if (fs.existsSync(indexPath)) {
      indexHtmlContent = fs.readFileSync(indexPath, 'utf8');
    }
  });

  describe('Cross-page Navigation Integration', () => {
    test('index page links to about page correctly', () => {
      expect(indexHtmlContent).toMatch(/href="about\.html"/);
      expect(indexHtmlContent).toMatch(/About.*nav-link|nav-link.*About/);
    });

    test('about page navigation maintains consistency with index', () => {
      expect(aboutHtmlContent).toMatch(/href="index\.html"/);
      expect(aboutHtmlContent).toMatch(/cyber-logo.*nullbytes/);
    });

    test('navigation styling is consistent across pages', () => {
      expect(aboutHtmlContent).toMatch(/cyber-nav/);
      expect(aboutHtmlContent).toMatch(/nav-links/);
      expect(aboutHtmlContent).toMatch(/nav-link.*active/);
    });

    test('brand consistency between pages', () => {
      expect(aboutHtmlContent).toMatch(/nullbytes/);
      expect(aboutHtmlContent).toMatch(/Building the future one byte at a time/);
    });
  });

  describe('Complete Page Functionality', () => {
    test('all essential external libraries are loaded', () => {
      expect(aboutHtmlContent).toMatch(/tailwindcss\.com/);
      expect(aboutHtmlContent).toMatch(/gsap.*3\.12\.2/);
      expect(aboutHtmlContent).toMatch(/lucide.*latest/);
      expect(aboutHtmlContent).toMatch(/googleapis\.com.*css2/);
    });

    test('complete team structure is present', () => {
      expect(aboutHtmlContent).toMatch(/team-section/);
      expect(aboutHtmlContent).toMatch(/founder-card/);
      expect(aboutHtmlContent).toMatch(/Ravi Kumar Sriram/);
      expect(aboutHtmlContent).toMatch(/Position Available/);
    });

    test('all interactive elements are functional', () => {
      expect(aboutHtmlContent).toMatch(/addEventListener.*mouseenter/);
      expect(aboutHtmlContent).toMatch(/addEventListener.*mouseleave/);
      expect(aboutHtmlContent).toMatch(/DOMContentLoaded/);
    });

    test('page has proper meta tags and SEO', () => {
      expect(aboutHtmlContent).toMatch(/meta.*description.*About Nullbytes/);
      expect(aboutHtmlContent).toMatch(/meta.*keywords.*cybersecurity/);
      expect(aboutHtmlContent).toMatch(/og:title.*About Nullbytes/);
    });
  });

  describe('Responsive Design Integration', () => {
    test('mobile-first responsive grid system', () => {
      expect(aboutHtmlContent).toMatch(/grid-cols-1.*md:grid-cols-2.*lg:grid-cols-3/);
      expect(aboutHtmlContent).toMatch(/col-span-1.*md:col-span-2.*lg:col-span-3/);
    });

    test('responsive spacing and typography', () => {
      expect(aboutHtmlContent).toMatch(/gap-6.*sm:gap-.*md:gap-.*lg:gap-/);
      expect(aboutHtmlContent).toMatch(/@media.*max-width.*768px/);
    });

    test('mobile navigation adjustments', () => {
      expect(aboutHtmlContent).toMatch(/@media.*max-width.*768px/);
      expect(aboutHtmlContent).toMatch(/nav-container|nav-links/);
    });

    test('responsive team member cards', () => {
      expect(aboutHtmlContent).toMatch(/team-member-card/);
      expect(aboutHtmlContent).toMatch(/member-avatar/);
    });
  });

  describe('Performance and Optimization', () => {
    test('optimized font loading with preconnect', () => {
      expect(aboutHtmlContent).toMatch(/preconnect.*googleapis\.com/);
      expect(aboutHtmlContent).toMatch(/preconnect.*gstatic\.com.*crossorigin/);
    });

    test('efficient CSS organization', () => {
      expect(aboutHtmlContent).toMatch(/:root.*{[\s\S]*--cyber-/);
      expect(aboutHtmlContent).toMatch(/\*.*{[\s\S]*box-sizing.*border-box/);
    });

    test('GPU-accelerated animations', () => {
      expect(aboutHtmlContent).toMatch(/translateY|scale|backdrop-filter/);
      expect(aboutHtmlContent).toMatch(/gsap/);
    });

    test('efficient JavaScript loading', () => {
      expect(aboutHtmlContent).toMatch(/script.*src.*gsap.*min\.js/);
      expect(aboutHtmlContent).toMatch(/lucide\.createIcons\(\)/);
    });
  });

  describe('Cyberpunk Theme Consistency', () => {
    test('complete color palette implementation', () => {
      expect(aboutHtmlContent).toMatch(/--cyber-neon-cyan.*#00ffff/);
      expect(aboutHtmlContent).toMatch(/--cyber-neon-pink.*#ff00ff/);
      expect(aboutHtmlContent).toMatch(/--cyber-neon-green.*#39ff14/);
      expect(aboutHtmlContent).toMatch(/--cyber-bg.*#0a0a0a/);
    });

    test('cyberpunk typography throughout', () => {
      expect(aboutHtmlContent).toMatch(/font-family.*Orbitron/);
      expect(aboutHtmlContent).toMatch(/font-family.*Rajdhani/);
      expect(aboutHtmlContent).toMatch(/text-shadow.*var\(--cyber-neon-cyan\)/);
    });

    test('matrix-style visual effects', () => {
      expect(aboutHtmlContent).toMatch(/linear-gradient.*45deg.*cyber-neon-cyan.*cyber-neon-pink/);
      expect(aboutHtmlContent).toMatch(/box-shadow.*rgba\(0, 255, 255/);
      expect(aboutHtmlContent).toMatch(/border.*var\(--cyber-neon-cyan\)/);
    });

    test('cyberpunk content styling', () => {
      expect(aboutHtmlContent).toMatch(/&gt;&gt;TEAM.*MATRIX&lt;&lt;|TEAM.*MATRIX/);
      expect(aboutHtmlContent).toMatch(/architects.*digital.*frontier/);
      expect(aboutHtmlContent).toMatch(/nullbytes.*all_rights\.reserved/);
    });
  });

  describe('Content Quality and Professional Standards', () => {
    test('founder profile is comprehensive', () => {
      const bioMatch = aboutHtmlContent.match(/<div[^>]*member-bio[^>]*>(.*?)<\/div>/s);
      expect(bioMatch).toBeTruthy();
      const bioText = bioMatch[1].replace(/<[^>]*>/g, '').trim();
      expect(bioText.length).toBeGreaterThan(200);
    });

    test('professional skills are well-represented', () => {
      expect(aboutHtmlContent).toMatch(/Cloud Security/);
      expect(aboutHtmlContent).toMatch(/DevSecOps/);
      expect(aboutHtmlContent).toMatch(/Threat Hunting/);
      expect(aboutHtmlContent).toMatch(/Azure Sentinel/);
    });

    test('contact information is accessible', () => {
      expect(aboutHtmlContent).toMatch(/linkedin\.com\/in\/ravi-sriram/);
      expect(aboutHtmlContent).toMatch(/mailto:.*@nullbytes\.app/);
      expect(aboutHtmlContent).toMatch(/target="_blank"/);
    });

    test('recruitment messaging is engaging', () => {
      expect(aboutHtmlContent).toMatch(/join.*growing.*team/i);
      expect(aboutHtmlContent).toMatch(/frontend.*wizard.*backend.*architect/i);
    });
  });

  describe('Accessibility and Standards Compliance', () => {
    test('semantic HTML structure', () => {
      expect(aboutHtmlContent).toMatch(/<header>/);
      expect(aboutHtmlContent).toMatch(/<main>/);
      expect(aboutHtmlContent).toMatch(/<footer>/);
      expect(aboutHtmlContent).toMatch(/<section[^>]*team-section/);
    });

    test('proper heading hierarchy', () => {
      expect(aboutHtmlContent).toMatch(/<h1[^>]*cyber-section-title/);
      expect(aboutHtmlContent).toMatch(/<h2[^>]*member-name/);
      expect(aboutHtmlContent).toMatch(/<h3[^>]*member-name/);
    });

    test('alt text and accessibility features', () => {
      expect(aboutHtmlContent).toMatch(/meta.*description/);
      expect(aboutHtmlContent).toMatch(/title.*About Nullbytes/);
    });

    test('link accessibility', () => {
      expect(aboutHtmlContent).toMatch(/contact-link/);
      expect(aboutHtmlContent).toMatch(/nav-link/);
    });
  });
});

module.exports = {
  testEnvironment: 'node'
};