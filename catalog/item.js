var buttons_div = document.getElementById("buttons");

WEBChangeTitle(current_catalog_item.title + " (" + current_catalog.title + ")");

document.getElementById("catalog_title").innerHTML = current_catalog_item.title;
document.getElementById("catalog_desc").innerHTML = current_catalog_item.description;

var image = new Image();
image.onload = function() {
    document.getElementById("logo-or-preview").appendChild(image);
}
image.src = "catalog/images/" + current_catalog_name + "/" + current_catalog_id + ".png"

current_catalog_item.buttons.forEach(button => {
    var div_href = document.createElement("a");
    div_href.href = button.href;
    {
        var button_elm = document.createElement("button");
        // button_elm.className = "bigbtn";
        button_elm.style.fontSize = "20px";
        button_elm.innerHTML = button.text;
        button_elm.innerHTML = button.text;
        div_href.appendChild(button_elm);
    }
    buttons_div.appendChild(div_href);
    buttons_div.appendChild(document.createElement("br"));
});
