module.exports = {
  root: true,
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true,
    "react-native/react-native": true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    /* "plugin:prettier/recommended",
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard", */
  ],
  ignorePatterns: ["node_modules/"],
  globals: {},
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },

  plugins: ["react", "import", "react-hooks", "react-native"],
  rules: {},
  settings: {
    react: {
      createClass: "createReactClass", // Regex for Component Factory to use,
                                         // default to "createReactClass"
      pragma: "React",  // Pragma to use, default to "React"
      fragment: "React.Fragment",  // Fragment to use, default to "React.Fragment"
      version: "detect", // React version. "detect" automatically picks the version you have installed.
                           // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                           // default to latest and warns if missing
                           // It will default to "detect" in the future
      flowVersion: "0.53" // Flow version
    },
    propWrapperFunctions: [
        // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
        "forbidExtraProps",
        {property: "freeze", "object": "Object"},
        {property: "myFavoriteWrapper"}
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      {name: "Link", linkAttribute: "to"}
    ]
  },
  'react-native/style-sheet-object-names': ['EStyleSheet', 'OtherStyleSheet', 'PStyleSheet']
};
