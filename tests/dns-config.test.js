// DNS Configuration Tests
// These tests verify DNS setup requirements and provide validation

const fs = require('fs');
const path = require('path');

describe('DNS Configuration Documentation', () => {
  test('DNS setup documentation exists', () => {
    const docsPath = path.join(__dirname, '../DNS-SETUP.md');
    expect(fs.existsSync(docsPath)).toBe(true);
  });

  test('DNS documentation contains required information', () => {
    const docsPath = path.join(__dirname, '../DNS-SETUP.md');
    if (fs.existsSync(docsPath)) {
      const content = fs.readFileSync(docsPath, 'utf8');
      
      // Check for GitHub Pages IP addresses
      expect(content).toMatch(/185\.199\.108\.153/);
      expect(content).toMatch(/185\.199\.109\.153/);
      expect(content).toMatch(/185\.199\.110\.153/);
      expect(content).toMatch(/185\.199\.111\.153/);
      
      // Check for CNAME record instructions
      expect(content).toMatch(/CNAME/i);
      expect(content).toMatch(/www/);
      expect(content).toMatch(/nullbytes\.app/);
      
      // Check for Namecheap specific instructions
      expect(content).toMatch(/namecheap/i);
      expect(content).toMatch(/DNS/i);
    }
  });
});

describe('Domain Configuration Validation', () => {
  test('CNAME file matches expected domain', () => {
    const cnamePath = path.join(__dirname, '../CNAME');
    expect(fs.existsSync(cnamePath)).toBe(true);
    
    const domain = fs.readFileSync(cnamePath, 'utf8').trim();
    expect(domain).toBe('nullbytes.app');
  });

  test('no www prefix in CNAME', () => {
    const cnamePath = path.join(__dirname, '../CNAME');
    const domain = fs.readFileSync(cnamePath, 'utf8').trim();
    expect(domain).not.toMatch(/^www\./);
  });
});

// Note: These tests validate configuration files and documentation.
// Actual DNS propagation testing would require network calls and is not included.

module.exports = {
  testEnvironment: 'node'
};