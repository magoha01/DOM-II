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

//change background color with click and dblclick events

window.addEventListener('click', () => document.body.style.backgroundColor = '#b4ede0');

window.addEventListener('dblclick', () => document.body.style.backgroundColor = 'white');


//keyup and keydown on spacebar to change text color

document.addEventListener('keydown', event => {
    if (event.code === 'Space') {
      document.body.style.color = 'blue';
    }
  });

  document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      document.body.style.color = 'black';
    }
  });

//load event

  window.addEventListener('onload', () =>  alert('page is fully loaded'));


  function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
    let scale = 1;
    const el = document.querySelector('h1');

    el.addEventListener('wheel', zoom);



