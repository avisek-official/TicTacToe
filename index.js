var clickCount = 0;
var x = [1,3,5,7,9];

var smb1 = document.getElementById("smb-1");
var smb2 = document.getElementById("smb-2");
var smb3 = document.getElementById("smb-3");
var smb4 = document.getElementById("smb-4");
var smb5 = document.getElementById("smb-5");
var smb6 = document.getElementById("smb-6");
var smb7 = document.getElementById("smb-7");
var smb8 = document.getElementById("smb-8");
var smb9 = document.getElementById("smb-9");

function checkWin(val){
    if(smb1.innerHTML == val && smb2.innerHTML == val && smb3.innerHTML == val){
        return true; //width top
    }
    else if(smb4.innerHTML == val && smb5.innerHTML == val && smb6.innerHTML == val){
        return true; //width middle
    }
    else if(smb7.innerHTML == val && smb8.innerHTML == val && smb9.innerHTML == val){
        return true; //width bottom
    }
    else if(smb1.innerHTML == val && smb4.innerHTML == val && smb7.innerHTML == val){
        return true; //height left
    }
    else if(smb2.innerHTML == val && smb5.innerHTML == val && smb8.innerHTML == val){
        return true; //height middle
    }
    else if(smb3.innerHTML == val && smb6.innerHTML == val && smb9.innerHTML == val){
        return true; //height right
    }
    else if(smb1.innerHTML == val && smb5.innerHTML == val && smb9.innerHTML == val){
        return true; //diagonal 1
    }
    else if(smb3.innerHTML == val && smb5.innerHTML == val && smb7.innerHTML == val){
        return true; //diagonal 2
    }
    else{
        return false;
    }
}

