/*
 * jQuery SEO Live Preview
 * https://github.com/monetizedesign/js-seopreview
 *
 * A simple plugin that allows you to preview meta tag data in a styled Google and Facebook link preview.
 *
 * Copyright 2018, Wynter Jones
 * https://www.monetizedesign.com/js-seopreview
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
*/

/*global jQuery */

(function ($) {
    "use strict";

     $.extend({ seoPreview: function (options) {

        // Defults 
        var defaults = {
            google_div: "#seopreview-google",
            facebook_div: "#seopreview-facebook",
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
                show: true,
                date: true
            },
            facebook: {
                show: true,
                featured_image: ""
            }
        }

        // Options
        var settings = $.extend(true, defaults, options);

        // Function: Turncate Meta Data
        function truncate(original_text, limit) {
            var truncated_text = original_text;
            if (original_text.length > limit) {
                truncated_text = original_text.substring(0, limit);
                truncated_text = truncated_text + " ...";
            }
            return truncated_text;
        }

        // Function: Check if <input type="text"> or <textarea>
        function isInput(option) {
            if (option) {
                if ((option[0].nodeName === "INPUT" && option[0].type === "text") || option[0].nodeName === "TEXTAREA") {
                    return true;
                }
            }
        }

        // Function: Get todays date
        function todaysDate() {
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var d = new Date();
            var date = d.getDate();
            var month = d.getMonth();
            var year = d.getFullYear();
            return months[month] + " " + date + ", " + year;
        }

        // Function: Get HostName for Facebook URL Preview
        function get_hostname(url) {
            var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
            if ( match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0 ) {
                return match[2];
            } else {
                return url;
            }
        }

        // Set Meta Title
        var metaTitle = settings.metadata.title;
        if (isInput(settings.metadata.title)) {
            metaTitle = settings.metadata.title.val();
        }

        // Set Meta Meta URL
        var metaURL = settings.metadata.url.full_url;
        if (isInput(settings.metadata.url.full_url)) {
            metaURL = settings.metadata.url.full_url.val();
        }

        // Set Meta Description
        var metaDesc = settings.metadata.desc;
        if (isInput(settings.metadata.desc)) {
            metaDesc = settings.metadata.desc.val();
        }

        // Set Featured Image
        var metaImage = settings.facebook.featured_image;
        if (isInput(settings.facebook.featured_image)) {
            metaImage = settings.facebook.featured_image.val();
        }

        // Option: Google Date
        var google_date;
        if (settings.google.date === true) {
            google_date = "<span id='js-seo-preview__google-date'>" + todaysDate() + " - </span>";
        } else {
            google_date = "";
        }

        // Bind for Title, Desc <input> <textarea> on Keyup
        $.each(settings.metadata, function (index, value) {
            if (value[0] && (value[0].type === "text" || value[0].type === "textarea")) {
                var character_limit = "";
                if (index === "title") {
                    character_limit = 65;
                } else if (index === "desc") {
                    character_limit = 300;
                }
                $(document).on("keyup", value, function () {
                    $(document).find("span#js-seo-preview__google-" + index).text(truncate(value.val(), character_limit));
                    $(document).find("span#js-seo-preview__facebook-" + index).text(truncate(value.val(), 300));
                });
            }
        });

        // Bind for URL or Slug w/ Base Domain <input> <textarea> on Keyup
        $.each(settings.metadata.url, function (index, value) {
            if (value[0] && (value[0].type === "text" || value[0].type === "textarea")) {
                var character_limit = 72;
                $(document).on("keyup", value, function () {
                    var input_value = index; // to stop JSlint 'index' not used
                    if (settings.metadata.url.auto_dash === false) {
                        input_value = value.val();
                    } else {
                        input_value = value.val().replace(/[^A-Za-z0-9 :/ . -]/g, "").replace(/\s{2,}/g," ").replace(/\s+/g, "-").toLowerCase();
                        value.val(input_value);
                    }
                    var output_url = truncate(input_value, character_limit);
                    if (settings.metadata.url.use_slug === true) {
                        output_url = truncate(settings.metadata.url.base_domain + input_value, character_limit);
                    }
                    $(document).find("span#js-seo-preview__google-url").text(output_url);
                    $(document).find("span#js-seo-preview__facebook-url").text(get_hostname(output_url));
                });
            }
        });

        // Bind for URL or Slug w/ Base Domain <input> <textarea> on Keyup
        $.each(settings.facebook.featured_image, function (index, value) {
            if (value && (value.type === "text" || value.type === "textarea")) {                
                $(document).on("keyup", value, function () {
                    if ($(document).find(value).val() !== null && $(document).find(value).val().trim() !== "") {
                        $(document).find("img#js-seo-preview__facebook-image").attr('src', $(document).find(value).val());
                        $(document).find("img#js-seo-preview__facebook-image").attr('style', 'display: block !important');
                    } else {
                        $(document).find("img#js-seo-preview__facebook-image").attr('style', 'display: none !important');
                    }
                 });
            }
        });

        // Make: Google Output HTML
        var google_box = "";
        google_box += "<div id='js-seo-preview__google-inner'>";
        google_box += "<span id='js-seo-preview__google-title'>" + truncate(metaTitle, 65) + "</span>";
        if (settings.metadata.url.use_slug === true) {
            google_box += "<span id='js-seo-preview__google-url'>" + truncate(settings.metadata.url.base_domain + metaURL, 72) + "</span>";
        } else {
            google_box += "<span id='js-seo-preview__google-url'>" + truncate(metaURL, 72) + "</span>";
        }
        google_box += "<span id='js-seo-preview__google-desc'>" + google_date + truncate(metaDesc, 300) + "</span>";
        google_box += "</div>";


        // Make: Facebook Output HTML
        var facebook_box = "";
        facebook_box += "<div id='js-seo-preview__facebook-inner'>";
        if (metaImage) {
            facebook_box += "<img src='" + metaImage + "' id='js-seo-preview__facebook-image' />";
        }
        
        facebook_box += "<div id='js-seo-preview__facebook-inner-text'>";
        facebook_box += "<span id='js-seo-preview__facebook-title'>" + truncate(metaTitle, 200) + "</span>";
        facebook_box += "<span id='js-seo-preview__facebook-desc'>" + truncate(metaDesc, 300) + "</span>";
        if (settings.metadata.url.use_slug === true) {
            facebook_box += "<span id='js-seo-preview__facebook-url'>" + truncate(settings.metadata.url.base_domain + metaURL, 72) + "</span>";
        } else {
            facebook_box += "<span id='js-seo-preview__facebook-url'>" + get_hostname(metaURL) + "</span>";
        }
        facebook_box += "</div></div>";

        // Make: Final HTML Output
        var output = "";
        output = "<div class='js-seo-preview md-js-cleanslate'>";
        if (settings.google.show == true) {
            output += google_box;
        }
        output += "</div>";

        var fb_output = "";
        fb_output = "<div class='js-seo-preview md-js-cleanslate'>";
        if (settings.facebook.show == true) {
            fb_output += facebook_box;
        }
        fb_output += "</div>";

        
        // Add Preview to Page
        if ($(settings.google_div).length) {
            $(settings.google_div).html(output);
        }
        if ($(settings.facebook_div).length) {
            $(settings.facebook_div).html(fb_output);
        }
        return false;

    }});

}(jQuery));