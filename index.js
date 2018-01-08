$(".open-menu").click(function(e) {
    const sibling = $(e.target).siblings(".dropdown");
    const isHidden = sibling.hasClass("dropdown-hidden");
    $(".dropdown").addClass("dropdown-hidden");
    if (isHidden) {
        sibling.removeClass("dropdown-hidden")
    }
})

