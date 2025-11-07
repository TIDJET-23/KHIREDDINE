(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    
    // Vérifier si l'élément theme-btn existe avant d'ajouter un écouteur d'événement
    const themeBtn = document.querySelector(".theme-btn");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
        });
    }

    // Animated roles functionality
    function initAnimatedRoles() {
        const roles = ['Backend Development', 'DevSecOps Engineering', 'Frontend Development', 'Monitoring Systems', 'Cloud Solutions', 'Security Engineering'];
        let currentRoleIndex = 0;
        let currentText = '';
        let isDeleting = false;
        const typingSpeed = 150;
        const deletingSpeed = 75;
        const pauseDuration = 1500;

        function updateText() {
            const element = document.getElementById('animated-roles');
            if (!element) {
                return;
            }

            const currentRole = roles[currentRoleIndex];

            if (!isDeleting) {
                // Typing - add one character
                if (currentText.length < currentRole.length) {
                    currentText = currentRole.substring(0, currentText.length + 1);
                    element.textContent = currentText;
                    setTimeout(updateText, typingSpeed);
                } else {
                    // Finished typing, pause before deleting
                    setTimeout(() => {
                        isDeleting = true;
                        updateText();
                    }, pauseDuration);
                }
            } else {
                // Deleting - remove one character
                if (currentText.length > 0) {
                    currentText = currentText.substring(0, currentText.length - 1);
                    element.textContent = currentText;
                    setTimeout(updateText, deletingSpeed);
                } else {
                    // Finished deleting, move to next role
                    isDeleting = false;
                    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                    setTimeout(updateText, typingSpeed);
                }
            }
        }

        // Start the animation when page loads
        setTimeout(updateText, 1000); // Start after 1 second
    }

    // Wait for DOM to be fully loaded before initializing animation
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAnimatedRoles);
    } else {
        initAnimatedRoles(); // DOM is already loaded
    }
})();