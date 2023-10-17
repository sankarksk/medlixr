var currentLoginType = "Patient login"
var processType = "Log in"
var data = {
    "email" : "",
    "password" : ""
}

function loginType(currentElement) {
    if (processType != "Log in") {
        return "";
    }
    currentLoginType = $(currentElement).text();
    console.log(currentLoginType)
    currentLoginType != "Patient login" ? $(".sign-up").addClass("dsp-none") : $(".sign-up").removeClass("dsp-none");
    $(currentElement).parent().find(".option").removeClass("selected");
    $(currentElement).addClass("selected");
}

function login() {
    var response = true;
    $("#e-mail").val() != "" ? data.email = $("#e-mail").val(): response = false;
    $("#password").val() != "" ? data.password = $("#password").val(): response = false;
    processType == "Sign Up" ? $("#userName").val() != "" ? data.email = $("#userName").val() : response = false : "";
    processType == "Sign Up" ? $("#mobile").val() != "" ? data.mobile = $("#emobile").val() : response = false : "";
    console.log(data)
    currentLoginType == "Patient login" && response ? window.location.href = '../patientPortal/patientPortal.html' : "";
    currentLoginType == "Doctor login" && response ? window.location.href = '../doctorPortal/doctorPortal.html' : "";
    currentLoginType == "Organisation login" && response ? window.location.href = '../organisationPortal/organisationPortal.html' : ""; 
}

function registration(currentElement) {
    processType = $(currentElement).text()
    if (processType == "Sign up") {
        $(".signup").removeClass("dsp-none")
        $(".login-section").find("h2").text("Sign Up")
        $(".option-bar").css("opacity","0.5")
        $(".login").text("Sign up")
        var code = $(".sign-up").html().split("?")
        code[0] = "Already existing"
        code = code.join("?")
        $(".sign-up").html(code)
        $(".sign-up-button").text("Log in")
    } else {
        $(".signup").addClass("dsp-none")
        $(".login-section").find("h2").text("Log in")
        $(".option-bar").removeAttr("style")
        $(".login").text("Log in")
        var code = $(".sign-up").html().split("?")
        code[0] = "New user"
        code = code.join("?")
        $(".sign-up").html(code)
        $(".sign-up-button").text("Sign up")
    }
}