const removeDivs = html => {
    let root = document.createElement('span');
    root.innerHTML = html;
    let divs = root.querySelectorAll('div');
    divs.forEach(item => {
        // получаем сам div, затем поднимаемся к его родителю
        // и у родителя удаляем этот же элемент div
        item.parentNode.removeChild(item)
    })
    return root.innerHTML
}

const html = '<div></div>Hello<div><div><p>Hello world</p></div></div> <b>World!</b>';

alert( removeDivs(html));
alert( removeDivs(html) === 'Hello <b>World!</b>'); // Должно быть true
