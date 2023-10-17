var logOut = 1;

function logout1(currentElement) {
    $(currentElement).addClass("dsp-none");
    $(currentElement).siblings(".dropdowm").removeClass("dsp-none");
}
function logout2() {
    window.location.href = '../loginPage/loginPage.html'
}