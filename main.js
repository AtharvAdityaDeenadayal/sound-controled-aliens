function start() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/WaIVqHL-y/model.json", modelReady);

}
function modelReady() {
    console.log("model is ready");
    classifier.classify(gotResults);
}

function gotResults(error, result) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(result);
        label = result[0].label;
        accuracy = (result[0].confidence * 100).toFixed(2);
        document.getElementById("result_label").innerHTML = "I Can Hear " + label;
        document.getElementById("result_confidence").innerHTML = "Accuracy : " + accuracy + "%";

        img1 = document.getElementById("alien1");
        img2 = document.getElementById("alien2");
        img3 = document.getElementById("alien3");
        img4 = document.getElementById("alien4");
        if (label == "clap") {
            img1.src = "aliens-01.gif";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }

        else if (label == "bell") {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.gif";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }

        else if (label == "snap") {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.gif";
            img4.src = "aliens-04.png";
        }

        else {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.gif";
        }
    }
}