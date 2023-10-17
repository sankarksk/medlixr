var logOut = 1;
var reportGenerationType = "AI generated report"
var searchData = {
    "reportRelates" : "",
    "startDate" : ""
}
var dataConsent = {}
var verificationStatus = false;

function logout1(currentElement) {
    $(currentElement).addClass("dsp-none");
    $(currentElement).siblings(".dropdowm").removeClass("dsp-none");
}
function logout2() {
    window.location.href = '../loginPage/loginPage.html'
}
function generateReport(currentElement) {
    $("#reportRelates").val() !="" ? searchData.reportRelates = $("#reportRelates").val() : $(currentElement).parents(".search-button").siblings("p").removeClass("dsp-none");
    $("#startDate").val() !="" ? searchData.startDate = $("#startDate").val() : $(currentElement).parents(".search-button").siblings("p").removeClass("dsp-none");
    if ($("#reportRelates").val() !="" && $("#startDate").val() !="") {
        verificationStatus = true;
        $(currentElement).parents(".search-button").siblings("p").addClass("dsp-none");
    }
    if (verificationStatus) {
        $(".results").removeClass("dsp-none")
    }
}
function reportType(currentElement) {
    if (!verificationStatus) {
        return ""
    }
    reportGenerationType = $(currentElement).text()
    $(currentElement).siblings().removeClass("selected")
    $(currentElement).addClass("selected")

    if (reportGenerationType == "Doctors report") {
        $(".ai-report").addClass("dsp-none")
        $(".doctor-report").removeClass("dsp-none")
    } else {
        $(".doctor-report").addClass("dsp-none")
        $(".ai-report").removeClass("dsp-none")
    }
}
function viewDownload(currentElement) {
    window.open("assets/MEDLIXR-text.png")
}
function consentForm(currentElement) {
    $(currentElement).parent(".consent-button").addClass("dsp-none")
    $(currentElement).parent(".consent-button").siblings().removeClass("dsp-none")
    $(currentElement).parent(".consent-button").siblings(".thankyou-msg").addClass("dsp-none")
}
function dataCollection(currentElement) {
    $(currentElement).parent(".consent-button").addClass("dsp-none")
    $(currentElement).parent(".consent-button").siblings(".thankyou-msg").removeClass("dsp-none")
    consentData();
}
function consentData() {
    var keys = ""
    var value = ""
    $(".align").each(function (ele) {
        if ($(this).children().is(':checked')) {
            keys = $(this).siblings()[1]
            value = $(this).siblings()[2]
            dataConsent[$(keys).text()] = $(value).text()
        }
    })
}