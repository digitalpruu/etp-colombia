const title = "ETP Colombia";
const slogan = "Publicidad exterior";
const email = "etpcolombia@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los servicios de ${title} y me gustaría obtener más información. ¡Gracias!`
);
const numeroWhatsApp = "3103431147";
const textos = {
    index: {
        title: `${title}`,
        slogan: `${slogan}`,
    },
    homeContent: {
        title: `${title}`,
    },
    about: {
        description1: "Somos un equipo apasionado y creativo dedicado a transformar la comunicación en una herramienta poderosa para el cambio. Ofrecemos una amplia gama de productos y servicios, que van desde la producción de contenidos comerciales para radio, televisión e internet hasta el diseño y creación de páginas web impactantes. Nuestra misión es brindar soluciones integrales que no solo capturan la atención, sino que también generan conexiones significativas.. A través de nuestras alianzas estratégicas, logramos llevar esta información de manera efectiva y con mayor impacto a un público más amplio. Nuestro enfoque promueve iniciativas culturales y concientiza sobre la importancia del cuidado del medio ambiente. Creemos en el poder de las historias y en la responsabilidad de informar para inspirar a nuestra comunidad a adoptar prácticas sostenibles.\n" +
            "En ETP Colombia cada proyecto es una oportunidad para innovar, impactar y contribuir al bienestar de nuestra sociedad. Juntos, estamos creando un futuro más consciente y conectado."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "",
            p2: slogan,
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=100071804761210&mibextid=ZbWKwL",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};
export default textos;
