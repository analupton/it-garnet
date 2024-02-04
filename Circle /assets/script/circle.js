$("#CircleForm").validate();

 function displayCircleCalculations() {
    if ($("#CircleForm").valid()) {
        document.getElementById("diameter").innerHTML = "";
        document.getElementById("area").innerHTML = "";
        document.getElementById("circumference").innerHTML = "";

        var radius = parseFloat(document.getElementById("radius").value);
        var diameter = calcDiameter(radius);
        var area = calcArea(radius);
        var circumference = calcCircumference(radius);

       document.getElementById("diameter").innerHTML = diameter.toString();
       document.getElementById("area").innerHTML = area.toString();
       document.getElementById("circumference").innerHTML = circumference.toString();

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

function clearCircleForm() {
    document.getElementById("radius").value = "";
    document.getElementById("radiusError").innerHTML = "";
    document.getElementById("diameter").innerHTML = "";
    document.getElementById("area").innerHTML = "";
    document.getElementsById("circumference").innerHTML = "";
}