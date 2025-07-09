var i = 0;
function gallery__more() {
    if (!i) {
        document.getElementById("pictures").style.display = "flex";
        document.getElementById("pictures2").style.display = "flex";
        document.getElementById("gallery__more").innerHTML = "See less";
        i = 1;
    }
    else {
        document.getElementById("pictures").style.display = "none";
        document.getElementById("pictures2").style.display = "none";
        document.getElementById("gallery__more").innerHTML = "See more";
        i = 0;
    }
}
var n = 0;
function partners__more() {
    if (!n) {
        document.getElementById("partners").style.display = "flex";
        document.getElementById("partners__more").innerHTML = "Close";
        n = 1;
    }
    else {
        document.getElementById("partners").style.display = "none";
        document.getElementById("partners__more").innerHTML = "All partners";
        n = 0;
    }
}