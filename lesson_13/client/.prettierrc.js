/**
 * @see https://prettier.io/docs/configuration.html
 * @type {import("prettier").Config}
 */
export default {
  // plugins: ['prettier-plugin-tailwindcss'], // Format tailwind classes
  // tailwindStylesheet: './src/styles/index.css', // Specify your CSS file entry point

  printWidth: 80, // Maximum line length
  tabWidth: 2, // Number of spaces for tabulation
  useTabs: false, // Use spaces instead of tabs
  semi: false, // Do not add semicolons at the end of statements
  quoteProps: "as-needed", // Add quotes to object keys only if necessary
  bracketSpacing: false, // Do not add spaces inside curly brackets {cat}
  trailingComma: "all", // Add a comma after the last element in arrays and objects
  endOfLine: "lf", // Use LF as an end-of-line character (Linux, macOS)
  singleQuote: false, // Use single quotes for strings

  overrides: [
    {
      files: "*.{js,jsx}", // Apply to JavaScript and JSX files
      options: {
        singleQuote: true, // Always use single quotes for strings in these files
      },
    },
  ],
};
