const inputField = document.getElementById('inputField')
const addToDo = document.getElementById('addToDo');
const container = document.getElementById('toDoContainer');

addToDo.addEventListener('click', function(){
    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField.value;
    container.append(paragraph)
    inputField.value = '';
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function() {
        paragraph.remove()
    })
})



