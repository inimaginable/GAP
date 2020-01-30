var modal = document.getElementById('gap_b');
var modalContent = document.getElementById('gap_k');
var btn = document.getElementById('gap_a');

btn.onclick = function () {
    if (modal.style.display === "none" || modal.style.display === "") {
        modal.style.display = "block";

        var randomString = makeid();
        var content = Get("html/Content4.html?_=" + randomString); //Replace the URL with your specific URL

        modalContent.innerHTML = content4;

    } else if (modal.style.display === "block") {
        modal.style.display = "none";
    }
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

function closeModal() {
    modal.style.display = "none";
}

function httpGet(url) {
    var request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send(null);

    return request.responseText;
}
var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
    });
}