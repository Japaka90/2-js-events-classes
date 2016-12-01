'use strict';

function Application() {


var start = document.querySelector('#Start');
var stop = document.querySelector('#Stop');
var div = document.querySelector('div');
var input = document.querySelector('input');


start.addEventListener('click', function() {
    if (parseInt(input.value) > 50) {
        var step = 50;
    } else if (parseInt(input.value) < 10) {
        var step = 10;
    }
    else {
        var step = parseInt(input.value)
    };
    console.log(step);       
    
    this.addEventListener('keydown', function(){
        if (!event.shiftKey) {
        switch(event.code ) {
            case 'ArrowDown': move('div')
                          .add('margin-top', step)
                          .end();
             break;   
             case 'ArrowLeft': move('div')
                          .sub('margin-left', step)
                          .end();
             break;  
             case 'ArrowUp': move('div')
                          .sub('margin-top', step)
                          .end();
             break;   
             case 'ArrowRight': move('div')
                          .add('margin-left', step)
                          .end();            
            }
        }
        else {
        switch(event.code ) {    
            case 'ArrowLeft': move('div')
                              .rotate(step)
                              .end();
            break;
            case 'ArrowRight': move('div')
                              .rotate(-step)
                              .end();
            break;
            }
        }
        console.log(event.code)
        })  
    })

    stop.addEventListener('click', function() {})
}

Application()