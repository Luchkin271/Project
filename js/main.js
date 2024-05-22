const objectName = document.querySelector('.content__header_name');
const objectType = document.querySelector('.content__header_type');
const objectImg = document.querySelector('.content__header_img');
const objectInfo = document.querySelector('.content__main_list');
const objectNav = document.querySelector('.content__nav_list');

const contentLoad = (name,  type, imgPath) => {
    objectName.innerHTML = name;
    objectType.innerHTML = type;
}

document.addEventListener('DOMContentLoaded', contentLoad('Имя объекта', 'Тип объекта'))