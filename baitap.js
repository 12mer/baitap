function showInfo(){
    let res = document.getElementById("res0");
    res.innerHTML = "";

    let ten = document.getElementById("name");
    res.innerHTML += "Họ Tên: " + ten.value;

    let bd = document.getElementById("date");
    res.innerHTML += "</br>Ngày Tháng Năm Sinh: " + bd.value;

    let phone = document.getElementById("phone");
    res.innerHTML += "</br>Số Điện Thoại: " + phone.value;

    let gt = document.getElementById("gt");
    res.innerHTML += "</br>Giới Tính: " + gt.value;

    let giatri = document.querySelector('input[name="honnhan"]:checked')?.value;
    res.innerHTML += "</br>Tình Trạng Hôn Nhân: " + giatri;
    }
    

function clr(){
    document.getElementById("res0").innerHTML = "";
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("gt").value = "";
    let selectedElement = document.querySelector('input[name="honnhan"]:checked');
    if (selectedElement) {
        selectedElement.checked = false;
    }
}


function cong(){
    var a=document.getElementById("num1").value;
    var b=document.getElementById("num2").value;
    var cong = parseInt(a) + parseInt(b);
    document.getElementById("resmath").innerHTML += "Phép cộng: " + a + "+" + b + "=" + cong + ".";
}
function tru(){
    var a=document.getElementById("num1").value;
    var b=document.getElementById("num2").value;
    var tru = parseInt(a) - parseInt(b);
    document.getElementById("resmath").innerHTML += "<br>Phép trừ: " + a + "-" + b + "=" + tru + ".";
}
function nhan(){
    var a=document.getElementById("num1").value;
    var b=document.getElementById("num2").value;
    var nhan = parseInt(a) * parseInt(b);
    document.getElementById("resmath").innerHTML += "<br>Phép nhân: " + a + "*" + b + "=" + nhan + ".";
}

function chia(){
    var a=document.getElementById("num1").value;
    var b=document.getElementById("num2").value;
    if(b == 0){
        document.getElementById("resmath").innerHTML += "<br> Phép chia không chia được."; // Sửa ở đây
    }else{
        var c= parseInt(a) / parseInt(b)
        document.getElementById("resmath").innerHTML += "<br> Phép chia: " + a + "/" + b + "=" + c + ".";
    }
}


