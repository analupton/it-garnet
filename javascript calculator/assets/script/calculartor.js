function calculate() {
    var Operand1 = parseFloat(document.getElementById("Operand1").value);
    var Operand2 = parseFloat(document.getElementById("Operand2").value);
  
    if (document.getElementById("addOperator").checked) {
      let result = Operand1 + Operand2;
      document.getElementById("result").innerHTML = result;
    }
    if (document.getElementById("subtractOperator").checked) {
      let result = Operand1 - Operand2;
      document.getElementById("result").innerHTML = result;
    }
    if (document.getElementById("multiplyOperator").checked) {
      let result = Operand1 * Operand2;
      document.getElementById("result").innerHTML = result;
    }
    if (document.getElementById("divideOperator").checked) {
      let result = Operand1 / Operand2;
      document.getElementById("result").innerHTML = result;
    }
  }
  
  $("#CalculatorForm").validate({});
  
  function clearForm() {
    document.getElementById("Operand1").value = "";
    document.getElementById("Operand2").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("addOperator").checked = false;
    document.getElementById("subtractOperator").checked = false;
    document.getElementById("multiplyOperator").checked = false;
    document.getElementById("divideOperator").checked = false;
  }