function login() {
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    if (usuario === "Neytan13" && password === "Bomboman13") {
        localStorage.setItem("autenticado", "true");
        window.location.href = "calificaciones.html";
    } else {
        document.getElementById("error").innerText = "Datos incorrectos";
    }
}

if (window.location.pathname.includes("calificaciones.html")) {
    const auth = localStorage.getItem("autenticado");
    if (auth !== "true") {
        window.location.href = "index.html";
    }
}

function logout() {
    localStorage.removeItem("autenticado");
    window.location.href = "index.html";
}