function clear2so(){
    document.getElementById("resmath").innerHTML = "";
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

function checkNumber(){
    document.getElementById("res").innerHTML = "";
    let num = parseInt(document.getElementById("numberInput").value);
    if(Number.isNaN(num) == Number){
        alert("Nhập Lại!!!")
    }else{
        res.innerHTML += "</br>" + num + " là số bình thường.";
    }
}

function checkArmstrong(){
    document.getElementById("res").innerHTML = "";
    var num = parseInt(document.getElementById("numberInput").value);
    var temp = num, sum = 0;
    while(num > 0){
        var sd = num % 10;
        sum += (sd * sd * sd);
        num = parseInt(num / 10);
        console.log("num: ", num, "sum: ", sum);
    }
    if(sum == temp){
        res.innerHTML += "</br>" + temp + " là số Armstrong.";
    }else{
        res.innerHTML += "</br>" + temp + " k phải số Armstrong.";
    }
}

function checkhoanhao(){
    document.getElementById("res").innerHTML = "";
    var num = parseInt(document.getElementById("numberInput").value);
    var temp = num, sum = 0;
    for(let i = 1; i<temp; i++){
        if(temp % i ==0){
            sum +=i;
        }
    }
    if(sum == temp){
        res.innerHTML += "</br>" + temp + " là số hoàn hảo."
    }else{
        res.innerHTML += "</br>" + temp + " k phải số hoàn hảo."
    }

}

function checkAmDuong(){
    document.getElementById("res").innerHTML = "";
    let num = parseInt(document.getElementById("numberInput").value);
    if(num > 0){
        res.innerHTML += "</br>" + num + " là số dương.";
    }
    else{
        res.innerHTML += "</br>" + num + " là số âm.";
    }
}

function checkNgto(){
    document.getElementById("res").innerHTML = "";
    let num = parseInt(document.getElementById("numberInput").value);
    var laco = true;
    if(num < 2){
        laco = false;
    }else{
        for(var i = 2; i < num - 1; i++)
        {
            if(num % i == 0){
                laco = false;
                break;
            }
        }
    }
    if(laco == true){
        res.innerHTML += "</br>" + num + " là số nguyên tố.";
    }else{
        res.innerHTML += "</br>" + num + " k phải số nguyên tố.";
    }
}

function checkchuso(){
    document.getElementById("res").innerHTML = "";
    let num = parseInt(document.getElementById("numberInput").value);
    var count = 0; temp = num;
    if(temp >= 1) count++;
    while(temp / 10 >= 1){
        temp = temp /10;
        count++;
    }
    res.innerHTML += "</br>" + num + " có " + count + " chữ số."
}

function clearNumber(){
    document.getElementById("res").innerHTML = "";
    document.getElementById("numberInput").value = "";
}


function answerQuestion() {
    let res = document.getElementById("res3");
    res.innerHTML = "";

    let totalQuestions = document.getElementsByClassName("questions").length;
    for (let i = 1; i <= totalQuestions; i++) {
        let value = document.querySelector('input[name="cau' + i + '"]:checked').value;
        res.innerHTML += "Câu hỏi " + i + " - Trả lời: " + value + "<br>";
    }
}

function drawsquare(){
    var canvas = document.getElementById("mCanvas");
    var ctext = canvas.getContext("2d");
    ctext.beginPath();
    var x = parseInt(document.getElementById("numX").value);
    var y = parseInt(document.getElementById("numY").value);
    var d = parseInt(document.getElementById("dai").value);
    var r = parseInt(document.getElementById("rong").value);
    ctext.rect(x, y, d, r);           
    ctext.fillStyle = "Red";
    ctext.fill();
    ctext.strokeStyle = "White";
    ctext.stroke(); 
}

function drawcircle(){
    var canvas = document.getElementById("mCanvas");
    var ctext = canvas.getContext("2d");
    ctext.beginPath();
    var ctrX = canvas.width / 2;
    var ctrY = canvas.height / 2;
    var radius = 100;
    ctext.arc(ctrX, ctrY, radius, 0, 2 * Math.PI, false);
    ctext.fillStyle = "DarkOrchid";
    ctext.fill();
    ctext.lineWidth = 5;
    ctext.strokeStyle = "DarkGreen";
    ctext.stroke();
}

function drawline(){
    var x = parseInt(document.getElementById("numX").value);
    var y = parseInt(document.getElementById("numY").value);
    var d = parseInt(document.getElementById("dai").value);
    var r = parseInt(document.getElementById("rong").value);
    
    drawline1(x,y,d,r);
}

function drawline1(x,y,d,r){
    var canvas = document.getElementById("mCanvas");
    var ctext = canvas.getContext("2d");
    ctext.beginPath();

    ctext.moveTo(x,y);
    ctext.lineTo(d,r);
    ctext.lineWidth = 6;
    ctext.strokeStyle = "White";
    ctext.stroke();
}

function drawrhombus(){
    drawline1(250, 50, 350, 200);
    drawline1(350, 200, 250, 350);
    drawline1(250, 350, 150, 200);
    drawline1(150, 200, 250, 50);
}

function drawimage(){
    var canvas = document.getElementById("mCanvas");
    var ctext = canvas.getContext("2d");
    var object = new Image();
    object.onload = function(){
        ctext.drawImage(object,250,250);
    }
    object.src = "media/googlelogo.jpg";
}

function drawtext(){
    var canvas = document.getElementById("mCanvas");
    var ctext = canvas.getContext("2d");
    ctext.font = "italic 60pt Calibri";
    ctext.fillStyle = "MediumVioletRed";
    ctext.fillText("Welcome to HTML5!", 400, 400);
}

function drawstroke(){
    var canvas = document.getElementById("mCanvas");
    var ctext = canvas.getContext("2d");
    var x = 320, y = 280;
    ctext.font = "60pt Calibri";
    ctext.lineWidth = 5;
    ctext.strokeStyle = "Brown";
    ctext.strokeText("HTML5",x,y);
}

function xoacanvas(){
    let text = "Bạn có chắc muốn xoá không?";
    if(confirm(text) == true){
        var canvas = document.getElementById("mCanvas");
        var ctext = canvas.getContext("2d");
        ctext.beginPath();
        ctext.rect(0,0,800,500);
        ctext.fillStyle = "Black"
        ctext.fill();
    }
}

function showArray(){
    document.getElementById("result").innerHTML = "";
    var stdarray = document.getElementsByClassName("mang");
    var xep = [];
    for(let i = 0; i<stdarray.length; i++){
        xep[i] = stdarray[i].value;
    }
    xep.sort();
    for(let i = 0; i<xep.length; i++){
        document.getElementById("result").innerHTML += xep[i] + " - ";
    }
    let sum = 0;
    for(let i = 0; i<xep.length; i++){
        sum += parseInt(xep[i]);
    }
    document.getElementById("result").innerHTML += "</br>Sum = " + sum;
}

function clearArray(){
    document.getElementById("result").innerHTML = "";
    var stdarray = document.getElementsByClassName("mang");
    for(let i = 0; i<stdarray.length; i++){
        stdarray[i].value = "";
    }
}

function doimaunen(){
    let maunen = document.getElementById("maunen");
    document.body.style.backgroundColor = maunen.value;
}

function xoamaunen(){
    document.body.style.backgroundColor = "rgb(0, 0, 0)";
}

function doimauchu(){
    let mauchu = document.getElementById("mauchu");
    document.body.style.color = mauchu.value;
    // res.style.backgroundColor = maunen.value;   //đổi màu nền cho khung result

}

function xoamauchu(){
    document.body.style.color = "rgba(255, 255, 255, 0.801)";
}
