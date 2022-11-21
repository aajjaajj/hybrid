function keyArrowRight(){
    console.log("Right Pressed.");
    let blocks = document.getElementsByClassName("blockPrefab");
    for (let i = 0; i < blocks.length; i++){
        blocks[i].style.left = 20;
        console.log(blocks[i].style.left);
        if(blocks[i].style.left == '20px')
        {
            
            var a = blocks[i].style.left;
            a = Number(a.replace(/px$/, ''));
            console.log(a);
            a += 420;
            console.log(a);
            blocks[i].style.left = a; 
        }       
    }
}

function keyArrowLeft(){
    console.log("Left Pressed.");
    let blocks = document.getElementsByClassName("blockPrefab");
    for (let i = 0; i < blocks.length; i++){
            blocks[i].style.left = 20;        
    }
}
function keyArrowUp(){
    console.log("Up Pressed.");
    let blocks = document.getElementsByClassName("blockPrefab");
    for (let i = 0; i < blocks.length; i++){
        blocks[i].style.top = 85;        
    }
}
function keyArrowDown(){
    console.log("Down Pressed.");
    let blocks = document.getElementsByClassName("blockPrefab");
    for (let i = 0; i < blocks.length; i++){
        blocks[i].style.top = 490;        
    }
}

function keylog(e){
    console.log(e.key);
    switch(e.key){
        case 'ArrowRight':
            keyArrowRight();
            break;
        case 'ArrowLeft':
            keyArrowLeft();
            break;
        case 'ArrowUp':
            keyArrowUp();
            break;
        case 'ArrowDown':
            keyArrowDown();
            break;
        default:
            break;
    }
}

window.onkeydown = keylog;
  