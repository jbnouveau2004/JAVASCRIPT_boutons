
let rect= document.getElementById('rectangle');
let hauteur= 100;



let btn = document.querySelector('#vert');
btn.addEventListener('click', updaterect);

function updaterect(){
    rect.style.backgroundColor= 'green';
}



let btn2 = document.querySelector('#init');
btn2.addEventListener('click', updaterect2);

function updaterect2(){
    rect.style.backgroundColor= '';
}


let btn3 = document.querySelector('#hide');
btn3.addEventListener('click', updaterect3);

function updaterect3(){
    rect.style.display= 'none';
}

let btn4 = document.querySelector('#show');
btn4.addEventListener('click', updaterect4);

function updaterect4(){
    rect.style.display= 'block';
}

let btn5 = document.querySelector('#augmente');
btn5.addEventListener('click', updaterect5);

function updaterect5(){
    if(hauteur ==100){
        rect.style.height= '200px';
        hauteur = 200;
    } else if (hauteur == 200){
        rect.style.height= '300px';
        hauteur = 300;
    } else if (hauteur == 300){
        rect.style.height= '100px';
        hauteur = 100;
    }
}

    // const element = document.querySelector('.rectangle')

    // const style = getComputedStyle(element);

    // const height = style.height;

    // let combien = parseInt(height, 10);


    // console.log(style);

    // objectJavascript = document.getElementById("rectangle"); 
    // console.log(objectJavascript.style);

















// let chiffre1=0;
// let chiffre2=0;


// const body = document.querySelector('body');
// const table = document.querySelector('table');
// const tbody = document.querySelector('tbody');

// for(let i=0;i<11;i++){
// let newTr = document.createElement('tr');
// let newTh = document.createElement('th');
// newTh.innerText = chiffre1;
// newTr.append(newTh);

// for(let j=0;j<11;j++){
// let newTd = document.createElement('td');
// newTd.innerText = chiffre1*chiffre2;
// console.log(chiffre2);
// newTr.append(newTd);
// chiffre2 +=1;
// }
// tbody.append(newTr);
// chiffre2=0;
// chiffre1 +=1;
// }






// let newParagraph = document.createElement('p');
// newParagraph.innerText = 'Je suis un ' + nom;
// newDiv.append(newParagraph);
// body.append(newDiv);








// let titre = document.getElementById('titre');



// titre.addEventListener("click", changetext);

// function changetext(){
// if (this.style.fontSize != "40px"){
//     this.style.fontSize = "40px"
// }else{
//     this.style.fontSize = ""
// }
// }




// function reduction(){
//     // this.style.color = "";
//     // this.style.fontSize = "";
//     this.style = "";

//     console.log(titre);

//     return
// }


// let titre = document.getElementById('titre');



// titre.addEventListener("click", agrandissement);

// console.log(titre);

// function agrandissement(){
//     this.style.color = "orange";
//     this.style.fontSize = "40px";
//     console.log(titre);

//     titre.addEventListener("click", reduction);
//     return
// }




// function reduction(){
//     // this.style.color = "";
//     // this.style.fontSize = "";
//     this.style = "";

//     console.log(titre);

//     return
// }

