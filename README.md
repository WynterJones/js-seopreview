# jQuery SEO Live-Edit Preview

##### Version 1.0.0

The jQuery SEO Preview Plugin is a simple plugin that allows you to preview meta tag data in a styled Google and Facebook link preview. You can bind the preview to inputs for live editing perfect for blog and CMS applications when you need to edit social meta data.

View on Github: [https://monetizedesign.github.io/js-seopreview/](https://monetizedesign.github.io/js-seopreview/)

[Star](https://github.com/monetizedesign/js-seopreview)

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

#### Simple

    $(".seopreview").seoPreview({
      metadata: {
        title: $('#meta-title'),
        desc: $('#meta-desc'),
        url: {
          full_url: $('#meta-url')
        }
      },
      facebook: {
          featured_image: $('#meta-featured-image')
      }
    });

_You can also use static data instead of passing jQuery DOM elements._

#### Advanced

    $("#seopreview").seoPreview({
      metadata: {
          title: "MonetizeDesign - SEO Live Preview jQuery Plugin",
          desc: "The jQuery SEO Preview Plugin is a simple plugin that allows you to preview meta tag data in a styled Google and Facebook link preview. You can bind the preview to inputs for live editing perfect for blog and CMS applications when you need to edit social meta data.",
          url: {
              full_url: "https://monetizedesign.github.io/js-seopreview/",
              use_slug: false,
              base_domain: "",
              auto_dash: true
          }
      },
      google: {
          date: true
      },
      facebook: {
          featured_image: "http://via.placeholder.com/600x315"
      }
    });

* * *

#### Add to Your Page

Add a `div` where you want preview to appear.

    <div id="seopreview"></div>

Add HTML form inputs on your page for live editing.

    <input type="text" id="meta-title" />
    <input type="text" id="meta-url" />
    <textarea id="meta-desc"></textarea>
    <input type="text" id="meta-featured-image" />

* * *

#### Options

Explanation of the options available.

*   `use_slug` - If **true** it will override the `full_url` and use the `base_domain`.

*   `auto_dash` - Default is **true** and it will clean and format the entered URL.

*   `google.date` - Default is **true** and it will show the current date in Google description.

**Note:** Character limits for the title, url and description are hard-coded into the plugin using the latest max length.

### Dependencies

*   jQuery Core 2.2.4 or higher must be loaded
*   CSS Cleanslate * Inluded renamed as **.md-js-cleanslate**

* * *

### MIT License

Copyright 2018 &copy; [MonetizeDesign.com](https://www.monetizedesign.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

<small>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</small>
