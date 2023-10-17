var logOut = 1;
var verificationDetails = {
    "VUserName" : "",
    "VUserId" : ""
}
var uploadData = {
    "userName" : "",
    "userId" : "",
    "mobileNumber" : "",
    "description" : "",
    "patientFile" : "",
}
var verificationStatus = false;
var uploadStatus = false;

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
    $("#userName").val() != "" ? uploadData.userName = $("#userName").val() : $(currentElement).parent('.submit-button').siblings("p").removeClass("dsp-none");
    $("#userId").val() != "" ? uploadData.userId =  $("#userId").val() : $(currentElement).parent('.submit-button').siblings("p").removeClass("dsp-none");
    $("#mobileNumber").val() != "" ? uploadData.mobileNumber = $("#mobileNumber").val() : $(currentElement).parent('.submit-button').siblings("p").removeClass("dsp-none");
    $("#description").val() != "" ? uploadData.description = $("#description").val() : $(currentElement).parent('.submit-button').siblings("p").removeClass("dsp-none");
    $("#patientFile").prop('files').length != 0 ? uploadData.patientFile = $("#patientFile").prop('files') : $(currentElement).parent('.submit-button').siblings("p").removeClass("dsp-none");

    if ($("#userName").val() != "" && $("#userId").val() != "" && $("#mobileNumber").val() != "" && $("#description").val() != "" && $("#patientFile").val() != ""){
        uploadStatus = true
        $(currentElement).parent('.submit-button').siblings("p").addClass("dsp-none")
    }

    if (uploadStatus) {
        $(currentElement).parent('.submit-button').addClass("dsp-none")
        console.log($(currentElement).parent('.submit-button'))
        $(".confirmation").removeClass("dsp-none")
    }
}
function uploadNew() {
    window.location.href = 'organisationPortal.html'
}