(function () {
    // Menu
    $('.menu-item').on('click', function () {
        $('.menu-item').removeClass('is-active');
        $(this).addClass('is-active');
        $('.collection').removeClass('is-active');
        $($(this).data('collection')).addClass('is-active');
    });
})();