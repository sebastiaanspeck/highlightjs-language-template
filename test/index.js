'use strict';

const hljs = require("highlight.js/lib/core");
hljs.debugMode(); // tests run in debug mode so errors are raised

// Tests for auto detection for your-language via `highlightAuto`.
require('./detect');

// HTML markup tests for your-language.
require('./markup');
