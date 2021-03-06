# Virama-JS (ဝိရာမ)

![Logo](https://www.mmunicode.org/wp-content/uploads/2017/07/mua_small.png)


[![NPM version](https://img.shields.io/npm/v/virama-js.svg)](https://www.npmjs.com/package/virama-js)
[![NPM downloads](https://img.shields.io/npm/dt/virama-js.svg)](https://npm-stat.com/charts.html?package=virama-js)
[![DEPENDENCIES](https://david-dm.org/thixpin/virama-js/status.svg)](https://david-dm.org/thixpin/virama-js)
[![Build Status](https://scrutinizer-ci.com/g/thixpin/Virama-JS/badges/build.png?b=master)](https://scrutinizer-ci.com/g/thixpin/Virama-JS/build-status/master)
[![Scrutinizer Code Quality](https://img.shields.io/scrutinizer/quality/g/thixpin/Virama-JS.svg)](https://scrutinizer-ci.com/g/thixpin/Virama-JS/?branch=master)
[![Coverage](https://codecov.io/gh/thixpin/Virama-JS/branch/master/graphs/badge.svg)](https://codecov.io/gh/thixpin/Virama-JS)


**Myanmar font (browser default font) detector and Zawgyi <=> Unicode Converter for nodejs.**

## About

Converter functions are come from [Rabbit-Converter](https://github.com/Rabbit-Converter/Rabbit-Node).


## Installation

Install using npm:

```node
npm install virama-js --save
```

Using CDN:

```html
<script src="https://unpkg.com/virama-js@1.0.6/dist/virama.min.js"></script>
```

## Usage

```node

var Virama = require("virama-js");



Virama.textToWrite("ပြည်ထောင်စုဖောင့်");
// Output4ZawgyiUser: ပွညျထောငျစုဖောငျ့ 
// Output4UniUser: ပြည်ထောင်စုဖောင့်

Virama.textToWrite("ျပည္ေထာင္စုေဖာင့္");
// Output4ZawgyiUser: ပြည်ထောင်စုဖောင့်
// Output4UniUser: ျပည္ေထာင္စုေဖာင့္

Virama.textToRead("ပြည်ထောင်စုဖောင့်");
// Output4ZawgyiUser: ျပည္ေထာင္စုေဖာင့္
// Output4UniUser: ပြည်ထောင်စုဖောင့်

Virama.zg2uni("ျပည္ေထာင္စုေဖာင့္");
// Output: ပြည်ထောင်စုဖောင့်

Virama.uni2zg("ပြည်ထောင်စုဖောင့်");
// Output: ျပည္ေထာင္စုေဖာင့္

Virama.getBrowserFont();
// Output4ZawgyiUser: zawgyi
// Output4UniUser: uni

Virama.isUnicodeUser();
// Output4ZawgyiUser: false
// Output4UniUser: true

```


## Change Log

### v1.0.6

1. Update uni2zg rule for converter

### v1.0.4

1. used `typescript`
2. changed   `Virama.`write`()` to `Virama.`textToWrite`()`
3. changed   `Virama.`read`()` to `Virama.`textToRead`()`


## Contributing

1. Fork it ( https://github.com/thixpin/Virama-JS )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## License

MIT
