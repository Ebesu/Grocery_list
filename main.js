const input = document.querySelector('input');
const addBtn = document.querySelector('.add-btn');
const cart = document.querySelector('.cart');

addBtn.addEventListener('click', () => {
    
    if(input.value === '') {
        alert('buy grocery');
    }
    else {
        let div = document.createElement('div');
        div.className = 'flex relative mt-2';

        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.className = 'absolute top-4 left-3';
        checkBox.addEventListener('click', () => {
            liElem.style.opacity = '0.5';
        });

        let liElem = document.createElement('li');
        liElem.innerHTML = input.value;
        liElem.className = 'bg-white p-3 w-96 rounded-l-lg pl-8';
        liElem.addEventListener('blur', () => {
            liElem.contentEditable = false;
        });

        let editIcon = document.createElement('button');
        editIcon.innerHTML = 'Edit';
        editIcon.className = 'edit bg-orange-400 p-3';
        editIcon.addEventListener('click', () => {
            liElem.contentEditable = true;
            liElem.focus()
            liElem.style.opacity = '1';
            checkBox.checked = false;
        });

        let deleteIcon = document.createElement('button');
        deleteIcon.innerHTML = 'Delete';
        deleteIcon.className = 'delete bg-red-600 text-white rounded-r-lg p-3';
        deleteIcon.addEventListener('click', () => {
            div.remove()
        })

        div.append(checkBox, liElem, editIcon, deleteIcon);
        cart.append(div);
    }
    input.value ='';
})