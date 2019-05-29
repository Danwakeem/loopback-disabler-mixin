# Loopback Disabler Mixin
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
