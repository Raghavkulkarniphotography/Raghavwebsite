/* ================= FILTERING LOGIC ================= */
function filterSelection(category) {
    var x, i;
    x = document.getElementsByClassName("gallery-item");
    if (category == "all") category = "";
    
    // Loop through all gallery items
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        // If the item has the category class, add "show"
        if (x[i].className.indexOf(category) > -1) {
            addClass(x[i], "show");
        }
    }
    
    // Update active button state
    var btnContainer = document.getElementsByClassName("filters")[0];
    var btns = btnContainer.getElementsByClassName("filter-btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(){
            var current = document.getElementsByClassName("active");
            if (current.length > 0) { 
                current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active";
        });
    }
}

// Helper: Add Class
function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Helper: Remove Class
function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);     
        }
    }
    element.className = arr1.join(" ");
}

/* ================= SCROLL ANIMATIONS ================= */
// This adds a CSS class when elements come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-animate');
        }
    });
});

// Initialize on page load
filterSelection("all");