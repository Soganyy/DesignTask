// Get all the nav links
const navLinks = document.getElementsByClassName("nav-link");

// Add click event listener to each nav link
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function(event) {
    // Prevent default link behavior
    event.preventDefault();

    // Remove active class from all nav links
    for (let j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove("active");
    }

    // Add active class to the clicked nav link
    this.classList.add("active");

    // Get the content element and update its text based on the clicked link
    const contentElement = document.getElementById("text");
    contentElement.textContent = `This is the content for ${this.textContent}.`;
  });
}
