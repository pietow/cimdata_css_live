$(function () {

    function showImage(index) {
        const thumb = $(".thumb").eq(index)
        const big = thumb.data("big");

        $('#main-img').fadeOut(150, function() {
            $(this).attr("src", big).fadeIn(150); 
        })

        $(".thumb").removeClass("active");
        thumb.addClass("active");
    }

    $(".thumb").on("click", function() {
        const index = $(".thumb").index(this)
        showImage(index)
    })

    // Links Button
    $('#prev').on("click", function() {
        let index = $(".thumb.active").index() - 1
        showImage(index)
    })

    // Rechter Button
    $('#next').on("click", function() {
        let index = $(".thumb.active").index() + 1
        console.log(index)
        showImage(index)
    })
})