function changeColor() {
    var NumberInput = document.getElementsByTagName("input");
    var DotInput = document.getElementById("dot");
    for(var i=0; i<NumberInput.length;i++){
        if ((!isNaN(NumberInput[i].value))||(NumberInput[i].value == ".")){
            NumberInput[i].setAttribute("class","NumberInputStyle") ;
        }
            }
        }

addLoadEvent(changeColor);