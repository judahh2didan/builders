// Optional JavaScript for interactivity

document.querySelector('.contact-btn').addEventListener('click', () => {
  alert('Contact us feature coming soon!');
});

function toggleDropdown(button) {
    const content = button.nextElementSibling;
    content.style.display = (content.style.display === "block") ? "none" : "block";
}