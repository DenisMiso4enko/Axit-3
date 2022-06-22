/* ------------Табы----------- */
const tabHeaders = document.querySelectorAll('[data-tab]')
//console.log(headers);

const contentBoxes = document.querySelectorAll('[data-tab-content]')

tabHeaders.forEach(function(item) {
    //console.log(item);
    
    item.addEventListener('click', function() {
        //console.log('Tab link!!!');
        //console.log(this);
        //console.log(this.dataset.tab);

        tabHeaders .forEach(function(item) {
            item.classList.remove('active')
        })   // добавил для кажддого tab при клике убирать и добовлять класс active

        item.classList.add('active')

    const contentBox = document.querySelector('#' + this.dataset.tab)
        //console.log(contentBox);


        contentBoxes.forEach(function(item) {
            item.classList.add('hidden')
        })

        
        contentBox.classList.remove('hidden')
        
    })
})

/* ------------Скрол к секции по сылке----------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault()
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        })
    })
})

/* ------------Меню бургер ----------- */

// Ищем нужные элементы бургер и меню
const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu__list')
// Вещаем событие на бургер и добовляем переключатель с классом active
burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})
// При нажатии на сылку из меню удаляем класс active
document.querySelectorAll('.menu__list').forEach(n => n.addEventListener('click', () => {
    burger.classList.remove('active')
    menu.classList.remove('active')
}))


// slider 

/* $('.reviews__card_inner').slick({
    dots: true,
    arrows: false,
}); */