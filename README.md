#Equalyzr.js

Equalyzr.js is a script made from plain Javascript to simply equalize heights between certain elements

##Why use it?

Equalyzr is plain javascript and doesnt interfere with any other scripts so it can work alongside them because of equalyzr's modular system.
  - throttled so it doesnt slow performance down too much.

##How to use it

>Add The script
>Initialize it with `var equalyze = new Equalyzr(elementIdentifier)
>Identifier can be an element type, a class, a id or a data attribute

Example:

```
<div class="demo-element">
  <p>test</p>
  <p>test1</p>
  <p>test2</p>
  <p>test3</p>
</div>

<div class="demo-element">
  <p>test</p>
  <p>test3</p>
</div>

<script src="/equalyzr.js"></script>
<script> var demo = new Equalyzr('.demo-element'); </script>
```
This will equalize the two divs to be set to the maximum height


Example 2:

```
<div class="demo-element">
  <p>test</p>
  <p>test1</p>
  <p>test2</p>
  <p>test3</p>
</div>

<div class="demo2-element">
  <p>test</p>
  <p>test3</p>
</div>

<script src="/equalyzr.js"></script>
<script>
  var demo1 = new Equalyzr('.demo-element');
  var demo2 = new Equalyzr('.demo2-element');
</script>
```

These would not interact as their attributes are different
