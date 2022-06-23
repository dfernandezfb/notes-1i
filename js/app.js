//* 1-Mostrar datos guardados en LS // DIEGO
//* 2-Tomar los datos del formulario e ir mostrandolos en notita de ejemplo // PAU
//* 3-Guardar los datos de nueva nota en LS y mostrarlos // PAU
//* 4-Agregar botón para eliminar // DIEGO

import {dashboard, noteExample, textArea, noteForm} from './../helpers/constants.js'


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

textArea.addEventListener('keyup', (e) => {
  noteExample.innerText = e.target.value
  if(e.target.value == ''){
    noteExample.innerText = 'Escriba una nota'
  }

})

//* 3-Guardar los datos de nueva nota en LS y mostrarlos // PAU


//* 4-Agregar botón para eliminar // DIEGO
