$(document).ready(function () {
    console.log('yes')
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky');
            
        } else {
            $('.navbar').removeClass('sticky')
        }
    })
})