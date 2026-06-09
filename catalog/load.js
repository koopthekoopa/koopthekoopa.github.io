var catalog_params = new URLSearchParams(document.location.search);
var current_catalog_index = CATALOG_PROJECTS_BAD;
var current_catalog_name = catalog_params.get("type");

switch (current_catalog_name) {
    case "projects_normal": {
        current_catalog_index = CATALOG_PROJECTS_NORMAL; /* set by default */
        break;
    }
    case "projects_college": {
        current_catalog_index = CATALOG_PROJECTS_COLLEGE;
        break;
    }
    case "sm64_res": {
        current_catalog_index = CATALOG_SM64_RESOURCES;
        break;
    }
    case "vintage_games": {
        current_catalog_index = CATALOG_VINTAGE_GAMES;
        break;
    }
    case "vintage_film": {
        current_catalog_index = CATALOG_VINTAGE_FILM;
        break;
    }
    default: {
        //alert("Invalid catalog type. Fallback to CATALOG_PROJECTS_NORMAL");
        break;
    }
}

var current_catalog = full_catalog[current_catalog_index];