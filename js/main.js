document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu-item");
  const sections = document.querySelectorAll("section");

  // Function to handle the active class change in the side menu
  const updateActiveSection = () => {
    let currentSection = null;

    // Check which section we are in based on the scroll position
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        currentSection = section;
      }
    });

    // Update the active class in the menu
    menuItems.forEach((item) => {
      item.classList.remove("active");
      if (currentSection && item.getAttribute("href").substring(1) === currentSection.id) {
        item.classList.add("active");
      }
    });
  };

  // Handle the active class change when a menu item is clicked
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      menuItems.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
    });
  });

  // Smooth scrolling when clicking on a link
  document.querySelectorAll(".menu-item a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 20, // Ajusta el desplazamiento si es necesario
          behavior: "smooth",
        });
      }
    });
  });

  // Detect scrolling to update the active class
  window.addEventListener("scroll", updateActiveSection);
  
  // Call the function when the page loads to set the initial state
  updateActiveSection();
});


// Update university grades based on the selected year
function showUniversityYearGrades() {
  var selectedYear = document.getElementById("universityYear").value;
  
  // Hide all grade divs
  document.getElementById("firstYearGrades").style.display = "none";
  document.getElementById("secondYearGrades").style.display = "none";
  document.getElementById("thirdYearGrades").style.display = "none";
  
  // Show selected year's grades
  if (selectedYear === "1") {
    document.getElementById("firstYearGrades").style.display = "block";
  } else if (selectedYear === "2") {
    document.getElementById("secondYearGrades").style.display = "block";
  } else if (selectedYear === "3") {
    document.getElementById("thirdYearGrades").style.display = "block";
  }
}

// Highlight the title of the active section
const accordionButtons = document.querySelectorAll('.accordion-button');
accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    accordionButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});



document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission
  const successMessage = document.getElementById('successMessage');
  successMessage.classList.remove('d-none'); // Show success message
  successMessage.scrollIntoView({ behavior: 'smooth' });

  // Clear form
  e.target.reset();
  setTimeout(() => {
    successMessage.classList.add('d-none'); // Hide success message after 5 seconds
  }, 5000);
});
