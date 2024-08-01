document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('congresoForm');
    const roleSelect = document.getElementById('role');
    const citizenFields = document.getElementById('citizenFields');
    const deseoField = document.getElementById('deseoField');
    const nameInput = document.getElementById('entry.809805794');
    const partyInput = document.getElementById('entry.1890551147');

    roleSelect.addEventListener('change', function() {
        if (this.value === 'Ciudadano Responsable') {
            citizenFields.classList.remove('hidden');
            deseoField.classList.add('hidden');
        } else if (this.value === 'Congresista') {
            citizenFields.classList.add('hidden');
            deseoField.classList.remove('hidden');
        } else {
            citizenFields.classList.add('hidden');
            deseoField.classList.add('hidden');
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Convert name and political party to uppercase
        nameInput.value = nameInput.value.toUpperCase();
        partyInput.value = partyInput.value.toUpperCase();

        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        }).then(() => {
            alert('Formulario enviado con éxito!');
            form.reset();
            citizenFields.classList.add('hidden');
            deseoField.classList.add('hidden');
        }).catch(error => {
            console.error('Error:', error);
            alert('Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo.');
        });
    });
});