/* Icoonies
 * version: 1.0 (04 Dec 2014)
 * Copyright (c) 2014 Alessandro Romanini ### Mattia Cattabiani 
 * icooniesteam@gmail.com
 
 * Permission is hereby granted, free of charge, to any person
   obtaining a copy of this software and associated documentation
   files (the "Software"), to deal in the Software without
   restriction, including without limitation the rights to use,
   copy, modify, merge, publish, distribute, sublicense, and/or sell
   copies of the Software, and to permit persons to whom the
   Software is furnished to do so, subject to the following
   conditions:

   The above copyright notice and this permission notice shall be
   included in all copies or substantial portions of the Software.

   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
   OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
   NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
   WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
   FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
   OTHER DEALINGS IN THE SOFTWARE.
 */


(function ($) {
    // maintain a reference to the existing function
    var oldappend = $.fn.append;
    var oldhtml = $.fn.html;
    // ...before overwriting the jQuery extension point
    $.fn.append = function () {
        // original behavior - use function.apply to preserve context
        var ret = oldappend.apply(this, arguments);

        $(this).find('.icoonies').trigger('icooniesAppend');

        return ret;
    };
    $.fn.html = function () {
        // original behavior - use function.apply to preserve context
        var ret = oldhtml.apply(this, arguments);

        $(this).find('.icoonies').trigger('icooniesAppend');
        return ret;
    };



})(jQuery);

(function ($) {
    if (!$.browser && $.fn.jquery != "1.3.2") {
        $.extend({
            browser: {}
        });
        $.browser.init = function () {
            var a = {};
            try {
                navigator.vendor ?
                    /Chrome/.test(navigator.userAgent) ?
                    (a.browser = "Chrome", a.version = parseFloat(navigator.userAgent.split("Chrome/")[1].split("Safari")[0])) : /Safari/.test(navigator.userAgent) ? (a.browser = "Safari", a.version = parseFloat(navigator.userAgent.split("Version/")[1].split("Safari")[0])) : /Opera/.test(navigator.userAgent) && (a.Opera = "Safari", a.version = parseFloat(navigator.userAgent.split("Version/")[1])) : /Firefox/.test(navigator.userAgent) ? (a.browser = "mozilla",
                        a.version = parseFloat(navigator.userAgent.split("Firefox/")[1])) : (a.browser = "MSIE", /MSIE/.test(navigator.userAgent) ? a.version = parseFloat(navigator.userAgent.split("MSIE")[1]) : a.version = "edge")
            } catch (e) { a = e; }
            if (!a.browser) {
                a.browser = "none";
                a.version = 0;
            }
            $.browser[a.browser.toLowerCase()] = a.browser.toLowerCase();
            $.browser.browser = a.browser;
            $.browser.version = a.version;
            $.browser.msie = $.browser.browser.toLowerCase() == 'msie';
        };
        $.browser.init();
    }
})(jQuery);

jQuery.extend({
    isValidSelector: function (selector) {
        try {
            var $element = $(selector);
        } catch (error) {
            return false;
        }
        return true;
    }
});

