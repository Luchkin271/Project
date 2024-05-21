const objectName = document.querySelector('.content__header_name');
const objectType = document.querySelector('.content__header_type');

const contentLoad = (name,  type) => {
    objectName.innerHTML = name;
    objectType.innerHTML = type;
}

document.addEventListener('DOMContentLoaded', contentLoad('Имя объекта', 'Тип объекта'))