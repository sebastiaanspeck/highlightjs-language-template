/*
Language: your-language
Description: This is a placeholder language to be replaced by your-language. Tell us what your-language is all about.
Author: author <author@website.com>
Category: scripting
*/

module.exports = function (hljs) {
  var KEYWORDS = {
    keyword:
      'assign if for while function do return else break',
    literal:
      'true false null void',
    built_in:
      'builtin otherbuiltin'
  };
  var NUMBER = {
    className: 'number',
    variants: [
      { begin: '\\b(0[bB][01]+)' },
      { begin: '\\b(0[oO][0-7]+)' },
      { begin: hljs.C_NUMBER_RE }
    ],
    relevance: 0
  };

  return {
    name: "your-language",
    aliases: [ "your-lang" ],
    keywords: KEYWORDS,
    case_insensitive: true,
    disableAutodetect: false,
    contains: [
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      NUMBER
    ]
  };
}
