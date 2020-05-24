let addButton = document.getElementById("addButton") as HTMLButtonElement | null;

var item = document.getElementById('inputform') as HTMLInputElement | null;
var text = document.createTextNode(item)  as HTMLInputElement | null;
var userInput = document.createElement('elements') as HTMLElement | null

//Alert if the HTMLInputElement, HTMLElement are found as null
if (item == null){
    alert("Input Form not found")
}
if (text == null){
    alert("User Input not found")
}
if (userInput == null){
    alert("Elements not found")
}

//Alert if the HTMLButtonElement is found as null
if (addButton == null){
    alert("Button not found");
}
else{

    addButton.onclick = function () {

        //Checks if input form contains characters
        if(document.getElementById("inputform").value === "") { 
            alert("Field cannot be empty");
            elements.removeChild(inputElement)
        } 

        //Elements
        var item = document.getElementById('inputform').value;
		var text = document.createTextNode(item)

        let inputElement = document.createElement("p");
        inputElement.classList.add("inputElement");

        let removeButton = document.createElement("button");
        removeButton.classList.add("removeButton");
        
        let completeButton = document.createElement("button");
        completeButton.classList.add("completeButton");

        let inputElementText = document.createTextNode(item)

        //Clears Input Form
        document.getElementById('inputform').value = "";

        //CompleteButton, Input, RemoveButton
        inputElement.appendChild(completeButton);
        completeButton.innerHTML = "☐";

        inputElement.appendChild(inputElementText)

        inputElement.appendChild(removeButton);
        removeButton.innerHTML = "X";

        elements.appendChild(inputElement);

        //Removes item on list
        removeButton.onclick = function () {
            elements.removeChild(inputElement);
        }

        //Allows item to be marked as complete
        completeButton.onclick = function () {
            completeButton.innerHTML = "✓";
            inputElement.classList.add("completeOnClick");
        }
    }

}