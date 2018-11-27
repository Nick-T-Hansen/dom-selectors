// question 1: Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

const headerEl = document.querySelector(".article__header").textContent = ("Welcome to the Nick Hansen Blog!");


// question 2: Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

let headerEl2 = document.querySelectorAll(".article__header");
for (i = 0; i < headerEl2.length; i++) {
    headerEl2[i].classList.add("important");
}

// question 3: Obtain a reference the element with a class of dashed and remove it. NOT WORKING

let classElDash = document.querySelector(".dashed");
classElDash.classList.remove("dashed");

// question 4: Obtain a reference the element with a class of article_footer and add the class of goldenrod it. NOT WORKING

let footerEl = document.querySelector(".article__footer");
footerEl.classList.add("goldenrod");