smb1.addEventListener("click",()=>{
    if(smb1.innerHTML === ''){
        if(!checkWin('X') && !checkWin('O')){
            if(clickCount<8){
                clickCount++;
                if(x.includes(clickCount)){
                    smb1.innerHTML = 'X';
                    if(checkWin('X')){
                        document.getElementById("info").innerHTML = "X won!";
                    }else{
                        document.getElementById("info").innerHTML = "Turn for O";
                    }
                }
                else{
                    smb1.innerHTML = 'O';
                    if(checkWin('O')){
                        document.getElementById("info").innerHTML = "O won!";
                    }else{
                        document.getElementById("info").innerHTML = "Turn for X";
                    }
                }
            }
            else{
                smb1.innerHTML = 'X';
                if(checkWin('X')){
                    document.getElementById("info").innerHTML = "X Won!";
                }else{
                    document.getElementById("info").innerHTML = "Match Draw";
                }
            }
        }
        else if(checkWin('X')){
            document.getElementById("info").innerHTML = "X won!";
            clickCount = 0;
        }
        else if(checkWin('O')){
            document.getElementById("info").innerHTML = "O won!";
            clickCount = 0;
        }
    }
    else{
        //alert('Invalid Move');
    }
})
smb2.addEventListener("click",()=>{
    if(smb2.innerHTML === ''){
        if(!checkWin('X') && !checkWin('O')){
            if(clickCount<8){
                clickCount++;
                if(x.includes(clickCount)){
                    smb2.innerHTML = 'X';
                    if(checkWin('X')){
                        document.getElementById("info").innerHTML = "X won!";
                    }else{
                        document.getElementById("info").innerHTML = "Turn for O";
                    }
                }
                else{
                    smb2.innerHTML = 'O';
                    if(checkWin('O')){
                        document.getElementById("info").innerHTML = "O won!";
                    }else{
                        document.getElementById("info").innerHTML = "Turn for X";
                    }
                }
            }
            else{
                smb2.innerHTML = 'X';
                if(checkWin('X')){
                    document.getElementById("info").innerHTML = "X Won!";
                }else{
                    document.getElementById("info").innerHTML = "Match Draw";
                }
            }
        }
        else if(checkWin('X')){
            document.getElementById("info").innerHTML = "X won!";
            clickCount = 0;
        }
        else if(checkWin('O')){
            document.getElementById("info").innerHTML = "O won!";
            clickCount = 0;
        }
    }
    else{
        //alert('Invalid Move');
    }
})
smb3.addEventListener("click",()=>{
    if(smb3.innerHTML === ''){
        if(!checkWin('X') && !checkWin('O')){
            if(clickCount<8){
                clickCount++;
                if(x.includes(clickCount)){
                    smb3.innerHTML = 'X';
                    if(checkWin('X')){
                        document.getElementById("info").innerHTML = "X won!";
                    }else{
                        document.getElementById("info").innerHTML = "Turn for O";
                    }
                }
                else{
                    smb3.innerHTML = 'O';
                    if(checkWin('O')){
                        document.getElementById("info").innerHTML = "O won!";
                    }else{
                        document.getElementById("info").innerHTML = "Turn for X";
                    }
                }
            }
            else{
                smb3.innerHTML = 'X';
                if(checkWin('X')){
                    document.getElementById("info").innerHTML = "X Won!";
                }else{
                    document.getElementById("info").innerHTML = "Match Draw";
                }
            }
        }
        else if(checkWin('X')){
            document.getElementById("info").innerHTML = "X won!";
            clickCount = 0;
        }
        else if(checkWin('O')){
            document.getElementById("info").innerHTML = "O won!";
            clickCount = 0;
        }
    }
    else{
        //alert('Invalid Move');
    }
})
smb4.addEventListener("click",()=>{
    if(smb4.innerHTML === ''){
        if(!checkWin('X') && !checkWin('O')){
            if(clickCount<8){
                clickCount++;
                if(x.includes(clickCount)){
                    smb4.innerHTML = 'X';
                    if(checkWin('X')){
                        document.getElementById("info").innerHTML = "X won!";
                    }else{
                        document.getElementById("info").innerHTML = "Turn for O";
                    }
                }
                else{
                    smb4.innerHTML = 'O';
                    if(checkWin('O')){
                        document.getElementById("info").innerHTML = "O won!";
                    }else{
                        document.getElementById("info").innerHTML = "Turn for X";
                    }
                }
            }
            else{
                smb4.innerHTML = 'X';
                if(checkWin('X')){
                    document.getElementById("info").innerHTML = "X Won!";
                }else{
                    document.getElementById("info").innerHTML = "Match Draw";
                }
            }
        }
        else if(checkWin('X')){
            document.getElementById("info").innerHTML = "X won!";
            clickCount = 0;
        }
        else if(checkWin('O')){
            document.getElementById("info").innerHTML = "O won!";
            clickCount = 0;
        }
    }
    else{
        //alert('Invalid Move');
    }
})
smb5.addEventListener("click",()=>{
    if(smb5.innerHTML === ''){
        if(!checkWin('X') && !checkWin('O')){
            if(clickCount<8){
                clickCount++;
                if(x.includes(clickCount)){
                    smb5.innerHTML = 'X';
                    if(checkWin('X')){
                        document.getElementById("info").innerHTML = "X won!";
                    }else{
                        document.getElementById("info").innerHTML = "Turn for O";
                    }
                }
                else{
                    smb5.innerHTML = 'O';
                    if(checkWin('O')){
                        document.getElementById("info").innerHTML = "O won!";
                    }else{
                        document.getElementById("info").innerHTML = "Turn for X";
                    }
                }
            }
            else{
                smb5.innerHTML = 'X';
                if(checkWin('X')){
                    document.getElementById("info").innerHTML = "X Won!";
                }else{
                    document.getElementById("info").innerHTML = "Match Draw";
                }
            }
        }
        else if(checkWin('X')){
            document.getElementById("info").innerHTML = "X won!";
            clickCount = 0;
        }
        else if(checkWin('O')){
            document.getElementById("info").innerHTML = "O won!";
            clickCount = 0;
        }
    }
    else{
        //alert('Invalid Move');
    }
})
smb6.addEventListener("click",()=>{
    if(smb6.innerHTML === ''){
        if(!checkWin('X') && !checkWin('O')){
            if(clickCount<8){
                clickCount++;
                if(x.includes(clickCount)){
                    smb6.innerHTML = 'X';
                    if(checkWin('X')){
                        document.getElementById("info").innerHTML = "X won!";
                    }else{
                        document.getElementById("info").innerHTML = "Turn for O";
                    }
                }
                else{
                    smb6.innerHTML = 'O';
                    if(checkWin('O')){
                        document.getElementById("info").innerHTML = "O won!";
                    }else{
                        document.getElementById("info").innerHTML = "Turn for X";
                    }
                }
            }
            else{
                smb6.innerHTML = 'X';
                if(checkWin('X')){
                    document.getElementById("info").innerHTML = "X Won!";
                }else{
                    document.getElementById("info").innerHTML = "Match Draw";
                }
            }
        }
        else if(checkWin('X')){
            document.getElementById("info").innerHTML = "X won!";
            clickCount = 0;
        }
        else if(checkWin('O')){
            document.getElementById("info").innerHTML = "O won!";
            clickCount = 0;
        }
    }
    else{
        //alert('Invalid Move');
    }
})
smb7.addEventListener("click",()=>{
    if(smb7.innerHTML === ''){
        if(!checkWin('X') && !checkWin('O')){
            if(clickCount<8){
                clickCount++;
                if(x.includes(clickCount)){
                    smb7.innerHTML = 'X';
                    if(checkWin('X')){
                        document.getElementById("info").innerHTML = "X won!";
                    }else{
                        document.getElementById("info").innerHTML = "Turn for O";
                    }
                }
                else{
                    smb7.innerHTML = 'O';
                    if(checkWin('O')){
                        document.getElementById("info").innerHTML = "O won!";
                    }else{
                        document.getElementById("info").innerHTML = "Turn for X";
                    }
                }
            }
            else{
                smb7.innerHTML = 'X';
                if(checkWin('X')){
                    document.getElementById("info").innerHTML = "X Won!";
                }else{
                    document.getElementById("info").innerHTML = "Match Draw";
                }
            }
        }
        else if(checkWin('X')){
            document.getElementById("info").innerHTML = "X won!";
            clickCount = 0;
        }
        else if(checkWin('O')){
            document.getElementById("info").innerHTML = "O won!";
            clickCount = 0;
        }
    }
    else{
        //alert('Invalid Move');
    }
})
smb8.addEventListener("click",()=>{
    if(smb8.innerHTML === ''){
        if(!checkWin('X') && !checkWin('O')){
            if(clickCount<8){
                clickCount++;
                if(x.includes(clickCount)){
                    smb8.innerHTML = 'X';
                    if(checkWin('X')){
                        document.getElementById("info").innerHTML = "X won!";
                    }else{
                        document.getElementById("info").innerHTML = "Turn for O";
                    }
                }
                else{
                    smb8.innerHTML = 'O';
                    if(checkWin('O')){
                        document.getElementById("info").innerHTML = "O won!";
                    }else{
                        document.getElementById("info").innerHTML = "Turn for X";
                    }
                }
            }
            else{
                smb8.innerHTML = 'X';
                if(checkWin('X')){
                    document.getElementById("info").innerHTML = "X Won!";
                }else{
                    document.getElementById("info").innerHTML = "Match Draw";
                }
            }
        }
        else if(checkWin('X')){
            document.getElementById("info").innerHTML = "X won!";
            clickCount = 0;
        }
        else if(checkWin('O')){
            document.getElementById("info").innerHTML = "O won!";
            clickCount = 0;
        }
    }
    else{
        //alert('Invalid Move');
    }
})
smb9.addEventListener("click",()=>{
    if(smb9.innerHTML === ''){
        if(!checkWin('X') && !checkWin('O')){
            if(clickCount<8){
                clickCount++;
                if(x.includes(clickCount)){
                    smb9.innerHTML = 'X';
                    if(checkWin('X')){
                        document.getElementById("info").innerHTML = "X won!";
                    }else{
                        document.getElementById("info").innerHTML = "Turn for O";
                    }
                }
                else{
                    smb9.innerHTML = 'O';
                    if(checkWin('O')){
                        document.getElementById("info").innerHTML = "O won!";
                    }else{
                        document.getElementById("info").innerHTML = "Turn for X";
                    }
                }
            }
            else{
                smb9.innerHTML = 'X';
                if(checkWin('X')){
                    document.getElementById("info").innerHTML = "X Won!";
                }else{
                    document.getElementById("info").innerHTML = "Match Draw";
                }
            }
        }
        else if(checkWin('X')){
            document.getElementById("info").innerHTML = "X won!";
            clickCount = 0;
        }
        else if(checkWin('O')){
            document.getElementById("info").innerHTML = "O won!";
            clickCount = 0;
        }
    }
    else{
        //alert('Invalid Move');
    }
})

document.getElementById("reset").addEventListener("click",function(){
    window.location.reload();
})