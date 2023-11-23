let tab = document.querySelectorAll('.tabs__nav-el'),
    tabs_nav = document.querySelector('.tabs__nav'),
    tab_content = document.querySelectorAll('.tabs__content-el');
    map_bg = document.querySelectorAll('.tabs__content > .map__bg');

function hideTabsContent() {
    for (let i = 0; i < tab_content.length; i++) {
        tab_content[i].classList.remove('show');
        tab_content[i].classList.add('hide');
        tab[i].classList.remove('active');
        map_bg[i].classList.remove('active');
    }
}

function showTabContent(b) {
    if (tab_content[b].classList.contains('hide')) {
        tab_content[b].classList.remove('hide');
        tab_content[b].classList.add('show');
        tab[b].classList.add('active');
        map_bg[b].classList.add('active');
    }
}

tabs_nav && tabs_nav.addEventListener('click', function(event) {
    let target = event.target;
    if (target && target.classList.contains('tabs__nav-el')) {
        for(let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                hideTabsContent();
                showTabContent(i);
                break;
            }
        }
    }
});

// Поиск элементов с атрибутом data-default-active и установка их активными по умолчанию
let defaultActiveTabs = document.querySelectorAll('[data-default-active]');
if (defaultActiveTabs.length > 0) {
    for (let i = 0; i < tab.length; i++) {
        if (defaultActiveTabs[i]) {
            showTabContent(i);
            break;
        }
    }
}