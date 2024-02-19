async function doConversion() {
    let fromValue = document.getElementById("FromValue").value;
    let fromUnit = getFromUnit();
    let toUnit = getToUnit();
  
    let myURL =
      "https://brucebauer.info/assets/ITEC3650/unitsconversion.php?FromValue=" + fromValue +
      "&FromUnit=" + fromUnit + "&ToUnit=" + toUnit;
  
    let myCalcObject  = await fetch(myURL);
    let myResult  = await myCalcObject.text();
  
  
    document.getElementById("ToValue").innerHTML = myResult;
  }

        function  getfromUnit() { 
        if (document.getElementById("fromcentimeters").checked) {
            return document.getElementById("fromcentimeters").value; 
        }

        if (document.getElementById("frommeters").checked) {
            return document.getElementById("frommeters").value;
        }

        if (document.getElementById("fromkilometers").checked) {
            return document.getElementById("fromkilometers").value; 
        }
    
        if (document.getElementById("frominches").checked) {
            return document.getElementById("frominches").value;
        }

        if (document.getElementById("fromfeet").checked) {
            return document.getElementById("fromfeet").value;
        }

        if (document.getElementById("fromyards").checked) {
            return document.getElementById("fromyards").value; 
        }
    
        if (document.getElementById("frommiles").checked) {
            return document.getElementById("frommiles").value;
        }
    }

        function gettoUnit() {
        if (document.getElementById("tocentimeters").checked) {
            return document.getElementById("tocentimeters").value; 
        }

        if (document.getElementById("tometers").checked) {
            return document.getElementById("tometers").value;
        }

        if (document.getElementById("tokilometers").checked) {
            return document.getElementById("tokilometers").value; 
        }
    
        if (document.getElementById("toinches").checked) {
            return document.getElementById("toinches").value;
        }

        if (document.getElementById("tofeet").checked) {
            return document.getElementById("tofeet").value;
        }

        if (document.getElementById("toyards").checked) {
            return document.getElementById("toyards").value; 
        }
    
        if (document.getElementById("tomiles").checked) {
            return document.getElementById("tomiles").value;
        }

    }


        function clearForm() {
            document.getElementById("FromValue").value = "";
            document.getElementById("tovalue").innerHTML = "";
            document.getElementById("fromcentimeters").checked = false;
            document.getElementById("frommeters").checked = false;
            document.getElementById("tokilometers").checked = false;
            document.getElementById("frominches").checked = false;
            document.getElementById("fromfeet").checked = false;
            document.getElementById("fromyards").checked = false;
            document.getElementById("frommiles").checked = false;
            document.getElementById("tocentimeters").checked = false;
            document.getElementById("tometers").checked = false;
            document.getElementById("tokilometers").checked = false;
            document.getElementById("toinches").checked = false;
            document.getElementById("tofeet").checked = false;
            document.getElementById("toyards").checked = false;
            document.getElementById("tomiles").checked = false;
          }
          
          $("#unitcalculator").validate({});
