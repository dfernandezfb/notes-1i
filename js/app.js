//* 1-Mostrar datos guardados en LS // DIEGO
//* 2-Tomar los datos del formulario e ir mostrandolos en notita de ejemplo // PAU
//* 3-Guardar los datos de nueva nota en LS y mostrarlos // PAU
//* 4-Agregar botón para eliminar // DIEGO

let textArea = document.getElementById('note-text');
let dashboard = document.querySelector('.dashboard');
let noteForm = document.querySelector('form');
let noteExample = document.querySelector('#note-example');


//* 1-Mostrar datos guardados en LS // DIEGO
let notes = JSON.parse(localStorage.getItem('notes'));
//note={id:1, text:'hola'}
notes.forEach(note=>{
  let newNote = document.createElement('div');
  newNote.classList.add('note-style','my-1','mx-2','d-flex','justify-content-center','align-items-center');
  newNote.innerText = note.text;
  dashboard.appendChild(newNote);
})

//* 2-Tomar los datos del formulario e ir mostrandolos en notita de ejemplo // PAU
// prueba

//* 3-Guardar los datos de nueva nota en LS y mostrarlos // PAU


//* 4-Agregar botón para eliminar // DIEGO
