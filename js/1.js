let container = document.querySelector(`.container`);

let search = new URLSearchParams(window.location.search); 
let i = search.get(`i`);
console.log(i)

album = albums[i]

container.innerHTML += `
                <h1>${album.name}</h1>
                <div class="row">
                    <div class="col p"><p class="p1">${album.description}</p></div>
                    <div class="col"><img src="${album.img}" alt="${i}"></div>
                </div>`
console.log(list_links, container)

container.innerHTML += `
<ul class="sp_a">
<li><a href="index.html">Вернуться назад</a></li>
<li><a href="1.html?i=0">Какаято штука номер 1</a></li>
<li><a href="1.html?i=1">Какаято штука номер 2</a></li>
<li><a href="1.html?i=2">Какаято штука номер 3</a></li>
</ul>

`


