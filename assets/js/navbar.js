const currentPage = window.location.pathname.split("/").pop();
Document.addEventListener("DOMContentLoaded", function () {
    const navbar = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="../index.html">Brazos Abiertos</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="../index.html">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="areas.html">Áreas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="donar.html">Donar</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="quienes_somos.html">¿Quíenes Somos?</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="ser_parte.html">Ser Parte</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
    document.getElementById("menu-container").innerHTML = navbar;
});

