// Hamburger menu toggle functions
function hamburg() {
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(0px)';
}

function cancel() {
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(-500px)';
}

// Texts for typewriter effect
const texts = [
    "DEVELOPER",
    "DESIGNER",
    "PROGRAMMER",
];

// Speed of typing effect
const speed = 100;

const textElements = document.querySelector('.typewriter-text');

let textIndex = 0;  // Track the current text in the array
let characterIndex = 0;  // Track the current character being typed

// Typewriter effect function
function typeWriter() {
    if (characterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed); // Call recursively to type the next character
    } else {
        setTimeout(eraseText, 1000); // Wait for 1 second before erasing the text
    }
}

// Erase text function
function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1); // Remove one character
        setTimeout(eraseText, 50); // Call recursively to remove the next character
    } else {
        textIndex = (textIndex + 1) % texts.length; // Move to the next text, looping back to the first after the last
        characterIndex = 0; // Reset character index for the next text
        setTimeout(typeWriter, 500); // Wait for 0.5 seconds before starting the typing again
    }
}

// Initialize the typewriter effect when the window loads
window.onload = typeWriter;
