function adj(rand1){

    let o={
        "0":"crazy",
        "1":"Amazing",
        "2":"Fire",
        
        
    }

    return o[rand1];


}

function shopname(rand2){
    let o={
        0:"Engine",
        1:"foods",
        2:"gaements",
    }
    return o[rand2];
}

function anotherword(rand3){
    let o={
        "0":"Bros",
        "1":"Limited",
        "2":"hub",
    }

    return o[rand3];
}

// Correctly generate random integers between 0 and 2
let rand1 = Math.floor(Math.random() * 3);
let rand2 = Math.floor(Math.random() * 3);
let rand3 = Math.floor(Math.random() * 3);

console.log(`${rand1} ${rand2} ${rand3}`);
alert(`Your business name: ${adj(rand1)} ${shopname(rand2) }  ${anotherword(rand3)}`);

