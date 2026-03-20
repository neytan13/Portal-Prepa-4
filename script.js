const usuarios = {
    Neytan13: {
        password: "Bomboman13",
        nombre: "Neytan Jiranek Hernández Mendoza",
        faltas: 4,
        calificaciones: {
            matematicas: [7, "SE", "SE"],
            ingles: [8, "SE", "SE"],
            historia: [9, "SE", "SE"]
        }
    },
    Ayax11: {
        password: "Kalebhm",
        nombre: "Ayax Kaleb Hernández Mendoza",
        faltas: 2,
        calificaciones: {
            matematicas: [7, "SE", "SE"],
            literatura: [8, "SE", "SE"],
            historia: [8, "SE", "SE"]
        }
    }
};

function login() {
    const user = document.getElementById("usuario").value;
    const pass = document.getElementById("password").value;

    const mensaje = document.getElementById("mensaje");

    if (usuarios[user] && usuarios[user].password === pass) {

        const datos = usuarios[user];

        // Mostrar panel y ocultar login
        document.querySelector(".login-container").style.display = "none";
        document.getElementById("panel").classList.remove("oculto");

        mensaje.innerText = "";

        // Nombre
        document.getElementById("nombreAlumno").innerText = datos.nombre;

        // Faltas
        const faltasEl = document.getElementById("faltas");
        if (faltasEl) {
            faltasEl.innerText = datos.faltas;
        }

        // Matemáticas
        if (datos.calificaciones.matematicas) {
            document.getElementById("m1p1").innerText = datos.calificaciones.matematicas[0];
            document.getElementById("m1p2").innerText = datos.calificaciones.matematicas[1];
            document.getElementById("m1p3").innerText = datos.calificaciones.matematicas[2];
        }

        // Materia dinámica (Inglés o Literatura)
        let materia2 = "";
        let califMateria2 = null;

        if (datos.calificaciones.ingles) {
            materia2 = "Inglés";
            califMateria2 = datos.calificaciones.ingles;
        } else if (datos.calificaciones.literatura) {
            materia2 = "Literatura";
            califMateria2 = datos.calificaciones.literatura;
        }

        // Asignar nombre de la materia en el HTML
        const materia2El = document.getElementById("materia2");
        if (materia2El) {
            materia2El.innerText = materia2;
        }

        // Llenar calificaciones de la materia 2
        if (califMateria2) {
            document.getElementById("m2p1").innerText = califMateria2[0];
            document.getElementById("m2p2").innerText = califMateria2[1];
            document.getElementById("m2p3").innerText = califMateria2[2];
        }

        // Historia
        if (datos.calificaciones.historia) {
            document.getElementById("h1p1").innerText = datos.calificaciones.historia[0];
            document.getElementById("h1p2").innerText = datos.calificaciones.historia[1];
            document.getElementById("h1p3").innerText = datos.calificaciones.historia[2];
        }

    } else {
        mensaje.innerText = "Usuario o contraseña incorrectos";
    }
}
