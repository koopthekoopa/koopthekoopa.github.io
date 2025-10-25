topContent = `
<!-- _top.html -->
<link rel="stylesheet" href="assets/css/top.css">
<meta name="viewport" content="width=device-width, initial-scale=0.7" /> <!-- debug -->
<div class="topContent">
    <a href="index.html">Home</a>
    <a href="projects.html">Projects</a>
    <a href="sm64.html">SM64 Resources</a>
    <a href="about.html">About</a>
</div>
`;

bottomContent = `
<div class="bottomContent">
    <br><br><br><br><br><br>
    <center>
        <img src="assets/btn/best_viewed_with_eyes.gif">
        <img src="assets/btn/browser.gif">
        <a href="https://www.mozilla.org/firefox/new"><img src="assets/btn/firefoxget.gif"></a>
        <a href="https://www.mozilla.org/firefox/new"><img src="assets/btn/getmozilla2.gif"></a>
        <a href="https://www.learn-html.org/"><img src="assets/btn/html.gif"></a>
        <img src="assets/btn/linux_powered.gif">
        <img src="assets/btn/made_with_windows.gif">
        <a href="https://web.archive.org/web/19981205060735/http://www.microsoft.com/"><img src="assets/btn/msie2.gif"></a>
        <img src="assets/btn/n64.gif">
        <a href="http://wii.com/"><img src="assets/btn/wii_button.gif"></a>
        <img src="assets/btn/www.gif">
        <p>
            Registered trademarks used for this website's content, such as "Mario" and "Koopa", are owned by their respective owners, like Nintendo.<br>
            I do not make profit out of this website.<br>
            <br>
            2021 - 2025 KoopTheKoopa.
            <br>
            <br>
            <br>
            <br>
            <br>
        </p>
    </center>
</div>
`;

function WEBInit() {
    console.log("Prep start!");

    var topHTML = document.getElementById("topHTML");
    if (topHTML == null) {
        console.log("topHTML err! skip...\n");
    }
    else {
        topHTML.innerHTML = topContent;
    }

    var bottomHTML = document.getElementById("bottomHTML");
    if (bottomHTML == null) {
        console.log("bottomHTML err! skip...\n");
    }
    else {
        bottomHTML.innerHTML = bottomContent;
    }

    console.log("Prep fin!\n");
}


