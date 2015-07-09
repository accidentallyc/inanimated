# inanimated
Animate the elements of your page when they load!

# Sample Usage
```html

<div animate-in="1"> ... </div> <!-- first in animation queue -->
<div animate-in="2"> ... </div> <!-- 2nd -->
<div animate-in="3"> ... </div> <!-- 3rd -->

<script>
  $.inAnimated.animate();   
</script>

```


# Installation
1. include jQuery
1. include script
1. include css
```html
<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<link rel="stylesheet" href="inanimated.css" />
<script src="inanimated.min.js"></script>
```

# Mini Documentation
## General Usage
Place attribute animate-in="1" in elements that you want to animate in. 1 is the queue number. 

Change the number according to when you want the elements to be displayed. The lower the number the earlier its execution.

Elements with the same queue number execute at the same time.

```html
<div animate-in="1"> ... </div>
```

## Variables
You can also place variables in the 'animate-in' attribute.

```html
<div animate-in="x"> ... </div>
```

| Use Cases | Description          |
| ------------- | ----------- |
| First Time Use      | Variable value gets the last queue_number in execution. See sample below.|
| Re-use     | Variable is used 2nd.. nth.. time     |
| variable++ | Variable is appended with ++ e.g. x++. It adds 1 to the execution time of variable |
| variable assignment | Assign a specific variable a value |

### First Time Use
```
<html>
<head>...</head>
<body>
    <!-- First Time Use -->
    <div animate-in="x"> ... </div> <!-- x is zero -->
    ...
    <div animate-in="5"> ... </div>
    <div animate-in="y"> ... </div> <!-- y is 5 -->
</body>
</html>
```

### Re-use
```
<html>
<head>...</head>
<body>
    <!-- Re-use -->
    <div animate-in="x"> ... </div> <!-- x is zero -->
    ...
    <div animate-in="x"> ... </div> <!-- x is zero -->
    <div animate-in="x"> ... </div> <!-- x is zero -->
    
    <div animate-in="5"> ... </div>
    <div animate-in="y"> ... </div> <!-- y is 5 -->
    <div animate-in="y"> ... </div> <!-- y is 5 -->
    <div animate-in="y"> ... </div> <!-- y is 5 -->
</body>
</html>
```

### variable++
```
<html>
<head>...</head>
<body>
    <!-- Re-use -->
    <div animate-in="x"> ... </div> <!-- x is zero -->
    ...
    <div animate-in="x++"> ... </div> <!-- x is 1 -->
    <div animate-in="x++"> ... </div> <!-- x is 2 -->
    
    <div animate-in="5"> ... </div>
    <div animate-in="y"> ... </div> <!-- y is 5 -->
    <div animate-in="y++"> ... </div> <!-- y is 6 -->
    <div animate-in="y++"> ... </div> <!-- y is 7 -->
</body>
</html>
```

### variable assignment
```
<html>
<head>...</head>
<body>
    <!-- Re-use -->
    <div animate-in="x=4"> ... </div> <!-- x is 4 -->
    ...
    <div animate-in="x++"> ... </div> <!-- x is 5 -->
    <div animate-in="x++"> ... </div> <!-- x is 6 -->
    
    <div animate-in="y=x"> ... </div> <!-- y is 6 -->
    <div animate-in="y++"> ... </div> <!-- y is 7 -->
    <div animate-in="y++"> ... </div> <!-- y is 8 -->
    
    <div animate-in="y=z"> ... </div> <!-- ERROR. Use z somewhere first-->
</body>
</html>
```
