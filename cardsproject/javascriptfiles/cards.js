let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center';
function element(t, ag, im)
{
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let age = document.createElement('p');
    let img = document.createElement('img');
    //content
    let head = document.createTextNode(t);
    let ageContent = document.createTextNode(ag);
    img.src = im;
    //style
    card.style.width = '200px';
    img.style.width = '100%';
    card.style.background = '#444444';
    card.style.color = 'aqua';
    card.style.padding = '10px';
    card.style.margin = '2px';
    card.style.display = 'inline-block';
    title.appendChild(head);
    age.appendChild(ageContent);
    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);
    container.appendChild(card);
}
let numberOfCards = prompt('Enter the number of cards : ');
for(let i = 0; i < numberOfCards; i++)
{
    let title = prompt('Enter the title : ');
    let ag = prompt('Enter your age : ');
    let img = prompt('Enter the path of photo : ');
    element(title,ag,img);
}