const tbody = document.getElementById('tbody');

const getAll = async () => {
    const response = await fetch('http://localhost:3001/api/books');
    const data = await response.json();
    data.forEach(element => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${element.nombre}</td>
            <td>${element.genero}</td>
            <td>${element.referencia}</td>
            <img width="100px" height="100px" src="${element.imagen}" alt="img">
            <td>
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editar(${element.referencia})" class="btn btn-warning">Editar</button>
                <button onclick="eliminar(${element.referencia})" class="btn btn-danger">Eliminar</button>
            </td>`;
        tbody.appendChild(row);
    });
}

getAll();

const editar = async (ref) => {
    const title = document.getElementById('title');
    const btn = document.getElementById('btn');
    const nombre = document.getElementById('nombre');
    const genero = document.getElementById('genero');
    const referencia = document.getElementById('referencia');
    const imagen = document.getElementById('imagen');

    title.textContent = 'Edit Book'
    btn.textContent = 'Edit Book'

    const response = await fetch(`http://localhost:3001/api/books/${ref}`);
    const data = await response.json();

    nombre.value = data.nombre;
    genero.value = data.genero;
    referencia.value = data.referencia;
    imagen.value = data.imagen;

    btn.addEventListener('click', async () => {
        const response = await fetch(`http://localhost:3001/api/books/${ref}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: nombre.value,
                genero: genero.value,
                referencia: referencia.value,
                imagen: imagen.value
            })
        });
        window.location.reload();
    });
}

const eliminar = async (ref) => {
    if (confirm(`Seguro que desea eliminar la pelicula #${ref}`)) {
        const response = await fetch(`http://localhost:3001/api/books/${ref}`, {
            method: 'DELETE'
        });
        window.location.reload();
    }
}