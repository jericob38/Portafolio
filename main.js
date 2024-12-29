// DOM Elements
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const themeToggle = document.querySelector('.theme-toggle');
const contactForm = document.getElementById('contact-form');
contactForm.reset();

// Toggle Mobile Menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    document.querySelector('.hamburger').classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        document.querySelector('.hamburger').classList.remove('active');
    });
});

// Theme Toggle
let darkMode = true;

function toggleTheme() {
    darkMode = !darkMode;
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', darkMode);
    themeToggle.innerHTML = darkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

// Initialize theme
document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
themeToggle.innerHTML = darkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
themeToggle.addEventListener('click', toggleTheme);

// Scroll Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Contact Form
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    emailjs.init({
        publicKey: 'J1dZI4-EtSjZDKCF1',
        blockHeadless: true, 
        blockList: {
            list: [], 
            watchVariable: 'from_email', 
        },
        limitRate: {
            id: 'contactFormProfile', 
            throttle: 60000, 
        },
    });
    const formData = new FormData(contactForm);
    const templateParams = {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        message: formData.get('message'),
    };
    emailjs.send("service_q79w48q", "template_ts13run", templateParams)
        .then(response => {
            contactForm.reset();
            alert("Mensaje enviado con éxito!");
        })
        .catch(error => {
            alert("Hubo un problema al enviar el mensaje.");
        });
});

function showModal(modal) {
    var titulo = document.getElementById("full-title");
    var imagen = document.getElementById("img-logo-full");
    var body = document.getElementById("full-text");
    switch (modal) {
        case 1:
            titulo.innerText = 'Gestión de presupuestos';
            imagen.src = "logo-egis.png";
            body.innerText = 'Gestión de presupuesto sestá diseñado para crear y administrar presupuestos detallados para proyectos de construcción. La herramienta permite la creación de presupuestos jerárquicos organizados en niveles de Grupos, capítulos y subcapítulos, abarcando desde el nivel más alto hasta las actividades específicas a realizar. Cada actividad puede desglosarse en diversas tareas más detalladas, conocidas como APUs (actividades de precios unitarios), que forman parte de la actividad principal.\n\n Además, el sistema permite la integración con diversas bases de datos, tales como contratos en obra y cotizaciones solicitadas, lo que facilita la consulta y la utilización de diferentes fuentes de información al momento de asignar costos dentro de los subcapítulos. Este enfoque integral asegura que el presupuesto generado incluya todas las especificaciones necesarias para la correcta ejecución del proyecto, optimizando así la planificación y el control de los costos asociados.'
            break;
        case 2:
            const textoResumen2 = "Control de Proyectos es un sistema diseñado para optimizar la administración de obras mediante una gestión integral del presupuesto y los contratos asociados. La plataforma permite cargar y controlar el presupuesto de una obra, integrar los contratos correspondientes y asignarlos a las distintas actividades presupuestadas. El sistema facilita el registro de cortes de obra y su vinculación con los pagos realizados, proporcionando una visión clara y actualizada del estado del proyecto. Al procesar esta información, se generan reportes detallados que incluyen: \n\n- Presupuesto por actividad: Visualización de los montos estimados para cada tarea del proyecto. \n- Contratado por actividad: Registro de los contratos asignados a cada actividad. \n- Invertido por actividad: Seguimiento de los pagos realizados en función de los cortes registrados.\n\nEsta funcionalidad permite una gestión administrativa precisa, mejorando el control financiero y el análisis de avances. Adicionalmente, el sistema genera reportes que ofrecen una visión general del progreso del proyecto, facilitando la toma de decisiones y el cumplimiento de los objetivos establecidos.";
            titulo.innerText = 'Control de Proyectos';
            imagen.src = "logo-egis.png";
            body.innerText = textoResumen2;
            break;
        case 3:
            const textoResumen3 = "Gestión de Contrataciones es un sistema diseñado para automatizar y estructurar el proceso de selección y contratación de proponentes o colaboradores para las actividades de obra. La plataforma permite evaluar a los proponentes según puntajes o criterios definidos, generando automáticamente las cartas de invitación y enviándolas por correo electrónico a los participantes seleccionados. \n\nEl sistema facilita la gestión de cada etapa del proceso, incluyendo la ronda de preguntas y respuestas, las visitas de obra y la carga de la información requerida por los proponentes. Finalmente, se realiza el concurso, se selecciona al proponente ganador y se cierra el proceso de contratación, garantizando una trazabilidad completa de todas las etapas. \n\nEste enfoque integral asegura la optimización de tiempos, una selección transparente y la correcta gestión de la comunicación con los participantes, contribuyendo al éxito de los proyectos de obra.";
            titulo.innerText = 'Gestión de Contrataciones';
            imagen.src = "logo-egis.png";
            body.innerText = textoResumen3;
            break;
        case 4:
            const textoResumen4 = 'ADN Software es una plataforma existente que, bajo mi liderazgo como jefe de desarrollo, fue adaptada y mejorada para cumplir con los requerimientos específicos del mercado colombiano. El proyecto incluyó el desarrollo de nuevas funcionalidades para los módulos contables y de facturación, alineadas con las Normas Internacionales de Información Financiera (NIIF) y el soporte para el manejo de múltiples monedas según las necesidades del mercado. Además, desempeñé un rol clave en la resolución de errores, así como en la toma de decisiones estratégicas sobre la incorporación de nuevas aplicaciones y funcionalidades en el sistema.';
            titulo.innerText = 'ADN SOFTWARE';
            imagen.src = "logo-adn.png";
            body.innerText = textoResumen4;
            break;
        case 5:
            const textoResumen5 = 'Desarrollé soluciones web personalizadas para el sector inmobiliario, utilizando tecnologías como PHP, Angular y Laravel, y creé plugins personalizados para WordPress, integrando funcionalidades avanzadas en los sitios web.';
            titulo.innerText = 'Freelance';
            imagen.src = "logo-WordPress.png";
            body.innerText = textoResumen5;
            break;
    }
    document.getElementById("ModalSeeMore").style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById("ModalSeeMore").style.display = "none";
}