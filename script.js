// Theme Toggle
                    
const themeToggleButton = document.querySelector('.theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
});

// Skills Carousel


// Typing Effect
const typingElement = document.getElementById('typing');
const text = "  A passionate  fullStack Developer    who believes in the power of technology to make a positive impact on individuals and communities.";
let index = 0;

function typeText() {
  if (index < text.length) {
    typingElement.textContent += text[index];
    index++;
    setTimeout(typeText, 100);
  }
}
typeText();


// FAQ Dropdown Functionality
                    
                      
document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
  
      // Toggle the display of the answer
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });


  function toggleDescription(button) {
    const extraInfo = button.nextElementSibling;
    const isVisible = extraInfo.style.display === 'block';
    extraInfo.style.display = isVisible ? 'none' : 'block';
    button.textContent = isVisible ? 'Read More' : 'Read Less';
  }


// Select all buttons and add event listeners
document.querySelectorAll('.query-btn').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;

    // Toggle the display state of the answer
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});
