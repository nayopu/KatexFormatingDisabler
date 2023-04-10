# KatexFormatingDisabler
Disable auto Katex formatting in ChatGPT.
This bookmarklet allows you to replace all KaTeX math formatting in a web page with the raw KaTeX code. To use this bookmarklet, follow the instructions below:

### Create the Bookmarklet

1. Create a new bookmark in your browser.
2. Name the bookmark as you like, e.g., "KaTeX Replacer".
3. Copy the code below and paste it into the "URL" or "Location" field of the bookmark:

~~~javascript
javascript:(function(){function replaceKatexElements(){const katexElements=document.querySelectorAll('.katex-mathml');katexElements.forEach((katexElement)=>{const annotationElement=katexElement.querySelector('annotation');const rawKatexCode=annotationElement.textContent;const rawKatexTextNode=document.createTextNode(rawKatexCode);katexElement.parentElement.parentElement.replaceChild(rawKatexTextNode,katexElement.parentElement);});}replaceKatexElements();})();

~~~

This code is a minified version of the JavaScript provided in this repository.

### Using the Bookmarklet

1. Visit a web page that contains KaTeX math formatting.
2. Click on the "KaTeX Replacer" bookmark (or whatever name you gave it) in your browser's bookmarks bar.
3. The bookmarklet will execute the JavaScript, replacing all KaTeX math formatting with the raw KaTeX code.

Please note that the bookmarklet may not work on every website due to differences in the way KaTeX is implemented or if the website has strict Content Security Policies (CSP).
