function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
    }
    
    
    function getTextElementValueById(elementID){
        const element = document.getElementById(elementID);
        const elementValueString = element.innerText;
        const textElementValue = parseFloat(elementValueString);
        return textElementValue;
    }
    
    
    function setTextElementValueById(elementID, newValue){
        const textElement = document.getElementById(elementID);
        textElement.innerText = newValue;
    }