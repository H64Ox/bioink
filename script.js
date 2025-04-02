document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const contactForm = document.getElementById('contactForm');

    // Función para manejar el scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Función para el menú móvil
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Animación de elementos al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.product-card, .innovation-item, .technology-card, .step, .business-model-item, .impact-item, .viability-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Inicializar animaciones
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar una vez al cargar la página

    // Manejar el formulario de contacto
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí iría la lógica para enviar el formulario
            // Por ahora, solo mostraremos un mensaje de éxito
            
            const formData = new FormData(contactForm);
            const formValues = {};
            
            formData.forEach((value, key) => {
                formValues[key] = value;
            });
            
            console.log('Formulario enviado:', formValues);
            
            // Mostrar mensaje de éxito
            alert('¡Gracias por contactarnos! Te responderemos a la brevedad.');
            
            // Resetear el formulario
            contactForm.reset();
        });
    }

    // Inicializar animaciones para productos
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });

    // Inicializar animaciones para innovación
    const innovationItems = document.querySelectorAll('.innovation-item');
    innovationItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });

    // Inicializar animaciones para tecnología
    const technologyCards = document.querySelectorAll('.technology-card');
    technologyCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });

    // Inicializar animaciones para pasos
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(50px)';
        step.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });

    // Inicializar animaciones para modelo de negocio
    const businessItems = document.querySelectorAll('.business-model-item');
    businessItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        item.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });

    // Inicializar animaciones para impacto
    const impactItems = document.querySelectorAll('.impact-item');
    impactItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        item.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });

    // Inicializar animaciones para viabilidad
    const viabilityItems = document.querySelectorAll('.viability-item');
    viabilityItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });

    // Función para cambiar el color de los tatuajes en la sección de productos (efecto visual)
    //const productImages = document.querySelectorAll('.product-image');
    
    //function changeProductColor() {
    //    productImages.forEach(image => {
    //        const randomHue = Math.floor(Math.random() * 360);
    //        image.style.filter = `hue-rotate(${randomHue}deg)`;
    //    });
    //}
    
    // Cambiar colores cada 3 segundos
    //setInterval(changeProductColor, 3000);
});