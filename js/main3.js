const objectName = document.querySelector('.content__header_name');
const objectType = document.querySelector('.content__header_type');
const objectPerson = document.querySelector('.content__header_person');
const objectImg = document.querySelector('.content__header_img');
const objectInfo = document.querySelector('.content__main_list');
const objectNav = document.querySelector('.content__nav_list');
const dt1 = document.querySelector('.dt1');
const dt2 = document.querySelector('.dt2');
const dt3 = document.querySelector('.dt3');
const dt4 = document.querySelector('.dt4');

const contentLoad = (name,  type, personName) => {
    objectName.innerHTML = name;
    objectType.innerHTML = type;
    objectPerson.innerHTML = personName;
    timeHandler();

}

const dtONHandler = (dt) => {
    let switcher = Math.round(Math.random())
    if (switcher === 1) {
        dt.innerHTML = 'ON';
        dt.style.color = 'orange'
    }
    else {
        dt.innerHTML = 'OFF'
        dt.style.color = 'green';
    }
}

const dtNumberHandler= (dt) => {
    let number = Math.round(Math.random()*100)
    dt.innerHTML = number;
    if (number < 40) {
        dt.style.color = 'green';
    }
    else if (number < 70) {
        dt.style.color = 'orange';
    }
    else {
        dt.style.color = 'red';
    }
}

const dtPercentHandler = (dt) => {
    let number = Math.round(Math.random()*100)
    dt.innerHTML = `${number}%`;
    if (number < 40) {
        dt.style.color = 'green';
    }
    else if (number < 70) {
        dt.style.color = 'orange';
    }
    else {
        dt.style.color = 'red';
    }
}

const timeHandler = () => {
    dtONHandler(dt1);
    dtONHandler(dt2);
    dtNumberHandler(dt3);
    dtPercentHandler(dt4);
}

document.addEventListener('DOMContentLoaded', contentLoad(
    'Имя объекта: ST1-321',
    'Тип объекта: Станок',
    'Закреплённый сотрудник: Алиев Д.В.'));



setInterval(timeHandler, 1500);