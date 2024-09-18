console.log('append.js');

const placesList=document.getElementById('add-li');

const li=document.createElement('li');
li.innerText='pahartoli bon';
placesList.appendChild(li);

// 1.where to add
const mainContainer=document.getElementById('main-content');

const section=document.createElement('section');
mainContainer.appendChild(section)
const h1=document.createElement('h1');
h1.innerText='My favorite food';
section.appendChild(h1);
console.log(mainContainer);
const ul=document.createElement('ul');
const li1=document.createElement('li');
li1.innerText='biriyani';
ul.appendChild(li1);
const li2=document.createElement('li');
li2.innerText='shahi paner';
ul.appendChild(li2);
const li3=document.createElement('li');
li3.innerText='kacchi';
ul.appendChild(li3);
const li4=document.createElement('li');
li4.innerText='lazania';
ul.appendChild(li4);
section.appendChild(ul);


// direct html set

const dressSection=document.createElement('section');

dressSection.innerHTML=`
<h1>My favorite dresses</h1>

<ul>
<li>t-shirt</li>
<li>genji</li>
<li>lungi</li>
</ul>
`
mainContainer.appendChild(dressSection);