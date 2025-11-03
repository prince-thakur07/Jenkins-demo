<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Responsive Website</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary: #667eea;
            --secondary: #764ba2;
            --dark: #2d3748;
            --light: #f7fafc;
            --text: #1a202c;
            --border: #e2e8f0;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--text);
            overflow-x: hidden;
        }

        /* Navigation */
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 2rem;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .logo {
            font-size: 1.8rem;
            font-weight: bold;
            letter-spacing: 1px;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
        }

        .nav-links a {
            color: white;
            text-decoration: none;
            transition: opacity 0.3s;
            cursor: pointer;
        }

        .nav-links a:hover {
            opacity: 0.8;
        }

        .menu-toggle {
            display: none;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
        }

        /* Hero Section */
        .hero {
            height: 100vh;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
            padding: 2rem;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, rgba(255,255,255,0.1), transparent);
            animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(20px, -20px); }
        }

        .hero-content {
            position: relative;
            z-index: 1;
            max-width: 600px;
        }

        .hero h1 {
            font-size: clamp(2.5rem, 10vw, 4rem);
            margin-bottom: 1rem;
            animation: slideUp 0.8s ease-out;
        }

        .hero p {
            font-size: clamp(1rem, 3vw, 1.5rem);
            margin-bottom: 2rem;
            animation: slideUp 0.8s ease-out 0.2s both;
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .cta-btn {
            display: inline-block;
            padding: 1rem 2.5rem;
            background: white;
            color: var(--primary);
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            transition: transform 0.3s, box-shadow 0.3s;
            animation: slideUp 0.8s ease-out 0.4s both;
        }

        .cta-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        /* Features Section */
        .features {
            padding: 4rem 2rem;
            background: var(--light);
        }

        .section-title {
            text-align: center;
            font-size: clamp(2rem, 5vw, 3rem);
            margin-bottom: 3rem;
            color: var(--dark);
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .feature-card {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(102, 126, 234, 0.2);
        }

        .feature-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .feature-card h3 {
            margin-bottom: 0.5rem;
            color: var(--primary);
        }

        /* Gallery Section */
        .gallery {
            padding: 4rem 2rem;
            background: white;
        }

        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .gallery-item {
            aspect-ratio: 1;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            border-radius: 10px;
            overflow: hidden;
            position: relative;
            cursor: pointer;
            transition: transform 0.3s;
        }

        .gallery-item:hover {
            transform: scale(1.05);
        }

        .gallery-item-content {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 1.2rem;
        }

        /* Footer */
        footer {
            background: var(--dark);
            color: white;
            text-align: center;
            padding: 2rem;
            margin-top: 4rem;
        }

        /* Mobile Menu */
        @media (max-width: 768px) {
            .menu-toggle {
                display: block;
            }

            .nav-links {
                display: none;
                position: absolute;
                top: 70px;
                left: 0;
                right: 0;
                flex-direction: column;
                background: linear-gradient(135deg, var(--primary), var(--secondary));
                padding: 1rem;
                gap: 1rem;
            }

            .nav-links.active {
                display: flex;
            }

            .nav-links a {
                padding: 0.5rem;
            }

            .features-grid {
                grid-template-columns: 1fr;
            }

            .gallery-grid {
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            }
        }

        @media (max-width: 480px) {
            nav {
                padding: 1rem;
            }

            .logo {
                font-size: 1.3rem;
            }

            .hero {
                height: auto;
                min-height: 80vh;
            }

            .features, .gallery {
                padding: 2rem 1rem;
            }

            .section-title {
                margin-bottom: 2rem;
            }

            .gallery-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav>
        <div class="logo">Portfolio</div>
        <ul class="nav-links" id="navLinks">
            <a onclick="scrollToSection('hero')">Home</a>
            <a onclick="scrollToSection('features')">Features</a>
            <a onclick="scrollToSection('gallery')">Gallery</a>
            <a onclick="scrollToSection('footer')">Contact</a>
        </ul>
        <button class="menu-toggle" id="menuToggle">☰</button>
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="hero">
        <div class="hero-content">
            <h1>Welcome to Your Creative Space</h1>
            <p>Build amazing experiences with responsive design</p>
            <a href="#features" class="cta-btn">Explore More</a>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features" id="features">
        <h2 class="section-title">Why Choose Us</h2>
        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">⚡</div>
                <h3>Fast Performance</h3>
                <p>Optimized for speed and efficiency across all devices</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">📱</div>
                <h3>Fully Responsive</h3>
                <p>Works perfectly on mobile, tablet, and desktop screens</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🎨</div>
                <h3>Modern Design</h3>
                <p>Beautiful UI with smooth animations and transitions</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🔒</div>
                <h3>Secure & Reliable</h3>
                <p>Built with security and reliability in mind</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🚀</div>
                <h3>Easy to Deploy</h3>
                <p>Quick setup and deployment in minutes</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">💡</div>
                <h3>Innovative Features</h3>
                <p>Cutting-edge technology for modern web needs</p>
            </div>
        </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery" id="gallery">
        <h2 class="section-title">Our Work</h2>
        <div class="gallery-grid">
            <div class="gallery-item">
                <div class="gallery-item-content">Project 1</div>
            </div>
            <div class="gallery-item">
                <div class="gallery-item-content">Project 2</div>
            </div>
            <div class="gallery-item">
                <div class="gallery-item-content">Project 3</div>
            </div>
            <div class="gallery-item">
                <div class="gallery-item-content">Project 4</div>
            </div>
            <div class="gallery-item">
                <div class="gallery-item-content">Project 5</div>
            </div>
            <div class="gallery-item">
                <div class="gallery-item-content">Project 6</div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="footer">
        <p>&copy; 2025 Your Website. All rights reserved.</p>
    </footer>

    <script>
        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Smooth scroll function
        function scrollToSection(id) {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                navLinks.classList.remove('active');
            }
        }

        // Close menu on link click
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    </script>
</body>
</html>
