// --- BASE DE DATOS (AQUÍ PUEDES CAMBIAR TODO) ---
const planes = [
    // Planes Netflix
    {
        tmcode: "32080",
        nombre: "Conectados Netflix 25 V 6.1",
        categoria: "Netflix",
        cargoBase: 62900,
        streaming: 0,
        navegacion: "60 GB",
        compartir: "Hasta 60GB y 5GB a Claro Video y Netflix",
        minutos: "Ilimitados",
        SMS: "Ilimitados",
        Min_ilim: "marcando por el 00444 a USA Canadá México y Puerto Rico",
        beneficios: {
            "Claro Video": "Peliculas y series",
            "Claro Club": "Descuentos y cupones",
            "Claro Drive": "100 GB en la nube",
            "Claro Música": "Acceso a Playlists",
            "Descuento": "No incluye",
            "Redes Sociales": "Instagram, Facebook App, X, WhatsApp",
            "Netflix": "Netflix Básico 1 pantalla",
            "Min_ilim": "marcando por el 00444 a USA Canadá México y Puerto Rico",
        }
    },
    {
        tmcode: "28958",
        nombre: "Conectados Netflix 25 V 8.1",
        categoria: "Netflix",
        cargoBase: 83900,
        streaming: 0,
        navegacion: "140 GB",
        compartir: "Hasta 15GB y 5GB a Claro Video y Netflix",
        minutos: "Ilimitados",
        SMS: "Ilimitados",
        Min_ilim: "marcando por el 00444 a USA Canadá México y Puerto Rico",
        beneficios: {
            "Claro Video": "Peliculas y series",
            "Claro Club": "Descuentos y cupones",
            "Claro Drive": "100 GB en la nube",
            "Claro Música": "Acceso a Playlists",
            "Descuento": "No incluye",
            "Redes Sociales": "Instagram, Facebook App, X, WhatsApp",
            "Netflix": "Netflix Básico 1 pantalla",
            "Min_ilim": "marcando por el 00444 a USA Canadá México y Puerto Rico",
        }
    },
    {
        tmcode: "28976",
        nombre: "Conectados Netflix 25 V 10.1",
        categoria: "Netflix",
        cargoBase: 104900,
        streaming: 0,
        navegacion: "180 GB",
        compartir: "Hasta 20GB y 5GB a Claro Video y Netflix",
        minutos: "Ilimitados",
        SMS: "Ilimitados",
        beneficios: {
            "Claro Video": "Peliculas y series",
            "Claro Club": "Descuentos y cupones",
            "Claro Drive": "100 GB en la nube",
            "Claro Música": "Acceso a Playlists",
            "Descuento": "No incluye",
            "Redes Sociales": "Instagram, Facebook App, X, WhatsApp",
            "Netflix": "Netflix Estándar 2 pantalla",
            "Min_ilim": "marcando por el 00444 a USA Canadá México y Puerto Rico"
        }
    },
    {
        tmcode: "28994",
        nombre: "Conectados Netflix 25 V 12.1",
        categoria: "Netflix",
        cargoBase: 128900,
        streaming: 0,
        navegacion: "libre",
        compartir: "Hasta 60GB y 5GB a Claro Video y Netflix",
        minutos: "Ilimitados",
        SMS: "Ilimitados",
        beneficios: {
            "Claro Video": "Peliculas y series",
            "Claro Club": "Descuentos y cupones",
            "Claro Drive": "100 GB en la nube",
            "Claro Música": "Acceso a Playlists",
            "Descuento": "No incluye",
            "Redes Sociales": "No incluye",
            "Netflix": "Netflix Estándar 2 pantalla",
            "Min_ilim": "marcando por el 00444 a USA Canadá México y Puerto Rico",
        }
    },
    // Planes power
    {
        tmcode: "34605",
        nombre: "Paquete Power 26.2 V 44.9",
        categoria: "Power",
        cargoBase: 44900,
        streaming: 0,
        navegacion: "45 GB",
        compartir: "45 GB",
        minutos: "Ilimitados",
        SMS: "Ilimitados",        
        beneficios: {
            "Claro Video": "No incluye",
            "Claro Club": "Descuentos y cupones",
            "Claro Drive": "100 GB en la nube",
            "Claro Música": "Acceso a Playlists",
            "Descuento": "No incluye",
            "Redes Sociales": "Facebook App, X, WhatsApp",
        }
    },
    {
        tmcode: "38085",
        nombre: "Paquete Power 26.1 V 46.9",
        categoria: "Power",
        cargoBase: 46900,
        streaming: 0,
        navegacion: "50 GB",
        compartir: "50 GB",
        minutos: "Ilimitados",
        SMS: "Ilimitados",        
        beneficios: {
            "Claro Video": "No incluye",
            "Claro Club": "Descuentos y cupones",
            "Claro Drive": "100 GB en la nube",
            "Claro Música": "Acceso a Playlists",
            "Descuento": "No incluye",
            "Redes Sociales": "Facebook App, X, WhatsApp",
        }
    },
    {
        tmcode: "37289",
        nombre: "Paquete Power 26.1 V 53.9",
        categoria: "Power",
        cargoBase: 53900,
        streaming: 0,
        navegacion: "65 GB",
        compartir: "65 GB",
        minutos: "Ilimitados",
        SMS: "Ilimitados",
        beneficios: {
            "Claro Video": "No incluye",
            "Claro Club": "Descuentos y cupones",
            "Claro Drive": "100 GB en la nube",
            "Claro Música": "Acceso a Playlists",
            "Descuento": "No incluye",
            "Redes Sociales": "Facebook App, X, WhatsApp",
        }
    },
    // Planes Win
    {
        tmcode: "35086",
        nombre: "Conectados Win 25.2 V 6.1",
        categoria: "Win", // Corregido para sincronizar con el <select> HTML
        cargoBase: 60900,
        streaming: 0,
        navegacion: "55 GB",
        compartir: "55 GB",
        minutos: "Ilimitados",
        SMS: "Ilimitados",
        beneficios: {
            "Claro Video": "Peliculas y series",
            "Claro Club": "Descuentos y cupones",
            "Claro Drive": "100 GB en la nube",
            "Claro Música": "Acceso a Playlists",
            "Descuento": "No incluye",
            "Redes Sociales": "Facebook App, X, WhatsApp", 
        }
    },
    // Planes Disney
    {
        tmcode: "32108",
        nombre: "Conectados Disney 25 V 9.1",
        categoria: "Disney",
        cargoBase: 93900,
        streaming: 0,
        navegacion: "60 GB",
        compartir: "60 GB",
        minutos: "Ilimitados",
        SMS: "Ilimitados",
        beneficios: {
            "Claro Video": "Peliculas y series",
            "Claro Club": "Descuentos y cupones",
            "Claro Drive": "100 GB en la nube",
            "Claro Música": "Acceso a Playlists",
            "Descuento": "No incluye",
            "Redes Sociales": "Instagram, Facebook App, X, WhatsApp", 
        }
    },
    // Planes Todo claro
    {
        tmcode: "36793",
        nombre: "Conectados 26 E 4.1",
        categoria: "Todo Claro",
        cargoBase: 41900,
        streaming: 0,
        navegacion: "Libre",
        compartir: "60 GB",
        minutos: "Ilimitados",
        SMS: "Ilimitados",
        beneficios: {
            "Claro Video": "Peliculas y series",
            "Claro Club": "Descuentos y cupones",
            "Claro Drive": "100 GB en la nube",
            "Claro Música": "Acceso a Playlists",
            "Descuento": "No incluye",
        }
    },
    {
        tmcode: "37217",
        nombre: "Conectados 26.1 E 46.9_AP1",
        categoria: "Todo Claro",
        cargoBase: 46900,
        streaming: 0,
        navegacion: "Libre",
        compartir: "60 GB",
        minutos: "Ilimitados",
        SMS: "Ilimitados",
        beneficios: {
            "Claro Video": "Peliculas y series",
            "Claro Club": "Descuentos y cupones",
            "Claro Drive": "100 GB en la nube",
            "Claro Música": "Acceso a Playlists",
            "Descuento": "No incluye",
            "Aplicación adicional": "Amazon Prime, 3 pantallas ($5.000)",
        }
    },
    // Planes Bundle
    {
        tmcode: "37368",
        nombre: "Conectados 26.1 E 49.9_AP1",
        categoria: "Bundle",
        cargoBase: 49900,
        streaming: 0,
        navegacion: "52 GB",
        compartir: "52 GB",
        minutos: "Ilimitados",
        SMS: "Ilimitados",
        beneficios: {
            "Claro Video": "Peliculas y series",
            "Claro Club": "Descuentos y cupones",
            "Claro Drive": "100 GB en la nube",
            "Claro Música": "Acceso a Playlists",
            "Redes Sociales": "Facebook App, X, WhatsApp",
            "Aplicación adicional": "Amazon Prime, 3 pantallas ($5.000)",
            // "Descuento1": "50% ($27.450 Mes 1)",
            "Descuento2": "25% ($37425 Mes 1 y 2)",
        }
    },
    {
        tmcode: "38081",
        nombre: "Conectados 26.1 V 53.9",
        categoria: "Bundle",
        cargoBase: 53900,
        streaming: 0,
        navegacion: "65 GB",
        compartir: "65 GB",
        minutos: "Ilimitados",
        SMS: "Ilimitados",
        beneficios: {
            "Claro Video": "Peliculas y series",
            "Claro Club": "Descuentos y cupones",
            "Claro Drive": "100 GB en la nube",
            "Claro Música": "Acceso a Playlists",
            "Redes Sociales": "Facebook App, X, WhatsApp",
            
            "Descuento2": "25% ($40.425 Mes 1 y 2)",
        }
    },
    {
        tmcode: "38082",
        nombre: "Conectados 26.1 V 55.9_EC",
        categoria: "Bundle",
        cargoBase: 55900,
        streaming: 0,
        navegacion: "65 GB",
        compartir: "65 GB",
        minutos: "Ilimitados",
        SMS: "Ilimitados",
        beneficios: {
            "Claro Video": "Peliculas y series",
            "Claro Club": "Descuentos y cupones",
            "Claro Drive": "100 GB en la nube",
            "Claro Música": "Acceso a Playlists",
            "Redes Sociales": "Facebook App, X, WhatsApp",
            "Servicio adicional": "Escudo claro ($2.000)",
            "Descuento2": "25% ($41.925 Mes 1 y 2)",
        }
    },
    {
        tmcode: "38083",
        nombre: "Conectados 26.1 V 55.9_CN",
        categoria: "Bundle",
        cargoBase: 55900,
        streaming: 0,
        navegacion: "65 GB",
        compartir: "65 GB",
        minutos: "Ilimitados",
        SMS: "Ilimitados",
        beneficios: {
            "Claro Video": "Peliculas y series",
            "Claro Club": "Descuentos y cupones",
            "Claro Drive": "100 GB en la nube",
            "Claro Música": "Acceso a Playlists",
            "Redes Sociales": "Facebook App, X, WhatsApp",
            "Servicio adicional": "Cine ($2.300)",
            
            "Descuento2": "25% ($41.925 Mes 1 y 2)",
        }
    },
    {
        tmcode: "38084",
        nombre: "Conectados 26.1 V 56.9_AP1",
        categoria: "Bundle",
        cargoBase: 56900,
        streaming: 0,
        navegacion: "75 GB",
        compartir: "15 GB",
        minutos: "Ilimitados",
        SMS: "Ilimitados",
        beneficios: {
            "Claro Video": "Peliculas y series",
            "Claro Club": "Descuentos y cupones",
            "Claro Drive": "100 GB en la nube",
            "Claro Música": "Acceso a Playlists",
            "Redes Sociales": "Instagram, Facebook App, X, WhatsApp",
            "Aplicación adicional": "Amazon Prime, 3 pantallas ($5.000)",
            "Min_ilim": "marcando por el 00444 a USA Canadá México y Puerto Rico",
            
            "Descuento2": "25% ($42.675 Mes 1 y 2)",
        }
    },
    {
        tmcode: "37224",
        nombre: "Conectados 26.1 V65.9LO_TM_AP1",
        categoria: "Bundle",
        cargoBase: 65900,
        streaming: 0,
        navegacion: "100 GB",
        compartir: "15 GB",
        minutos: "Ilimitados",
        SMS: "Ilimitados",
        beneficios: {
            "Claro Video": "Peliculas y series",
            "Claro Club": "Descuentos y cupones",
            "Claro Drive": "100 GB en la nube",
            "Claro Música": "Acceso a Playlists",
            "Redes Sociales": "Instagram, Facebook App, X, WhatsApp",
            "Aplicación adicional1": "Amazon Prime, 3 pantallas ($5.000)",
            "Aplicación adicional2": "Lookout ($3.000)",
            "Asistencia Claro": "Multiasistencia ($6.300)",
            "Min_ilim": "marcando por el 00444 a USA Canadá México y Puerto Rico",
            
            "Descuento2": "25% ($49.425 Mes 1 y 2)",
        }
    },
    {
        tmcode: "37223",
        nombre: "Conectados 26.1 V65.9LO_TS_AP1",
        categoria: "Bundle",
        cargoBase: 65900,
        streaming: 0,
        navegacion: "100 GB",
        compartir: "15 GB",
        minutos: "Ilimitados",
        SMS: "Ilimitados",
        beneficios: {
            "Claro Video": "Peliculas y series",
            "Claro Club": "Descuentos y cupones",
            "Claro Drive": "100 GB en la nube",
            "Claro Música": "Acceso a Playlists",
            "Redes Sociales": "Instagram, Facebook App, X, WhatsApp",
            "Aplicación adicional1": "Amazon Prime, 3 pantallas ($5.000)",
            "Aplicación adicional2": "Lookout ($3.000)",
            "Asistencia Claro": "Salud ($6.300)",
            "Min_ilim": "marcando por el 00444 a USA Canadá México y Puerto Rico",
            
            "Descuento2": "25% ($49.425 Mes 1 y 2)",
        }
    },
    {
        tmcode: "37222",
        nombre: "Conectados 26.1 V65.9LO_MM_AP1",
        categoria: "Bundle",
        cargoBase: 65900,
        streaming: 0,
        navegacion: "100 GB",
        compartir: "15 GB",
        minutos: "Ilimitados",
        SMS: "Ilimitados",
        beneficios: {
            "Claro Video": "Peliculas y series",
            "Claro Club": "Descuentos y cupones",
            "Claro Drive": "100 GB en la nube",
            "Claro Música": "Acceso a Playlists",
            "Redes Sociales": "Instagram, Facebook App, X, WhatsApp",
            "Aplicación adicional1": "Amazon Prime, 3 pantallas ($5.000)",
            "Aplicación adicional2": "Lookout ($3.000)",
            "Asistencia Claro": "Pets ($6.300)",
            "Min_ilim": "marcando por el 00444 a USA Canadá México y Puerto Rico",
            
            "Descuento2": "25% ($49.425 Mes 1 y 2)",
        }
    },
    {
        tmcode: "37227",
        nombre: "Conectados 26.1 V75.9LO_TM_AP1",
        categoria: "Bundle",
        cargoBase: 75900,
        streaming: 0,
        navegacion: "130 GB",
        compartir: "20 GB",
        minutos: "Ilimitados",
        SMS: "Ilimitados",
        beneficios: {
            "Claro Video": "Peliculas y series",
            "Claro Club": "Descuentos y cupones",
            "Claro Drive": "100 GB en la nube",
            "Claro Música": "Acceso a Playlists",
            "Redes Sociales": "Instagram, Facebook App, X, WhatsApp",
            "Aplicación adicional1": "Amazon Prime, 3 pantallas ($5.000)",
            "Aplicación adicional2": "Lookout ($3.000)",
            "Asistencia Claro": "Multiasistencia ($6.300)",
            "Min_ilim": "marcando por el 00444 a USA Canadá México y Puerto Rico",
            
            "Descuento2": "25% ($56.925 Mes 1 y 2)",
        }
    },
    {
        tmcode: "37226",
        nombre: "Conectados 26.1 V75.9LO_TS_AP1",
        categoria: "Bundle",
        cargoBase: 75900,
        streaming: 0,
        navegacion: "130 GB",
        compartir: "20 GB",
        minutos: "Ilimitados",
        SMS: "Ilimitados",
        beneficios: {
            "Claro Video": "Peliculas y series",
            "Claro Club": "Descuentos y cupones",
            "Claro Drive": "100 GB en la nube",
            "Claro Música": "Acceso a Playlists",
            "Redes Sociales": "Instagram, Facebook App, X, WhatsApp",
            "Aplicación adicional1": "Amazon Prime, 3 pantallas ($5.000)",
            "Aplicación adicional2": "Lookout ($3.000)",
            "Asistencia Claro": "Salud ($6.300)",
            "Min_ilim": "marcando por el 00444 a USA Canadá México y Puerto Rico",
            
            "Descuento2": "25% ($56.925 Mes 1 y 2)",
        }
    },
    {
        tmcode: "37225",
        nombre: "Conectados 26.1 V75.9LO_MM_AP1",
        categoria: "Bundle",
        cargoBase: 75900,
        streaming: 0,
        navegacion: "130 GB",
        compartir: "20 GB",
        minutos: "Ilimitados",
        SMS: "Ilimitados",
        beneficios: {
            "Claro Video": "Peliculas y series",
            "Claro Club": "Descuentos y cupones",
            "Claro Drive": "100 GB en la nube",
            "Claro Música": "Acceso a Playlists",
            "Redes Sociales": "Instagram, Facebook App, X, WhatsApp",
            "Aplicación adicional1": "Amazon Prime, 3 pantallas ($5.000)",
            "Aplicación adicional2": "Lookout ($3.000)",
            "Asistencia Claro": "Pets ($6.300)",
            "Min_ilim": "marcando por el 00444 a USA Canadá México y Puerto Rico",
            
            "Descuento2": "25% ($56.925 Mes 1 y 2)",
        }
    },
    {
        tmcode: "37230",
        nombre: "Conectados 26.1V99.9LO_TM_AP1L",
        categoria: "Bundle",
        cargoBase: 99900,
        streaming: 0,
        navegacion: "Libre GB",
        compartir: "70 GB",
        minutos: "Ilimitados",
        SMS: "Ilimitados",
        beneficios: {
            "Claro Video": "Peliculas y series",
            "Claro Club": "Descuentos y cupones",
            "Claro Drive": "100 GB en la nube",
            "Claro Música": "Acceso a Playlists",
            "Aplicación adicional1": "Amazon Prime ($5.000)-Netflix Basico ($18.900)",
            "Aplicación adicional2": "Lookout ($3.000)",
            "Asistencia Claro": "Multiasistencia ($6.300)",
            "Min_ilim": "marcando por el 00444 a USA Canadá México y Puerto Rico",
            
            "Descuento2": "25% ($74.925 Mes 1 y 2)",
        }
    },
    {
        tmcode: "37229",
        nombre: "Conectados 26.1V99.9LO_TS_AP1L",
        categoria: "Bundle",
        cargoBase: 99900,
        streaming: 0,
        navegacion: "Libre GB",
        compartir: "70 GB",
        minutos: "Ilimitados",
        SMS: "Ilimitados",
        beneficios: {
            "Claro Video": "Peliculas y series",
            "Claro Club": "Descuentos y cupones",
            "Claro Drive": "100 GB en la nube",
            "Claro Música": "Acceso a Playlists",
            "Aplicación adicional1": "Amazon Prime ($5.000)-Netflix Basico ($18.900)",
            "Aplicación adicional2": "Lookout ($3.000)",
            "Asistencia Claro": "Salud ($6.300)",
            "Min_ilim": "marcando por el 00444 a USA Canadá México y Puerto Rico",
            
            "Descuento2": "25% ($74.925 Mes 1 y 2)",
        }
    },
    {
        tmcode: "37228",
        nombre: "Conectados 26.1V99.9LO_MM_AP1L",
        categoria: "Bundle",
        cargoBase: 99900,
        streaming: 0,
        navegacion: "Libre GB",
        compartir: "70 GB",
        minutos: "Ilimitados",
        SMS: "Ilimitados",
        beneficios: {
            "Claro Video": "Peliculas y series",
            "Claro Club": "Descuentos y cupones",
            "Claro Drive": "100 GB en la nube",
            "Claro Música": "Acceso a Playlists",
            "Aplicación adicional1": "Amazon Prime ($5.000)-Netflix Basico ($18.900)",
            "Aplicación adicional2": "Lookout ($3.000)",
            "Asistencia Claro": "Pets ($6.300)",
            "Min_ilim": "marcando por el 00444 a USA Canadá México y Puerto Rico",
            
            "Descuento2": "25% ($74.925 Mes 1 y 2)",
        }
    },
    // Planes Basicos
    {
        tmcode: "37212",
        nombre: "Conectados 26.1 V 44.9",
        categoria: "Planes estandar",
        cargoBase: 44900,
        streaming: 0,
        navegacion: "45 GB",
        compartir: "45 GB",
        minutos: "Ilimitados",
        SMS: "Ilimitados",
        beneficios: {
            "Claro Video": "Peliculas y series",
            "Claro Club": "Descuentos y cupones",
            "Claro Drive": "100 GB en la nube",
            "Claro Música": "Acceso a Playlists",
            "Redes Sociales": "Facebook App, X, WhatsApp",
            "Descuento": "50% ($22.450 Mes 1)",
        }
    },
    {
        tmcode: "38079",
        nombre: "Conectados 26.1 E 46.9",
        categoria: "Planes estandar",
        cargoBase: 46900,
        streaming: 0,
        navegacion: "50 GB",
        compartir: "50 GB",
        minutos: "Ilimitados",
        SMS: "Ilimitados",
        beneficios: {
            "Claro Video": "Peliculas y series",
            "Claro Club": "Descuentos y cupones",
            "Claro Drive": "100 GB en la nube",
            "Claro Música": "Acceso a Playlists",
            "Redes Sociales": "Facebook App, X, WhatsApp",
            "Descuento": "50% ($23.450 Mes 1)",
        }
    }
];

