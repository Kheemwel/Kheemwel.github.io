function showPrompt() {
    prompt("Enter your name:");
}

function downloadFileFromFolder() {
    var filename = 'SciQuiz.apk'; // Replace with the actual path and filename of the file in your website folder
    window.location.href = filename;
}

function downloadFileFromLink() {
    const link = document.createElement('a');
    link.href = 'https://github.com/Kheemwel/SciQuiz/releases/download/v1.1/SciQuiz.apk'; // Replace with the actual URL of the file
    link.click();
}