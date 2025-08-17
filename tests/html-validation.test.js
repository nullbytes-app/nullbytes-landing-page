// HTML Structure Validation Tests for Nullbytes Landing Page
// These tests verify the production-ready index.html file meets requirements

const fs = require('fs');
const path = require('path');

describe('HTML Structure Validation', () => {
  let htmlContent;
  let dom;

  beforeAll(() => {
    const indexPath = path.join(__dirname, '../index.html');
    if (fs.existsSync(indexPath)) {
      htmlContent = fs.readFileSync(indexPath, 'utf8');
      // Create a simple DOM-like structure for testing
      dom = {
        content: htmlContent,
        includes: (str) => htmlContent.includes(str),
        querySelector: (selector) => {
          // Simple selector checking
          if (selector === 'title') return htmlContent.includes('<title>');
          if (selector === 'meta[charset]') return htmlContent.includes('charset=');
          if (selector === 'meta[viewport]') return htmlContent.includes('viewport');
          return htmlContent.includes(selector);
        }
      };
    }
  });

  test('index.html file exists', () => {
    const indexPath = path.join(__dirname, '../index.html');
    expect(fs.existsSync(indexPath)).toBe(true);
  });

  test('has proper HTML5 DOCTYPE', () => {
    expect(htmlContent).toMatch(/^<!DOCTYPE html>/i);
  });

  test('has html element with lang attribute', () => {
    expect(htmlContent).toMatch(/<html[^>]*lang=["']en["'][^>]*>/);
  });

  test('has head section with required meta tags', () => {
    expect(htmlContent).toMatch(/<head>/);
    expect(htmlContent).toMatch(/<meta[^>]*charset=["']UTF-8["'][^>]*>/);
    expect(htmlContent).toMatch(/<meta[^>]*name=["']viewport["'][^>]*>/);
    expect(htmlContent).toMatch(/<title>/);
  });

  test('includes Tailwind CSS CDN', () => {
    expect(htmlContent).toMatch(/cdn\.tailwindcss\.com/);
  });

  test('includes GSAP animation library', () => {
    expect(htmlContent).toMatch(/gsap/i);
    expect(htmlContent).toMatch(/3\.12\.2/);
  });

  test('includes Lucide Icons library', () => {
    expect(htmlContent).toMatch(/lucide/i);
  });

  test('includes Google Fonts (Orbitron, Share Tech Mono, Rajdhani)', () => {
    expect(htmlContent).toMatch(/fonts\.googleapis\.com/);
    expect(htmlContent).toMatch(/Orbitron/);
    expect(htmlContent).toMatch(/Share\+Tech\+Mono/);
    expect(htmlContent).toMatch(/Rajdhani/);
  });

  test('has cyberpunk navigation structure', () => {
    expect(htmlContent).toMatch(/<nav[^>]*class[^>]*cyber-nav/);
    expect(htmlContent).toMatch(/nullbytes/i);
  });

  test('has hero section with cyberpunk elements', () => {
    expect(htmlContent).toMatch(/<section[^>]*class[^>]*hero-section/);
    expect(htmlContent).toMatch(/We build.*future.*one byte at a time/is);
  });

  test('has projects section', () => {
    expect(htmlContent).toMatch(/<section[^>]*class[^>]*projects-section/);
    expect(htmlContent).toMatch(/projects/i);
  });

  test('has footer section', () => {
    expect(htmlContent).toMatch(/<footer[^>]*class[^>]*cyber-footer/);
  });

  test('includes cyberpunk visual effects', () => {
    expect(htmlContent).toMatch(/cyber-grid/);
    expect(htmlContent).toMatch(/floating-bytes/);
    expect(htmlContent).toMatch(/matrix-rain/);
  });

  test('has responsive viewport meta tag', () => {
    expect(htmlContent).toMatch(/<meta[^>]*name=["']viewport["'][^>]*content=["'][^"']*width=device-width[^"']*["'][^>]*>/);
  });

  test('includes SEO meta tags', () => {
    expect(htmlContent).toMatch(/<meta[^>]*name=["']description["'][^>]*>/);
    expect(htmlContent).toMatch(/<meta[^>]*property=["']og:/);
  });

  test('has proper JavaScript structure', () => {
    expect(htmlContent).toMatch(/<script[^>]*>[\s\S]*lucide\.createIcons[\s\S]*<\/script>/);
    expect(htmlContent).toMatch(/createFloatingBytes/);
    expect(htmlContent).toMatch(/createMatrixRain/);
  });

  test('includes cyberpunk color variables', () => {
    expect(htmlContent).toMatch(/--cyber-neon-cyan/);
    expect(htmlContent).toMatch(/--cyber-neon-pink/);
    expect(htmlContent).toMatch(/--cyber-neon-green/);
  });

  test('has valid HTML structure', () => {
    expect(htmlContent).toMatch(/<html[\s\S]*<head>[\s\S]*<\/head>[\s\S]*<body>[\s\S]*<\/body>[\s\S]*<\/html>/);
  });
});

describe('Animation and Interaction Tests', () => {
  test('includes GSAP animations', () => {
    const indexPath = path.join(__dirname, '../index.html');
    if (fs.existsSync(indexPath)) {
      const content = fs.readFileSync(indexPath, 'utf8');
      expect(content).toMatch(/gsap/i);
      expect(content).toMatch(/animation/i);
    }
  });

  test('includes cyberpunk interactive elements', () => {
    const indexPath = path.join(__dirname, '../index.html');
    if (fs.existsSync(indexPath)) {
      const content = fs.readFileSync(indexPath, 'utf8');
      expect(content).toMatch(/addEventListener/);
      expect(content).toMatch(/hover/i);
    }
  });
});

module.exports = {
  testEnvironment: 'node'
};