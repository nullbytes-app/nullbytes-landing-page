// About Page HTML Structure and Navigation Tests
// Tests for Task 1: Create About Page Structure and Navigation

const fs = require('fs');
const path = require('path');

describe('About Page Structure and Navigation', () => {
  let aboutHtmlContent;
  let indexHtmlContent;

  beforeAll(() => {
    // Read about.html and index.html for testing
    const aboutPath = path.join(__dirname, '../about.html');
    const indexPath = path.join(__dirname, '../index.html');
    
    if (fs.existsSync(aboutPath)) {
      aboutHtmlContent = fs.readFileSync(aboutPath, 'utf8');
    }
    if (fs.existsSync(indexPath)) {
      indexHtmlContent = fs.readFileSync(indexPath, 'utf8');
    }
  });

  describe('HTML Structure Validation', () => {
    test('about.html file exists', () => {
      const aboutPath = path.join(__dirname, '../about.html');
      expect(fs.existsSync(aboutPath)).toBe(true);
    });

    test('has valid DOCTYPE declaration', () => {
      expect(aboutHtmlContent).toMatch(/^<!DOCTYPE html>/i);
    });

    test('has proper HTML5 structure with lang attribute', () => {
      expect(aboutHtmlContent).toMatch(/<html\s+lang="en">/);
      expect(aboutHtmlContent).toMatch(/<head>/);
      expect(aboutHtmlContent).toMatch(/<body>/);
    });

    test('includes required meta tags', () => {
      expect(aboutHtmlContent).toMatch(/<meta\s+charset="UTF-8">/);
      expect(aboutHtmlContent).toMatch(/<meta\s+name="viewport"\s+content="width=device-width,\s*initial-scale=1\.0">/);
    });

    test('has semantic HTML5 structure', () => {
      expect(aboutHtmlContent).toMatch(/<header[^>]*>/);
      expect(aboutHtmlContent).toMatch(/<nav[^>]*>/);
      expect(aboutHtmlContent).toMatch(/<main[^>]*>/);
      expect(aboutHtmlContent).toMatch(/<section[^>]*>/);
      expect(aboutHtmlContent).toMatch(/<footer[^>]*>/);
    });

    test('includes page title mentioning About and Nullbytes', () => {
      expect(aboutHtmlContent).toMatch(/<title[^>]*>.*About.*Nullbytes.*<\/title>/i);
    });
  });

  describe('Team Member Grid Layout', () => {
    test('has main content section for team members', () => {
      expect(aboutHtmlContent).toMatch(/<section[^>]*class[^>]*team[^>]*>/i);
    });

    test('includes grid container for team members', () => {
      expect(aboutHtmlContent).toMatch(/class[^>]*grid[^>]*|class[^>]*team.*grid/i);
    });

    test('has founder profile section', () => {
      expect(aboutHtmlContent).toMatch(/founder|ravi.*sriram/i);
    });

    test('includes placeholder for additional team members', () => {
      expect(aboutHtmlContent).toMatch(/team.*member|member.*card|profile.*card/i);
    });
  });

  describe('Responsive Design Classes', () => {
    test('uses responsive grid classes', () => {
      expect(aboutHtmlContent).toMatch(/grid.*cols.*|cols.*grid/);
      expect(aboutHtmlContent).toMatch(/md:|lg:|xl:/);
    });

    test('includes responsive spacing and layout classes', () => {
      expect(aboutHtmlContent).toMatch(/space-|gap-|p-|m-/);
      expect(aboutHtmlContent).toMatch(/flex|grid/);
    });

    test('has mobile-first responsive breakpoints', () => {
      expect(aboutHtmlContent).toMatch(/sm:|md:|lg:|xl:|2xl:/);
    });
  });

  describe('Navigation Integration', () => {
    test('index.html navigation includes About link', () => {
      expect(indexHtmlContent).toMatch(/<a[^>]*href="about\.html"[^>]*>.*About.*<\/a>/i);
    });

    test('about.html has navigation with Home link back to index', () => {
      expect(aboutHtmlContent).toMatch(/<a[^>]*href="index\.html"|href="\/"[^>]*>.*Home.*<\/a>/i);
    });

    test('navigation maintains consistent styling', () => {
      expect(aboutHtmlContent).toMatch(/nav[^>]*class[^>]*cyber/i);
    });
  });

  describe('Cyberpunk Styling Consistency', () => {
    test('includes cyberpunk color palette classes', () => {
      expect(aboutHtmlContent).toMatch(/cyber|neon|matrix/i);
    });

    test('uses consistent typography classes', () => {
      expect(aboutHtmlContent).toMatch(/font-|text-|cyber.*title|cyber.*section/);
    });

    test('includes existing Tailwind CSS CDN', () => {
      expect(aboutHtmlContent).toMatch(/tailwindcss\.com/);
    });

    test('includes GSAP library for animations', () => {
      expect(aboutHtmlContent).toMatch(/gsap|cdnjs.*gsap/);
    });

    test('includes Lucide icons library', () => {
      expect(aboutHtmlContent).toMatch(/lucide|unpkg.*lucide/);
    });
  });

  describe('Accessibility and SEO', () => {
    test('includes proper heading hierarchy', () => {
      expect(aboutHtmlContent).toMatch(/<h1[^>]*>/);
      expect(aboutHtmlContent).toMatch(/<h2[^>]*>/);
    });

    test('has meta description for About page', () => {
      expect(aboutHtmlContent).toMatch(/<meta\s+name="description"\s+content="[^"]*about[^"]*"/i);
    });

    test('includes alt attributes for any images', () => {
      const images = aboutHtmlContent.match(/<img[^>]+>/g);
      if (images) {
        images.forEach(img => {
          expect(img).toMatch(/alt="[^"]*"/);
        });
      }
    });
  });
});

module.exports = {
  testEnvironment: 'node'
};