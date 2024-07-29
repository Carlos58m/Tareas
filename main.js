
const input = document.querySelector('input');
const addButton = document.querySelector('.btn-add');
const taskList = document.querySelector('ul');
const emptyMessage = document.querySelector('.empty');


const actualizarMensajeVacio = () => {
    if (taskList.children.length === 0) {
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';
    }
};


const crearTarea = (textoTarea) => {

    const li = document.createElement('li');


    const p = document.createElement('p');
    p.textContent = textoTarea;


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('btn-delete');


    li.appendChild(p);
    li.appendChild(deleteButton);


    taskList.appendChild(li);


    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
        actualizarMensajeVacio();
    });


    input.value = '';


    actualizarMensajeVacio();
};


addButton.addEventListener('click'), (e) => {
    e.prevent
}
