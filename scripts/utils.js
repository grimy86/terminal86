"use strict";
function getTerminalInput(){
    terminalInput.addEventListener('keydown', function(event)
    {
        if (event.key === 'Enter')
        {
            console.log(terminalInput.value);
            validateInput(terminalInput.value);
            // prevent default
            clearElements();
            
        }
    });
}

function validateInput(input) {
    switch (input) {
        case terminalCommands[0]:
            clearElements();
            writeElements(terminalCommands[0], dev.about);
            break;
        case terminalCommands[1]:
            clearElements();
            writeElements(terminalCommands[1], dev.languages);
            break;
        case terminalCommands[2]:
            clearElements();
            writeElements(terminalCommands[2], dev.frameworks);
            break
        case terminalCommands[3]:
            clearElements();
            writeElements(terminalCommands[3], dev.databases);
            break;
        default:
            clearElements();
            writeElements("Wrong input, please try again."); //only change the title
            return getTerminalInput();
    }
}

function clearElements() {
    if (!terminalTitle.textContent) {
        terminalTitle.textContent = title;
    }

    while(terminalTitle.textContent || terminalList.firstChild)
    {
        terminalTitle.textContent = "";
        terminalList.removeChild(terminalList.firstChild);
        terminalInput.value = null;
    }
}

function writeElements(title, list)
{
    if(!terminalTitle.textContent || !terminalList.firstChild)
        {
            terminalTitle.textContent = title;
            terminalList.appendChild(list);
        }

    if (!terminalList.firstChild) {
        // Iterate over the list array and create <li> elements for each item
        list.forEach(function(item) {
            const li = document.createElement('li'); // Create a new <li> element
            li.textContent = item; // Set the text content to the current item
            terminalList.appendChild(li); // Append the <li> to the list
        });
    }
}

