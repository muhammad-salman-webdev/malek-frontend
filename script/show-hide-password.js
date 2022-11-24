const pswrdInputs = document.querySelectorAll(".password-input-group input");

pswrdInputs.forEach((input) => {
    const showHideText = input.nextElementSibling;
    showHideText.addEventListener("click", () => {
        if (input.type === "password") {
            input.type = "text";
            showHideText.textContent = "Hide";
        } else {
            input.type = "password";
            showHideText.textContent = "Show";
        }
    });
});
