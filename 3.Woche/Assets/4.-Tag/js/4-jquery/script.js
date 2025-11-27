$(function() {
    $(".thumb").on("click", function(){
        const big = $(this).data("big");

        $("#main-img").fadeOut(150, function() {
            console.log('test')
            $(this).attr("src", big).fadeIn(150);
        })

        $(".thumb").removeClass("active")
        $(this).addClass("active")
    })
})