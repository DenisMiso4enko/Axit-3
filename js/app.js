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

