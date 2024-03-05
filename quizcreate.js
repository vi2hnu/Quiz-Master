var counter = 0;
var x = 0;
var y = 0;
var z = 0;
var mcqlength = 0;
var tflength = 0;
var flength = 0;

function add() {
    var addQuizElement = document.getElementById("add_quiz");
    if (counter == 0) {
        addQuizElement.style.display = "block";
        document.getElementById("new_quiz").innerHTML = "<h3 style='color:black'>Cancel</h3>"
        document.getElementById("select_quiz").style.display = "none";
        counter = 1;
    } else {
        addQuizElement.style.display = "none";
        document.getElementById("new_quiz").innerHTML = "<h3 style='color:black'>Create New quiz</h3>"
        document.getElementById("select_quiz").style.display = "block";
        var mcqElements = document.getElementsByClassName("mcq");
        for (var i = 0; i < mcqElements.length; i++) {
            mcqElements[i].style.display = "none";
        }
        counter = 0;
    }
}

function addQuestion() {
    mcqlength = parseInt(document.getElementById("n_mcq").value);
    tflength = parseInt(document.getElementById("n_tf").value);
    flength = parseInt(document.getElementById("n_fill").value);
    var container = document.getElementById("question_container");

    for (var i = 0; i < mcqlength; i++) {
        var original_mcq = document.getElementById("mcq");
        var mcq = original_mcq.cloneNode(true);
        var mcqId = "mcq" + i;
        mcq.setAttribute('id', mcqId);
        mcq.setAttribute("class", "mcq");
        container.appendChild(mcq);
    }

    for (var i = 0; i < tflength; i++) {
        var original_tf = document.getElementById("true_false");
        var tf = original_tf.cloneNode(true);
        var tfId = "true_false" + i;
        tf.setAttribute('id', tfId);
        tf.setAttribute("class", "true_false");
        container.appendChild(tf);
    }

    for (var i = 0; i < flength; i++) {
        var original_fill = document.getElementById("fill");
        var fill = original_fill.cloneNode(true);
        var fillId = "fill" + i;
        fill.setAttribute('id', fillId);
        fill.setAttribute("class", "fill");
        container.appendChild(fill);
    }

    displaymcq(mcqlength);
}

function displaymcq(mcqlength) {
    document.getElementById("add_quiz").style.display = "none";
    if (x != 0) {
        var p = parseInt(x - 1);
        document.getElementById("mcq" + p).style.display = "none";
    }
    if (x < mcqlength) {
        var div = "mcq" + x;
        document.getElementById(div).style.display = "block";
        x++;
    } else {
        displaytf(tflength);
    }
}

function displaytf(tflength) {
    if (y != 0) {
        var p = parseInt(y - 1);
        document.getElementById("true_false" + p).style.display = "none";
    }
    if (y < tflength) {
        var div = "true_false" + y;
        document.getElementById(div).style.display = "block";
        y++;
    } else {
        displayfill(flength);
    }
}

function displayfill(flength) {
    if (z != 0) {
        var p = parseInt(z - 1);
        document.getElementById("fill" + p).style.display = "none";
    }
    if (z < flength) {
        var div = "fill" + z;
        document.getElementById(div).style.display = "block";
        z++;
    } else {
        window.alert("punda question over");
    }
}

function next() {
    displaymcq(mcqlength);
}
