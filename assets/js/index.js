//TODO: OPEN MENU
function openMenu() {
    e$("#menu-icon").hide()
    e$("#x-icon").show()
    e$(".mobile-menu").addClass("show-menu")
}

//TODO: CLOSE MENU
function closeMenu() {
    // TODO:
    //CODE HERE
    e$("#menu-icon").show()
    e$("#x-icon").hide()
    e$(".mobile-menu").removeClass("show-menu")
}