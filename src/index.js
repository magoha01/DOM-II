import './less/index.less'

// Your code goes here!


//mousedown and mouseup on bottom buttons

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mousedown', function mouseDown(){
        button.style.color = 'orange';
    });
    button.addEventListener('mouseup', function mouseUp(){
        button.style.color = '#17A2B8';
    });
 });


 //mouseover and mouseout on nav links

 const navLinks = document.querySelectorAll('nav a');

 navLinks.forEach(link => {
     link.addEventListener('mouseover', function mouseOver(){
            link.style.fontWeight = 'bold';
     });
     link.addEventListener('mouseout', function mouseOut(){
        link.style.fontWeight = 'normal';
    });
 });

//change background color with click event

window.addEventListener('click', () => document.body.style.backgroundColor = '#b4ede0');



document.addEventListener('keydown', event => {
    if (32 === event.key) {
      document.body.style.backgroundColor = 'white';
    }
  })