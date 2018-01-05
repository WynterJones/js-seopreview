# jQuery SEO Preview Plugin

The jQuery SEO Preview Plugin is a simple plugin that allows you to preview meta tag data in a styled Google, Facebook and other social link previews. You can bind the preview to inputs to get live preview while editing perfect for blog and CMS applications.

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
