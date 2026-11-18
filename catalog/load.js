console.log("CATALOG LOAD: Reading URL params.");
var catalog_params = new URLSearchParams(document.location.search);
var current_catalog_index = 0;
var current_catalog_title = catalog_params.get("title");
var got_current_catalog = false;

var got_current_catalog_item = true;
var current_catalog_item_id = catalog_params.get("item_id");
var current_catalog_item_title = catalog_params.get("item_title");

String.prototype.catalog_title_format = function() {
    return this.toUpperCase().replaceAll(' ', '_');
}

full_catalog.forEach(catalog => {
    if (catalog.title.catalog_title_format() === current_catalog_title.catalog_title_format()) {
        got_current_catalog = true;
        console.log("CATALOG LOAD: Successfully got catalog.");
    }
    else if (!got_current_catalog) {
        current_catalog_index += 1;
    }
});

var current_catalog = full_catalog[current_catalog_index];

if (current_catalog.alphabetical == true) {
    console.log("CATALOG LOAD: Storing alphabetically...");
    current_catalog.items.sort((a, b) => {
        return a.title === b.title ? 0 : (a.title > b.title ? 1 : -1);
    });
}

console.log("CATALOG LOAD: Get item by ID...");
var current_catalog_item = current_catalog.items[current_catalog_item_id];
if (current_catalog_item == undefined) {
    console.log("CATALOG LOAD: ID is bad. Get item by name...");
    got_current_catalog_item = false;
    current_catalog_item_id = 0;
    current_catalog.items.forEach(item => {
        if (item.title.catalog_title_format() === current_catalog_item_title.catalog_title_format()) {
            got_current_catalog_item = true;
        }
        else if (!got_current_catalog_item) {
            current_catalog_item_id += 1;
        }
    });
    current_catalog_item = current_catalog.items[current_catalog_item_id];
    if (!got_current_catalog_item) {
        console.log("CATALOG LOAD: Could not get item.");
    }
}
