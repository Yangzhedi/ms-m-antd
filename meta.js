module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A webpack project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "frontFrame": {
      "type": "list",
      "message": "Select FrontFrame?",
      "choices": [
        {
          "name": "Vue(http://cn.vuejs.org/)",
          "value": 'vue',
          "short": "Vue"
        },
        {
          "name": "AngularJS(https://angularjs.org/)",
          "value": 'angularJS',
          "short": 'AngularJS'
        }
      ]
    },
    "jQuery": {
      "type": "confirm",
      "message": "Use jQuery?"
    },
    "lint": {
      "type": "confirm",
      "message": "Use ESLint to lint your code?"
    },
    // "lintConfig": {
    //   "when": "lint",
    //   "type": "list",
    //   "message": "Pick an ESLint preset",
    //   "choices": [
    //     {
    //       "name": "Standard (https://github.com/feross/standard)",
    //       "value": "standard",
    //       "short": "Standard"
    //     },
    //     {
    //       "name": "AirBNB (https://github.com/airbnb/javascript)",
    //       "value": "airbnb",
    //       "short": "AirBNB"
    //     },
    //     {
    //       "name": "none (configure it yourself)",
    //       "value": "none",
    //       "short": "none"
    //     }
    //   ]
    // }
  },
  "filters": {
    ".eslintrc.js": "lint",
    ".eslintignore": "lint",
    "build/vue.cfg.js": "frontFrame == 'vue'"
  },
  "completeMessage": "To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev"
};