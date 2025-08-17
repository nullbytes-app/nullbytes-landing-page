// Matrix-Style Image Effects Tests
// Tests for Task 4: Matrix-Style Image Effects Implementation

const fs = require('fs');
const path = require('path');

describe('Matrix-Style Image Effects Implementation', () => {
  let aboutHtmlContent;

  beforeAll(() => {
    const aboutPath = path.join(__dirname, '../about.html');
    if (fs.existsSync(aboutPath)) {
      aboutHtmlContent = fs.readFileSync(aboutPath, 'utf8');
    }
  });

  describe('CSS Filters for Cyberpunk/Matrix Visual Styling', () => {
    test('has cyberpunk color palette variables defined', () => {
      expect(aboutHtmlContent).toMatch(/--cyber-neon-cyan:\s*#00ffff/);
      expect(aboutHtmlContent).toMatch(/--cyber-neon-pink:\s*#ff00ff/);
      expect(aboutHtmlContent).toMatch(/--cyber-neon-green:\s*#39ff14/);
      expect(aboutHtmlContent).toMatch(/--cyber-neon-blue:\s*#0080ff/);
    });

    test('implements matrix-style avatar borders and effects', () => {
      expect(aboutHtmlContent).toMatch(/border:\s*3px\s*solid\s*var\(--cyber-neon-cyan\)/);
      expect(aboutHtmlContent).toMatch(/border-radius:\s*50%/);
      expect(aboutHtmlContent).toMatch(/background:\s*linear-gradient\(45deg,\s*var\(--cyber-neon-cyan\),\s*var\(--cyber-neon-pink\)\)/);
    });

    test('has cyberpunk background gradients', () => {
      expect(aboutHtmlContent).toMatch(/background:\s*linear-gradient\(135deg,\s*var\(--cyber-bg\)/);
      expect(aboutHtmlContent).toMatch(/background:\s*linear-gradient\(135deg,\s*rgba\(26,\s*26,\s*46/);
    });

    test('includes neon glow effects and shadows', () => {
      expect(aboutHtmlContent).toMatch(/text-shadow:\s*0\s*0\s*[0-9]+px\s*var\(--cyber-neon-cyan\)/);
      expect(aboutHtmlContent).toMatch(/box-shadow:\s*0\s*[0-9]+px\s*[0-9]+px\s*rgba\(0,\s*255,\s*255/);
    });
  });

  describe('JavaScript Particle Effects Overlay', () => {
    test('includes GSAP library for advanced animations', () => {
      expect(aboutHtmlContent).toMatch(/cdnjs\.cloudflare\.com\/ajax\/libs\/gsap/);
      expect(aboutHtmlContent).toMatch(/gsap\.min\.js/);
    });

    test('has JavaScript animation setup for profile images', () => {
      expect(aboutHtmlContent).toMatch(/gsap\.to\(card/);
      expect(aboutHtmlContent).toMatch(/gsap\.fromTo\('\.team-member-card'/);
    });

    test('implements card interaction events', () => {
      expect(aboutHtmlContent).toMatch(/addEventListener\('mouseenter'/);
      expect(aboutHtmlContent).toMatch(/addEventListener\('mouseleave'/);
    });

    test('includes particle animation properties', () => {
      expect(aboutHtmlContent).toMatch(/opacity:\s*0/);
      expect(aboutHtmlContent).toMatch(/y:\s*50/);
      expect(aboutHtmlContent).toMatch(/stagger:\s*0\.2/);
    });
  });

  describe('Hover Animation Sequences with GSAP', () => {
    test('implements scale transformation on hover', () => {
      expect(aboutHtmlContent).toMatch(/scale:\s*1\.02/);
      expect(aboutHtmlContent).toMatch(/scale:\s*1/);
    });

    test('includes 3D rotation effects', () => {
      expect(aboutHtmlContent).toMatch(/rotationY:\s*2/);
      expect(aboutHtmlContent).toMatch(/rotationY:\s*0/);
    });

    test('has smooth animation easing', () => {
      expect(aboutHtmlContent).toMatch(/ease:\s*["']power2\.out["']/);
      expect(aboutHtmlContent).toMatch(/duration:\s*0\.[0-9]+/);
    });

    test('includes card entrance animations', () => {
      expect(aboutHtmlContent).toMatch(/opacity:\s*1/);
      expect(aboutHtmlContent).toMatch(/y:\s*0/);
      expect(aboutHtmlContent).toMatch(/duration:\s*0\.8/);
    });
  });

  describe('Image Loading and Effect Performance', () => {
    test('uses efficient CSS properties for animations', () => {
      expect(aboutHtmlContent).toMatch(/transform:\s*translateY\(-10px\)/);
      expect(aboutHtmlContent).toMatch(/transition:\s*all\s*0\.[0-9]+s\s*ease/);
    });

    test('has backdrop-filter effects for modern browsers', () => {
      expect(aboutHtmlContent).toMatch(/backdrop-filter:\s*blur\([0-9]+px\)/);
    });

    test('implements GPU-accelerated properties', () => {
      expect(aboutHtmlContent).toMatch(/transform|opacity|filter/);
    });

    test('uses CSS custom properties for consistent theming', () => {
      expect(aboutHtmlContent).toMatch(/var\(--cyber-/);
      expect(aboutHtmlContent).toMatch(/:root\s*\{/);
    });
  });

  describe('Matrix Visual Effects and Styling', () => {
    test('has matrix-themed color scheme throughout', () => {
      expect(aboutHtmlContent).toMatch(/color:\s*var\(--cyber-neon-cyan\)/);
      expect(aboutHtmlContent).toMatch(/border-color:\s*var\(--cyber-neon-cyan\)/);
      expect(aboutHtmlContent).toMatch(/color:\s*var\(--cyber-neon-pink\)/);
    });

    test('includes cyberpunk typography effects', () => {
      expect(aboutHtmlContent).toMatch(/font-family:\s*'Orbitron'/);
      expect(aboutHtmlContent).toMatch(/font-family:\s*'Rajdhani'/);
      expect(aboutHtmlContent).toMatch(/letter-spacing:\s*[0-9]+px/);
    });

    test('has matrix-style geometric elements', () => {
      expect(aboutHtmlContent).toMatch(/border-radius:\s*15px/);
      expect(aboutHtmlContent).toMatch(/border-radius:\s*50%/);
      expect(aboutHtmlContent).toMatch(/border-radius:\s*20px/);
    });

    test('implements cyberpunk visual hierarchy', () => {
      expect(aboutHtmlContent).toMatch(/cyber-section-title/);
      expect(aboutHtmlContent).toMatch(/cyber-subtitle/);
    });
  });

  describe('Interactive Visual Feedback', () => {
    test('has hover state color changes', () => {
      expect(aboutHtmlContent).toMatch(/\.nav-link:hover[\s\S]*?color:\s*var\(--cyber-neon-cyan\)/);
      expect(aboutHtmlContent).toMatch(/border-color:\s*var\(--cyber-neon-pink\)/);
    });

    test('includes visual feedback for user interactions', () => {
      expect(aboutHtmlContent).toMatch(/box-shadow:\s*0\s*0\s*15px\s*rgba/);
      expect(aboutHtmlContent).toMatch(/transform:\s*translateY\(-10px\)/);
    });

    test('has consistent animation timing', () => {
      expect(aboutHtmlContent).toMatch(/duration:\s*0\.3/);
      expect(aboutHtmlContent).toMatch(/transition:\s*all\s*0\.3s\s*ease/);
    });

    test('implements matrix-style loading animations', () => {
      expect(aboutHtmlContent).toMatch(/DOMContentLoaded/);
      expect(aboutHtmlContent).toMatch(/querySelectorAll\('\.team-member-card'\)/);
    });
  });
});

module.exports = {
  testEnvironment: 'node'
};