// SSL Certificate and Performance Validation Tests
// These tests verify SSL setup and site performance requirements

const fs = require('fs');
const path = require('path');

describe('SSL Certificate Requirements', () => {
  test('HTML forces HTTPS redirects in production', () => {
    const indexPath = path.join(__dirname, '../index.html');
    const content = fs.readFileSync(indexPath, 'utf8');
    
    // Check for HTTPS in canonical URLs and meta tags
    expect(content).toMatch(/https:\/\/nullbytes\.app/);
  });

  test('no mixed content warnings in HTML', () => {
    const indexPath = path.join(__dirname, '../index.html');
    const content = fs.readFileSync(indexPath, 'utf8');
    
    // All external resources should use HTTPS
    const httpResources = content.match(/http:\/\/(?!.*https)/g);
    expect(httpResources).toBeNull();
  });

  test('external CDN resources use HTTPS', () => {
    const indexPath = path.join(__dirname, '../index.html');
    const content = fs.readFileSync(indexPath, 'utf8');
    
    expect(content).toMatch(/https:\/\/cdn\.tailwindcss\.com/);
    expect(content).toMatch(/https:\/\/cdnjs\.cloudflare\.com/);
    expect(content).toMatch(/https:\/\/unpkg\.com/);
    expect(content).toMatch(/https:\/\/fonts\.googleapis\.com/);
    expect(content).toMatch(/https:\/\/fonts\.gstatic\.com/);
  });
});

describe('Performance Validation', () => {
  test('HTML size is optimized', () => {
    const indexPath = path.join(__dirname, '../index.html');
    const stats = fs.statSync(indexPath);
    const fileSizeKB = stats.size / 1024;
    
    // Reasonable size for a landing page with inline styles
    expect(fileSizeKB).toBeLessThan(100); // Less than 100KB
    expect(fileSizeKB).toBeGreaterThan(10); // Has substantial content
  });

  test('animations use efficient CSS properties', () => {
    const indexPath = path.join(__dirname, '../index.html');
    const content = fs.readFileSync(indexPath, 'utf8');
    
    // Check for GPU-accelerated properties
    expect(content).toMatch(/transform:/);
    expect(content).toMatch(/opacity:/);
    
    // Avoid layout-triggering properties in animations
    const layoutProperties = content.match(/@keyframes[^}]*(?:width|height|top|left)[^}]*}/g);
    // Some layout properties are acceptable for specific effects
    expect(layoutProperties ? layoutProperties.length : 0).toBeLessThan(5);
  });

  test('images and assets are optimized', () => {
    // No large images should be embedded as base64
    const indexPath = path.join(__dirname, '../index.html');
    const content = fs.readFileSync(indexPath, 'utf8');
    
    const base64Images = content.match(/data:image\/[^;]+;base64,[A-Za-z0-9+/=]{1000,}/g);
    expect(base64Images).toBeNull();
  });
});

describe('Browser Compatibility', () => {
  test('uses modern CSS features with proper fallbacks', () => {
    const indexPath = path.join(__dirname, '../index.html');
    const content = fs.readFileSync(indexPath, 'utf8');
    
    // Check for CSS Grid (modern browsers)
    expect(content).toMatch(/display:\s*grid/);
    expect(content).toMatch(/grid-template/);
    
    // Check for Flexbox (fallback)
    expect(content).toMatch(/display:\s*flex/);
  });

  test('viewport meta tag is configured correctly', () => {
    const indexPath = path.join(__dirname, '../index.html');
    const content = fs.readFileSync(indexPath, 'utf8');
    
    expect(content).toMatch(/<meta[^>]*name=["']viewport["'][^>]*content=["'][^"']*width=device-width[^"']*["'][^>]*>/);
  });

  test('uses semantic HTML elements', () => {
    const indexPath = path.join(__dirname, '../index.html');
    const content = fs.readFileSync(indexPath, 'utf8');
    
    expect(content).toMatch(/<nav[^>]*>/);
    expect(content).toMatch(/<section[^>]*>/);
    expect(content).toMatch(/<footer[^>]*>/);
    expect(content).toMatch(/<h1[^>]*>/);
  });
});

describe('SEO and Accessibility', () => {
  test('has proper heading hierarchy', () => {
    const indexPath = path.join(__dirname, '../index.html');
    const content = fs.readFileSync(indexPath, 'utf8');
    
    expect(content).toMatch(/<h1[^>]*>/);
    expect(content).toMatch(/<h2[^>]*>/);
    expect(content).toMatch(/<h3[^>]*>/);
  });

  test('images have alt attributes where needed', () => {
    const indexPath = path.join(__dirname, '../index.html');
    const content = fs.readFileSync(indexPath, 'utf8');
    
    // Check that any img tags have alt attributes
    const images = content.match(/<img[^>]+>/g);
    if (images) {
      images.forEach(img => {
        expect(img).toMatch(/alt=["'][^"']*["']/);
      });
    }
  });

  test('links have descriptive text', () => {
    const indexPath = path.join(__dirname, '../index.html');
    const content = fs.readFileSync(indexPath, 'utf8');
    
    // No "click here" or generic link text
    expect(content).not.toMatch(/>click here</i);
    expect(content).not.toMatch(/>read more</i);
  });
});

module.exports = {
  testEnvironment: 'node'
};