function myFunction(val) {
    document.getElementById("input").innerHTML += val;
}
    /*switch (val) {
        case 1:
        document.getElementById("input").innerHTML += 1;
            break;
        case 2:
         document.getElementById("input").innerHTML += 2;
            break;
        case 3:
         document.getElementById("input").innerHTML += 3;
            break;
         case 4:
         document.getElementById("input").innerHTML += 4;
            break;
         case 5:
         document.getElementById("input").innerHTML += 5;
            break;
        case 6:
          document.getElementById("input").innerHTML += 6;
             break;
        case 7:
          document.getElementById("input").innerHTML += 7;
            break;
        case 8:
        document.getElementById("input").innerHTML += 8;
            break;
        case 9:
        document.getElementById("input").innerHTML += 9;
            break;
        case 0:
        document.getElementById("input").innerHTML += 0;
            break;
        case '+':
            document.getElementById("input").innerHTML = "+";
            break;
        case '-':
            document.getElementById("input").innerHTML = "-";
            break;
        case '*':
                document.getElementById("input").innerHTML = "*";
            break;
        case '/':
                document.getElementById("input").innerHTML = "/";
            break;
        case '.':
                document.getElementById("input").innerHTML = ".";
            break;
        case '':
                document.getElementById("input").innerHTML = "";
            break;
        default:
            break;
    }
}*/
function equalsTo(){
    document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + ' = ' + eval(document.getElementById("input").innerHTML);
}

function myOperatorsFunction(val){
    let displayedText = document.getElementById("input").innerHTML;
    if(displayedText[displayedText.length-1] !== "+" && displayedText[displayedText.length-1] !== "-" && displayedText[displayedText.length-1] !== "*" && displayedText[displayedText.length-1] !== "/" && displayedText[displayedText.length-1] !== "."){
        document.getElementById("input").innerHTML += val;
    }
}

//function myOperatorsFunctionPoint(){
    //let displayedText = document.getElementById("input").innerHTML;
    //if(displayedText.split("").find(ele => ele == ".") !== "." ){
     //document.getElementById("input").innerHTML += ".";
    //}
