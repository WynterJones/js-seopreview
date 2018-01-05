/*
 * jQuery SEO Live Preview
 * https://github.com/monetizedesign/js-seopreview
 *
 * A simple plugin that allows you to preview meta tag data in a styled Google and Facebook link preview.
 *
 * Copyright 2018, Wynter Jones
 * https://www.monetizedesign.com/
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
*/

/*global jQuery */

/* Property Directives
    attr, author, base_domain, date, desc, desc_limit, each, extend, facebook,
    featured_image, find, fn, getDate, getFullYear, getMonth, google, html,
    label, label_text, length, metadata, nodeName, on, preventDefault,
    seoPreview, styled, substring, tabs, text, title, title_limit, type, url,
    url_limit, use_slug, val
*/

(function ($) {
    "use strict";

    $.fn.seoPreview = function (options) {

        // Options
        var settings = $.extend({
            metadata: {
                base_domain: "",
                use_slug: false,
                title: "MonetizeDesign - jQuery Plugin - SEO Live Preview",
                url: "https://monetizedesign.github.io/js-seopreview/",
                desc: "A simple jQuery plugin that allows you to preview meta tag data in a styled Google and Facebook link preview."
            },
            google: {
                label: true,
                label_text: "Google-view",
                date: true,
                title_limit: 60,
                url_limit: 72,
                desc_limit: 300
            },
            facebook: {
                label: true,
                label_text: "Facebook-view",
                author: "",
                featured_image: ""
            },
            styled: true,
            tabs: true
        }, options);

        // Turncate Meta Data
        function truncate(str, limit) {
            if (str.length < limit) {
                var truncated_text = str.substring(0, limit);
                truncated_text = truncated_text + " ...";
            }
            return str;
        }

        // Bind Each <input> <textarea> on Keyup
        $.each(settings.metadata, function (index, value) {
            if (value[0]) {
                if (value[0].type === "text" || value[0].type === "textarea") {
                    var character_limit = "";
                    if (index === "title") {
                        character_limit = settings.google.title_limit;
                    } else if (index === "url") {
                        character_limit = settings.google.url_limit;
                    } else if (index === "desc") {
                        character_limit = settings.google.desc_limit;
                    }
                    $(document).find(value).attr("data-md-limit", character_limit);
                    $(document).on("keyup", value, function (event) {
                        event.preventDefault();
                        character_limit = parseInt($(document).find(value).attr("data-md-limit"));
                        $(document).find("span#" + main_class + "__google-" + index).text(truncate(value.val(), character_limit));
                    });
                }
            }
        });

        // Check if <input type="text"> or <textarea>
        function isInput(option) {
            if ((option[0].nodeName === "INPUT" && option[0].type === "text") || option[0].nodeName === "TEXTAREA") {
                return true;
            }
        }

        // Set Meta Title Default
        var metaTitle = settings.metadata.title;
        if (isInput(settings.metadata.title)) {
            metaTitle = settings.metadata.title.val();
        }

        // Set Meta Meta URL Default
        var metaURL = settings.metadata.url;
        if (isInput(settings.metadata.url)) {
            metaURL = settings.metadata.url.val();
        }

        // Set Meta Description Default
        var metaDesc = settings.metadata.title;
        if (isInput(settings.metadata.desc)) {
            metaDesc = settings.metadata.desc.val();
        }

        // CSS Class
        var main_class = "md-js-seo-preview";

        // Option: Google Date
        var google_date = "";
        if (settings.google.date === true) {
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var d = new Date();
            var date = d.getDate();
            var month = d.getMonth();
            var year = d.getFullYear();
            var today = months[month] + " " + date + ", " + year;
            google_date = "<span id='" + main_class + "__google-date'>" + today + " - </span>";
        }

        // Show Styled or Unstyled
        var theme_class = "";
        if (settings.styled === true) {
            theme_class = "" + main_class + "__theme";
        }
        // Option: Google Label
        var google_label = "";
        if (settings.google.label === true) {
            google_label = "<small id='" + main_class + "__google-label'>" + settings.google.label_text + "</small>";
        }

        // Make: Output HTML
        var preview_box = "";
        preview_box += "<div id='" + main_class + "' class='md-js-cleanslate " + theme_class + "''>";
        preview_box += "<div id='" + main_class + "__google-inner'>";
        preview_box += "<span id='" + main_class + "__google-title'>" + truncate(metaTitle, settings.google.title_limit) + "</span>";
        preview_box += "<span id='" + main_class + "__google-url'>" + truncate(metaURL, settings.google.url_limit) + "</span>";
        preview_box += "<span id='" + main_class + "__google-desc'>" + google_date + truncate(metaDesc, settings.google.desc_limit) + "</span>";

        if (settings.google.label === true) {
            preview_box += google_label;
        }
        preview_box += "</div></div>";

        // Add Preview to Page
        return this.html(preview_box);

    };

}(jQuery));