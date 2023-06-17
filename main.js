const input = document.querySelector('input');
const addBtn = document.querySelector('button');
const cart = document.querySelector('ul');
const checked = document.querySelector('li::before');
const body = document.querySelector('body');

addBtn.addEventListener('click', () => {
    if(input.value === '') {
        alert('buy grocery');
    }
    else {
        li = document.createElement('li');
        li.innerHTML = input.value;
        li.classList.add('unchecked');
        cart.appendChild(li);

        editIcon = document.createElement('i');
        editIcon.innerHTML = '&#9998';
        editIcon.classList.add('editIcon');
        li.appendChild(editIcon);

        deleteIcon = document.createElement('span');
        deleteIcon.innerHTML = '&#10006';
        deleteIcon.classList.add('deleteIcon');
        li.appendChild(deleteIcon);
    }
    input.value ='';

})

// adding click event to edit, delete and checkbox
cart.addEventListener('click', e => {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('unchecked');
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
    else if (e.target.tagName === 'I') {
        e.target.parentElement.contentEditable = true;
        e.target.parentElement = focus;
    }
}, false)

cart.addEventListener('blur', () => {
    cart.contentEditable = false;
})