// --- LÓGICA DEL SISTEMA ADAPTADA A TU INTERFAZ ---

const grid = document.getElementById('grid-planes');
const buscador = document.getElementById('buscador');
const filtroCat = document.getElementById('filtroCategoria');

// FLUJO DE INICIO CONTROLADO
function entrarAlCatalogo() {
    document.getElementById('pantallaBienvenida').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('pantallaBienvenida').style.display = 'none';
        document.getElementById('contenidoPrincipal').classList.remove('hidden');
        render(planes);
    }, 500);
}

// INYECCIÓN DINÁMICA DE TARJETAS
function render(lista) {
    grid.innerHTML = '';
    
    if(lista.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:#777; padding:40px;">No se encontraron ofertas en esta categoría.</p>`;
        return;
    }

    lista.forEach((p, index) => {
        const total = p.cargoBase + p.streaming;
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <small style="color: #888; font-weight: bold;">TMCODE: ${p.tmcode} | ${p.categoria}</small>
            <h3>${p.nombre}</h3>
            <div class="precio-box">
                <small style="color: var(--texto-secundario); font-size: 0.75rem; display:block;">Total a pagar:</small>
                <big>$${total.toLocaleString('es-CO')}</big>
            </div>
            <div style="font-size: 0.9rem; margin-bottom: 15px; line-height: 1.6;">
                <b>Navegación:</b> ${p.navegacion}<br>
                <b>Compartir:</b> ${p.compartir}<br>
                <b>Minutos:</b> ${p.minutos}<br>
                <b>SMS:</b> ${p.SMS}
            </div>
            <button class="btn-detalles" onclick="abrirModal(${index}, '${lista === planes ? 'full' : 'filtered'}')">Ver Beneficios</button>
        `;
        grid.appendChild(card);
        
        // Animación de aparición suave
        setTimeout(() => card.classList.add('rendered'), index * 30);
    });
}

// FILTRADO DE BUSCADOR Y SELECT
function filtrar() {
    const busq = buscador.value.toLowerCase();
    const cat = filtroCat.value;

    const filtrados = planes.filter(p => {
        const coincideNombre = p.nombre.toLowerCase().includes(busq) || p.tmcode.includes(busq);
        const coincideCat = (cat === "todos" || p.categoria === cat || (cat === "Planes estandar" && p.categoria === "Planes estandar"));
        return coincideNombre && coincideCat;
    });
    render(filtrados);
}

// APERTURA DE MODAL ADAPTADA A TUS IDS ACTUALES
function abrirModal(index, type) {
    let p;
    if(type === 'full') {
        p = planes[index];
    } else {
        const busq = buscador.value.toLowerCase();
        const cat = filtroCat.value;
        const filtrados = planes.filter(p => {
            return (p.nombre.toLowerCase().includes(busq) || p.tmcode.includes(busq)) && (cat === "todos" || p.categoria === cat);
        });
        p = filtrados[index];
    }

    let htmlBeneficios = '';
    for (const [titulo, valor] of Object.entries(p.beneficios)) {
        htmlBeneficios += `<div style="margin-bottom:12px; font-size:0.95rem;"><strong>🎬 ${titulo}:</strong> ${valor}</div>`;
    }
    
    // Mapeo dinámico hacia el modal de tu HTML actual
    document.getElementById('modal-inner').innerHTML = `
        <h2 id="modal-titulo" style="color: var(--rojo-claro); margin-bottom:20px; font-size:1.4rem;">${p.nombre}</h2>
        <div id="modal-body" style="line-height: 1.6;">${htmlBeneficios}</div>
    `;
    document.getElementById('modalInformativo').style.display = 'block';
}

// ENRUTADOR LOCAL DE CONTRATOS PDF
function abrirContrato(tipo) {
    const archivos = { 
        migracion: 'contrato-migracion.pdf', 
        power: 'contrato-power.pdf', 
        netflix: 'contrato-Netflix.pdf', 
        no_titular: 'contrato-notitular.pdf' 
    };
    window.open(archivos[tipo], '_blank');
}

// CERRAR MODAL
function cerrarModal() {
    document.getElementById('modalInformativo').style.display = 'none';
}

window.onclick = function(e) {
    if (e.target == document.getElementById('modalInformativo')) cerrarModal();
}

buscador.addEventListener('input', filtrar);
filtroCat.addEventListener('change', filtrar);