if (typeof String.prototype.startsWith != 'function') {
    // see below for better implementation!
    String.prototype.startsWith = function (str) {
        return this.indexOf(str) == 0;
    };
}
; var icoo = (function (document, window, $, undefined) {

    //**************************************************************************************
    var App = {
        options: {
            mode: 'image',
            basepath: ''
        },
        noimage_encoded: 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NzkgNjc5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA2NzkgNjc5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIGlkPSJMaXZlbGxvXzEiPg0KCTxwYXRoIGlkPSJpY29vLWFyZWEtMiIgc3R5bGU9ImZpbGw6I25vbmUgIWltcG9ydGFudDsgc3Ryb2tlOiM5QjAwN0UgIWltcG9ydGFudDsgc3Ryb2tlLXdpZHRoOjMxICFpbXBvcnRhbnQ7IGRpc3BsYXk6YmxvY2sgIWltcG9ydGFudDsgb3BhY2l0eToxICFpbXBvcnRhbnQ7IiBmaWxsPSJub25lIiBzdHJva2U9IiM5QjAwN0UiIHN0cm9rZS13aWR0aD0iMzEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTQ4OC41MjUsNDAxLjc2Nw0KCQljLTQuMjM5LTcwLjkwNS0xMjEuNDMtMjE0LjMxMy0xODAuNDY5LTIwMC4zMDhjLTg3LjA0NSwyMC42NTItMTA2LjM1NCwxODguNTc4LTEwNi4zNTQsMTg4LjU3OHMtMjMuMTUxLTMuNDY2LTIxLjI2MiwzNi43NzUNCgkJYzAsMCwxLjMzMiw2OC43MjYsMTcuOTQ5LDg4LjI0YzUuOTAyLDYuOTI2LDExLjEwOSw2LjEyOSwxMS4xMDksNi4xMjljMjQuMzUyLDU2LjU1OSw3My40MjYsOTUuNDIyLDEzMy43MzQsOTUuNDIyDQoJCWM1Ny43MTksMCwxMDcuOTE5LTM1LjgxMywxMzMuNDY2LTg4LjUxM2MwLDAsOC4yMjksMS4yOTgsMTMuMjYxLTIuNDY0YzM1LjU3NC0yNi42NjMsNDEuMjYtNzguOTEyLDQxLjI2LTc4LjkxMg0KCQlDNTQxLjYxMSwzODQuNTI4LDQ4OC41MjUsNDAxLjc2Nyw0ODguNTI1LDQwMS43Njd6Ii8+DQoJPHBhdGggaWQ9Imljb28tYXJlYS0zIiBzdHlsZT0iZmlsbDojOUIwMDdFICFpbXBvcnRhbnQ7IGRpc3BsYXk6YmxvY2sgIWltcG9ydGFudDsgb3BhY2l0eToxICFpbXBvcnRhbnQ7IiBmaWxsPSIjOUIwMDdFIiBkPSJNNDExLjg0NCwxMDAuNDE0Yy0xNS40OTYtNC42MjEtMjcuNDAyLTAuMjA1LTM4LjY3NiwwLjQ4M2MwLDAsMS44Ni0xNC40MTUtNi41MTEtMjkuMjQ2DQoJCWMtMTIuOTE5LTIyLjkzLTQyLjI0NS00Ny4zMzgtNzguMjQ2LTI0LjgwOGMwLDAtMC41OTgsNC4yNCw3Ljg3NiwyLjQxOWM4LjQ2OS0xLjgxLDY0LjMyNiwzMC4yNTQsMTUuMzIsNjIuNTIxDQoJCWMwLDAtNzQuMjE3LTMuNjMxLTc0LjgxNCw0Mi45NTFjLTAuNTk4LDQ2LjU4NywwLDAuODAyLDAsMC44MDJzLTAuMDQ2LDQyLjQyMiwzNS4wNTEsNjIuNTkxYzAsMCwzNy45NDItMjQuMDY3LDU0LjQ4Ni0yMy40NjUNCgkJYzAsMCwwLjUzNS02LjAyNiwyLjgyMy0xNS41MDJjLTEuOTU4LDEwLjA4NS0yLjgyMywxNy4wMTEtMi44MjMsMTcuMDExYzE3LjAzOS00Ljc3LDM5LjMwMyw3LjI0NCw0Ny44MzksMTEuMjUxDQoJCWMxMi44MjIsNjMuNzkxLTYuNzgzLTcuNzUxLDI3Ljk4My00Ny4zMjFjMjcuNjkyLTMxLjUxNyw0MS45NDIsMTMzLjkwNSw0MS45NDIsMTMzLjkwNQ0KCQlDNDY5LjkxNiwyNjAuMTI4LDQ4Ny42NjYsMTIzLjAwMiw0MTEuODQ0LDEwMC40MTR6Ii8+DQo8L2c+DQo8ZyBpZD0ibm8iPg0KCTxjaXJjbGUgaWQ9Imljb28tYXJlYS00IiBmaWxsPSJub25lIiBzdHlsZT0iZmlsbDpub25lICFpbXBvcnRhbnQ7IHN0cm9rZTojOUIwMDdFICFpbXBvcnRhbnQ7IHN0cm9rZS13aWR0aDoyOSAhaW1wb3J0YW50OyBkaXNwbGF5OmJsb2NrICFpbXBvcnRhbnQ7IG9wYWNpdHk6MSAhaW1wb3J0YW50OyIgc3Ryb2tlPSIjOUIwMDdFIiBzdHJva2Utd2lkdGg9IjI5IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGN4PSIzMzkuNSIgY3k9IjMzOS41IiByPSIzMjUiLz4NCgk8bGluZSBpZD0iaWNvby1hcmVhLTUiICBmaWxsPSJub25lIiBzdHlsZT0iZmlsbDpub25lICFpbXBvcnRhbnQ7IHN0cm9rZTojOUIwMDdFICFpbXBvcnRhbnQ7IHN0cm9rZS13aWR0aDoyOSAhaW1wb3J0YW50OyBkaXNwbGF5OmJsb2NrICFpbXBvcnRhbnQ7IG9wYWNpdHk6MSAhaW1wb3J0YW50OyIgc3Ryb2tlPSIjOUIwMDdFIiBzdHJva2Utd2lkdGg9IjI5IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHgxPSI5OC4xNDgiIHkxPSIxMjUuNDkyIiB4Mj0iNTU0LjE1IiB5Mj0iNTgxLjQ5NCIvPg0KPC9nPg0KICA8c3R5bGU+DQogICAgKiAgIHsgDQoNCiAgICB9DQogICAgI2ljb28tYXJlYS0yICAgICAgeyBmaWxsOm5vbmUgIWltcG9ydGFudDsgc3Ryb2tlOiM5QjAwN0UgIWltcG9ydGFudDsgc3Ryb2tlLXdpZHRoOjMxICFpbXBvcnRhbnQ7IGRpc3BsYXk6YmxvY2sgIWltcG9ydGFudDsgb3BhY2l0eToxICFpbXBvcnRhbnQ7ICAgICAtbXMtdHJhbnNmb3JtOm5vbmUgIWltcG9ydGFudDsgDQogICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDsNCiAgICAtbW96LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50OyANCiAgICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7DQogICAgIGFuaW1hdGlvbjpub25lICFpbXBvcnRhbnQ7IC1tb3otYW5pbWF0aW9uOm5vbmUgIWltcG9ydGFudDsgLXdlYmtpdC1hbmltYXRpb246bm9uZSAhaW1wb3J0YW50Ow0KICAgICBzdHJva2UtZGFzaGFycmF5Om5vbmUgIWltcG9ydGFudDsgc3Ryb2tlLWRhc2hvZmZzZXQ6aW5oZXJpdCAhaW1wb3J0YW50Ow0KICAgIH0NCiAgICAjaWNvby1hcmVhLTMgICAgICB7IGZpbGw6IzlCMDA3RSAhaW1wb3J0YW50OyBkaXNwbGF5OmJsb2NrICFpbXBvcnRhbnQ7IG9wYWNpdHk6MSAhaW1wb3J0YW50OyAgICAgLW1zLXRyYW5zZm9ybTpub25lICFpbXBvcnRhbnQ7IA0KICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7DQogICAgLW1vei10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDsgDQogICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50Ow0KICAgICBhbmltYXRpb246bm9uZSAhaW1wb3J0YW50OyAtbW96LWFuaW1hdGlvbjpub25lICFpbXBvcnRhbnQ7IC13ZWJraXQtYW5pbWF0aW9uOm5vbmUgIWltcG9ydGFudDsgDQogICAgIHN0cm9rZS1kYXNoYXJyYXk6bm9uZSAhaW1wb3J0YW50OyBzdHJva2UtZGFzaG9mZnNldDppbmhlcml0ICFpbXBvcnRhbnQ7DQogICAgfQ0KICAgICNpY29vLWFyZWEtNCwNCiAgICAjaWNvby1hcmVhLTUgICAgICB7IGZpbGw6bm9uZSAhaW1wb3J0YW50OyBzdHJva2U6IzlCMDA3RSAhaW1wb3J0YW50OyBzdHJva2Utd2lkdGg6MjkgIWltcG9ydGFudDsgZGlzcGxheTpibG9jayAhaW1wb3J0YW50OyBvcGFjaXR5OjEgIWltcG9ydGFudDsgICAgIC1tcy10cmFuc2Zvcm06bm9uZSAhaW1wb3J0YW50OyANCiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50Ow0KICAgIC1tb3otdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7IA0KICAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDsNCiAgICAgYW5pbWF0aW9uOm5vbmUgIWltcG9ydGFudDsgLW1vei1hbmltYXRpb246bm9uZSAhaW1wb3J0YW50OyAtd2Via2l0LWFuaW1hdGlvbjpub25lICFpbXBvcnRhbnQ7IA0KICAgICBzdHJva2UtZGFzaGFycmF5Om5vbmUgIWltcG9ydGFudDsgc3Ryb2tlLWRhc2hvZmZzZXQ6aW5oZXJpdCAhaW1wb3J0YW50Ow0KICAgIH0NCiAgICANCiAgICANCiAgPC9zdHlsZT4NCjwvc3ZnPg==',
        css_download: 0,
        css_length: 0,
        icooRules: [],
        icooBackgroundRules: [],
        icooSvgStyles: [],
        downloadconfiguration: 0,
        getRandomColor: function () {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        },
        init: function (settings) {
            if (window["icoo-ready"]) return;
            window["icoo-ready"] = true;
            App.icooCss = window['icooStyle'] || {};
            App.downloadconfiguration = 0;
            App.options = $.extend({}, App.options, settings);
            App.css_length = $('.icoonies-css').length;
            App.css_download = 0;
            App.cssregex = new RegExp("([^{}/]+){( |\\t){0,}/\\*icoonies([^\\*]{0,})\\*/(.[^}]+)}", "gmi");
            App.css_region_regex = new RegExp("/\\*region([^\\*]{0,})\\*/(.*?)/\\*endregion\\*/", "gmi");
            App.icoonies_regex = new RegExp("/\\*icoonies([^\\*]{0,})\\*/", "gmi");
            App.cssregex_commment = new RegExp("/\\*[^\\*/]+\\*/", "gmi");
            App.background_showarea = [];




            $('link[rel=stylesheet].icoonies-css').each(function () {
                var element = $(this).clone();
                $.ajax({
                    url: element.attr('href').toString(),
                    dataType: 'text',
                    cache: false,
                    success: function (data) {
                        App.parseRegionCss(data);
                        App.parseCss(data, this.url);

                    },
                    error: function (error) {
                        console.dir(error);
                        App.css_download += 1;
                        App.icooCssParser();
                        App.icooParser()
                    }

                });
            });

            $('style.icoonies-css').each(function () {
                App.parseRegionCss($(this).html());
                App.parseCss($(this).html(), document.location.href);

            });
            //
            App.icooCssParser();
            App.icooParser();


        }

        , parseCss: function (data, url) {
            var css_rules = data.replace(/\\t{1,}|\\r|\\n/gmi, '').replace(/\r/gmi, ' ').replace(/\n/gmi, ' ').replace(/@media[^{]*\{(?:(?!\}\s*\}).)*/gmi, '').match(App.cssregex);
            if (css_rules) {
                for (var i = 0; i < css_rules.length; i++) {

                    var css_parser = css_rules[i].replace(App.icoonies_regex, "$1").replace(App.cssregex_commment, "").split('{');
                    if (css_parser.length > 0) {
                        var selector = css_parser[0].replace(/\//g, '').split(',');
                        var rules = css_parser[1].replace(/}/g, '').split(';');
                        var rule_name = '';
                        var selector_name = '';
                        for (var jselector = 0; jselector < selector.length; jselector++) {
                            selector_name = selector[jselector].trim();



                            if (!$.isValidSelector(selector_name)) continue;
                            var rule = { selector: selector_name, rules: [], css_url: url.toString() };
                            for (var jrule = 0; jrule < rules.length; jrule++) {
                                rule_name = rules[jrule].split(":");

                                if (rule_name.length == 2) {

                                    var rule_to_push = {
                                        key: rule_name[0].trim().replace("icoo-", "").trim(),
                                        value: rule_name[1].trim(),
                                        css: !rule_name[0].trim().startsWith("icoo-"),
                                        background: rule_name[0].trim().replace("icoo-", "").toLowerCase().startsWith('background') && rule_name[1].trim().toLowerCase().startsWith('url'),
                                        embedstyle: rule_name[0].trim() == "icoo-region",
                                        showarea: rule_name[0].trim() == "icoo-showarea"
                                    };
                                    rule.rules.push(rule_to_push);



                                }
                            }

                            App.icooRules.push(rule);
                        }
                    }
                }
            }

            App.css_download += 1;
            App.icooCssParser();
            App.icooParser();
        }
        , parseRegionCss: function (data) {

            var css_rules = data.replace(/\\t{1,}|\\r|\\n/gmi, '').replace(/\r/gmi, ' ').replace(/\n/gmi, ' ').match(App.css_region_regex);
            if (css_rules) {
                for (var i = 0; i < css_rules.length; i++) {


                    var region_name = css_rules[i].replace(App.css_region_regex, "$1").trim().toLowerCase();
                    var region_styles = css_rules[i].replace(App.css_region_regex, "$2").trim();

                    if (App.icooSvgStyles[region_name]) {
                        App.icooSvgStyles[region_name] = App.icooSvgStyles[region_name] + " " + region_styles;
                    } else {
                        App.icooSvgStyles[region_name] = region_styles;
                    }

                }
            }
        }
        , getSvgUrl: function (cssurl, svgurl) {
            var parser = document.createElement('a');
            parser.href = cssurl;
            var directory_path = parser.href.split('/');
            parser = null;
            delete parser;
            directory_path.pop();
            if (svgurl.startsWith("/") || svgurl.toLowerCase().startsWith("http")) {
                return svgurl;
            }
            svgurl = svgurl.replace(/\.\.\//g, "|").split("|");
            for (var i = 0; i < svgurl.length; i++) {
                if (svgurl[i] == '') {
                    directory_path.pop();
                }
                else {
                    directory_path.push(svgurl[i]);
                }
            }
            return directory_path.join('/');
        }
        , icooCssParser: function () {
            if (App.css_download < App.css_length) return;
            var cssregex = new RegExp("url[ ]{0,}\\(['\\\"]{0,1}(.{1,}.svg)['\\\"]{0,1}\\)", "gmi");
            App.icooBackgroundRules = [];
            for (var i = 0; i < App.icooRules.length; i++) {
                for (var j = 0; j < App.icooRules[i].rules.length; j++) {
                    var match = App.icooRules[i].rules[j].value.match(cssregex);
                    if (App.icooRules[i].rules[j].background && match) {
                        var to_push = {
                            main: App.icooRules[i].selector,
                            url: App.getSvgUrl(App.icooRules[i].css_url, match[0].replace(cssregex, "$1")),
                            rules: [{ selector: "svg", rules: [] }],
                            showarea: false
                        };

                        for (var r = 0; r < App.icooRules[i].rules.length; r++) {
                            if (!App.icooRules[i].rules[r].css || App.icooRules[i].rules[r].embedstyle || App.icooRules[i].rules[r].showarea) {
                                to_push.rules[0].rules.push(App.icooRules[i].rules[r]);
                                if (App.icooRules[i].rules[r].showarea) {

                                    to_push.showarea = true;
                                }
                            }
                        }
                        App.icooBackgroundRules.push(to_push);
                    }
                }
            }
            for (var i = 0; i < App.icooBackgroundRules.length; i++) {
                for (var j = 0; j < App.icooRules.length; j++) {

                    if (App.icooRules[j].selector.startsWith(App.icooBackgroundRules[i].main + " ") || App.icooRules[j].selector == '.IE') {
                        App.icooBackgroundRules[i].rules.push({
                            selector: App.icooRules[j].selector.replace(App.icooBackgroundRules[i].main + " ", "").trim(),
                            rules: App.icooRules[j].rules
                        });
                    }
                }
            }
            for (var i = 0; i < App.icooBackgroundRules.length; i++) {
                var dummy_div = $('<div data-mode="image" data-src="' + App.icooBackgroundRules[i].url + '" class="icoonies"></div> ')
                App.renderIcoo(dummy_div, App.icooBackgroundRules[i].rules, App.icooBackgroundRules[i].main);


            }

        }
        , cssParser: function (rules, item, options, svg) {
            if (rules) {
                var css = [];
                for (var i = 0; i < rules.length; i++) {
                    var attributes = rules[i];

                    if (attributes.css && !attributes.background) {
                        if (options.target.data('mode') && options.target.data('mode') == 'image') {
                            var element_style = item.attr('style');
                            if (!element_style) {
                                element_style = '';
                            }
                            element_style += attributes.key + ':' + attributes.value + ';';
                            item.attr('style', element_style);
                        }
                    }
                    else if (attributes.embedstyle) {
                        var style_node = null;
                        if (svg && svg.find("style").length == 0) {
                            svg.append('<style></style>');
                            style_node = svg.find("style");
                        }
                        else if (svg && svg.find("style").length > 0) {
                            style_node = svg.find("style");
                        }

                        var embed_styles = attributes.value.split(',');



                        for (var j = 0; j < embed_styles.length; j++) {
                            var style_name = embed_styles[j].trim().toLowerCase();
                            if (App.icooSvgStyles[style_name]) {
                                style_node.append(App.icooSvgStyles[style_name]);
                            }
                        }
                    }
                    else if (!attributes.background) {

                        item.attr(attributes.key, attributes.value);
                    }
                }

            }
        }
        , icooParser: function () {
            if (App.css_download < App.css_length) return;
            $('.icoonies').each(function () {
                $(this).removeClass('icoonies');
                App.renderIcoo($(this), App.icooRules);
            });



            setTimeout(function () {

                for (var i = 0; i < App.icooBackgroundRules.length; i++) {
                    if (App.icooBackgroundRules[i].showarea) {
                        $(App.icooBackgroundRules[i].main).addClass('icoo-showarea').data('src', App.icooBackgroundRules[i].url);

                    }
                    if ($.browser.msie) {
                        $(App.icooBackgroundRules[i].main).addClass('IE');
                    }

                }


            }, 500);


            $(document).on('icooniesAppend', '.icoonies', function () { App.renderIcoo($(this), App.icooRules); });

            $(document).on('click', '.icoo-showarea', icoo.showPreview);


        }
        , renderIcoo: function (icooElement, icorules, force_class_name, preview) {


            icooElement.removeClass('icoonies');
            var data_classList = icooElement.data('class') || '';
            var classList = (icooElement.attr('class') || ' ').split(/\s+/);
            icooElement.data('mode', icooElement.data('mode') || App.options.mode);
            var preserveAspectRatio = icooElement.data('position') || 'xMinYMin';
            var icoonies_obj = icooElement;
            var options = {
                target: icooElement,
                classList: icooElement.attr('class').split(/\s+/),
                dataClassList: data_classList,
                preserveAspectRatio: icooElement.data('position') || 'xMinYMin',
                showArea: icooElement.data('showarea') || icooElement.hasClass('icoo-showarea') || false,
                icooCss: App.icooCss,
                svg_outer: ''
            }

            var svgUrl = icooElement.data('src') || 'icoonies-not-found';
            if (svgUrl == 'icoonies-not-found') return;
            $.ajax({
                options: options,
                url: svgUrl,
                dataType: 'text',
                async: false,

                success: function (data) {
                    App.svgparser(data, this, icorules, force_class_name, preview);

                },
                error: function (e) {
                    App.svgparser(Base64.decode(App.noimage_encoded), this, icorules, force_class_name, preview);
                }
            });

        }

        , svgparser: function (data, me, icorules, force_class_name, preview) {


            me.options.svg_outer = '';
            var svg = $('<div></div>');
            if (me.options.target.prop("tagName").toLowerCase() != 'img') {
                svg.append($(me.options.target[0].outerHTML).append(data));
            }
            else {
                svg.append(data)
            }

            if (!svg.find('svg')[0]) {
                me.options.target.remove();
                return;
            }
            var svg_class = '';
            if (me.options.showArea) {
                if (preview) {
                    me.options.target.data("mode", "svg");
                }
                else {
                    me.options.target.addClass('icoo-showarea');
                }
            }
            if ($.browser.msie && me.options.target.data('mode') == 'image') {
                svg_class = 'IE ';
            }
            if (me.options.target.prop("tagName").toLowerCase() == 'img') {
                svg.find('svg').attr('class', me.options.classList.join(' '))
                if (svg.find('svg').attr('class')) {
                    svg_class += svg.find('svg').attr('class')
                }
            }

            svg_class += ' ' + me.options.dataClassList;

            svg.find('svg').attr('class', svg_class.trim());
            var areaindex = 1;
            //ciclo su tutti i nodi dell'svg
            svg.find('svg').find('*').each(function () {
                if ($(this).prop("tagName").toLowerCase() == 'defs' ||
                    $(this).prop("tagName").toLowerCase() == 'g') {
                    return;
                }
                if (preview) {
                    $(this).attr('id', 'icoo-previewarea-' + areaindex++);
                } else {
                    if (!$(this).attr('id')) {
                        $(this).attr('id', 'icoo-area-' + areaindex++);
                    }
                }
                if (preview) {
                    $(this).attr('onclick', "icoo.previewTitleClick(evt)");
                    $(this).attr('oldfill', App.getRandomColor());
                    $(this).attr('oldstroke', "#9B007E");
                    $(this).attr('oldstrokewidth', "2");
                    if (!$(this).attr('fill')) {
                        $(this).attr('fill', "black");
                    }
                    if (!$(this).attr('stroke')) {
                        $(this).attr('stroke', "black");
                    }
                    if (!$(this).attr('stroke-width')) {
                        $(this).attr('stroke-width', "0");
                    }
                    $(this).append('<title>' + $(this).attr('id').replace("icoo-previewarea-", "icoo-area-") + '</title>');
                }

            });

            for (var rule = 0; rule < icorules.length ; rule++) {
                try {
                    var css_rule = icorules[rule];
                    svg.find(css_rule.selector).each(function () {
                        var element = $(this);
                        App.cssParser(css_rule.rules, $(this), me.options, svg.find('svg'));
                    });
                }
                catch (e) {

                }
            }


            svg.find('svg').removeAttr('width').removeAttr('height');
            svg = svg.find('svg');
            if (svg[0].outerHTML) {
                me.options.svg_outer = svg[0].outerHTML;
            }
            else {
                if (svg[0].xml) {
                    me.options.svg_outer = svg[0].xml;
                }
                else {
                    me.options.svg_outer = $('<object></object>').append(svg[0]).html();
                }
            }
            me.options.svg_outer = $(me.options.svg_outer);
            if (me.options.target.prop("tagName").toLowerCase() != 'img') {
                me.options.svg_outer.addClass('zindex-area');
            }
            if (me.options.svg_outer[0].outerHTML) {
                me.options.svg_outer = me.options.svg_outer[0].outerHTML;
            }
            else {

                if (me.options.svg_outer[0].xml) {
                    me.options.svg_outer = me.options.svg_outer[0].xml;
                }
                else {

                    me.options.svg_outer = $('<object></object').append(svg[0]).html();
                }
            }




            switch (me.options.target.data('mode')) {
                case "image":
                    var encoded_string = 'data:image/svg+xml;base64,' + Base64.encode(App.webkitNamespaceBugWorkaround(me.options.svg_outer));
                    if (me.options.target.prop("tagName").toLowerCase() == 'img') {

                        me.options.target.attr('src', encoded_string);
                    }
                    else {

                        if (force_class_name) {
                            $('head').append('<style> ' + force_class_name + ' { background-image:url(' + encoded_string + ') !important; }    </style>');
                        } else {
                            var random_id = "icoonies_" + Math.ceil(Math.random() * 10000000);
                            $('head').append('<style id="' + random_id + '"> .' + random_id + ' { background-image:url(' + encoded_string + '); background-repeat:no-repeat; }   @media screen\0 { .' + random_id + ' { background-size:100%;  } }</style>');
                            me.options.target.addClass(random_id);
                        }
                    }
                    break;
                default:
                    if (me.options.target.prop("tagName").toLowerCase() == 'img') {
                        var object = $('<object class="obj"></object>');
                        if (!preview) {
                            if (me.options.showArea) {
                                object.addClass("icoo-showarea");
                                object.attr("data-src", me.options.target.data("src"));
                            }
                        }
                        object.append($(me.options.svg_outer));
                        object.insertBefore(me.options.target);
                        me.options.target.remove();
                    }
                    else {

                        if (!me.options.target.hasClass('icoonies-relative')) {
                            me.options.target.addClass('icoonies-relative');
                        }
                        me.options.svg_outer = $(me.options.svg_outer).clone();
                        me.options.svg_outer.attr('class', (('icoonies-bg' + ((me.options.showArea) ? " zindex-area" : "")) + ' ' + this.options.dataClassList).trim());

                        if (me.options.svg_outer[0].outerHTML) {
                            me.options.svg_outer = me.options.svg_outer[0].outerHTML;
                        }
                        else {

                            if (me.options.svg_outer[0].xml) {
                                me.options.svg_outer = me.options.svg_outer[0].xml;
                            }
                            else {
                                me.options.svg_outer = new XMLSerializer().serializeToString(me.options.svg_outer[0])
                            }
                        }

                        me.options.target.append(App.webkitNamespaceBugWorkaround(me.options.svg_outer));

                    }
            }
        }
        , previewTitleClick: function (evt) {

            var target = $(evt.target);
            var tostroke = target.attr("oldstroke").toString();
            var tostrokew = target.attr("oldstrokewidth").toString();
            var tofill = target.attr("oldfill").toString();
            target.attr("oldfill", target.attr("fill").toString());
            target.attr("fill", tofill);
            target.attr("oldstroke", target.attr("stroke").toString());
            target.attr("stroke", tostroke);
            target.attr("oldstrokewidth",
            target.attr("stroke-width").toString());
            target.attr("stroke-width", tostrokew);
        }
        , showPreview: function (e) {
            if ($('#icoo-img-modal').length == 0) {
                $('body').append($('<div class="icoo-modal-opacity" style="display:none;"><div class="icoo-modal"><a class="icoo-close-modal" href="">close</a><div class="icoo-overflow-modal"><p>Point your mouse over the image to see the different areas. Click over the area to see the form.</p><div class="icoo-aree-modal" id="icoo-img-modal"></div></div></div></div>'));

                $('.icoo-close-modal').on('click', function () {
                    $('.icoo-modal-opacity').hide();
                    return false;
                });
            }
            e.preventDefault();
            $('#icoo-img-modal').empty().append('<img id="icoo-preview-img" class="icoo-preview" data-src="' + $(this).data('src') + '"  data-mode="svg" " data-showarea="true" />')
            App.renderIcoo($('#icoo-preview-img'), App.icooRules, "", true);
            $('.icoo-modal-opacity').show();


        }
        , webkitNamespaceBugWorkaround: function (pText) {
            var lText = pText.replace(/\ xlink=/g, " xmlns:xlink=", "g");
            lText = lText.replace(/\ href=/g, " xlink:href=", "g");
            return lText;
        }
    }

    return App;
})(document, window, jQuery);

