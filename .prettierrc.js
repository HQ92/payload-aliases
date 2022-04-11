// We use Prettier to solely manage code formatting as it's better than ESLint

// Prettier, while similar to ESLint by formatting your code, does not check your code quality.
// It just serves as a code formatter. It does this job pretty well though by natively supporting
// JavaScript but also JSX, Flow, TypeScript, HTML, JSON, CSS and many more languages.

// It generally does this on file saves automatically, EditorConfig defines rules for in editor
// formatting shortcuts, it does not do anything automatically so has a different purpose to
// Prettier and can be used in conjunction with to reduce the load on Prettier as long as they
// both have consistent rules

// Formatting rules: Rules that prevent inconsistent and ugly looking code (eg: max-len,
// no-mixed-spaces-and-tabs, keyword-spacing, comma-style…)

// Prettier takes some values by default from .editorconfig so degine tab spaces only in there.

module.exports = {
  jsxSingleQuote: true,
  printWidth: 120,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
};
