/* ================= FILTERING LOGIC ================= */
filterSelection("all")

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("gallery-item");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
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

// Active Button Logic
var btnContainer = document.getElementsByClassName("filters")[0];
var btns = btnContainer.getElementsByClassName("filter-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    if(current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}

/* ================= LIGHTBOX LOGIC (FAIL-SAFE) ================= */
// We use "Event Delegation" here. Instead of adding a listener to every image,
// we listen to the grid container. If you click ANYTHING inside the grid
// that happens to be an image, the lightbox opens.

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const grid = document.getElementById('gallery-grid');

grid.addEventListener('click', function(e) {
    // Check if the clicked element is an Image
    if(e.target.tagName === 'IMG') {
        lightbox.style.display = 'flex';
        lightboxImg.src = e.target.src;
    }
});

// Close Lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Close if clicked outside the image
lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
