function game(){
//getting variables
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    
    b1 = document.getElementById("b1").value; 
    b2 = document.getElementById("b2").value; 
    b3 = document.getElementById("b3").value; 
    b4 = document.getElementById("b4").value; 
    b5 = document.getElementById("b5").value; 
    b6 = document.getElementById("b6").value; 
    b7 = document.getElementById("b7").value; 
    b8 = document.getElementById("b8").value; 
    b9 = document.getElementById("b9").value;

    var b1b, b2b, b3b, b4b, b5b, b6b, b7b, b8b, b9; 
      
    b1b = document.getElementById("b1"); 
    b2b = document.getElementById("b2"); 
    b3b = document.getElementById("b3"); 
    b4b = document.getElementById("b4"); 
    b5b = document.getElementById("b5"); 
    b6b = document.getElementById("b6"); 
    b7b = document.getElementById("b7"); 
    b8b = document.getElementById("b8"); 
    b9b = document.getElementById("b9");

//testing to see if there are 3 in a row for either
    //for X
    if((b1=='X'&& b2=='X'&& b3=='X')||
    (b4=='X'&& b5=='X'&& b6=='X')||
    (b7=='X'&& b8=='X'&& b9=='X')||
    (b1=='X'&& b4=='X'&& b7=='X')||
    (b2=='X'&& b5=='X'&& b8=='X')||
    (b3=='X'&& b6=='X'&& b9=='X')||
    (b1=='X'&& b5=='X'&& b9=='X')||
    (b3=='X'&& b5=='X'&& b7=='X')){
        document.getElementById('print').innerHTML = "Player X won";
        b1b.disabled = true;
        b2b.disabled = true;
        b3b.disabled = true;
        b4b.disabled = true;
        b5b.disabled = true;
        b6b.disabled = true;
        b7b.disabled = true;
        b8b.disabled = true;
        b9b.disabled = true;
    }
    // for O
    else if((b1=='O'&& b2=='O'&& b3=='O')||
    (b4=='O'&& b5=='O'&& b6=='O')||
    (b7=='O'&& b8=='O'&& b9=='O')||
    (b1=='O'&& b4=='O'&& b7=='O')||
    (b2=='O'&& b5=='O'&& b8=='O')||
    (b3=='O'&& b6=='O'&& b9=='O')||
    (b1=='O'&& b5=='O'&& b9=='O')||
    (b3=='O'&& b5=='O'&& b7=='O')){
        document.getElementById('print').innerHTML = "Player O won";
        b1b.disabled = true;
        b2b.disabled = true;
        b3b.disabled = true;
        b4b.disabled = true;
        b5b.disabled = true;
        b6b.disabled = true;
        b7b.disabled = true;
        b8b.disabled = true;
        b9b.disabled = true;
    }
    // if tie
    else if((b1 == 'X' || b1 == 'O') 
    && (b2 == 'X' || b2 == 'O') 
    && (b3 == 'X' || b3 == 'O') 
    && (b4 == 'X' || b4 == 'O') 
    && (b5 == 'X' || b5 == 'O') 
    && (b6 == 'X' || b6 == 'O') 
    && (b7 == 'X' || b7 == 'O') 
    && (b8 == 'X' || b8 == 'O') 
    && (b9 == 'X' || b9 == 'O')) { 
        document.getElementById('print').innerHTML = "Match Tie";
        b1b.disabled = true;
        b2b.disabled = true;
        b3b.disabled = true;
        b4b.disabled = true;
        b5b.disabled = true;
        b6b.disabled = true;
        b7b.disabled = true;
        b8b.disabled = true;
        b9b.disabled = true;
    } 

// printing result
    else {  
        if (flag == 1) { 
            document.getElementById('print') 
                .innerHTML = "Player X Turn"; 
        } 
        else { 
            document.getElementById('print') 
                .innerHTML = "Player 0 Turn"; 
        } 
    }
}

// reset function  
function reset(){
    location.reload(); 
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '';
}

// clicking to add X or O to the grid
flag = 1;
function b1f(){
    if(flag == 1){
        document.getElementById("b1").value="X"
        document.getElementById("b1").disable = true;
        flag = 0
    }
    else { 
        document.getElementById("b1").value = "O"; 
        document.getElementById("b1").disabled = true; 
        flag = 1; 
    } 
}
function b2f(){
    if(flag == 1){
        document.getElementById("b2").value="X"
        document.getElementById("b2").disable = true;
        flag = 0
    }
    else { 
        document.getElementById("b2").value = "O"; 
        document.getElementById("b2").disabled = true; 
        flag = 1; 
    } 
}
function b3f(){
    if(flag == 1){
        document.getElementById("b3").value="X"
        document.getElementById("b3").disable = true;
        flag = 0
    }
    else { 
        document.getElementById("b3").value = "O"; 
        document.getElementById("b3").disabled = true; 
        flag = 1; 
    } 
}
function b4f(){
    if(flag == 1){
        document.getElementById("b4").value="X"
        document.getElementById("b4").disable = true;
        flag = 0
    }
    else { 
        document.getElementById("b4").value = "O"; 
        document.getElementById("b4").disabled = true; 
        flag = 1; 
    } 
}
function b5f(){
    if(flag == 1){
        document.getElementById("b5").value="X"
        document.getElementById("b5").disable = true;
        flag = 0
    }
    else { 
        document.getElementById("b5").value = "O"; 
        document.getElementById("b5").disabled = true; 
        flag = 1; 
    } 
}
function b6f(){
    if(flag == 1){
        document.getElementById("b6").value="X"
        document.getElementById("b6").disable = true;
        flag = 0
    }
    else { 
        document.getElementById("b6").value = "O"; 
        document.getElementById("b6").disabled = true; 
        flag = 1; 
    } 
}
function b7f(){
    if(flag == 1){
        document.getElementById("b7").value="X"
        document.getElementById("b7").disable = true;
        flag = 0
    }
    else { 
        document.getElementById("b7").value = "O"; 
        document.getElementById("b7").disabled = true; 
        flag = 1; 
    } 
}
function b8f(){
    if(flag == 1){
        document.getElementById("b8").value="X"
        document.getElementById("b8").disable = true;
        flag = 0
    }
    else { 
        document.getElementById("b8").value = "O"; 
        document.getElementById("b8").disabled = true; 
        flag = 1; 
    } 
}
function b9f(){
    if(flag == 1){
        document.getElementById("b9").value="X"
        document.getElementById("b9").disable = true;
        flag = 0
    }
    else { 
        document.getElementById("b9").value = "O"; 
        document.getElementById("b9").disabled = true; 
        flag = 1; 
    } 
}

 