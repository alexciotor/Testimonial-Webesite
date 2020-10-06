  
//Array of Content

const photos =[{
    photo: './Photos/ape.jpeg',
    text: 'Best food I ever had',
    name: 'Tyler'},

    {photo: './Photos/Cake.jpeg',
    text: "Best cake I ever Had",
    name: 'John'},

    {photo: './Photos/dork.jpeg',
    text: 'One of the best places to eat in the Country',
    name :'Stacy'},

    {photo: './Photos/goofy.jpeg',
    text: 'I have never eatn something better in my life',
    name: 'Castor'},

    {photo: './Photos/london6.jpeg',
    text: 'All English on this one!',
    name: 'Winston'}
];
 // Page Functionality
const buttons = document.querySelectorAll('.spn')
const titlu = document.getElementById('text1');
const para = document.getElementById('text2');
const img = document.getElementById('img')
 
let i = 0;
buttons.forEach(button=>{
    button.addEventListener('click', function(e){
        if(button.classList.contains('spn-right')){
            i++
            if(i > photos.length-1){
                i = 0;
            }
        titlu.innerHTML =photos[i].name;
        img.src =photos[i].photo;
        para.innerHTML = photos[i].text;
        }
        if(button.classList.contains('spn-left')){
            i--;
            if(i<0){
                i=photos.length -1;

            }
            titlu.innerHTML =photos[i].name;
            img.src =photos[i].photo;
            para.innerHTML = photos[i].text;
        }
    })
})