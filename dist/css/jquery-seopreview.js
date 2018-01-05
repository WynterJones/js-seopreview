(function($) {

    $.fn.seoPreview = function(options) {

        // Options
        var settings = $.extend({
            metadata: {
                title: 'Live SEO Preview for Your Web Apps',
                url: 'http://example.com/custom-url',
                desc: 'The jQuery SEO Preview Plugin is a simple plugin that allows you to preview meta tag data in a styled Google, Facebook and other social link previews. You can bind the preview to inputs to get live preview while editing perfect for blog and CMS applications.'
            },
            gg_title_limit: 60,
            gg_url_limit: 72,
            gg_desc_limit: 300
        }, options);

        // Check If Is Input Editable
        function isInput(option) {
            if (option[0].nodeName == "INPUT" && option[0].type == "text" || option[0].nodeName == "TEXTAREA") {
                return true;
            }
        }

        // 
        function truncate(str, limit) {
            return (str.length < limit) ? str : str.substring(0, limit) + ' ...';
        }

        // Bind to Keyup on Inputs
        $.each(settings.metadata, function(index, value) {
            if (value[0].type == "text" || value[0].type == "textarea") {
                if (index == 'title') {
                    character_limit = settings.gg_title_limit;
                }
                else if (index == 'url') {
                    character_limit = settings.gg_url_limit;
                }
                else if (index == 'desc') {
                    character_limit = settings.gg_desc_limit;
                }
                $(document).find(value).attr('data-md-limit', character_limit);
                $(document).on('keyup', value, function(event) {
                    event.preventDefault();
                    character_limit = parseInt($(document).find(value).attr('data-md-limit'));
                    $(document).find('span#md-gg-' + index).text(truncate(value.val(), character_limit));
                });
            }
        });

        // Set Defaults
        if (isInput(settings.metadata.title)) {
            metaTitle = settings.metadata.title.val()
        } else {
            metaTitle = settings.metadata.title
        }

        if (isInput(settings.metadata.url)) {
            metaURL = settings.metadata.url.val()
        } else {
            metaURL = settings.metadata.url
        }

        if (isInput(settings.metadata.desc)) {
            metaDesc = settings.metadata.desc.val()
        } else {
            metaDesc = settings.metadata.desc
        }


        // Apply options
        return this.html('<div id="md-seo-previewer" class="mdcleanslate-seopreview"><div id="md-seo-previewer-gg-inner"><span id="md-gg-title">' + truncate(metaTitle, settings.gg_title_limit) + '</span><span id="md-gg-url">' + truncate(metaURL, settings.gg_url_limit) + '</span><span id="md-gg-desc">' + truncate(metaDesc, settings.gg_desc_limit) + '</span><small id="md-gg-preview">Google Preview</small></div></div>');

    };

}(jQuery));
