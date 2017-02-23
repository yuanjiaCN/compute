function Compute() {
    var NumberInput = document.getElementsByTagName("input");   //数字
    var DotInput = document.getElementById("dot");              //小数点
    var ShowInput = document.getElementById("show");            //显示数字的变量
    var EqualInput = document.getElementById("equal");          //等于号
    var AddInput = document.getElementById("add");              //加号
    var SubtractInput = document.getElementById("subtract");    //减号
    var MultiplyInput = document.getElementById("multiply");    //乘号
    var DivideInput = document.getElementById("divide");        //除号
    var PreviseInput = document.getElementById("previse");      //运算符点击之前的数字
    var SymbolInput = document.getElementById("symbol");        //显示运算符的变量
    var CleanInput = document.getElementById("clean");          //清除符号
    var PercentageInput = document.getElementById("percentage");//百分号
    var PrevisePreviseInput;                                    //把运算符保存在这个变量里
    for (var i = 0; i < NumberInput.length; i++) {
        NumberInput[i].onclick = function () {
            //以防显示计算结果的input 会出现运算符后面跟数字 导致运算结果出错甚至NaN
            if (ShowInput.value == "-" || ShowInput.value == "+" || ShowInput.value == "×" || ShowInput.value == "÷") {
                ShowInput.value = 0;
            }
            //在点击运算符之前，把数字都保存到这个变量里
            ShowInput.value = Number(ShowInput.value + this.value);
        }
        //小数点运算
        DotInput.onclick = function () {
            ShowInput.value += this.value;
        }
        //可以点击运算符直接得出答案，不必每一次都点等于号
        AddInput.onclick = function () {
            if(PrevisePreviseInput == "+"){
                ShowInput.value = Number(PreviseInput.value) + Number(ShowInput.value);
            }
            if(PrevisePreviseInput == "-"){
                ShowInput.value = Number(PreviseInput.value) - Number(ShowInput.value);
            }
            if(PrevisePreviseInput == "×"){
                ShowInput.value = Number(PreviseInput.value) * Number(ShowInput.value);
            }
            if(PrevisePreviseInput == "÷"){
                ShowInput.value = Number(PreviseInput.value) / Number(ShowInput.value);
            }
            //把刚才点击过的数字保存到这个变量里，让运算看起来更加清晰
            PreviseInput.value = ShowInput.value;
            //把刚才点击过的运算符保存到这个变量里，让运算看起来更加清晰
            SymbolInput.value = AddInput.value;
            //把运算符保存到这个变量里，呼应NumberInput[i].onclick的if语句
            ShowInput.value = this.value;
            //把现在的这个运算符保存到变量里，以便进行四则运算，可以点击运算符直接出答案，而不必每次都点等于号
            PrevisePreviseInput = SymbolInput.value;
            //等于号被点击时候的反应
            EqualInput.onclick = function () {
                ShowInput.value = Number(PreviseInput.value) + Number(ShowInput.value);
                PreviseInput.value = " ";
                SymbolInput.value = " ";
            }
        }
        //原理同上
        SubtractInput.onclick = function () {
            if(PrevisePreviseInput == "+"){
                ShowInput.value = Number(PreviseInput.value) + Number(ShowInput.value);
            }
            if(PrevisePreviseInput == "-"){
                ShowInput.value = Number(PreviseInput.value) - Number(ShowInput.value);
            }
            if(PrevisePreviseInput == "×"){
                ShowInput.value = Number(PreviseInput.value) * Number(ShowInput.value);
            }
            if(PrevisePreviseInput == "÷"){
                ShowInput.value = Number(PreviseInput.value) / Number(ShowInput.value);
            }
            PreviseInput.value = ShowInput.value;
            SymbolInput.value = SubtractInput.value;
            ShowInput.value = this.value;
            PrevisePreviseInput = SymbolInput.value;
            EqualInput.onclick = function () {
                ShowInput.value = Number(PreviseInput.value) - Number(ShowInput.value);
                PreviseInput.value = " ";
                SymbolInput.value = " ";
            }
        }
        //原理同上
        MultiplyInput.onclick = function () {
            if(PrevisePreviseInput == "+"){
                ShowInput.value = Number(PreviseInput.value) + Number(ShowInput.value);
            }
            if(PrevisePreviseInput == "-"){
                ShowInput.value = Number(PreviseInput.value) - Number(ShowInput.value);
            }
            if(PrevisePreviseInput == "×"){
                ShowInput.value = Number(PreviseInput.value) * Number(ShowInput.value);
            }
            if(PrevisePreviseInput == "÷"){
                ShowInput.value = Number(PreviseInput.value) / Number(ShowInput.value);
            }
            PreviseInput.value = ShowInput.value;
            SymbolInput.value = MultiplyInput.value;
            ShowInput.value = this.value;
            PrevisePreviseInput = SymbolInput.value;
            EqualInput.onclick = function () {
                ShowInput.value = Number(PreviseInput.value) * Number(ShowInput.value);
                PreviseInput.value = " ";
                SymbolInput.value = " ";
            }
        }
        //原理同上
        DivideInput.onclick = function () {
            if(PrevisePreviseInput == "+"){
                ShowInput.value = Number(PreviseInput.value) + Number(ShowInput.value);
            }
            if(PrevisePreviseInput == "-"){
                ShowInput.value = Number(PreviseInput.value) - Number(ShowInput.value);
            }
            if(PrevisePreviseInput == "×"){
                ShowInput.value = Number(PreviseInput.value) * Number(ShowInput.value);
            }
            if(PrevisePreviseInput == "÷"){
                ShowInput.value = Number(PreviseInput.value) / Number(ShowInput.value);
            }
            PreviseInput.value = ShowInput.value;
            SymbolInput.value = DivideInput.value;
            ShowInput.value = this.value;
            PrevisePreviseInput = SymbolInput.value;
            EqualInput.onclick = function () {
                ShowInput.value = Number(PreviseInput.value) / Number(ShowInput.value);
                PreviseInput.value = " ";
                SymbolInput.value = " ";
            }
        }
        //清除符号
        CleanInput.onclick = function () {
            PreviseInput.value = " ";
            SymbolInput.value = " ";
            ShowInput.value = 0;
            PrevisePreviseInput = null;
       }
        //百分比符号，暂时没想到比较好的实现方法，先将就一下。。。
        PercentageInput.onclick = function () {
            ShowInput.value = Number(ShowInput.value)/100;
        }
    }
 }
addLoadEvent(Compute);