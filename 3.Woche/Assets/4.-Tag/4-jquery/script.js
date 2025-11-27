$(function() {


    function updateBar(index) {
        $(".bar-item").removeClass("active")
        $(".bar-item").eq(index).addClass("active")
    }

    updateBar(0)

    $(".thumb").on("click", function(){
        const big = $(this).data("big");

        $("#main-img").fadeOut(150, function() {
            console.log('test')
            $(this).attr("src", big).fadeIn(150);
        })

        $(".thumb").removeClass("active")
        $(this).addClass("active")

        const index = $(".thumb").index(this)
        console.log(index)
        updateBar(index)
    })
})