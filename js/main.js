const objectName = document.querySelector('.content__header_name');
const objectType = document.querySelector('.content__header_type');
const objectPerson = document.querySelector('.content__header_person');
const objectImg = document.querySelector('.content__header_img');
const objectInfo = document.querySelector('.content__main_list');
const objectNav = document.querySelector('.content__nav_list');

const contentLoad = (name,  type, personName) => {
    objectName.innerHTML = name;
    objectType.innerHTML = type;
    objectPerson.innerHTML = personName;
}

document.addEventListener('DOMContentLoaded', contentLoad(
    'Имя объекта: FT1-465',
    'Тип объекта: Станок',
    'Закреплённый сотрудник: Лучкин Г.А.'))