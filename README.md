# AngularEslintConfigure

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Eslint and Prettier configure setups

# Install ESLint
npm install --save-dev eslint

# Install additional plugins
npm install --save-dev @typescript-eslint/eslint-plugin eslint-plugin-prettier

# Install Prettier and Prettier-ESLint dependencies
npm install --save-dev prettier prettier-eslint eslint-config-prettier

# Add .eslintrc.json file 

# Create lint script in package.json
  "lint": "eslint \"**/*.{js,ts}\" --quiet --fix"

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
