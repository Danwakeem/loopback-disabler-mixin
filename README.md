# Loopback Disabler Mixin

[![Build Status](https://travis-ci.com/Danwakeem/loopback-disabler-mixin.svg?branch=master)](https://travis-ci.com/Danwakeem/loopback-disabler-mixin)
[![Coverage Status](https://coveralls.io/repos/github/Danwakeem/loopback-disabler-mixin/badge.svg?branch=master)](https://coveralls.io/github/Danwakeem/loopback-disabler-mixin?branch=master)

This loopback middleware is an easyish way to disable common remote methods

## Useage

## Install
`npm i loopback-disabler-mixin --save`

## Integrate with Loopback
Include the mixin in your `model-config.json` file

```json
{
  "mixins": [
    "../node_modules/loopback-disabler-mixin"
  ]
}
```

Then add the mix in to your `model.json` file
```json
"mixins": {
  "Disabler": {
    "type": "relation | model | limited",
    "relation": "RELATION NAME"
  }
},
```
