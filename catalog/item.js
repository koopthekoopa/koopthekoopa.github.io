var buttons_div = document.getElementById("buttons");

String.prototype.catalog_href_item_format = function(file_name) {
    if (file_name.startsWith("http") || file_name.startsWith("www.")) {
        return file_name;
    }
    else {
        return "downloads/catalog/" + this.catalog_title_format() + "/" + file_name;
    }
}

String.prototype.catalog_image_format = function(name) {
    return "catalog/images/" + this.catalog_title_format() + "/" + name.catalog_title_format() + ".png";
}

WEBChangeTitle(current_catalog_item.title + " (" + current_catalog.title + ")");

document.getElementById("catalog_title").innerHTML = current_catalog_item.title;
document.getElementById("catalog_desc").innerHTML = current_catalog_item.description;

console.log("CATALOG ITEM: Image source: " + current_catalog_title.catalog_image_format(current_catalog_item.title));
var image = new Image();
image.onload = function() {
    document.getElementById("logo-or-preview").appendChild(image);
    console.log("CATALOG ITEM: Image found and loaded!");
}
image.onerror = function() {
    console.log("CATALOG ITEM: Image cannot be found or loaded!");
}
image.src = current_catalog_title.catalog_image_format(current_catalog_item.title);
 
current_catalog_item.buttons.forEach(button => {
    var div_href = document.createElement("a");
    div_href.href = current_catalog_title.catalog_href_item_format(button.href);
    console.log("CATALOG ITEM: HREF source: " + div_href.href);
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
