var logOut = 1;
var verificationStatus = false;
var verificationStatus2 = false;
var uploadStatus = false;
var reportGenerationType = "AI generated report";
var dataConsent = {}
var searchData = {
    "reportRelates" : "",
    "startDate" : ""
}
var verificationDetails = {
    "VUserName" : "",
    "VUserId" : ""
}
var uploadData = {
    "userBp" : "",
    "userTemp" : "",
    "SpO2" : "",
    "description" : "",
    "patientFile" : "",
}

function logout1(currentElement) {
    $(currentElement).addClass("dsp-none");
    $(currentElement).siblings(".dropdowm").removeClass("dsp-none");
}
function logout2() {
    window.location.href = '../loginPage/loginPage.html'
}
function verify(currentElement) {
    $("#VUserName").val() != "" ? verificationDetails.VUserName = $("#VUserName").val(): $(currentElement).parent('.search-button').siblings("p").removeClass("dsp-none");
    $("#VUserId").val() != "" ? verificationDetails.VUserId = $("#VUserId").val() : $(currentElement).parent('.search-button').siblings("p").removeClass("dsp-none");
    if ($("#VUserName").val() != "" && $("#VUserId").val() != "" ) {
        verificationStatus = true;
        $('.submit-button').siblings("p").addClass("dsp-none")
        $(currentElement).parent('.search-button').siblings("p").addClass("dsp-none")
    }
    if (verificationStatus) {
        $(".patient-search").addClass("dsp-none")
        $(".patient-img").removeClass("dsp-none")
        $(".patient-details").removeClass("dsp-none")
    }
}
function submit(currentElement) {
    if (!verificationStatus) {
        $(currentElement).parent('.submit-button').siblings("p").removeClass("dsp-none");
        return "";
    }
    $("#userBp").val() != "" ? uploadData.userBp = $("#userBp").val() : $(currentElement).parent('.submit-button').siblings("p").removeClass("dsp-none");
    $("#userTemp").val() != "" ? uploadData.userTemp =  $("#userTemp").val() : $(currentElement).parent('.submit-button').siblings("p").removeClass("dsp-none");
    $("#SpO2").val() != "" ? uploadData.SpO2 = $("#SpO2").val() : $(currentElement).parent('.submit-button').siblings("p").removeClass("dsp-none");
    $("#description").val() != "" ? uploadData.description = $("#description").val() : $(currentElement).parent('.submit-button').siblings("p").removeClass("dsp-none");
    $("#patientFile").prop('files').length != 0 ? uploadData.patientFile = $("#patientFile").prop('files') : $(currentElement).parent('.submit-button').siblings("p").removeClass("dsp-none");

    if ($("#userBp").val() != "" && $("#userTemp").val() != "" && $("#SpO2").val() != "" && $("#description").val() != "" && $("#patientFile").val() != ""){
        uploadStatus = true
        $(currentElement).parent('.submit-button').siblings("p").addClass("dsp-none")
    }

    if (uploadStatus) {
        $(currentElement).parent('.submit-button').addClass("dsp-none")
        console.log($(currentElement).parent('.submit-button'))
        $(".confirmation").removeClass("dsp-none")
    }
}
function generateReport(currentElement) {
    $("#reportRelates").val() !="" ? searchData.reportRelates = $("#reportRelates").val() : $(currentElement).parents(".search-button").siblings("p").removeClass("dsp-none");
    $("#startDate").val() !="" ? searchData.startDate = $("#startDate").val() : $(currentElement).parents(".search-button").siblings("p").removeClass("dsp-none");
    if ($("#reportRelates").val() !="" && $("#startDate").val() !="") {
        verificationStatus2 = true;
        $(currentElement).parents(".search-button").siblings("p").addClass("dsp-none");
    }
    if (verificationStatus2) {
        $(".report-cntr").removeClass("dsp-none")
    }
}
function reportType(currentElement) {
    if (!verificationStatus2) {
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