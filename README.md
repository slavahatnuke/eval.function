## eval.function

Eval function in browser

### JS
```javascript
    const evalFunction = require('eval.function');

    const fn = await evalFunction(`
        function(name) { return 'hello ' + name }
    `);

    console.log(fn('user')) // hello user
```
### HTML

```html
<script src="https://unpkg.com/eval.function/eval.function.js"></script>
<script>
  (async () => {
    const evalFunction = window.EvalFunction;

    const fn = await evalFunction(`
        function(name) { return 'hello ' + name }
    `);

    console.log(fn('user')) // hello user
  })();
</script>
```

