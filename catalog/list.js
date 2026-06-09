var items_div = document.getElementById("items");
document.getElementById("catalog_title").innerHTML = current_catalog.title;
document.getElementById("catalog_desc").innerHTML = current_catalog.description;

var id = 0;
current_catalog.items.forEach(item => {
    var item_div_href = document.createElement("a");
    item_div_href.href = "catalog-item.html?type="+current_catalog_name+"&id="+id;
    {
        var item_div = document.createElement("div");
        item_div.innerHTML = "<br><h2 style='color:#000000;'>" + item.title + "</h2><p>" + item.description_short + "</p><br>";
        item_div.style.width = "50%";
        item_div.style.height = "120px";
        item_div.style.background = "linear-gradient(to bottom, #abd4fd 5%, #7ba687 100%)";
        item_div.style.borderRadius = "25px";
        item_div.style.color = "white";
        item_div_href.appendChild(item_div);
    }
    items_div.appendChild(item_div_href);
    id += 1;
});
