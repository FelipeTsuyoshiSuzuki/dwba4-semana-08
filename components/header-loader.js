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
