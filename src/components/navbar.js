var renderNavbar = function () {
  var nav = document.getElementById('page-nav');
  nav.innerHTML = `
    <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
    <a class="navbar-brand" href="/">
      <img src="src/img/logo/magnificat_logo.png" width="36px" height="36px" />
      Magn&iacute;ficat
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="/">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/proposito.html">Prop&oacute;sito</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/conocenos.html">Con&oacute;cenos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/servicios.html">Servicios</a>
        </li>        
        <li class="nav-item">
          <a class="nav-link" href="src/docs/Brochure_MHS&I.pdf">Brochure</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contacto.html">Contacto</a>
        </li>
      </ul>
    </div>
  </nav>
  `;
}()