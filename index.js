$(window).scroll(function () {
    if ($(window).scrollTop() >= ($('.six-section > .container').offset().top - $(window).height() * 1 / 3)) {
        $('.amusic').css({
            transform: 'translateY(0px)',
            opacity: 1,
    })

    }
    else {
        $('.amusic').css({
            transform: 'translateY(-100px)',
            opacity: 0,
        })
    }

})
$(window).scroll(function () {
    if ($(window).scrollTop() >= ($('.six-section > .container').offset().top - $(window).height() * 1 / 3)) {
        $('.aset').css({
            transform: 'translateY(0px)',
            opacity: 1,
    })

    }
    else {
        $('.aset').css({
            transform: 'translateY(100px)',
            opacity: 0,
        })
    }

})