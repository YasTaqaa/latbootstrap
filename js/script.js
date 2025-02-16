

document.addEventListener("DOMContentLoaded", function () {
    const scrollElements = document.querySelectorAll(".scroll-animation");

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const elementOutofView = (el) => {
        const elementBottom = el.getBoundingClientRect().bottom;
        return (
            elementBottom < 0 || el.getBoundingClientRect().top > window.innerHeight
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("scrolled");
    };

    const hideScrollElement = (element) => {
        element.classList.remove("scrolled");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else if (elementOutofView(el)) {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", handleScrollAnimation);
    handleScrollAnimation();
});


// Wrap every letter in a span
document.addEventListener("DOMContentLoaded", function () {
    var textWrapper = document.querySelector('#header .p-heading .text-wrapper');

    if (textWrapper) {
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({ loop: true })
            .add({
                targets: '#header .p-heading .letter',
                rotateY: [-90, 0],
                duration: 1500,
                delay: (el, i) => 300 * i
            })
            .add({
                targets: '#header .p-heading',
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1000
            });
    }
});
