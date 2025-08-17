// Team Member Grid System Tests
// Tests for Task 3: Create Team Member Grid System

const fs = require('fs');
const path = require('path');

describe('Team Member Grid System', () => {
  let aboutHtmlContent;

  beforeAll(() => {
    const aboutPath = path.join(__dirname, '../about.html');
    if (fs.existsSync(aboutPath)) {
      aboutHtmlContent = fs.readFileSync(aboutPath, 'utf8');
    }
  });

  describe('Grid Layout and Responsive Behavior', () => {
    test('has team grid container with proper CSS classes', () => {
      expect(aboutHtmlContent).toMatch(/team-grid/);
      expect(aboutHtmlContent).toMatch(/grid.*grid-cols-1/);
    });

    test('implements responsive grid breakpoints', () => {
      expect(aboutHtmlContent).toMatch(/md:grid-cols-2/);
      expect(aboutHtmlContent).toMatch(/lg:grid-cols-3/);
    });

    test('includes responsive gap spacing', () => {
      expect(aboutHtmlContent).toMatch(/gap-6|gap-8|gap-12|gap-16/);
      expect(aboutHtmlContent).toMatch(/sm:gap-|md:gap-|lg:gap-/);
    });

    test('has proper column spanning for founder card', () => {
      expect(aboutHtmlContent).toMatch(/col-span-1.*md:col-span-2.*lg:col-span-3/);
    });
  });

  describe('Reusable Team Member Card Component', () => {
    test('has consistent team-member-card class structure', () => {
      const cardMatches = aboutHtmlContent.match(/team-member-card/g);
      expect(cardMatches).toBeTruthy();
      expect(cardMatches.length).toBeGreaterThanOrEqual(3);
    });

    test('each card has standard member components', () => {
      expect(aboutHtmlContent).toMatch(/member-avatar/);
      expect(aboutHtmlContent).toMatch(/member-name/);
      expect(aboutHtmlContent).toMatch(/member-title/);
      expect(aboutHtmlContent).toMatch(/member-bio/);
      expect(aboutHtmlContent).toMatch(/member-skills/);
    });

    test('cards have consistent visual structure', () => {
      expect(aboutHtmlContent).toMatch(/avatar-placeholder/);
      expect(aboutHtmlContent).toMatch(/skill-tag/);
    });

    test('founder card has special styling', () => {
      expect(aboutHtmlContent).toMatch(/founder-card/);
    });
  });

  describe('Expandable Detail View Functionality', () => {
    test('cards have hover interaction classes', () => {
      expect(aboutHtmlContent).toMatch(/team-member-card.*hover|hover.*team-member-card/);
    });

    test('includes GSAP animation setup for cards', () => {
      expect(aboutHtmlContent).toMatch(/\.team-member-card/);
      expect(aboutHtmlContent).toMatch(/gsap/);
      expect(aboutHtmlContent).toMatch(/mouseenter|mouseleave/);
    });

    test('has card scaling and rotation effects', () => {
      expect(aboutHtmlContent).toMatch(/scale.*1\.02|scale:\s*1\.02/);
      expect(aboutHtmlContent).toMatch(/rotationY/);
    });
  });

  describe('Matrix-Style Image Processing Effects', () => {
    test('has avatar styling with cyber effects', () => {
      expect(aboutHtmlContent).toMatch(/border:\s*3px\s*solid\s*var\(--cyber-neon-cyan\)/);
      expect(aboutHtmlContent).toMatch(/cyber-neon-cyan|--cyber-neon-cyan/);
    });

    test('includes gradient backgrounds for avatars', () => {
      expect(aboutHtmlContent).toMatch(/linear-gradient.*45deg|linear-gradient.*135deg/);
      expect(aboutHtmlContent).toMatch(/cyber-neon-cyan.*cyber-neon-pink|cyber-neon-pink.*cyber-neon-cyan/);
    });

    test('avatar placeholders have matrix-style effects', () => {
      expect(aboutHtmlContent).toMatch(/avatar-placeholder/);
      expect(aboutHtmlContent).toMatch(/border-radius.*50%|border-radius:\s*50%/);
    });
  });

  describe('Additional Team Member Placeholders', () => {
    test('has placeholder team member cards', () => {
      expect(aboutHtmlContent).toMatch(/position.*available/i);
      expect(aboutHtmlContent).toMatch(/team.*member/i);
    });

    test('placeholder cards maintain consistent structure', () => {
      const placeholderCards = aboutHtmlContent.match(/Position Available|team.*member/gi);
      expect(placeholderCards).toBeTruthy();
      expect(placeholderCards.length).toBeGreaterThanOrEqual(2);
    });

    test('includes recruitment messaging', () => {
      expect(aboutHtmlContent).toMatch(/join.*growing.*team|growing.*team.*specialists/i);
      expect(aboutHtmlContent).toMatch(/frontend.*wizard|backend.*architect|ai.*researcher/i);
    });

    test('placeholder cards have appropriate icons', () => {
      expect(aboutHtmlContent).toMatch(/🔒|🚀|💻|⚡/);
    });
  });

  describe('Grid System Performance and Accessibility', () => {
    test('uses semantic HTML structure', () => {
      expect(aboutHtmlContent).toMatch(/<section[^>]*team-section/);
      expect(aboutHtmlContent).toMatch(/<h1[^>]*cyber-section-title/);
      expect(aboutHtmlContent).toMatch(/<h2[^>]*member-name/);
      expect(aboutHtmlContent).toMatch(/<h3[^>]*member-name/);
    });

    test('has proper heading hierarchy', () => {
      expect(aboutHtmlContent).toMatch(/<h1[^>]*>.*TEAM.*MATRIX.*<\/h1>/i);
      expect(aboutHtmlContent).toMatch(/<h2[^>]*>.*Ravi Kumar Sriram.*<\/h2>/i);
      expect(aboutHtmlContent).toMatch(/<h3[^>]*>.*Team Member.*<\/h3>/i);
    });

    test('includes descriptive content for screen readers', () => {
      expect(aboutHtmlContent).toMatch(/meet.*architect.*digital.*frontier/i);
      expect(aboutHtmlContent).toMatch(/founder.*lead.*security.*architect/i);
    });

    test('grid layout works across device breakpoints', () => {
      expect(aboutHtmlContent).toMatch(/grid-cols-1.*md:grid-cols-2.*lg:grid-cols-3/);
      expect(aboutHtmlContent).toMatch(/col-span-1.*md:col-span-2.*lg:col-span-3/);
    });
  });
});

module.exports = {
  testEnvironment: 'node'
};