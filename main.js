const input = document.querySelector('input'); // Main input
const addBtn = document.querySelector('.add-btn'); // Add button
const cart = document.querySelector('.cart'); // Grocery List

addBtn.addEventListener('click', () => {
    if(input.value === '') {
        alert('buy grocery');
    }
    else {
        // List Item wrapper
        let div = document.createElement('div');
        div.className = 'flex relative mt-2';

        // Check box
        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.className = 'absolute top-4 left-3';
        checkBox.addEventListener('click', () => {
            liElem.style.opacity = '0.5';
        });

        // List item
        let liElem = document.createElement('li');
        liElem.innerHTML = input.value;
        liElem.className = 'bg-white p-3 w-96 rounded-l-lg pl-8';
        liElem.addEventListener('blur', () => {
            liElem.contentEditable = false;
        });

        // Edit icon
        let editIcon = document.createElement('button');
        editIcon.innerHTML = '&#9999;';
        editIcon.className = 'edit bg-orange-400 p-3';
        editIcon.addEventListener('click', () => {
            liElem.contentEditable = true;
            liElem.focus()
            liElem.style.opacity = '1';
            checkBox.checked = false;
        });

        // Delete icon
        let deleteIcon = document.createElement('button');
        deleteIcon.innerHTML = '&#x1F5D1;';
        deleteIcon.className = 'delete bg-red-600 text-white rounded-r-lg p-3';
        deleteIcon.addEventListener('click', () => {
            div.remove()
        })

        div.append(checkBox, liElem, editIcon, deleteIcon);
        cart.append(div);
    }
    input.value ='';
})