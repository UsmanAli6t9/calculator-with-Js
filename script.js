function appendValue(value) {
    document.getElementById('display').value += value;
  }
  
  // Clears the display.
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // Evaluates the expression shown in the display.
  // Uses try/catch to handle any invalid expressions.
  function calculateResult() {
    const display = document.getElementById('display');
    try {
      // Evaluate the expression.
      // eval() is used here for simplicity. For production code, consider safer alternatives.
      const result = eval(display.value);
      display.value = result;
    } catch (error) {
      alert("Invalid Expression");
    }
  }
  