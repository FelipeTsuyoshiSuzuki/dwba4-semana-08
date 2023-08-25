function loadHeader(headerFile) {
    fetch(headerFile)
        .then(response => response.text())
        .then(data => {
            var headerContainer = document.getElementById('header-container');
            headerContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });
}

function createFooter() {
  const template = document.createElement('template');

  template.innerHTML = `
  <br /><br />
        <a href="https://www.facebook.com/ifsppirituba"> <img src="/images/facebook.png" width="40" /> </a>
  <br /><br />
    <footer>
      IFSP - Câmpus Pirituba - Av. Mutinga, 951 - Jardim Santo Elias - CEP: 05110-000 - São Paulo/SP - Contato:
      (011) 2504-0100
    </footer>
  `;
  
  document.body.appendChild(template.content);
}
