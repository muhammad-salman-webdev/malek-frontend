// Toggle the dropdown profile for a loged In user
const profileDropdown = document.getElementById("profile-dropdown");
const profileDropdownToggler = document.getElementById(
    "profile-dropdown-toggler"
);
const profileOverlay = document.getElementById("profile-dropdown-overlay");

function toggleDropdown() {
    profileOverlay.classList.toggle("d-none");
    profileDropdown.classList.toggle("toggle-profile-dropdown");
}
profileDropdownToggler.addEventListener("click", toggleDropdown);
profileOverlay.addEventListener("click", toggleDropdown);
