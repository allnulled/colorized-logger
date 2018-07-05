 


# colorized-logger


![](https://img.shields.io/badge/colorized--logger-v1.0.0-green.svg) ![](https://img.shields.io/badge/test-passing-green.svg) ![](https://img.shields.io/badge/coverage-100%25-green.svg) ![](https://img.shields.io/badge/stable-100%25-green.svg)



Simple instantiable logger that prepends a customizable colorized message to every log message per logger instance.


## 1. Installation

~$ `npm install --save colorized-logger`

## 2. Usage

```js

// Step 1: import ColorizedLogger

const { ColorizedLogger } = require("colorized-logger");

// Step 2: instantiate a new ColorizedLogger

const debugLogger = new ColorizedLogger("[debug]", ["green", "bold", "underline", "bgBlack"], function(message) {
 return message.startsWith("[debug]");
});

// Step 3: use your new ColorizedLogger instance

if(debugLogger.log("Something")) {
 debugLogger.log("Always will return true because of the callback: the message will always start with '[debug]'.");
} else {
 debugLogger.log("Never executed");
}

```

## 3. API





 

### **ColorizedLogger = require("colorized-logger").ColorizedLogger**


**Type:** `{Class}`

**Description:** Class used to instantiate easily and fast new loggers with colorized prepended message, and configurable returned callbacks.




 


---- 

### **new ColorizedLogger(message:String, styles:Array<String>, callback:Function)**


**Type:** `{Constructor}`

**Parameter:** `{String} message`. Message to be prepended in every `ColorizedLogger#log(...)` call.

**Parameter:** `{Array<String>} styles`. Styles (*colors, background colors* and *modifiers*) applied to the prepended message of this logger. The colorization is based on [`chalk` library](https://github.com/chalk/chalk#styles). Possibilities are listed here:

#### **`Modifiers`**
  · `reset`

  · `bold`

  · `dim`

  · `italic` (Not widely supported)

  · `underline`

  · `inverse`

  · `hidden`

  · `strikethrough` (Not widely supported)

  · `visible` (Text is emitted only if enabled)



#### **`Colors`**

  · `black`

  · `red`

  · `green`

  · `yellow`

  · `blue` (On Windows the bright version is used since normal blue is illegible)

  · `magenta`

  · `cyan`

  · `white`

  · `gray` ("bright black")

  · `redBright`

  · `greenBright`

  · `yellowBright`

  · `blueBright`

  · `magentaBright`

  · `cyanBright`

  · `whiteBright`



#### **`Background colors`**

  · `bgBlack`

  · `bgRed`

  · `bgGreen`

  · `bgYellow`

  · `bgBlue`

  · `bgMagenta`

  · `bgCyan`

  · `bgWhite`

  · `bgBlackBright`

  · `bgRedBright`

  · `bgGreenBright`

  · `bgYellowBright`

  · `bgBlueBright`

  · `bgMagentaBright`

  · `bgCyanBright`

  · `bgWhiteBright`



**Parameter:** `{Function} callback`. Function to which the message is passed in plain format (once it is printed by console).
This function is the last call of the `ColorizedLogger#log(...)` call as a return statement. This means that what is 
returned by this callback, is returned by the `ColorizedLogger#log(...)` call. By default: `() => {}`.


**Description:** Creates a new `{ColorizedLogger}` instance.




 


----

### **ColorizedLogger#message**


**Type:** `{String}`

**Description:** Message to be prepended on every `ColorizedLogger#log(...)` message logged. It is defined in the constructor call (parameter 1).





 


----

### **ColorizedLogger#styles**


**Type:** `{Array<String>}`

**Description:** Styles to be used on the prepended message by the `ColorizedLogger#log(...)` call. It is defined in the constructor call (parameter 2).





 


----

### **ColorizedLogger#callback**


**Type:** `{Function}`

**Returns:** `{Any}`

**Description:** Callback called as return statement by the `ColorizedLogger#log(...)` call. It is defined in the constructor call (parameter 3).




 


----

### **ColorizedLogger#log(...args:Any)**


**Type:** `{Method}`

**Parameter:** `{Any} ...args`. Pass any type of data. Each item passed will be stringified (unless it is already a `{String}`) and concatenated in the same log message. Functions are also accepted, and their inner code will be printed.

**Returns:** `{Any}

**Description:** Prints the message defined by `ColorizeLogger#message` with the styles specified at `ColorizeLogger#styles` and the items stringified afterwords. 
Finally, it returns what `ColorizeLogger#callback(fullLoggedMessageAsPlainText, passedArguments)` call returns when it is called like this.




 


----

### **ColorizedLogger.create(message:String, styles:Array<String>, callback:Function)**


**Type:** `{Static method}`

**Returns:** `{ColorizedLogger}`

**Description:** It does the same as the `ColorizedLogger` constructor, but statically. 




 


----

### **ColorizedLogger.stringify(data:Any, beautify:Boolean)**


**Type:** `{Static method}`

**Parameter:** `{String} data`. The data to be stringified.

**Parameter:** `{String} beautify`. Whether to beautify the message, or not. By default: `true`.

**Returns:** `{String}`

**Description:** It returns any type of data, but stringified as JSON (`{Function}`s are allowed too).




 



## 4. Test, coverage and documentation

To generate the coverage:

~$ `npm run coverage`

To do the tests:

~$ `npm run test`

To generate the documentation:

~$ `npm run docs`


## 5. Conclusion

This is a small and minimalistic tool to have a visual logger implemented in your projects.
Fully customizable, the functional approach lets you implement your own transporters, beside
the colorized logging, which is quite comfortable, to be honest, compared with other logging 
frameworks. In fact, despite being so minimalistic, this is my favorite logging framework 
for Node.js.

Fully tested and covered, you can rely on this logging framework for your projects.






# Read this file
