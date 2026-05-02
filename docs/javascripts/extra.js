$(document).ready(function(){
    $windowWidth = $(window).width();
    if ($windowWidth <= 1200) {
        var altezza = $("li.md-nav__item--active nav").height();
        $("li.md-nav__item.md-nav__item--active.md-nav__item--nested + li").css("margin-top", altezza);
    }
});