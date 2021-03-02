const box = document.querySelectorAll('.box');
let playerBool = true;


box.forEach((item) => {
    item.addEventListener('click', () => {
        if(playerBool == true && (!item.classList.contains('x') && !item.classList.contains('o'))){ 
            playerBool = false; 
            item.classList.add('x');
            item.innerHTML = 'X';
        } else if(playerBool == false && (!item.classList.contains('x') && !item.classList.contains('o'))) { 
            playerBool = true; 
            item.classList.add('o');
            item.innerHTML = 'O';
        }
    })
})

const setResult = setInterval( () => {
    if(comboArr('x')){
        clearGame();
        alert('win X')
    }
    else if(comboArr('o')){
        clearGame();
        alert('win O')
    }
    else if(arrEmpty()){
        clearGame();
        alert('Draw')
    }
}, 500);

function clearGame(){
    box.forEach((item) => {
        item.classList.remove('x');
        item.classList.remove('o');
        item.innerHTML = '';
        playerBool = true;
    })
}

function combo(a, b, c, id){
    return (
        box[a].classList.contains(id) &&
        box[b].classList.contains(id) &&
        box[c].classList.contains(id)
    )
}

function comboArr(id){
    return(
        combo(0,1,2, id) ||
        combo(3,4,5, id) ||
        combo(6,7,8, id) ||
        combo(0,3,6, id) ||
        combo(1,4,7, id) ||
        combo(2,5,8, id) ||
        combo(0,4,8, id) ||
        combo(6,4,2, id)
    )
}

function empty(a){
    return(
        box[a].innerHTML != 0
    )
}

function arrEmpty(){
    return ( 
        empty(0) && 
        empty(1) && 
        empty(2) && 
        empty(3) && 
        empty(4) && 
        empty(5) && 
        empty(6) && 
        empty(7) && 
        empty(8)
    )
}




