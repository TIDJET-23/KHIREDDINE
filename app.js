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
        const roles = ['UI/UX Design', 'Infographie', 'Graphic Design', 'Frontend Development', 'Backend Development', 'DevSecOps Engineering', 'Monitoring Systems', 'Cloud Solutions', 'Security Engineering'];
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

    // Design gallery filter
    function initDesignFilter() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const cards = document.querySelectorAll('.design-card');

        // Show only UI by default
        cards.forEach(card => {
            if (card.dataset.category === 'infographie') {
                card.style.display = 'none';
            }
        });
        // Set first button (UI) as active
        filterBtns[0].classList.add('active-filter');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active-filter'));
                btn.classList.add('active-filter');

                const filter = btn.dataset.filter;
                cards.forEach(card => {
                    if (card.dataset.category === filter) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeIn 0.4s ease';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Project modal data
    const projectsData = {
        lens: {
            title: 'LENS - Tender Management System',
            description: 'A web application for managing public tenders — upload, assign, track, and review tender documents.',
            images: [
                { src: 'design/lens/lens-dashboard.png', caption: 'Dashboard - System overview with stats & charts' },
                { src: 'design/lens/lens-upload.png', caption: 'Upload - Tender document upload with progress tracking' },
                { src: 'design/lens/lens-tenders-list.png', caption: 'Tenders List - Assigned tenders management' },
                { src: 'design/lens/lens-tender-detail.png', caption: 'Tender Detail - Document viewer & information form' }
            ]
        },
        dreamhouse: {
            title: 'My Dream House - Interior & Bedding Store',
            description: 'An e-commerce website for custom mattresses, bedding products, and interior design services.',
            images: [
                { src: 'design/dreamhouse/dreamhouse-hero.png', caption: 'Homepage - Hero section with brand presentation' },
                { src: 'design/dreamhouse/dreamhouse-services.png', caption: 'Services - Architecture, Interior Design, Renovation & Consultation' },
                { src: 'design/dreamhouse/dreamhouse-products.png', caption: 'Products - Mattresses & bedding catalog with pricing' },
                { src: 'design/dreamhouse/dreamhouse-gallery.png', caption: 'Gallery - Product showcase & featured video' },
                { src: 'design/dreamhouse/dreamhouse-contact.png', caption: 'Contact - Contact form & business information' }
            ]
        },
        billing: {
            title: 'Billing Management System',
            description: 'A web application for managing bills, invoices, and payments.',
            images: [
                { src: 'design/billing/billing-dashboard.png', caption: 'Dashboard - Overview with statistics' },
                { src: 'design/billing/billing-list.png', caption: 'Billing List - All bills overview' },
                { src: 'design/billing/billing-create.png', caption: 'Create Bill - New billing form' },
                { src: 'design/billing/billing-detail.png', caption: 'Bill Detail - Billing information' },
                { src: 'design/billing/billing-payment.png', caption: 'Payment - Payment processing' }
            ]
        },
        univerjob: {
            title: 'UniverJob - Job Platform Branding',
            description: 'Logo design and brand identity for a job search platform.',
            images: [
                { src: 'design/logos/univerjob/univerjob-logo.png', caption: 'Main Logo' },
                { src: 'design/logos/univerjob/univerjob-icon.png', caption: 'App Icon' },
                { src: 'design/logos/univerjob/univerjob-palette.png', caption: 'Brand Color Palette' }
            ]
        },
        saaoui: {
            title: 'Saaoui PVC & Aluminium',
            description: 'Logo design and business cards for a windows & doors manufacturing company.',
            images: [
                { src: 'design/logos/saaoui/saaoui-logo.png', caption: 'Brand Logo' },
                { src: 'design/logos/saaoui/saaoui-card-front.png', caption: 'Business Card - Front' },
                { src: 'design/logos/saaoui/saaoui-card-back.png', caption: 'Business Card - Back' },
                { src: 'design/logos/saaoui/saaoui-banner.png', caption: 'Promotional Banner' }
            ]
        },
        saby: {
            title: 'Saby Construction',
            description: 'Logo design for a construction company.',
            images: [
                { src: 'design/logos/saby/saby-logo.png', caption: 'Company Logo' }
            ]
        },
        katiconfort: {
            title: 'Kati Confort',
            description: 'Logo design and brand identity concept.',
            images: [
                { src: 'design/logos/katiconfort/katiconfort-logo.png', caption: 'Main Logo' },
                { src: 'design/logos/katiconfort/katiconfort-icon.png', caption: 'Logo Variant' }
            ]
        }
    };

    let currentSlide = 0;
    let currentProject = null;

    window.openProjectModal = function(projectId) {
        currentProject = projectsData[projectId];
        if (!currentProject) return;
        currentSlide = 0;

        document.getElementById('modalTitle').textContent = currentProject.title;
        document.getElementById('modalDescription').textContent = currentProject.description;
        updateSlide();

        document.getElementById('projectModal').classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.closeProjectModal = function() {
        document.getElementById('projectModal').classList.remove('active');
        document.body.style.overflow = '';
    };

    window.changeSlide = function(direction) {
        if (!currentProject) return;
        currentSlide += direction;
        if (currentSlide < 0) currentSlide = currentProject.images.length - 1;
        if (currentSlide >= currentProject.images.length) currentSlide = 0;
        updateSlide();
    };

    function updateSlide() {
        if (!currentProject) return;
        const img = currentProject.images[currentSlide];
        document.getElementById('modalImage').src = img.src;
        document.getElementById('modalCaption').textContent = img.caption;
        document.getElementById('modalCounter').textContent = (currentSlide + 1) + ' / ' + currentProject.images.length;
    }

    document.addEventListener('keydown', function(e) {
        const modal = document.getElementById('projectModal');
        if (!modal.classList.contains('active')) return;
        if (e.key === 'Escape') closeProjectModal();
        if (e.key === 'ArrowLeft') changeSlide(-1);
        if (e.key === 'ArrowRight') changeSlide(1);
    });

    // Wait for DOM to be fully loaded before initializing animation
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initAnimatedRoles();
            initDesignFilter();
        });
    } else {
        initAnimatedRoles();
        initDesignFilter();
    }
})();