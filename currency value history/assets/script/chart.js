

function ClearForm() {
    document.getElementById("basecurrency").value = "";
    document.getElementById("convertcurrency").value = "";
    document.getElementById("FromDate").value = "";
    document.getElementById("ToDate").value = "";
    document.getElementById("ceo").innerHTML = "";
    document.getElementById("url").innerHTML = "";
    document.getElementById("url").href = "";
    document.getElementById("logo").src = "";
    
    /* Ugly Code to Erase Canvas */
    var canvas0 = document.getElementById("chartjs-0");
    var context0 = canvas0.getContext('2d');    
    context0.clearRect(0, 0, canvas0.width, canvas0.height);
    var canvas1 = document.getElementById("chartjs-1");
    var context1 = canvas1.getContext('2d');    
    context1.clearRect(0, 0, canvas1.width, canvas1.height);
}