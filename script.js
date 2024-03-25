function countWords(text) {
    return text.trim().split(/\s+/).length;
}

document.addEventListener("DOMContentLoaded", function() {
    var offerToDepartmentTextarea = document.getElementById("offer-to-department");
    var minWordCount = 50;

    offerToDepartmentTextarea.addEventListener("input", function() {
        var wordCount = countWords(this.value);

        // Display word count
        var wordCountDisplay = document.getElementById("word-count-display");
        if (wordCountDisplay) {
            wordCountDisplay.textContent = wordCount + " words";
        }

        // Check if word count meets the minimum requirement
        if (wordCount < minWordCount) {
            // Add visual indication for insufficient word count (you can customize this part)
            offerToDepartmentTextarea.style.borderColor = "red";
        } else {
            // Remove visual indication if word count meets the requirement
            offerToDepartmentTextarea.style.borderColor = "";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var offerToDepartmentTextarea = document.getElementById("reason-to-join");
    var minWordCount = 70;

    offerToDepartmentTextarea.addEventListener("input", function() {
        var wordCount = countWords(this.value);

        // Display word count
        var wordCountDisplay = document.getElementById("word-count-display");
        if (wordCountDisplay) {
            wordCountDisplay.textContent = wordCount + " words";
        }

        // Check if word count meets the minimum requirement
        if (wordCount < minWordCount) {
            // Add visual indication for insufficient word count (you can customize this part)
            offerToDepartmentTextarea.style.borderColor = "red";
        } else {
            // Remove visual indication if word count meets the requirement
            offerToDepartmentTextarea.style.borderColor = "";
        }
    });
});

