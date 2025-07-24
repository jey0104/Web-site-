<<<<<<< HEAD
// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.navigation a');

    function highlightNavigation() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // YouTube play button functionality
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', function() {
            alert('Redirecting to Kun Agüero\'s YouTube Channel!');
            // In a real implementation, this would open the YouTube channel
            // window.open('https://youtube.com/channel/YOUR_CHANNEL_ID', '_blank');
        });
    }

    // Blog read more button functionality
    const readMoreBtn = document.querySelector('.read-more-btn');
    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', function() {
            alert('Read the full blog post about Kun\'s F1 Dream!\n\n"Kun\'s F1 Dream: From Football to Formula 1"\n\nSergio "Kun" Agüero is about to live out a childhood dream. Before the start of the Mexican Grand Prix, Kick has arranged something very special. Kun will take the wheel of an actual Formula 1 car and complete a lap around the track.');
        });
    }

    // Customize button functionality
    const customizeButtons = document.querySelectorAll('.customize-btn');
    customizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productType = this.parentElement.querySelector('.product-image i').className;
            let productName = 'Product';
            
            if (productType.includes('tshirt')) {
                productName = 'Jersey';
            } else if (productType.includes('hat')) {
                productName = 'Cap';
            } else if (productType.includes('running')) {
                productName = 'Sports Pants';
            }
            
            alert(`Customize your ${productName}! \nFeatures coming soon:\n• Choose colors\n• Add custom text\n• Select size\n• Preview design`);
        });
    });

    // Social media icons functionality
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.querySelector('i').className;
            let platformName = 'Social Media';
            
            if (platform.includes('facebook')) {
                platformName = 'Facebook';
            } else if (platform.includes('twitter')) {
                platformName = 'Twitter';
            } else if (platform.includes('instagram')) {
                platformName = 'Instagram';
            }
            
            alert(`Follow Kun Agüero on ${platformName}!`);
            // In a real implementation, these would link to actual social media pages
        });
    });

    // Add loading animation for hero image
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        heroImage.addEventListener('load', function() {
            this.style.opacity = '0';
            this.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 100);
        });
    }

    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        
        if (hero && heroContent) {
            const rate = scrolled * -0.5;
            heroContent.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add counter animation for King's League section
    function animateCounter() {
        const leagueSection = document.querySelector('.kings-league');
        const rect = leagueSection.getBoundingClientRect();
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            // Add some dynamic content or animation here
            leagueSection.classList.add('animated');
        }
    }

    window.addEventListener('scroll', animateCounter);

    // Mobile menu toggle (for responsive design)
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollY = window.scrollY;
    });
