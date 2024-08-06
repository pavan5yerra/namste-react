

The concept of "subversions" generally refers to the granularity of version numbers in software versioning. Semantic Versioning (SemVer) is a widely adopted versioning scheme that uses a three-part number format: `MAJOR.MINOR.PATCH`. Each part of the version number represents a different level of change, and subversions can be thought of as more detailed versions within these categories.

### Semantic Versioning (SemVer)
According to SemVer, the version number is structured as follows:

- **MAJOR**: Increments indicate incompatible API changes.
- **MINOR**: Increments indicate backward-compatible functionality has been added.
- **PATCH**: Increments indicate backward-compatible bug fixes.
**Example: **`**1.2.3**` 

- `1`  is the MAJOR version.
- `2`  is the MINOR version.
- `3`  is the PATCH version.
### Detailed Version Ranges
While SemVer itself doesn't provide more granularity beyond `MAJOR.MINOR.PATCH`, you can specify more detailed constraints using version ranges and pre-release identifiers.

#### Pre-release Versions
Pre-release versions can be used to indicate that a version is not stable and is intended for testing. These are denoted by appending a hyphen and a series of dot-separated identifiers.

**Example: **`**1.2.3-alpha.1**` 

- `alpha` , `beta` , `rc`  (release candidate) are common identifiers.
#### Build Metadata
Build metadata can be appended to the version using a plus sign. This is used to indicate build-specific information.

**Example: **`**1.2.3+build.123**` 

### Practical Examples
Here's an example `package.json` illustrating various version ranges:

```json
{
  "dependencies": {
    "exact-version": "1.2.3",    ---> 1.2.3
    "caret-version": "^1.2.3",  --> allows minor and patches [1.2.4 , 1.3.0] 
    "tilde-version": "~1.2.3",   --> allows patches [1.2.4 , 1.2.5]
    "greater-than-version": ">1.2.3", -->  covers any version of range greater than 1.2.3
    "less-than-version": "<1.2.3",   --> covers any version of range less than 1.2.3
    "greater-than-equal-version": ">=1.2.3", --> covers any version of range greater than  = 1.2.3
    "less-than-equal-version": "<=1.2.3",     --> covers any version of range less than  = 1.2.3
    "range-version": "1.2.3 - 1.2.5",
    "logical-and-version": ">1.2.3 <2.0.0",
    "logical-or-version": "<1.0.0 || >=2.0.0",
    "wildcard-version": "1.2.x",     --> covers any patch version   
    "pre-release-version": "1.2.3-alpha.1",
    "build-metadata-version": "1.2.3+build.123"
  }
}
```

## Pre and Post Hooks in package json

**Pre Hooks:**

- A `pre<task>`  script runs before the specified `<task>`  script.
- For example, `pretest`  runs before `test`.
  
**Post Hooks:**

- A `post<task>`  script runs after the specified `<task>`  script.
- For example, `posttest`  runs after `test`.
### 
```
{
  "scripts": {
    "start": "node index.js",
    "prestart": "echo 'Running before start'",
    "poststart": "echo 'Running after start'",
    "test": "mocha",
    "pretest": "npm run lint",
    "posttest": "echo 'Tests completed!'",
    "build": "webpack",
    "prebuild": "echo 'Preparing for build'",
    "postbuild": "echo 'Build completed!'",
    "lint": "eslint ."
  }
}
```

**Command:** `npm run start` 

**Order of execution:**

1. `prestart`  runs first: `echo 'Running before start'` 
2. `start`  runs: `node index.js` 
3. `poststart`  runs after `start`  completes: `echo 'Running after start'` 




### Combining Multiple Hooks
You can combine multiple hooks to create a chain of scripts that run in a specific order:

```json
{
  "scripts": {
    "build": "webpack",
    "prebuild": "npm run clean",
    "postbuild": "npm run minify",
    "clean": "rimraf dist",
    "minify": "uglifyjs dist/bundle.js -o dist/bundle.min.js"
  }
}
```
`npm run build`  will execute the following in order:

1. `prebuild` : `npm run clean` 
2. `build` : `webpack` 
3. `postbuild` : `npm run minify` 
Using `pre` and `post` hooks effectively can help automate repetitive tasks and ensure your development workflow is smooth and consistent.




## Tree shaking 
- Tree shaking is a technique used in JavaScript bundlers (like Webpack, Rollup, and Parcel) to eliminate dead code from the final bundle. 
- It helps reduce the size of the bundle by removing unused exports from ES6 modules.
-  This process improves performance by reducing the amount of code that needs to be downloaded and executed by the browser.


### How Tree Shaking Works
- Tree shaking relies on the static structure of ES6 module syntax, such as `import` and `export`. 
- It analyzes the dependency graph of your project to determine which pieces of code are not being used and can be safely removed.


### Basic Example
Consider the following module, `math.js`:

```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;
```
If you import only the `add` function in your main file:

```javascript
// index.js
import { add } from './math';

console.log(add(2, 3));
```
Tree shaking will eliminate the `subtract`, `multiply`, and `divide` functions from the final bundle, since they are not used.



### Enabling Tree Shaking in Webpack
#### Webpack
To enable tree shaking in Webpack:

1. **Use ES6 Modules:** Ensure that your code uses ES6 module syntax (`import` /`export` ).
2. **Production Mode:** Tree shaking is enabled by default in production mode.
**webpack.config.js:**

```javascript
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  optimization: {
    usedExports: true, // This option enables tree shaking
  }
};
```


### Common Pitfalls and Tips
- **ES6 Modules:** Tree shaking only works with ES6 modules. Ensure your dependencies and your own code use `import`  and `export`  syntax.
- **Side Effects:** Be careful with modules that have side effects. By default, tree shaking might remove them. You can mark files or specific exports as having side effects.
**package.json:**

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "sideEffects": [
    "./src/some-file-with-side-effects.js"
  ],
  "main": "dist/bundle.js",
  "module": "dist/bundle.esm.js"
}
```
- **Named vs. Default Exports:** Tree shaking works best with named exports. Default exports can sometimes be trickier for the bundler to tree shake properly.
- **Babel Configuration:** If you are using Babel, make sure not to convert ES6 modules to CommonJS in your Babel configuration, as this will prevent tree shaking.
**.babelrc:**

```json
{
  "presets": [
    ["@babel/preset-env", {
      "modules": false
    }]
  ]
}
```


**To verify that tree shaking is working, you can analyze your bundle. Tools like Webpack Bundle Analyzer.**




## Linting:
- Linting is the process of analyzing code for potential errors, stylistic issues, and code quality problems. 
- A linter is a tool that performs this analysis, providing feedback to developers to help them write cleaner, more consistent, and error-free code.
### Benefits of Linting
1. **Error Detection:**
    - Detects syntax errors, runtime errors, and potential bugs early in the development process.
2. **Code Consistency:**
    - Enforces coding standards and style guidelines across a project, making the codebase more readable and maintainable.
3. **Improved Code Quality:**
    - Encourages best practices and helps avoid common pitfalls and anti-patterns.
4. **Ease of Maintenance:**
    - Consistent and clean code is easier to understand, review, and maintain, reducing technical debt over time.


**Common Linting Tools**

- ESLint (javascript / Typescript)
- Stylelint (Css/sass)
- HTMLHint(html)


```
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "semi": ["error", "always"]
  }
}
```







