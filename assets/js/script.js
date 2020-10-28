$(document).ready(function() {
    $('#play').click(function() {
        $(".inner").animate({
            right: 0,
        }, 1000, function() {
            $(".inner").animate({
                bottom: 0,
            }, 1000, function() {
                $(".inner").animate({
                    left: 0,
                }, 1000, function() {
                    $(".inner").animate({
                        top: 50,
                    }, 1000, function() {
                        $(this).css('left', '');
                        $(this).css('top', '50px');
                        $(this).css('right', '');
                        $(this).css('bottom', '');
                        $('.inner').animate({
                            right: "50px",
                        }, 1000, function() {
                            $(this).css('left', '');
                            $(this).css('right', '50px');
                            $(this).css('top', '');
                            $(this).css('bottom', '300px');
                            $('.inner').animate({
                                bottom: "50px",
                            }, 1000, function() {
                                $(this).css('left', '');
                                $(this).css('top', '');
                                $(this).css('right', "50px");
                                $(this).css('bottom', '50px');
                                $(".inner").animate({
                                    left: 50,
                                }, 1000, function() {
                                    $(this).css('left', '50px');
                                    $(this).css('top', '');
                                    $(this).css('right', "");
                                    $(this).css('bottom', '50px');
                                    $(".inner").animate({
                                        top: 100,
                                    }, 1000, function() {
                                        $(this).css('left', '');
                                        $(this).css('top', '100px');
                                        $(this).css('right', "300px");
                                        $(this).css('bottom', '');
                                        $('.inner').animate({
                                            right: 100
                                        }, 1000, function() {
                                            $(this).css('left', '');
                                            $(this).css('top', '');
                                            $(this).css('right', "100px");
                                            $(this).css('bottom', '250px');
                                            $('.inner').animate({
                                                bottom: '100px',
                                            }, 1000, function() {
                                                $(this).css('left', '250px');
                                                $(this).css('top', '');
                                                $(this).css('right', "");
                                                $(this).css('bottom', '100px');
                                                $(".inner").animate({
                                                    left: 100,
                                                }, 1000, function() {
                                                    $(this).css('left', '100px');
                                                    $(this).css('top', '250px');
                                                    $(this).css('right', "");
                                                    $(this).css('bottom', '');
                                                    $('.inner').animate({
                                                        top: 150,
                                                    }, 1000, function() {
                                                        $(this).css('left', '100px');
                                                        $(this).css('top', '150px');
                                                        $(this).css('right', "");
                                                        $(this).css('bottom', '');
                                                        $('.inner').animate({
                                                            left: 180,
                                                        }, 1000, function() {
                                                            $(this).css('left', '180px');
                                                            $(this).css('top', '150px');
                                                            $(this).css('right', "");
                                                            $(this).css('bottom', '');
                                                            $('.inner').animate({
                                                                top: 175,
                                                            }, 500, function() {
                                                                alert("Animation Complete.")
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
    $('#pause').click(function() {
        $('.inner').stop();
    })
});