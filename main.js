const Items = [
    {url: 'http://google.com.ua', name: 'О нас'},
    {url: 'http://google.com.ua', name: 'Каталог'},
    {url: 'http://google.com.ua', name: 'Отзывы'},
    {url: 'http://google.com.ua', name: 'Контакты'},
]

const Content = document.querySelector('body');
const Menu = document.createElement('div');
    Menu.style['height'] = '50px';
    Menu.style['width'] = '800px';
    Menu.style['display'] = 'flex';
    Menu.style['justify-content'] = 'space-around';
    Menu.style['align-items'] = 'center';
    Menu.style['background-color'] = 'grey';
    Content.appendChild( Menu );

for (let el of Items) {
    const itemName = document.createElement('a');
        itemName.setAttribute('href', 'http://google.com.ua');
        itemName.style['text-decoration'] = 'none';
        itemName.style['color'] = '#fff';
        itemName.innerText = el.name;
        Menu.appendChild(itemName);
}
