import './less/index.less'

// Your code goes here!
const buttons = document.querySelectorAll('.btn');


buttons.forEach(button => {
    button.addEventListener('mousedown', function mouseDown(){
        button.style.color = 'orange';
        border.style = '1px solid orange';

    });
    button.addEventListener('mouseup', function mouseUp(){
        button.style.color = '#17A2B8';
    });
 });