=======
// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.navigation a');

    function highlightNavigation() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // YouTube play button functionality
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', function() {
            alert('Redirecting to Kun Agüero\'s YouTube Channel!');
            // In a real implementation, this would open the YouTube channel
            // window.open('https://youtube.com/channel/YOUR_CHANNEL_ID', '_blank');
        });
    }

    // Blog read more button functionality
    const readMoreBtn = document.querySelector('.read-more-btn');
    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', function() {
            alert('Read the full blog post about Kun\'s F1 Dream!\n\n"Kun\'s F1 Dream: From Football to Formula 1"\n\nSergio "Kun" Agüero is about to live out a childhood dream. Before the start of the Mexican Grand Prix, Kick has arranged something very special. Kun will take the wheel of an actual Formula 1 car and complete a lap around the track.');
        });
    }

    // Customize button functionality
    const customizeButtons = document.querySelectorAll('.customize-btn');
    customizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productType = this.parentElement.querySelector('.product-image i').className;
            let productName = 'Product';
            
            if (productType.includes('tshirt')) {
                productName = 'Jersey';
            } else if (productType.includes('hat')) {
                productName = 'Cap';
            } else if (productType.includes('running')) {
                productName = 'Sports Pants';
            }
            
            alert(`Customize your ${productName}! \nFeatures coming soon:\n• Choose colors\n• Add custom text\n• Select size\n• Preview design`);
        });
    });

    // Social media icons functionality
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.querySelector('i').className;
            let platformName = 'Social Media';
            
            if (platform.includes('facebook')) {
                platformName = 'Facebook';
            } else if (platform.includes('twitter')) {
                platformName = 'Twitter';
            } else if (platform.includes('instagram')) {
                platformName = 'Instagram';
            }
            
            alert(`Follow Kun Agüero on ${platformName}!`);
            // In a real implementation, these would link to actual social media pages
        });
    });

    // Add loading animation for hero image
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        heroImage.addEventListener('load', function() {
            this.style.opacity = '0';
            this.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 100);
        });
    }

    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        
        if (hero && heroContent) {
            const rate = scrolled * -0.5;
            heroContent.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add counter animation for King's League section
    function animateCounter() {
        const leagueSection = document.querySelector('.kings-league');
        const rect = leagueSection.getBoundingClientRect();
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            // Add some dynamic content or animation here
            leagueSection.classList.add('animated');
        }
    }

    window.addEventListener('scroll', animateCounter);

    // Mobile menu toggle (for responsive design)
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollY = window.scrollY;
    });

    // 多言語辞書
    const translations = {
        en: {
            'site-title': 'Kuni Sports',
                    'nav-home': 'Home',
        'nav-channels': 'Channels',
        'nav-blog': 'Blog',
        'nav-shop': 'Shop',
        'nav-contact': 'Contact',
                    'hero-title': 'Welcome to Kuni Sports',
        'hero-desc': 'The official website of Kun Agüero - Football Legend',
        'hero-features': 'Watch live matches, read exclusive blog posts, shop official merchandise, and connect with Kun\'s latest adventures in gaming and motorsports.',
            'live-badge': 'Live',
            'league-title': "King's League: July 24",
            'league-team': 'Kuni Sports',
            'league-desc': 'Watch the exciting match live!',
                    'youtube-title': 'Kun Agüero',
        'youtube-label': 'YouTube',
        'blog-card-title': 'Latest Blog Post',
        'blog-card-desc': 'Kun\'s F1 Dream: From Football to Formula 1',
        'blog-label': 'BLOG',
        'shop-title': 'Kuni Shop',
            'customize-jersey': 'Customize',
            'customize-cap': 'Customize',
            'customize-pants': 'Customize',
            'contact-title': 'CONTACT US:'
        },
        es: {
            'site-title': 'Kuni Deportes',
                    'nav-home': 'Inicio',
        'nav-channels': 'Canales',
        'nav-blog': 'Blog',
        'nav-shop': 'Tienda',
        'nav-contact': 'Contacto',
                    'hero-title': 'Bienvenido a Kuni Deportes',
        'hero-desc': 'El sitio oficial de Kun Agüero - Leyenda del fútbol',
        'hero-features': 'Mira partidos en vivo, lee posts exclusivos del blog, compra mercancía oficial y conéctate con las últimas aventuras de Kun en gaming y deportes de motor.',
            'live-badge': 'En Vivo',
            'league-title': 'King\'s League: 24 de Julio',
            'league-team': 'Kuni Deportes',
            'league-desc': '¡Mira el emocionante partido en vivo!',
                    'youtube-title': 'Kun Agüero',
        'youtube-label': 'YouTube',
        'blog-card-title': 'Último Post del Blog',
        'blog-card-desc': 'El Sueño F1 de Kun: Del Fútbol a la Fórmula 1',
        'blog-label': 'BLOG',
        'shop-title': 'Tienda Kuni',
            'customize-jersey': 'Personalizar',
            'customize-cap': 'Personalizar',
            'customize-pants': 'Personalizar',
            'contact-title': 'CONTÁCTANOS:'
        },
        fr: {
            'site-title': 'Kuni Sports',
                    'nav-home': 'Accueil',
        'nav-channels': 'Chaînes',
        'nav-blog': 'Blog',
        'nav-shop': 'Boutique',
        'nav-contact': 'Contact',
                    'hero-title': 'Bienvenue sur Kuni Sports',
        'hero-desc': 'Le site officiel de Kun Agüero - Légende du football',
        'hero-features': 'Regardez des matchs en direct, lisez des articles de blog exclusifs, achetez des produits officiels et connectez-vous aux dernières aventures de Kun dans le gaming et les sports automobiles.',
            'live-badge': 'En direct',
            'league-title': 'King\'s League : 24 juillet',
            'league-team': 'Kuni Sports',
            'league-desc': 'Regardez le match passionnant en direct !',
                    'youtube-title': 'Kun Agüero',
        'youtube-label': 'YouTube',
        'blog-card-title': 'Dernier Article de Blog',
        'blog-card-desc': 'Le Rêve F1 de Kun: Du Football à la Formule 1',
        'blog-label': 'BLOG',
        'shop-title': 'Boutique Kuni',
            'customize-jersey': 'Personnaliser',
            'customize-cap': 'Personnaliser',
            'customize-pants': 'Personnaliser',
            'contact-title': 'CONTACTEZ-NOUS :'
        }
    };

    function setLanguage(lang) {
        const dict = translations[lang] || translations['en'];
        Object.keys(dict).forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.textContent = dict[id];
            }
        });
    }

    // 言語切り替え
    const langSelect = document.getElementById('language-select');
    setLanguage('en'); // デフォルト英語
    langSelect.addEventListener('change', function() {
        setLanguage(this.value);
    });
>>>>>>> 44c4be2 (多言語対応・デザイン修正)
}); 