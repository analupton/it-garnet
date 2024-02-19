function calculate() {
    "use strict";
    

    if ($( "#unitcalculator" ).valid()) {
        
        
        var value = document.getElementById("Value").value;
        
        var fromunit;
        if (document.getElementById("fromcentimeters").checked) {
            fromunit = document.getElementById("fromcentimeters").value;
        }
        if (document.getElementById("frommeters").checked) {
            fromunit = document.getElementById("frommeters").value;
        }
        if (document.getElementById("fromkilos").checked) {
            fromunit = document.getElementById("fromkilos").value;
        }
        if (document.getElementById("frominches").checked) {
            fromunit = document.getElementById("frominches").value;
        }
        if (document.getElementById("fromfeet").checked) {
            fromunit = document.getElementById("fromfeet").value;
        }
        if (document.getElementById("fromyards").checked) {
            fromunit = document.getElementById("fromyards").value;
        }
        if (document.getElementById("frommiles").checked) {
            fromunit = document.getElementById("frommiles").value;
        }

        var tounit;
        if (document.getElementById("tocentimeters").checked) {
            tounit = document.getElementById("tocentimeters").value;
        }
        if (document.getElementById("tometers").checked) {
            tounit = document.getElementById("tometers").value;
        }
        if (document.getElementById("tokilos").checked) {
            tounit = document.getElementById("tokilos").value;
        }
        if (document.getElementById("toinches").checked) {
            tounit = document.getElementById("toinches").value;
        }
        if (document.getElementById("tofeet").checked) {
            tounit = document.getElementById("tofeet").value;
        }
        if (document.getElementById("toyards").checked) {
            tounit = document.getElementById("toyards").value;
        }
        if (document.getElementById("tomiles").checked) {
            tounit = document.getElementById("tomiles").value;
        }

        CalculateResult(value,fromunit,tounit)
    }
        async function CalculateResult(value,fromunit,tounit) {
        
           
            var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";
    
          
            myURL = myURL + "?FromValue=" + encodeURIComponent(value) + "&FromUnit=" + encodeURIComponent(fromunit) + "&ToUnit=" + encodeURIComponent(tounit);
    
           
            let myCalcObject = await fetch(myURL);
            let myResult = await myCalcObject.text();
            
            document.getElementById("ToValue").innerHTML = myResult;
  
        }
    }

function clearform() {
    "use strict"; 
    
    document.getElementById("FromValue").value = "";
    document.getElementById("FromValueMsg").innerHTML = "";
    document.getElementById("FromUnitMsg").innerHTML = "";
    document.getElementById("ToUntiMsg").innerHTML = "";
    document.getElementById("tovalue").innerHTML = "";
    document.getElementById("fromcentimeters").checked = false;
    document.getElementById("frommeters").checked = false;
    document.getElementById("fromkilos").checked = false;
    document.getElementById("frominches").checked = false;
    document.getElementById("fromfeet").checked = false;
    document.getElementById("fromyards").checked = false;
    document.getElementById("frommiles").checked = false;
    document.getElementById("tocentimeters").checked = false;
    document.getElementById("tometers").checked = false;
    document.getElementById("tokilos").checked = false;
    document.getElementById("toinches").checked = false;
    document.getElementById("tofeet").checked = false;
    document.getElementById("toyards").checked = false;
    document.getElementById("tomiles").checked = false;
}


$( "#unitcalculator").validate({
 
});