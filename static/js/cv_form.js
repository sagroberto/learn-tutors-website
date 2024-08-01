document.addEventListener("DOMContentLoaded", function() {
    const curriculums = document.querySelector('#curriculums');
    const register = document.querySelector('#register');
    const closeButton = document.querySelector('.close-form');
    const myForm = document.getElementById('myForm');

    curriculums.addEventListener('click', () => {
        register.showModal();
    });

    closeButton.addEventListener('click', () => {
        register.close();
    });

    window.addEventListener('click', (event) => {
        if (event.target === register) {
            register.close();
        }
    });

    myForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Valida campos de texto
        this.querySelectorAll('input[type="text"]').forEach(function(input) {
            if (input.value.trim() === '') {
                input.classList.add('error');
                isValid = false;
            } else {
                input.classList.remove('error');
            }
        });
        
        // Valida archivo
        const fileInput = document.getElementById('file-upload');
        const fileLabel = document.querySelector('.custom-file-upload-label');
        if (fileInput.files.length === 0) {
            fileLabel.classList.add('error');
            isValid = false;
        } else {
            fileLabel.classList.remove('error');
        }
        
        if (isValid) {
            // Si todo es válido, envía el formulario
            this.submit();
        }
    });

    // Remueve la clase de error cuando el usuario comienza a escribir
    document.querySelectorAll('input[type="text"]').forEach(function(input) {
        input.addEventListener('input', function() {
            this.classList.remove('error');
        });
    });

    // Remueve la clase de error cuando se selecciona un archivo y coloca el nombre del archivo.
    const fileInput = document.getElementById('file-upload');
    const fileChosen = document.getElementById('file-chosen');
    
    fileInput.addEventListener('change', function() {
        document.querySelector('.custom-file-upload-label').classList.remove('error');
        if (fileInput.files.length > 0) {
            fileChosen.textContent = fileInput.files[0].name;
        } else {
            fileChosen.textContent = 'No se ha seleccionado ningún archivo';
        }
    });
});
