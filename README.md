# jQuery SEO Preview Plugin

The jQuery SEO Preview Plugin is a simple plugin that allows you to preview meta tag data in a styled Google, Facebook and other social link previews. You can bind the preview to inputs to get live preview while editing perfect for blog and CMS applications.

[View Demo & Preview](https://www.monetizedesign.com/jquery-seopreview-plugin)

* * *

### Usage

Add the live preview plugin to your tag or before the closing tag:

    <script type="text/javascript" src="/js/jquery-seopreview.js"></script>

Make sure to add the CSS styling for the preview dialog window in your head:

    <link href="/css/jquery-seopreview.css" rel="stylesheet" type="text/css">

_The styles included are default styles for the live SEO preview area only._

* * *

### Configuration

You can also bind inputs to get live preview updates on change.

#### Default Options

    $(".seopreview").seoPreview({
      metadata: {
        title: $('#meta-title'),
        url: $('#meta-url'),
        description: $('#meta-desc')
      }
    });

Add `div` where you want preview to appear.

    <div id="seopreview"></div>

With the HTML form inputs on your page:

    <input type="text" id="meta-title" />
    <input type="text" id="meta-url" />
    <textarea id="meta-desc"></textarea>
* * *

### Dependencies

*   jQuery must be loaded
*   CSS Cleanslate (inluded)

* * *

### MIT License

Copyright 2018 &copy; [MonetizeDesign](https://www.monetizedesign.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

<small>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</small>
