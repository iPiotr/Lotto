$(document).ready(function () {
    // make boxes draggable
    $('.box').draggable();

    $("a").click(function () {
        $("div").remove(":contains('box')");
    });

    // make limit portability
    $(".box").draggable({
        containment: "body"
    });

    $(function () {
        $('button').on('click', function () {
            var $sparkLines = $('.box');
            $(".content").append('<div id="id' + ($sparkLines.length + 1) + '" class="box box ui-draggable ui-draggable-handle" style="position: relative;">Some Stuff Here <a href="#" class="close"></a></div>');

        });
    });
});