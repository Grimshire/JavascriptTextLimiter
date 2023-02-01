# JavascriptTextLimiter
Limits the number of characters a user may use in a textbox in web development. Supports multiline. Easy to use and implement. 

Example:
```
<textarea id="txtBox"  class="txtLimit" Font-Size=".9em" Font-Names="verdana" MaxLength="256" Columns="70" Rows="5" TextMode="MultiLine"></textarea>
<div id="missDescFeedback" class="txtFeedback"></div>
```

1.)Include the file JavascriptTextLimiter.js in your project, and on your page.
2.) Use the class txtLimit on the textarea you would like to limit.
3.) Specify a length in the standard MaxLength property.
4.) Add a div or span beneath the textarea that has the class txtFeedback.
5.) Optionally override the JavaScriptLimite.Text2Add property as in the example below.


No longer requires JQuery. This is now written in pure js.

2/1/2023
You can now change text that follows the number of characters written out of the maximum possible characters.

Simply use:

```
JavaScriptLimiter.Text2Add = "";
```

if you'd like no text to follow the number ratio.
