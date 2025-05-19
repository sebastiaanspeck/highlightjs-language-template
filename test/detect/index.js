'use strict';

const fs = require('fs').promises;
const hljs = require("highlight.js/lib/core");
const yourLanguage = require("../../src/languages/your-language");
const path = require('path');
const utility = require('../utility');

const languageName = "your-language";

hljs.debugMode();
hljs.registerLanguage(languageName, yourLanguage);

describe('hljs.highlightAuto()', () => {
  const languagePath = utility.buildPath('detect', languageName);

  it(`should be detected as ${languageName}`, async() => {
    const dir = await fs.stat(languagePath);
    dir.isDirectory().should.be.true();

    const filenames = (await fs.readdir(languagePath));
    await Promise.all(filenames
      .map(async function(example) {
        const filename = path.join(languagePath, example);

        const content = await fs.readFile(filename, 'utf-8');
        const detectedLanguage = hljs.highlightAuto(content).language;

        detectedLanguage.should.equal(languageName,
          `${path.basename(filename)} should be detected as ${languageName}, but was ${detectedLanguage}`);
      }));
  });
});
