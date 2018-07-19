var renderHeader = function () {
  var header = document.querySelector('#page-header');

  header.innerHTML = `
  <div class="jumbotron">
    <div id="logo-area">
      <img src="src/img/logo/400dpiLogo.png" class="img-fluid" />
    </div>
  </div>
  `;
}()