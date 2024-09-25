const boxes=document.querySelectorAll(".box");


function changeColors() {
    boxes.forEach(e => {
        e.style.backgroundColor = getRandomColor();
    });
}

function getRandomColor(){
   
    //r(max-min)+min
    let v1=Math.ceil(Math.random()*(255)); 
    let v2=Math.ceil(Math.random()*(255)); 
    let v3=Math.ceil(Math.random()*(255)); 
    let color=`rgb(${v1},${v2},${v3})`;
 
    return color;


 
}


setInterval(changeColors,500);

// const boxes = document.querySelectorAll(".box");

// function getRandomColor() {
//     let v1 = Math.ceil(Math.random() * 255); 
//     let v2 = Math.ceil(Math.random() * 255); 
//     let v3 = Math.ceil(Math.random() * 255); 
//     let color = `rgb(${v1}, ${v2}, ${v3})`;
//     return color;
// }

// function changeColors() {
//     boxes.forEach(e => {
//         e.style.backgroundColor = getRandomColor();
//     });
// }

// // Change colors every 500 milliseconds (0.5 seconds)
// setInterval(changeColors, 500);
