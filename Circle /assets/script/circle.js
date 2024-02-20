$("#CircleForm").validate();

 function displayCircleCalculations() {
    if ($("#CircleForm").valid()) {
        document.getElementById("diameter").innerText = "";
        document.getElementById("area").innerText = "";
        document.getElementById("circumference").innerText = "";

        var radius = parseFloat(document.getElementById("radius").value);
        var diameter = calcDiameter(radius);
        var area = calcArea(radius);
        var circumference = calcCircumference(radius);

       document.getElementById("diameter").innerText = diameter.toString();
       document.getElementById("area").innerText = area.toString();
       document.getElementById("circumference").innerText = circumference.toString();

    } 
} 

function calcDiameter(radius) {
    return 2 * radius;
}

function calcArea(radius) {
    return Math.PI * radius * radius;
}

function calcCircumference(radius) {
    return 2 * Math.PI * radius; 

}

function clearForm() {
    document.getElementById("radius").value = "";
    document.getElementById("radiuserror").innerText = "";
    document.getElementById("diameter").innerText = "";
    document.getElementById("circumference").innerText= "";
    document.getElementById("area").innerText = "";
   
}