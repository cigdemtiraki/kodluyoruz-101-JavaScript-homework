function question() {
    let ask = prompt("Adınız Nedir?");
    document.getElementById("myName").innerHTML = ask;
}


function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let day = date.getDay();


    let weekDays = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let dayNames = weekDays[day];


    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;


    let time = hour + ":" + minute + ":" + second + " " + dayNames;
    document.getElementById("myClock").innerText= time;
   



    setTimeout(showTime, 1000);



}
question();
showTime();