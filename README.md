# highlightjs-language-template

This repository is a new language [template][1] to use as a starting point when creating a language definition for [highlightjs](https://github.com/highlightjs/highlight.js).
See [highlightjs.org](https://highlightjs.org) for more information about highlight.js.

**Before you start:**

1. Check [supported languages](https://github.com/highlightjs/highlight.js/blob/master/SUPPORTED_LANGUAGES.md) to see if your proposed language/syntax/grammar is already supported.
If there is an existing implementation, it may be more helpful to contribute to the existing repository.
2. Read [3rd party quick start](https://github.com/highlightjs/highlight.js/blob/master/extra/3RD_PARTY_QUICK_START.md) to learn more about the requirements and process to contributing a new syntax.

## Usage

This is a GitHub repository _template_ for defining a new language for use with [highlightjs](https://highlightjs.org/). It is designed to be the starting point for creating a new repository to define a new language syntax contribution.
Follow [Language definition guide](https://highlightjs.readthedocs.io/en/latest/language-guide.html) to learn how to define a new language.

**Steps:**

1. Create a new repository from this template.
2. Update `package.json`.
3. Install the dependencies with `npm install`.
4. Rename `src/languages/your-language.js` to your language/syntax/grammar name.
Search and replace in this repository all occurrences of `your-language` with your language name, including file and folder names.
Follow the [Language definition guide](https://highlightjs.readthedocs.io/en/latest/language-guide.html) to learn how to implement it.
Typically we start with an existing grammar that is close and alter that JavaScript code to parse your new grammar.
5. We provided a simple test framework to help you get started quickly.
You can use this and update it to help test your grammar, or remove it and replace it with your preferred testing framework.
Rename and update the unit test `spec/language-spec.js` to test your new syntax.
Edit `test/markup/your-language/sample.txt` to cover specific test cases for your syntax.
The code doesn't have to be real working code, but it does have to fully test your grammar constructs and keywords.
Edit `test/markup/your-language/sample.expect.txt` to hold the anticipated correct highlighting HTML.
Edit `test/detect/your-language/sample.txt` to include a validation case for auto-detecting your language.
Also change the folder path from `your-language` to the matching name for your language.
6. Run the test with `npm test`.
7. Delete `README.md` and then rename `BLANK_README.md` to `README.md`.
Complete the placeholder sections to explain how to use your grammar.
You can use [sample README](https://github.com/highlightjs/highlightjs-robots-txt/blob/master/README.md) as a guide.
8. As a final step, follow the testing procedure in [3RD_PARTY_QUICK_START](https://github.com/highlightjs/highlight.js/blob/main/extra/3RD_PARTY_QUICK_START.md) to test your language against the highlight.js test and detect framework.

Once your syntax is working as expected and your README is complete, create a [syntax request](https://github.com/highlightjs/highlight.js/issues/new/choose) issue and indicate the details about your new grammar for the maintainers to review.

## License

This template is released under the MIT License. See [LICENSE](LICENSE) file for details. You may choose a different license based on your requirements.

## Contributing

This is open source software, all contributions are welcome.

[1]: https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template#about-repository-templates
