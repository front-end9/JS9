$(function () {

    let last;

    $(".js-tabs").on("click", function (event) {
        let el = event.target;
        $(last).slideToggle();
        if ($(el).hasClass("tab__title")) {
            last = $(el).parent().siblings(".tab__body");
            $(el).parent().siblings(".tab__body").slideToggle();
        }
    });

});