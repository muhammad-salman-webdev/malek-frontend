const navigatorBtns = document.querySelectorAll(".profile-navigation-list li ");

function updateNavigatorBtns(clicked_btn) {
    navigatorBtns.forEach((btn, btnIndex) => {
        btnIndex === clicked_btn
            ? btn.classList.add("active")
            : btn.classList.remove("active");
    });
}

navigatorBtns.forEach((btn, btn_index) => {
    btn.addEventListener("click", () => updateNavigatorBtns(btn_index));
});

// -----------------------

window.addEventListener("scroll", () => {
    const scrollNumbers = window.scrollY;
    if (scrollNumbers < 600) {
        updateNavigatorBtns(0);
    } else if (scrollNumbers < 1400) {
        updateNavigatorBtns(1);
    } else if (scrollNumbers < 2100) {
        updateNavigatorBtns(2);
    } else if (scrollNumbers < 3150) {
        updateNavigatorBtns(3);
    } else {
        updateNavigatorBtns(4);
    }
});
