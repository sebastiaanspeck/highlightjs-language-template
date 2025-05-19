# project-name - a language grammar for highlight.js

![version](https://badgen.net/npm/v/highlightjs-your-language) ![license](https://badgen.net/badge/license/MIT/blue)
![install size](https://badgen.net/packagephobia/install/highlightjs-your-language) ![minified size](https://badgen.net/bundlephobia/min/highlightjs-your-language)

[![ci status](https://github.com/sebastiaanspeck/highlightjs-language-template/actions/workflows/ci.yml/badge.svg)](https://github.com/sebastiaanspeck/highlightjs-language-template/actions/workflows/ci.yml)

Describe your-language.
Link to [your-language grammar description](https://official.language.com).

## Usage

Simply include the Highlight.js library in your webpage or Node app, then load this module.

### Static website

Simply load the module after loading Highlight.js.  You'll use the minified version found in the `dist` directory.  This module is just a CDN build of the language, so it will register itself as the Javascript is loaded.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" src="/path/to/your-language.min.js"></script>
<script type="text/javascript">
  hljs.highlightAll();
</script>
```

### Using directly from the UNPKG CDN

```html
<script type="text/javascript"
  src="https://unpkg.com/highlightjs-your-language@0.0.1/dist/your-language.min.js"></script>
```

- More info: <https://unpkg.com>

### With Node or another build system

If you're using Node / Webpack / Rollup / Browserify, etc, simply require the language module, then register it with Highlight.js.

```javascript
var hljs = require('highlight.js');
var hljsYourLanguage = require('highlightjs-your-language');

hljs.registerLanguage("your-language", hljsYourLanguage);
hljs.highlightAll();
```

## License

Highlight.js for your-language is released under the MIT License. See [LICENSE](LICENSE) file for details.

Highlight.js is released under the [BSD 3-Clause License](https://github.com/highlightjs/highlight.js/blob/master/LICENSE).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork this project.
2. Create a work branch (`git checkout -b my-branch`).
3. Commit your changes (`git commit -m 'my changes'`).
4. Push the branch (`git push origin my-branch`).
5. Open a Pull Request from your fork back to this repository.

## Links

- The official site for the Highlight.js library is <https://highlightjs.org/>.
- The Highlight.js GitHub project: <https://github.com/highlightjs/highlight.js>
- Learn more about your-language: <https://your-language.org>
