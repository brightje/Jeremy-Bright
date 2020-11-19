

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

    document.getElementById("download-btn").addEventListener("click", function() {
        // Generate download of text-file.txt
        let text = document.getElementById("text-val").value;
        let filename = document.getElementById("filename.txt").value;

        download(filename, text);
    }, false)
}


