var Virama =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/virama.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/virama.js":
/*!***********************!*\
  !*** ./lib/virama.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst testerID = 'fontTester';\r\nlet browserFont;\r\nconst addTestDivToBody = () => {\r\n    const newDiv = document.createElement('div');\r\n    newDiv.style.cssText =\r\n        'position:absolute;width:100%;opacity:0.3;z-index:-10; top: -50px; height: 20px; display: none';\r\n    newDiv.id = testerID;\r\n    const spanCss = 'font-family: initial; margin: 0; padding: 0; font-size: 20px; line-height: 20px; height: 20px;';\r\n    const testSpans = '<span style=\"' +\r\n        spanCss +\r\n        '\" id=\"one_ka\">&#x1000;</span>\\n' +\r\n        '<span style=\"' +\r\n        spanCss +\r\n        '\" id=\"two_ka\">&#x1000;&#x1039;&#x1000;</span>\\n';\r\n    newDiv.innerHTML = testSpans;\r\n    document.body.appendChild(newDiv);\r\n    return true;\r\n};\r\nconst detectBrowserFont = () => {\r\n    const testDiv = document.getElementById(testerID);\r\n    if (testDiv) {\r\n        testDiv.style.display = '';\r\n    }\r\n    const oneKa = document.getElementById('one_ka');\r\n    const twoKa = document.getElementById('two_ka');\r\n    if (oneKa && twoKa) {\r\n        browserFont = oneKa.offsetWidth * 1.5 > twoKa.offsetWidth ? 'Unicode' : 'Zawgyi';\r\n        if (testDiv) {\r\n            testDiv.style.display = 'none';\r\n        }\r\n    }\r\n    return browserFont;\r\n};\r\nconst init = () => __awaiter(this, void 0, void 0, function* () {\r\n    if (document.getElementById(testerID)) {\r\n        browserFont = detectBrowserFont();\r\n    }\r\n    else {\r\n        yield addTestDivToBody();\r\n        browserFont = detectBrowserFont();\r\n    }\r\n});\r\ninit();\r\nconst replaceWithRule = (rule, output) => {\r\n    const maxLoop = rule.length;\r\n    for (let i = 0; i < maxLoop; i++) {\r\n        const data = rule[i];\r\n        const from = data.from;\r\n        const to = data.to;\r\n        const fromRegex = new RegExp(from, 'g');\r\n        output = output.replace(fromRegex, to);\r\n    }\r\n    return output;\r\n};\r\nexports.getBrowserFont = () => {\r\n    return browserFont;\r\n};\r\nexports.isMyanmarText = (text) => {\r\n    const MyanmarReg = new RegExp('[\\u1000-\\u1021]');\r\n    return MyanmarReg.test(text) ? true : false;\r\n};\r\nexports.uni2zg = (output) => {\r\n    if (!exports.isMyanmarText(output)) {\r\n        return output;\r\n    }\r\n    const rule = [\r\n        {\r\n            from: '\\u1004\\u103a\\u1039',\r\n            to: '\\u1064',\r\n        },\r\n        {\r\n            from: '\\u1039\\u1010\\u103d',\r\n            to: '\\u1096',\r\n        },\r\n        {\r\n            from: '\\u102b\\u103a',\r\n            to: '\\u105a',\r\n        },\r\n        {\r\n            from: '\\u100b\\u1039\\u100c',\r\n            to: '\\u1092',\r\n        },\r\n        {\r\n            from: '\\u102d\\u1036',\r\n            to: '\\u108e',\r\n        },\r\n        {\r\n            from: '\\u104e\\u1004\\u103a\\u1038',\r\n            to: '\\u104e',\r\n        },\r\n        {\r\n            from: '[\\u1025\\u1009](?=[\\u1039\\u102f\\u1030])',\r\n            to: '\\u106a',\r\n        },\r\n        {\r\n            from: '[\\u1025\\u1009](?=[\\u1037]?[\\u103a])',\r\n            to: '\\u1025',\r\n        },\r\n        {\r\n            from: '\\u100a(?=[\\u1039\\u103d])',\r\n            to: '\\u106b',\r\n        },\r\n        {\r\n            from: '(\\u1039[\\u1000-\\u1021])(\\u102D){0,1}\\u102f',\r\n            to: '$1$2\\u1033',\r\n        },\r\n        {\r\n            from: '(\\u1039[\\u1000-\\u1021])\\u1030',\r\n            to: '$1\\u1034',\r\n        },\r\n        {\r\n            from: '\\u1014(?=[\\u102d\\u102e\\u103a]?[\\u102f\\u1030\\u103d\\u103e\\u1039])',\r\n            to: '\\u108f',\r\n        },\r\n        {\r\n            from: '\\u1014\\u103c',\r\n            to: '\\u108f\\u103c',\r\n        },\r\n        {\r\n            from: '\\u1039\\u1000',\r\n            to: '\\u1060',\r\n        },\r\n        {\r\n            from: '\\u1039\\u1001',\r\n            to: '\\u1061',\r\n        },\r\n        {\r\n            from: '\\u1039\\u1002',\r\n            to: '\\u1062',\r\n        },\r\n        {\r\n            from: '\\u1039\\u1003',\r\n            to: '\\u1063',\r\n        },\r\n        {\r\n            from: '\\u1039\\u1005',\r\n            to: '\\u1065',\r\n        },\r\n        {\r\n            from: '\\u1039\\u1006',\r\n            to: '\\u1066',\r\n        },\r\n        {\r\n            from: '\\u1039\\u1007',\r\n            to: '\\u1068',\r\n        },\r\n        {\r\n            from: '\\u1039\\u1008',\r\n            to: '\\u1069',\r\n        },\r\n        {\r\n            from: '\\u1039\\u100b',\r\n            to: '\\u106c',\r\n        },\r\n        {\r\n            from: '\\u1039\\u100c',\r\n            to: '\\u106d',\r\n        },\r\n        {\r\n            from: '\\u100d\\u1039\\u100d',\r\n            to: '\\u106e',\r\n        },\r\n        {\r\n            from: '\\u100e\\u1039\\u100d',\r\n            to: '\\u106f',\r\n        },\r\n        {\r\n            from: '\\u1039\\u100f',\r\n            to: '\\u1070',\r\n        },\r\n        {\r\n            from: '\\u1039\\u1010',\r\n            to: '\\u1071',\r\n        },\r\n        {\r\n            from: '\\u1039\\u1011',\r\n            to: '\\u1073',\r\n        },\r\n        {\r\n            from: '\\u1039\\u1012',\r\n            to: '\\u1075',\r\n        },\r\n        {\r\n            from: '\\u1039\\u1013',\r\n            to: '\\u1076',\r\n        },\r\n        {\r\n            from: '\\u1039[\\u1014\\u108f]',\r\n            to: '\\u1077',\r\n        },\r\n        {\r\n            from: '\\u1039\\u1015',\r\n            to: '\\u1078',\r\n        },\r\n        {\r\n            from: '\\u1039\\u1016',\r\n            to: '\\u1079',\r\n        },\r\n        {\r\n            from: '\\u1039\\u1017',\r\n            to: '\\u107a',\r\n        },\r\n        {\r\n            from: '\\u1039\\u1018',\r\n            to: '\\u107b',\r\n        },\r\n        {\r\n            from: '\\u1039\\u1019',\r\n            to: '\\u107c',\r\n        },\r\n        {\r\n            from: '\\u1039\\u101c',\r\n            to: '\\u1085',\r\n        },\r\n        {\r\n            from: '\\u103f',\r\n            to: '\\u1086',\r\n        },\r\n        {\r\n            from: '\\u103d\\u103e',\r\n            to: '\\u108a',\r\n        },\r\n        {\r\n            from: '(\\u1064)([\\u1000-\\u1021])([\\u103b\\u103c]?)\\u102d',\r\n            to: '$2$3\\u108b',\r\n        },\r\n        {\r\n            from: '(\\u1064)([\\u1000-\\u1021])([\\u103b\\u103c]?)\\u102e',\r\n            to: '$2$3\\u108c',\r\n        },\r\n        {\r\n            from: '(\\u1064)([\\u1000-\\u1021])([\\u103b\\u103c]?)\\u1036',\r\n            to: '$2$3\\u108d',\r\n        },\r\n        {\r\n            from: '(\\u1064)([\\u1000-\\u1021])([\\u103b\\u103c]?)([\\u1031]?)',\r\n            to: '$2$3$4$1',\r\n        },\r\n        {\r\n            from: '\\u101b(?=([\\u102d\\u102e]?)[\\u102f\\u1030\\u103d\\u108a])',\r\n            to: '\\u1090',\r\n        },\r\n        {\r\n            from: '\\u100f\\u1039\\u100d',\r\n            to: '\\u1091',\r\n        },\r\n        {\r\n            from: '\\u100b\\u1039\\u100b',\r\n            to: '\\u1097',\r\n        },\r\n        {\r\n            from: '([\\u1000-\\u1021\\u108f\\u1029\\u1090])([\\u1060-\\u1069\\u106c\\u106d\\u1070-\\u107c\\u1085\\u108a])?([\\u103b-\\u103e]*)?\\u1031',\r\n            to: '\\u1031$1$2$3',\r\n        },\r\n        {\r\n            from: '\\u103c\\u103e',\r\n            to: '\\u103c\\u1087',\r\n        },\r\n        {\r\n            from: '([\\u1000-\\u1021\\u108f\\u1029])([\\u1060-\\u1069\\u106c\\u106d\\u1070-\\u107c\\u1085])?(\\u103c)',\r\n            to: '$3$1$2',\r\n        },\r\n        {\r\n            from: '\\u103a',\r\n            to: '\\u1039',\r\n        },\r\n        {\r\n            from: '\\u103b',\r\n            to: '\\u103a',\r\n        },\r\n        {\r\n            from: '\\u103c',\r\n            to: '\\u103b',\r\n        },\r\n        {\r\n            from: '\\u103d',\r\n            to: '\\u103c',\r\n        },\r\n        {\r\n            from: '\\u103e',\r\n            to: '\\u103d',\r\n        },\r\n        {\r\n            from: '([^\\u103a\\u100a])\\u103d([\\u102d\\u102e]?)\\u102f',\r\n            to: '$1\\u1088$2',\r\n        },\r\n        {\r\n            from: '([\\u101b\\u103a\\u103c\\u108a\\u1088\\u1090])([\\u1030\\u103d])?([\\u1032\\u1036\\u1039\\u102d\\u102e\\u108b\\u108c\\u108d\\u108e]?)(\\u102f)?\\u1037',\r\n            to: '$1$2$3$4\\u1095',\r\n        },\r\n        {\r\n            from: '([\\u102f\\u1014\\u1030\\u103d])([\\u1032\\u1036\\u1039\\u102d\\u102e\\u108b\\u108c\\u108d\\u108e]?)\\u1037',\r\n            to: '$1$2\\u1094',\r\n        },\r\n        {\r\n            from: '([\\u103b])([\\u1000-\\u1021])([\\u1087]?)([\\u1036\\u102d\\u102e\\u108b\\u108c\\u108d\\u108e]?)\\u102f',\r\n            to: '$1$2$3$4\\u1033',\r\n        },\r\n        {\r\n            from: '([\\u103b])([\\u1000-\\u1021])([\\u1087]?)([\\u1036\\u102d\\u102e\\u108b\\u108c\\u108d\\u108e]?)\\u1030',\r\n            to: '$1$2$3$4\\u1034',\r\n        },\r\n        {\r\n            from: '([\\u103a\\u103c\\u100a\\u1020\\u1025])([\\u103d]?)([\\u1036\\u102d\\u102e\\u108b\\u108c\\u108d\\u108e]?)\\u102f',\r\n            to: '$1$2$3\\u1033',\r\n        },\r\n        {\r\n            from: '([\\u103a\\u103c\\u100a\\u101b])(\\u103d?)([\\u1036\\u102d\\u102e\\u108b\\u108c\\u108d\\u108e]?)\\u1030',\r\n            to: '$1$2$3\\u1034',\r\n        },\r\n        {\r\n            from: '\\u100a\\u103d',\r\n            to: '\\u100a\\u1087',\r\n        },\r\n        {\r\n            from: '\\u103d\\u1030',\r\n            to: '\\u1089',\r\n        },\r\n        {\r\n            from: '\\u103b([\\u1000\\u1003\\u1006\\u100f\\u1010\\u1011\\u1018\\u101a\\u101c\\u101a\\u101e\\u101f])',\r\n            to: '\\u107e$1',\r\n        },\r\n        {\r\n            from: '\\u107e([\\u1000\\u1003\\u1006\\u100f\\u1010\\u1011\\u1018\\u101a\\u101c\\u101a\\u101e\\u101f])([\\u103c\\u108a])([\\u1032\\u1036\\u102d\\u102e\\u108b\\u108c\\u108d\\u108e])',\r\n            to: '\\u1084$1$2$3',\r\n        },\r\n        {\r\n            from: '\\u107e([\\u1000\\u1003\\u1006\\u100f\\u1010\\u1011\\u1018\\u101a\\u101c\\u101a\\u101e\\u101f])([\\u103c\\u108a])',\r\n            to: '\\u1082$1$2',\r\n        },\r\n        {\r\n            from: '\\u107e([\\u1000\\u1003\\u1006\\u100f\\u1010\\u1011\\u1018\\u101a\\u101c\\u101a\\u101e\\u101f])([\\u1033\\u1034]?)([\\u1032\\u1036\\u102d\\u102e\\u108b\\u108c\\u108d\\u108e])',\r\n            to: '\\u1080$1$2$3',\r\n        },\r\n        {\r\n            from: '\\u103b([\\u1000-\\u1021])([\\u103c\\u108a])([\\u1032\\u1036\\u102d\\u102e\\u108b\\u108c\\u108d\\u108e])',\r\n            to: '\\u1083$1$2$3',\r\n        },\r\n        {\r\n            from: '\\u103b([\\u1000-\\u1021])([\\u103c\\u108a])',\r\n            to: '\\u1081$1$2',\r\n        },\r\n        {\r\n            from: '\\u103b([\\u1000-\\u1021])([\\u1033\\u1034]?)([\\u1032\\u1036\\u102d\\u102e\\u108b\\u108c\\u108d\\u108e])',\r\n            to: '\\u107f$1$2$3',\r\n        },\r\n        {\r\n            from: '\\u103a\\u103d',\r\n            to: '\\u103d\\u103a',\r\n        },\r\n        {\r\n            from: '\\u103a([\\u103c\\u108a])',\r\n            to: '$1\\u107d',\r\n        },\r\n        {\r\n            from: '([\\u1033\\u1034])(\\u1036?)\\u1094',\r\n            to: '$1$2\\u1095',\r\n        },\r\n        {\r\n            from: '\\u108F\\u1071',\r\n            to: '\\u108F\\u1072',\r\n        },\r\n        {\r\n            from: '([\\u1000-\\u1021])([\\u107B\\u1066])\\u102C',\r\n            to: '$1\\u102C$2',\r\n        },\r\n        {\r\n            from: '\\u102C([\\u107B\\u1066])\\u1037',\r\n            to: '\\u102C$1\\u1094',\r\n        },\r\n    ];\r\n    return replaceWithRule(rule, output);\r\n};\r\nexports.zg2uni = (output) => {\r\n    if (!exports.isMyanmarText(output)) {\r\n        return output;\r\n    }\r\n    const rule = [\r\n        {\r\n            from: '\\u102f\\u102f',\r\n            to: '\\u102f',\r\n        },\r\n        {\r\n            from: '\\u200B',\r\n            to: '',\r\n        },\r\n        {\r\n            from: '(\\u103d|\\u1087)',\r\n            to: '\\u103e',\r\n        },\r\n        {\r\n            from: '\\u103c',\r\n            to: '\\u103d',\r\n        },\r\n        {\r\n            from: '(\\u103b|\\u107e|\\u107f|\\u1080|\\u1081|\\u1082|\\u1083|\\u1084)',\r\n            to: '\\u103c',\r\n        },\r\n        {\r\n            from: '(\\u103a|\\u107d)',\r\n            to: '\\u103b',\r\n        },\r\n        {\r\n            from: '\\u1039',\r\n            to: '\\u103a',\r\n        },\r\n        {\r\n            from: '(\\u1066|\\u1067)',\r\n            to: '\\u1039\\u1006',\r\n        },\r\n        {\r\n            from: '\\u106a',\r\n            to: '\\u1009',\r\n        },\r\n        {\r\n            from: '\\u106b',\r\n            to: '\\u100a',\r\n        },\r\n        {\r\n            from: '\\u106c',\r\n            to: '\\u1039\\u100b',\r\n        },\r\n        {\r\n            from: '\\u106d',\r\n            to: '\\u1039\\u100c',\r\n        },\r\n        {\r\n            from: '\\u106e',\r\n            to: '\\u100d\\u1039\\u100d',\r\n        },\r\n        {\r\n            from: '\\u106f',\r\n            to: '\\u100d\\u1039\\u100e',\r\n        },\r\n        {\r\n            from: '\\u1070',\r\n            to: '\\u1039\\u100f',\r\n        },\r\n        {\r\n            from: '(\\u1071|\\u1072)',\r\n            to: '\\u1039\\u1010',\r\n        },\r\n        {\r\n            from: '\\u1060',\r\n            to: '\\u1039\\u1000',\r\n        },\r\n        {\r\n            from: '\\u1061',\r\n            to: '\\u1039\\u1001',\r\n        },\r\n        {\r\n            from: '\\u1062',\r\n            to: '\\u1039\\u1002',\r\n        },\r\n        {\r\n            from: '\\u1063',\r\n            to: '\\u1039\\u1003',\r\n        },\r\n        {\r\n            from: '\\u1065',\r\n            to: '\\u1039\\u1005',\r\n        },\r\n        {\r\n            from: '\\u1068',\r\n            to: '\\u1039\\u1007',\r\n        },\r\n        {\r\n            from: '\\u1069',\r\n            to: '\\u1039\\u1008',\r\n        },\r\n        {\r\n            from: '(\\u1073|\\u1074)',\r\n            to: '\\u1039\\u1011',\r\n        },\r\n        {\r\n            from: '\\u1075',\r\n            to: '\\u1039\\u1012',\r\n        },\r\n        {\r\n            from: '\\u1076',\r\n            to: '\\u1039\\u1013',\r\n        },\r\n        {\r\n            from: '\\u1077',\r\n            to: '\\u1039\\u1014',\r\n        },\r\n        {\r\n            from: '\\u1078',\r\n            to: '\\u1039\\u1015',\r\n        },\r\n        {\r\n            from: '\\u1079',\r\n            to: '\\u1039\\u1016',\r\n        },\r\n        {\r\n            from: '\\u107a',\r\n            to: '\\u1039\\u1017',\r\n        },\r\n        {\r\n            from: '\\u107c',\r\n            to: '\\u1039\\u1019',\r\n        },\r\n        {\r\n            from: '\\u1085',\r\n            to: '\\u1039\\u101c',\r\n        },\r\n        {\r\n            from: '\\u1033',\r\n            to: '\\u102f',\r\n        },\r\n        {\r\n            from: '\\u1034',\r\n            to: '\\u1030',\r\n        },\r\n        {\r\n            from: '\\u103f',\r\n            to: '\\u1030',\r\n        },\r\n        {\r\n            from: '\\u1086',\r\n            to: '\\u103f',\r\n        },\r\n        {\r\n            from: '\\u1036\\u1088',\r\n            to: '\\u1088\\u1036',\r\n        },\r\n        {\r\n            from: '\\u1088',\r\n            to: '\\u103e\\u102f',\r\n        },\r\n        {\r\n            from: '\\u1089',\r\n            to: '\\u103e\\u1030',\r\n        },\r\n        {\r\n            from: '\\u108a',\r\n            to: '\\u103d\\u103e',\r\n        },\r\n        {\r\n            from: '\\u103B\\u1064',\r\n            to: '\\u1064\\u103B',\r\n        },\r\n        {\r\n            from: '(\\u1031)?([\\u1000-\\u1021])\\u1064',\r\n            to: '\\u1004\\u103a\\u1039$1$2',\r\n        },\r\n        {\r\n            from: '(\\u1031)?([\\u1000-\\u1021])\\u108b',\r\n            to: '\\u1004\\u103a\\u1039$1$2\\u102d',\r\n        },\r\n        {\r\n            from: '(\\u1031)?([\\u1000-\\u1021])\\u108c',\r\n            to: '\\u1004\\u103a\\u1039$1$2\\u102e',\r\n        },\r\n        {\r\n            from: '(\\u1031)?([\\u1000-\\u1021])\\u108d',\r\n            to: '\\u1004\\u103a\\u1039$1$2\\u1036',\r\n        },\r\n        {\r\n            from: '\\u108e',\r\n            to: '\\u102d\\u1036',\r\n        },\r\n        {\r\n            from: '\\u108f',\r\n            to: '\\u1014',\r\n        },\r\n        {\r\n            from: '\\u1090',\r\n            to: '\\u101b',\r\n        },\r\n        {\r\n            from: '\\u1091',\r\n            to: '\\u100f\\u1039\\u100d',\r\n        },\r\n        {\r\n            from: '\\u1019\\u102c(\\u107b|\\u1093)',\r\n            to: '\\u1019\\u1039\\u1018\\u102c',\r\n        },\r\n        {\r\n            from: '(\\u107b|\\u1093)',\r\n            to: '\\u1039\\u1018',\r\n        },\r\n        {\r\n            from: '(\\u1094|\\u1095)',\r\n            to: '\\u1037',\r\n        },\r\n        {\r\n            from: '([\\u1000-\\u1021])\\u1037\\u1032',\r\n            to: '$1\\u1032\\u1037',\r\n        },\r\n        {\r\n            from: '\\u1096',\r\n            to: '\\u1039\\u1010\\u103d',\r\n        },\r\n        {\r\n            from: '\\u1097',\r\n            to: '\\u100b\\u1039\\u100b',\r\n        },\r\n        {\r\n            from: '\\u103c([\\u1000-\\u1021])([\\u1000-\\u1021])?',\r\n            to: '$1\\u103c$2',\r\n        },\r\n        {\r\n            from: '([\\u1000-\\u1021])\\u103c\\u103a',\r\n            to: '\\u103c$1\\u103a',\r\n        },\r\n        {\r\n            from: '\\u1047(?=[\\u102c-\\u1030\\u1032\\u1036-\\u1038\\u103d\\u1038])',\r\n            to: '\\u101b',\r\n        },\r\n        {\r\n            from: '\\u1031\\u1047',\r\n            to: '\\u1031\\u101b',\r\n        },\r\n        {\r\n            from: '\\u1040(\\u102e|\\u102f|\\u102d\\u102f|\\u1030|\\u1036|\\u103d|\\u103e)',\r\n            to: '\\u101d$1',\r\n        },\r\n        {\r\n            from: '([^\\u1040\\u1041\\u1042\\u1043\\u1044\\u1045\\u1046\\u1047\\u1048\\u1049])\\u1040\\u102b',\r\n            to: '$1\\u101d\\u102b',\r\n        },\r\n        {\r\n            from: '([\\u1040\\u1041\\u1042\\u1043\\u1044\\u1045\\u1046\\u1047\\u1048\\u1049])\\u1040\\u102b(?!\\u1038)',\r\n            to: '$1\\u101d\\u102b',\r\n        },\r\n        {\r\n            from: '^\\u1040(?=\\u102b)',\r\n            to: '\\u101d',\r\n        },\r\n        {\r\n            from: '\\u1040\\u102d(?!\\u0020?/)',\r\n            to: '\\u101d\\u102d',\r\n        },\r\n        {\r\n            from: '([^\\u1040-\\u1049])\\u1040([^\\u1040-\\u1049\\u0020]|[\\u104a\\u104b])',\r\n            to: '$1\\u101d$2',\r\n        },\r\n        {\r\n            from: '([^\\u1040-\\u1049])\\u1040(?=[\\\\f\\\\n\\\\r])',\r\n            to: '$1\\u101d',\r\n        },\r\n        {\r\n            from: '([^\\u1040-\\u1049])\\u1040$',\r\n            to: '$1\\u101d',\r\n        },\r\n        {\r\n            from: '\\u1031([\\u1000-\\u1021])(\\u103e)?(\\u103b)?',\r\n            to: '$1$2$3\\u1031',\r\n        },\r\n        {\r\n            from: '([\\u1000-\\u1021])\\u1031([\\u103b\\u103c\\u103d\\u103e]+)',\r\n            to: '$1$2\\u1031',\r\n        },\r\n        {\r\n            from: '\\u1032\\u103d',\r\n            to: '\\u103d\\u1032',\r\n        },\r\n        {\r\n            from: '([\\u102d\\u102e])\\u103b',\r\n            to: '\\u103b$1',\r\n        },\r\n        {\r\n            from: '\\u103d\\u103b',\r\n            to: '\\u103b\\u103d',\r\n        },\r\n        {\r\n            from: '\\u103a\\u1037',\r\n            to: '\\u1037\\u103a',\r\n        },\r\n        {\r\n            from: '\\u102f(\\u102d|\\u102e|\\u1036|\\u1037)\\u102f',\r\n            to: '\\u102f$1',\r\n        },\r\n        {\r\n            from: '(\\u102f|\\u1030)(\\u102d|\\u102e)',\r\n            to: '$2$1',\r\n        },\r\n        {\r\n            from: '(\\u103e)(\\u103b|\\u103c)',\r\n            to: '$2$1',\r\n        },\r\n        {\r\n            from: '\\u1025(?=[\\u1037]?[\\u103a\\u102c])',\r\n            to: '\\u1009',\r\n        },\r\n        {\r\n            from: '\\u1025\\u102e',\r\n            to: '\\u1026',\r\n        },\r\n        {\r\n            from: '\\u1005\\u103b',\r\n            to: '\\u1008',\r\n        },\r\n        {\r\n            from: '\\u1036(\\u102f|\\u1030)',\r\n            to: '$1\\u1036',\r\n        },\r\n        {\r\n            from: '\\u1031\\u1037\\u103e',\r\n            to: '\\u103e\\u1031\\u1037',\r\n        },\r\n        {\r\n            from: '\\u1031\\u103e\\u102c',\r\n            to: '\\u103e\\u1031\\u102c',\r\n        },\r\n        {\r\n            from: '\\u105a',\r\n            to: '\\u102b\\u103a',\r\n        },\r\n        {\r\n            from: '\\u1031\\u103b\\u103e',\r\n            to: '\\u103b\\u103e\\u1031',\r\n        },\r\n        {\r\n            from: '(\\u102d|\\u102e)(\\u103d|\\u103e)',\r\n            to: '$2$1',\r\n        },\r\n        {\r\n            from: '\\u102c\\u1039([\\u1000-\\u1021])',\r\n            to: '\\u1039$1\\u102c',\r\n        },\r\n        {\r\n            from: '\\u103c\\u1004\\u103a\\u1039([\\u1000-\\u1021])',\r\n            to: '\\u1004\\u103a\\u1039$1\\u103c',\r\n        },\r\n        {\r\n            from: '\\u1039\\u103c\\u103a\\u1039([\\u1000-\\u1021])',\r\n            to: '\\u103a\\u1039$1\\u103c',\r\n        },\r\n        {\r\n            from: '\\u103c\\u1039([\\u1000-\\u1021])',\r\n            to: '\\u1039$1\\u103c',\r\n        },\r\n        {\r\n            from: '\\u1036\\u1039([\\u1000-\\u1021])',\r\n            to: '\\u1039$1\\u1036',\r\n        },\r\n        {\r\n            from: '\\u1092',\r\n            to: '\\u100b\\u1039\\u100c',\r\n        },\r\n        {\r\n            from: '\\u104e',\r\n            to: '\\u104e\\u1004\\u103a\\u1038',\r\n        },\r\n        {\r\n            from: '\\u1040(\\u102b|\\u102c|\\u1036)',\r\n            to: '\\u101d$1',\r\n        },\r\n        {\r\n            from: '\\u1025\\u1039',\r\n            to: '\\u1009\\u1039',\r\n        },\r\n        {\r\n            from: '([\\u1000-\\u1021])\\u103c\\u1031\\u103d',\r\n            to: '$1\\u103c\\u103d\\u1031',\r\n        },\r\n        {\r\n            from: '([\\u1000-\\u1021])\\u103b\\u1031\\u103d(\\u103e)?',\r\n            to: '$1\\u103b\\u103d$2\\u1031',\r\n        },\r\n        {\r\n            from: '([\\u1000-\\u1021])\\u103d\\u1031\\u103b',\r\n            to: '$1\\u103b\\u103d\\u1031',\r\n        },\r\n        {\r\n            from: '([\\u1000-\\u1021])\\u1031(\\u1039[\\u1000-\\u1021])',\r\n            to: '$1$2\\u1031',\r\n        },\r\n        {\r\n            from: '\\u1038\\u103a',\r\n            to: '\\u103a\\u1038',\r\n        },\r\n        {\r\n            from: '\\u102d\\u103a|\\u103a\\u102d',\r\n            to: '\\u102d',\r\n        },\r\n        {\r\n            from: '\\u102d\\u102f\\u103a',\r\n            to: '\\u102d\\u102f',\r\n        },\r\n        {\r\n            from: '\\u0020\\u1037',\r\n            to: '\\u1037',\r\n        },\r\n        {\r\n            from: '\\u1037\\u1036',\r\n            to: '\\u1036\\u1037',\r\n        },\r\n        {\r\n            from: ' \\u1037',\r\n            to: '\\u1037',\r\n        },\r\n        {\r\n            from: '[\\u102d]+',\r\n            to: '\\u102d',\r\n        },\r\n        {\r\n            from: '[\\u103a]+',\r\n            to: '\\u103a',\r\n        },\r\n        {\r\n            from: '[\\u103d]+',\r\n            to: '\\u103d',\r\n        },\r\n        {\r\n            from: '[\\u1037]+',\r\n            to: '\\u1037',\r\n        },\r\n        {\r\n            from: '[\\u102e]+',\r\n            to: '\\u102e',\r\n        },\r\n        {\r\n            from: '\\u102d\\u102e|\\u102e\\u102d',\r\n            to: '\\u102e',\r\n        },\r\n        {\r\n            from: '\\u102f\\u102d',\r\n            to: '\\u102d\\u102f',\r\n        },\r\n        {\r\n            from: '\\u1037\\u1037',\r\n            to: '\\u1037',\r\n        },\r\n        {\r\n            from: '\\u1032\\u1032',\r\n            to: '\\u1032',\r\n        },\r\n        {\r\n            from: '\\u1044\\u1004\\u103a\\u1038',\r\n            to: '\\u104E\\u1004\\u103a\\u1038',\r\n        },\r\n        {\r\n            from: '([\\u102d\\u102e])\\u1039([\\u1000-\\u1021])',\r\n            to: '\\u1039$2$1',\r\n        },\r\n        {\r\n            from: '\\u1036\\u103d',\r\n            to: '\\u103d\\u1036',\r\n        },\r\n    ];\r\n    return replaceWithRule(rule, output);\r\n};\r\nconst uniNormalize = (output) => {\r\n    if (!exports.isMyanmarText(output)) {\r\n        return output;\r\n    }\r\n    const rule = [\r\n        {\r\n            from: '\\u1025\\u1013',\r\n            to: '\\u1026',\r\n        },\r\n        {\r\n            from: '\\u101e\\u103c',\r\n            to: '\\u1029',\r\n        },\r\n        {\r\n            from: '\\u101e\\u103c\\u1031\\u102c\\u103A',\r\n            to: '\\u102A',\r\n        },\r\n        {\r\n            from: '\\u102F\\u102D',\r\n            to: '\\u102D\\u102F',\r\n        },\r\n    ];\r\n    return replaceWithRule(rule, output);\r\n};\r\nexports.isUnicodeUser = () => {\r\n    return exports.getBrowserFont() === 'Unicode';\r\n};\r\nexports.textToWrite = (output) => {\r\n    return exports.isUnicodeUser() ? uniNormalize(output) : uniNormalize(exports.zg2uni(output));\r\n};\r\nexports.textToRead = (output) => {\r\n    return exports.isUnicodeUser() ? output : exports.uni2zg(output);\r\n};\r\nexports.Virama = {\r\n    getBrowserFont: exports.getBrowserFont,\r\n    init,\r\n    isMyanmarText: exports.isMyanmarText,\r\n    isUnicodeUser: exports.isUnicodeUser,\r\n    textToRead: exports.textToRead,\r\n    textToWrite: exports.textToWrite,\r\n    uni2zg: exports.uni2zg,\r\n    zg2uni: exports.zg2uni,\r\n};\r\n\n\n//# sourceURL=webpack://Virama/./lib/virama.js?");

/***/ })

/******/ });