#Equalyzr.js

Equalyzr.js is a script made from plain Javascript to simply equalize heights between certain elements

##Why use it?

Equalyzr is plain javascript and doesnt interfere with any other scripts so it can work alongside them because of equalyzr's modular system.
  - throttled so it doesnt slow performance down too much.

##How to use it

>Simply put a data attribute called equalyzr and make it equal an identifier
>Add The script
>Initialize it

Example:

```<div equalyzr="test">
  <p>test</p>
  <p>test1</p>
  <p>test2</p>
  <p>test3</p>
</div>

<div equalyzr="test">
  <p>test</p>
  <p>test3</p>
</div>

<script src="/equalyzr.js"></script>
<script> equalyzr.init(); </script>
```
This will equalize the two divs to be set to the maximum height


Example 2:

```<div equalyzr="test">
  <p>test</p>
  <p>test1</p>
  <p>test2</p>
  <p>test3</p>
</div>

<div equalyzr="anotherDiv">
  <p>test</p>
  <p>test3</p>
</div>

<script src="/equalyzr.js"></script>
<script> equalyzr.init(); </script>
```

These would not interact as their attributes are different


##Methods

### Main Method

`equalyzr.init()` Initializes the script to equalyze height.

### Other Available Methods

`equalyzr.query(selector)` returns an array of html nodes that match your description

`equalyzr.each(arr, function (index, value) {})` cycles through an array executing a function

`equalyzr.resize(selector, height)` sets the height of elements with the selector
