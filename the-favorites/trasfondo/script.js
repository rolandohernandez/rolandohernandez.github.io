! function(a) {
    "use strict";
    a.fn.story = function(b) {
        var c = a.extend({
                pageClass: "page",
                initPage: "page-1",
                navClass: "option"
            }, b),
            d = function() {
                var b = a(this);
                b.parent("." + c.pageClass).fadeOut("fast", function() {
                    a(this).siblings("#" + b.attr("path")).fadeIn("slow")
                })
            };
        return this.each(function() {
            var b = a(this);
            b.children("." + c.pageClass).each(function() {
                a(this).children("." + c.navClass).click(d)
            }).hide(), b.children("#" + c.initPage).fadeIn("slow")
        })
    }
}(jQuery);