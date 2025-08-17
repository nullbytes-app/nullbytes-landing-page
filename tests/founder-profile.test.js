// Founder Profile Component Tests
// Tests for Task 2: Implement Founder Profile Section

const fs = require('fs');
const path = require('path');

describe('Founder Profile Section', () => {
  let aboutHtmlContent;

  beforeAll(() => {
    const aboutPath = path.join(__dirname, '../about.html');
    if (fs.existsSync(aboutPath)) {
      aboutHtmlContent = fs.readFileSync(aboutPath, 'utf8');
    }
  });

  describe('Founder Bio Component Structure', () => {
    test('has founder-specific card styling', () => {
      expect(aboutHtmlContent).toMatch(/founder-card|founder.*profile/i);
    });

    test('contains Ravi Kumar Sriram name and title', () => {
      expect(aboutHtmlContent).toMatch(/ravi.*kumar.*sriram/i);
      expect(aboutHtmlContent).toMatch(/founder.*lead.*security|lead.*security.*architect/i);
    });

    test('includes professional bio sections', () => {
      expect(aboutHtmlContent).toMatch(/member-bio/);
      expect(aboutHtmlContent).toMatch(/security.*framework|cybersecurity.*practices/i);
      expect(aboutHtmlContent).toMatch(/cloud.*security.*siem|siem.*implementations/i);
    });

    test('has structured bio with multiple paragraphs', () => {
      const bioMatch = aboutHtmlContent.match(/<div[^>]*member-bio[^>]*>(.*?)<\/div>/s);
      expect(bioMatch).toBeTruthy();
      const bioContent = bioMatch[1];
      expect(bioContent).toMatch(/<p>/);
      expect((bioContent.match(/<p>/g) || []).length).toBeGreaterThanOrEqual(2);
    });
  });

  describe('Professional Skills and Expertise', () => {
    test('includes comprehensive skill tags', () => {
      expect(aboutHtmlContent).toMatch(/skill-tag/);
      expect(aboutHtmlContent).toMatch(/cloud.*security/i);
      expect(aboutHtmlContent).toMatch(/siem/i);
      expect(aboutHtmlContent).toMatch(/threat.*hunting/i);
      expect(aboutHtmlContent).toMatch(/azure.*sentinel/i);
      expect(aboutHtmlContent).toMatch(/aws/i);
      expect(aboutHtmlContent).toMatch(/devsecops/i);
      expect(aboutHtmlContent).toMatch(/pentesting/i);
      expect(aboutHtmlContent).toMatch(/dast.*sast|sast.*dast/i);
      expect(aboutHtmlContent).toMatch(/docker/i);
    });

    test('skill tags are properly formatted', () => {
      const skillTags = aboutHtmlContent.match(/<span[^>]*skill-tag[^>]*>([^<]+)<\/span>/g);
      expect(skillTags).toBeTruthy();
      expect(skillTags.length).toBeGreaterThanOrEqual(8);
    });
  });

  describe('Contact Information and Links', () => {
    test('includes LinkedIn profile link', () => {
      expect(aboutHtmlContent).toMatch(/linkedin\.com\/in\/ravi-sriram/);
      expect(aboutHtmlContent).toMatch(/target="_blank"/);
    });

    test('includes email contact', () => {
      expect(aboutHtmlContent).toMatch(/mailto:.*@nullbytes\.app/);
    });

    test('contact links have proper styling', () => {
      expect(aboutHtmlContent).toMatch(/contact-link/);
    });

    test('contact section is properly structured', () => {
      expect(aboutHtmlContent).toMatch(/member-contact/);
    });
  });

  describe('Visual Profile Elements', () => {
    test('has member avatar section', () => {
      expect(aboutHtmlContent).toMatch(/member-avatar/);
    });

    test('includes avatar placeholder with icon', () => {
      expect(aboutHtmlContent).toMatch(/avatar-placeholder/);
      expect(aboutHtmlContent).toMatch(/👨‍💻|💻|🧑‍💻/);
    });

    test('avatar has proper styling classes', () => {
      const avatarMatch = aboutHtmlContent.match(/<div[^>]*member-avatar[^>]*>/);
      expect(avatarMatch).toBeTruthy();
    });
  });

  describe('Professional Positioning and Leadership', () => {
    test('emphasizes leadership role in Nullbytes', () => {
      expect(aboutHtmlContent).toMatch(/leads.*nullbytes|nullbytes.*leader/i);
    });

    test('mentions AI-powered solutions vision', () => {
      expect(aboutHtmlContent).toMatch(/ai.*powered.*solutions|ai.*solutions/i);
    });

    test('includes expertise in enterprise security', () => {
      expect(aboutHtmlContent).toMatch(/enterprise.*network|enterprise.*security/i);
    });

    test('highlights modern security methodology expertise', () => {
      expect(aboutHtmlContent).toMatch(/devsecops.*methodolog|security.*methodolog/i);
    });
  });

  describe('Content Quality and Professional Tone', () => {
    test('bio content is substantial and detailed', () => {
      const bioMatch = aboutHtmlContent.match(/<div[^>]*member-bio[^>]*>(.*?)<\/div>/s);
      expect(bioMatch).toBeTruthy();
      const bioText = bioMatch[1].replace(/<[^>]*>/g, '').trim();
      expect(bioText.length).toBeGreaterThan(200);
    });

    test('uses professional language and terminology', () => {
      expect(aboutHtmlContent).toMatch(/comprehensive.*security.*framework/i);
      expect(aboutHtmlContent).toMatch(/advanced.*threat.*hunting/i);
      expect(aboutHtmlContent).toMatch(/infrastructure.*management/i);
    });

    test('bio follows founder template structure', () => {
      expect(aboutHtmlContent).toMatch(/experience.*specializes|specializes.*experience/i);
      expect(aboutHtmlContent).toMatch(/expertise.*spanning|spanning.*expertise/i);
    });
  });
});

module.exports = {
  testEnvironment: 'node'
};