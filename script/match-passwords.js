const pswrdInputGroup = document.querySelectorAll(".password-input-group");
const cPswrdGroup = pswrdInputGroup[1];
const pswrd = pswrdInputGroup[0].querySelector("input");
const cPswrd = pswrdInputGroup[1].querySelector("input");

let cPswrdTouched = false;

function togglePasswordError() {
    if (pswrd.value === cPswrd.value) {
        cPswrdGroup.classList.remove("password-error-input");
        return true;
    } else {
        cPswrdGroup.classList.add("password-error-input");
        return false;
    }
}

cPswrd.addEventListener("input", () => {
    !cPswrdTouched ? (cPswrdTouched = true) : "";
    togglePasswordError();
});

pswrd.addEventListener("input", () => {
    if (
        pswrd.value.length >= pswrd.minLength &&
        cPswrdTouched &&
        cPswrd.value.length > 1
    ) {
        togglePasswordError();
    }
});

document.querySelector("form").addEventListener("submit", (e) => {
    if (!togglePasswordError()) {
        e.preventDefault();
    }
});
