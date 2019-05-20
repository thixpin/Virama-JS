# Virama-JS (ဝိရာမ)

![Logo](https://www.mmunicode.org/wp-content/uploads/2017/07/mua_small.png)

[![Build Status](https://travis-ci.org/thixpin/Virama-JS.svg?branch=master)](https://travis-ci.org/thixpin/Virama-JS)
[![NPM version](https://img.shields.io/npm/v/virama-js.svg)](https://www.npmjs.com/package/virama-js)
[![NPM downloads](https://img.shields.io/npm/dm/virama-js.svg)](https://www.npmjs.com/package/virama-js)
[![DEPENDENCIES](https://david-dm.org/thixpin/virama-js/status.svg)](https://david-dm.org/thixpin/virama-js)
[![devDependencies](https://david-dm.org/thixpin/virama-js/dev-status.svg)](https://david-dm.org/thixpin/virama-js?type=dev)



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
<script src="https://unpkg.com/virama-js@1.0.3/dist/virama.min.js"></script>
```

## Usage

```node

var Virama = require("virama-js");



Virama.write("ပြည်ထောင်စုဖောင့်");
// Output4ZawgyiUser: ပွညျထောငျစုဖောငျ့ 
// Output4UniUser: ပြည်ထောင်စုဖောင့်

Virama.write("ျပည္ေထာင္စုေဖာင့္");
// Output4ZawgyiUser: ပြည်ထောင်စုဖောင့်
// Output4UniUser: ျပည္ေထာင္စုေဖာင့္

Virama.read("ပြည်ထောင်စုဖောင့်");
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

## Contributing

1. Fork it ( https://github.com/thixpin/Virama-JS )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## License

MIT
