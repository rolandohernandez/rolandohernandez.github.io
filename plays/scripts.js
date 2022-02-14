(function () {
    // Menu
    $('.button').on('click', function () {
        $('.button').removeClass('is-active');
        $(this).addClass('is-active');
        $('.collection').removeClass('is-active');
        $($(this).data('collection')).addClass('is-active');

        // Hidden backlog
        if ($(this).hasClass('heading')) {
            $(this).addClass('is-backlog');
            $(this).text('Backlog');
            $('.subheading, .menu').hide();
        }
    });

    // Player
    var player = document.querySelector('#player');
    var games = document.querySelectorAll('.game');

    games.forEach(game => {
        game.onclick = function () {
            var dataAudio = this.getAttribute('data-audio');
            if (player.getAttribute('data-playing') != dataAudio) {
                player.setAttribute('data-playing', dataAudio);
                player.src = 'audios/' + dataAudio;
            }

            var activeEl = document.querySelector('.game.is-active');
            if (activeEl) activeEl.classList.remove('is-active');

            if (player.paused) {
                player.play();
                this.classList.add('is-active');
            } else {
                player.pause()
            }
        };
    });
})();