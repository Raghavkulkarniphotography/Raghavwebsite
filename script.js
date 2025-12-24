function filterSelection(category) {
    var x, i;
    x = document.getElementsByClassName("gallery-item");
    if (category == "all") category = "";
    
    // Loop through all images
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        // If image class matches category, add "show"
        if (x[i].className.indexOf(category) > -1) addClass(x[i], "show");
    }
}

// Helper functions to show/hide
function addClass(element, name) {
    var arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (var i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
}

function removeClass(element, name) {
    var arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (var i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);     
        }
    }
    element.className = arr1.join(" ");
}

// Initialize "all"
filterSelection("all");