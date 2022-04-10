const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.npmInstall(
      [
        "prettier",
        "eslint",
        "eslint-config-prettier",
        "eslint-config-standard",
        "eslint-plugin-import",
        "eslint-plugin-node",
        "eslint-plugin-prettier",
        "@typescript-eslint/parser",
        "@typescript-eslint/eslint-plugin",
        "typescript",
        "ts-node-dev",
        "@types/node",
        "@tsconfig/node16"
      ],
      { "save-dev": true }
    );
  }

  eslint() {
    this.fs.copy(this.templatePath(".eslintrc"), this.destinationPath(".eslintrc"));
  }

};
