/**
 * Author: Logan Edwards
 * License: MIT
 * Date: 10/10/15
 */
(function ($) {
    'use strict';
    $.fn.tabgroup = function (opts) {
        // override defaults
        var settings = $.extend({
            tabClass: '.tab',
            tabContentClass: '.tab-content'
        }, opts);

        var content = this.find(settings.tabContentClass);
        var tabs = this.find(settings.tabClass);
        // bind the click handler to each tab
        tabs.each(function (tab) {
            $(this).bind('click', tabSelected);
        });

        function tabSelected () {
            var idx = tabs.index(this);
            content.filter('.active').toggleClass('active');
            $(content[idx]).toggleClass('active');

        }

    };
}(jQuery));
