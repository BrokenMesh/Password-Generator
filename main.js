
function validateForm(){
    var pass = document.forms["form"]["pass"].value;
    var name = document.forms["form"]["name"].value;

    var hash = CryptoJS.SHA3(pass+name).toString();

    //document.write(encrypted)
    document.getElementById("genpass").innerHTML = "!" + hash.slice(0,18);
}
