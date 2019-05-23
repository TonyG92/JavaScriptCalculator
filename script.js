function onClick() {
    var num1Field = document.getElementById('num1');
    var num2Field = document.getElementById('num2');
    var operationFields = document.getElementsByName("operation");
    var answerField = document.getElementById('answer');
 
    for (var i = 0; i < operationFields.length; i++) {
        if (operationFields[i].checked) {
            var num1 = Number(num1Field.value);
            var num2 = Number(num2Field.value);

            switch (i) {
                case 0:
                answerField.innerHTML = num1 + num2;
                break;
                case 1:
                answerField.innerHTML = num1 - num2;
                break;
                case 2:
                answerField.innerHTML = num1 * num2;
                break;
                case 3:
                answerField.innerHTML = num1 / num2;
                break;
            }
            break;
        }
    }
}