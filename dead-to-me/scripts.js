(function () {
    // Selection
    let selections = [];

    $('.character').on('click', function () {
        $(this).toggleClass('active');

        if (selections.includes(this)) {
            selections.splice(selections.indexOf(this), 1);
        } else {
            selections.push(this);
            if (selections.length > 5) {
                var remove = selections.shift();
                $(remove).toggleClass('active');
            }
        }
    });
})();