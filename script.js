// Monthly plan prices

function monthly() {

    document.getElementById("studentPrice").innerHTML = "99";
    document.getElementById("proPrice").innerHTML = "299";
    document.getElementById("businessPrice").innerHTML = "599";

    changeDuration("/month");
}


// Yearly plan prices

function yearly() {

    document.getElementById("studentPrice").innerHTML = "999";
    document.getElementById("proPrice").innerHTML = "2999";
    document.getElementById("businessPrice").innerHTML = "5999";

    changeDuration("/year");
}


// Change month/year text

function changeDuration(duration) {

    var priceText = document.querySelectorAll(".price small");

    for (var i = 0; i < priceText.length; i++) {
        priceText[i].innerHTML = duration;
    }
}


// Select plan

function choosePlan(plan) {

    alert(
        "You have selected the " +
        plan +
        " plan of CloudBox!"
    );
}