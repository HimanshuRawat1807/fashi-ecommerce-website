
// ************************************************
// carousel sliding
const productItems = document.querySelectorAll(".product_item")
const carousel = document.querySelector(".product_crousel");
const carouselbtns = document.querySelectorAll(".product_btn")
const cardWidth = carousel.querySelector(".product_item").offsetWidth;
console.log(cardWidth);
// console.log(carousel);



// *************************************
// button carousel effect
carouselbtns.forEach((btn) => {
    btn.addEventListener("click",()=>{
        carousel.scrollLeft += btn.id === "left" ? -cardWidth : cardWidth;
        console.log(btn.id);
    });
});






let isDragging = false, startX, scrollLeftwidth;

const dragStart = (e) => {
    isDragging = true;
    // console.log(e.pageX);
    carousel.classList.add("dragging")
    startX = e.pageX;
    scrollLeftwidth = carousel.scrollLeft;
}


const dragging = (e) => {
    if (isDragging) {
        carousel.scrollLeft = scrollLeftwidth - (e.pageX - startX);
        // console.log(`${carousel.scrollLeft} ${e.pageX} ${startX}`);
    } else {

    }
}
const dragStop = (e) => {
    carousel.classList.remove("dragging");
    isDragging = false;
}

carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("mousemove", dragging)
carousel.addEventListener("mouseup", dragStop)


// Fetching  the data
fetch("./data.json")
    .then((Res) => Res.json())
    .then((data) => {
        showData(data)
    })

// Show Data
function showData(data) {
    // console.log(data);

    for (let i = 0; i < productItems.length; i++) {
        productItems[i].firstElementChild.firstElementChild.setAttribute(`src`, `${data.products[i].images}`);
        productItems[i].lastElementChild.children[0].innerHTML = data.products[i].category;
        productItems[i].lastElementChild.children[1].innerHTML = data.products[i].title;
        productItems[i].lastElementChild.children[2].innerHTML = `$${data.products[i].price}.00`;
    }
}



