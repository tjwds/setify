# Setify: make Arrays set-like

ES2024 introduced [some really great Set methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#set_composition). These work with [any Set-like object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects) — including Maps out of the box.

Notably, though, Arrays aren't Set-like. Most developers would compose a new Set object from an array they'd like to compare with another Set. Turns out, you don't _actually_ need this overhead, though; we just need to expose the existing Array API in a different way, which is what this library does.

For example:

```js
const foo = [1, 2, 3];
const bar = new Set([1, 2, 4]);

console.log(bar.union(setify(foo))); // Set(4) { 1, 2, 4, 3 }
```