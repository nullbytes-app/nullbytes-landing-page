// GitHub Pages Configuration Tests
// These tests verify GitHub Pages deployment configuration

const fs = require('fs');
const path = require('path');

describe('GitHub Pages Configuration', () => {
  test('CNAME file exists with correct domain', () => {
    const cnamePath = path.join(__dirname, '../CNAME');
    expect(fs.existsSync(cnamePath)).toBe(true);
    
    const content = fs.readFileSync(cnamePath, 'utf8').trim();
    expect(content).toBe('nullbytes.app');
  });

  test('index.html is in root directory for GitHub Pages', () => {
    const indexPath = path.join(__dirname, '../index.html');
    expect(fs.existsSync(indexPath)).toBe(true);
  });

  test('no conflicting files that would interfere with GitHub Pages', () => {
    const conflictFiles = ['index.md', '_config.yml'];
    conflictFiles.forEach(file => {
      const filePath = path.join(__dirname, '..', file);
      expect(fs.existsSync(filePath)).toBe(false);
    });
  });

  test('repository structure is correct for static hosting', () => {
    const requiredFiles = ['index.html', 'CNAME'];
    requiredFiles.forEach(file => {
      const filePath = path.join(__dirname, '..', file);
      expect(fs.existsSync(filePath)).toBe(true);
    });
  });

  test('no build artifacts in repository', () => {
    const artifactDirs = ['dist', 'build', 'node_modules'];
    artifactDirs.forEach(dir => {
      const dirPath = path.join(__dirname, '..', dir);
      expect(fs.existsSync(dirPath)).toBe(false);
    });
  });
});

describe('Domain Configuration', () => {
  test('CNAME content is properly formatted', () => {
    const cnamePath = path.join(__dirname, '../CNAME');
    if (fs.existsSync(cnamePath)) {
      const content = fs.readFileSync(cnamePath, 'utf8');
      expect(content.trim()).toMatch(/^[a-z0-9.-]+\.[a-z]{2,}$/i);
      expect(content.trim()).not.toMatch(/^www\./);
    }
  });

  test('HTML contains proper meta tags for custom domain', () => {
    const indexPath = path.join(__dirname, '../index.html');
    const content = fs.readFileSync(indexPath, 'utf8');
    
    // Check for canonical URL or domain references
    expect(content).toMatch(/nullbytes\.app/);
  });
});

module.exports = {
  testEnvironment: 'node'
};