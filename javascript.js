        // AOS Init
        AOS.init({ duration: 900, once: false });

        // Navbar toggle
        const toggleBtn = document.querySelector('.toggle_btn');
        const toggleIcon = document.querySelector('.toggle_btn i');
        const dropMenu = document.querySelector('.dropdown_menu');

        toggleBtn.onclick = function () {
            dropMenu.classList.toggle('open');
            const isOpen = dropMenu.classList.contains('open');
            toggleIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
        };

        // Close dropdown on link click
        document.querySelectorAll('.dropdown_menu a').forEach(link => {
            link.addEventListener('click', () => {
                dropMenu.classList.remove('open');
                toggleIcon.className = 'fa-solid fa-bars';
            });
        });

        // About tabs
        function openTab(event, tabId) {
            document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
            event.currentTarget.classList.add('active');
        }

        // Learn more toggle (services)
        document.querySelectorAll('.learn-more').forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                const card = this.closest('.service-card');
                const more = card.querySelector('.more-text');
                if (more.style.display === 'none' || more.style.display === '') {
                    more.style.display = 'inline';
                    this.textContent = 'Show less';
                } else {
                    more.style.display = 'none';
                    this.textContent = 'Learn more';
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 60) {
                navbar.style.background = 'rgba(6,7,10,0.97)';
            } else {
                navbar.style.background = 'rgba(6,7,10,0.8)';
            }
        });
