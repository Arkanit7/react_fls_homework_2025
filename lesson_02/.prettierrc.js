/**
 * @see https://prettier.io/docs/configuration.html
 * @type {import("prettier").Config}
 */
export default {
  printWidth: 80, // Максимальна довжина рядка
  tabWidth: 2, // Кількість пробілів для табуляції
  useTabs: false, // Використовувати пробіли замість табуляцій
  semi: false, // Не додавати крапки з комою в кінці операторів
  quoteProps: "as-needed", // Додавати лапки до ключів об'єктів лише за потреби
  bracketSpacing: false, // Не додавати пробіли всередині фігурних дужок {cat}
  trailingComma: "all", // Додавати кому після останнього елемента в масивах та об'єктах
  endOfLine: "lf", // Використовувати LF як символ кінця рядка (Linux, macOS)
  singleQuote: false, // Використовувати одинарні лапки для рядків

  overrides: [
    {
      files: "*.{js,jsx}", // Застосовувати до файлів JavaScript та JSX
      options: {
        singleQuote: true, // Завжди використовувати одинарні лапки для рядків у цих файлах
      },
    },
  ],
}
