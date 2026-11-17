var items_div = document.getElementById("items");
document.getElementById("catalog_title").innerHTML = current_catalog.title;
document.getElementById("catalog_desc").innerHTML = current_catalog.description;

WEBChangeTitle(current_catalog.title);

if (current_catalog.list_font != undefined) {
    items_div.style.fontFamily = current_catalog.list_font;
    items_div.style.fontWeight = "bold";
}

if (current_catalog.type == CATALOG_TYPE_PRETTY) {
    console.log("pretty!!");
    var item_id = 0;
    current_catalog.items.forEach(item => {
        var div_href = document.createElement("a");
        if (item.list_href != undefined) {
            div_href.href = item.list_href;
        }
        else {
            div_href.href = "catalog-item.html?type="+current_catalog_name+"&id="+item_id;
        }
        {
            var div = document.createElement("div");
            div.innerHTML = "<br><h3 style='color:#000000;'>" + item.title + "</h3><p>" + item.list_description + "</p><br>";
            div.style.width = "95%";
            div.style.height = "120px";
            div.style.background = "linear-gradient(to bottom, #abd4fd 5%, #7ba687 100%)";
            div.style.borderRadius = "25px";
            div.style.color = "white";
            div_href.appendChild(div);
        }
        items_div.appendChild(div_href);
        items_div.appendChild(document.createElement("br"));
        item_id += 1;
    });
}
else {
    console.log("lame..."); 

    if (current_catalog.table_names == undefined) {
        // alert("'table_names' is not in the list. this is required for table catalogs!");
        current_catalog.table_names = [ ["title", "Name"], ["list_description", "Description"] ];
    }

    // Setup for table creation
    var items_table = document.createElement("table");
    items_table.style.border = "1px solid black";
    items_div.appendChild(items_table);
    var tr = document.createElement("tr");

    // Create table names
    current_catalog.table_names.forEach(table_headers => {
        console.log("add th for " + table_headers[0]);
        var th = document.createElement("th");
        {
            th.innerHTML = table_headers[1];
            tr.appendChild(th);
        }
    });
    items_table.appendChild(tr);

    // Create table contents
    var item_id = 0;
    current_catalog.items.forEach(item => {
        console.log("add td for " + item.title);
        var tr = document.createElement("tr");
        {
            // HREFs
            if (current_catalog.no_href != true) {
                if (item.list_href != undefined) {
                    tr.className = "hrefOnNewTab"; 
                    tr.dataset.href = item.list_href;
                }
                else {
                    tr.className = "hrefOnCurrentTab";
                    tr.dataset.href = "catalog-item.html?type="+current_catalog_name+"&id="+item_id;
                }
            }
            var th_id = 0;
            current_catalog.table_names.forEach(table_headers => {
                var td = document.createElement("td");
                td.innerHTML = item[table_headers[0]];
                td.style.whiteSpace = "pre-line";
                tr.appendChild(td);
                th_id += 1;
            });
        }
        items_table.appendChild(tr);
        item_id += 1;
    });

    if (current_catalog.no_href != true) {
        var clickables = document.querySelectorAll(".hrefOnCurrentTab");
        for (const clickable of clickables) {
            clickable.addEventListener("click", function() {
                window.location.href = this.dataset.href;
            });
        }

        clickables = document.querySelectorAll(".hrefOnNewTab");
        for (const clickable of clickables) {
            clickable.addEventListener("click", function() {
                window.open(this.dataset.href);
            });
        }
    }
}
