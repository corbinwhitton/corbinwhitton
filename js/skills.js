async function fetchHtmlAsText(url) {
    const response = await fetch(url);
    return await response.text();
}

async function addPhotographyList() {
    const contentDiv = document.getElementById("photography-list");
    contentDiv.innerHTML = await fetchHtmlAsText("skills/photography.html");
    var offset = 4;
    var minShown = 4 * offset;
    var items = document.getElementsByClassName('photography-list-image').length * offset;
    var photographyImages = document.getElementsByClassName('photography-list-image');
    for (var i = 0; i < photographyImages.length; i++) {
        photographyImages[i].addEventListener('click', (event) => { addModalToClick(event) }, false);
    }
    var shown = 4 * offset;
    $('#photography-list div').hide();
    $('#photography-list div:lt(' + shown + ')').show();
    $('#show-less-pictures').hide();
    $('#load-more-pictures').click(function () {
        //$('#show-less-pictures').show();
        shown = shown + (12 * offset);
        if (shown < items) { $('#photography-list div:lt(' + shown + ')').show(); }
        else {
            $('#photography-list div:lt(' + items + ')').show();
            $('#show-less-pictures').show();
            $('#load-more-pictures').hide();
        }
    });
    $('#show-less-pictures').click(function () {
        $('#show-less-pictures').hide();
        shown = minShown;
        $('#load-more-pictures').show();
        $('#photography-list div').not(':lt(' + minShown + ')').hide();
    });
}

async function addArtList() {
    // Load the first 3 list items from another HTML file
    const contentDiv = document.getElementById("art-list");
    contentDiv.innerHTML = await fetchHtmlAsText("skills/art.html");
    var offset = 4;
    var minShown = 4 * offset;
    var items = document.getElementsByClassName('art-list-image').length * offset;
    var artImages = document.getElementsByClassName('art-list-image');
    for (var i = 0; i < artImages.length; i++) {
        artImages[i].addEventListener('click', (event) => { addModalToClick(event) }, false);
    }
    var shown = 4 * offset;
    $('#art-list div').hide();
    $('#art-list div:lt(' + shown + ')').show();
    $('#show-less-art').hide();
    $('#load-more-art').click(function () {
        //$('#show-less-art').show();
        shown = shown + (4 * offset);
        if (shown < items) { $('#art-list div:lt(' + shown + ')').show(); }
        else {
            $('#art-list div:lt(' + items + ')').show();
            $('#show-less-art').show();
            $('#load-more-art').hide();
        }
    });
    $('#show-less-art').click(function () {
        $('#show-less-art').hide();
        shown = minShown;
        $('#load-more-art').show();
        $('#art-list div').not(':lt(' + minShown + ')').hide();
    });
}

$(document).ready(async function () {
    addPhotographyList();
    addArtList();
});

function addModalToClick(event) {
    $('#imagepreview').attr('src', event.srcElement.parentElement.parentElement.parentElement.children[0].src.replace(/(\.[\w\d_-]+)$/i, '-lg$1')); // here asign the image to the modal when the user click the enlarge link
};
