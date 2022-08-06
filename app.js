// alert("Hello Iam Working");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

leftBtn.addEventListener("click",
    function (event) {
        const leftScroll = document.querySelector(".productToSilde");
       leftScroll.scrollLeft -= 1100;
        event.preventDefault();
    });

rightBtn.addEventListener("click",
    function (event) {
        const rightScroll = document.querySelector(".productToSilde");
        rightScroll.scrollLeft += 1100;
        event.preventDefault();
    });

const leftBtn2 = document.querySelector(".l-btn-2");
const rightBtn2 = document.querySelector(".r-btn-2");

leftBtn2.addEventListener("click",
    function (event) {
        const leftScroll = document.querySelector(".productToSilde-2");
       leftScroll.scrollLeft -= 1100;
        event.preventDefault();
    });

rightBtn2.addEventListener("click",
    function (event) {
        const rightScroll = document.querySelector(".productToSilde-2");
        rightScroll.scrollLeft += 1100;
        event.preventDefault();
    });