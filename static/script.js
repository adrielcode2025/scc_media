document.addEventListener('DOMContentLoaded', () => {
    
    // --- DEBUGGING START ---
    console.log("Script loaded successfully");

    const hamburger = document.getElementById('hamburgerBtn');
    const navLinks = document.getElementById('navLinks');

    console.log("Hamburger Element:", hamburger); // Should not be 'null'
    console.log("NavLinks Element:", navLinks);   // Should not be 'null'

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            console.log("Hamburger clicked!"); // THIS MUST APPEAR WHEN CLICKED
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    } else {
        console.error("ERROR: Could not find hamburgerBtn or navLinks in the HTML.");
    }
    // --- DEBUGGING END ---

    // ... (Keep the rest of your form logic below here)
});
