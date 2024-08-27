"use strict";
const terminalBody = document.getElementsByClassName('terminal-body');
const terminalTitle = document.getElementById('terminal-title');
const terminalList = document.getElementById('terminal-list');
const terminalInput = document.getElementById('terminal-input');

function getTerminalInput() {
    terminalInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            let input = String(terminalInput.value.trim()).toLowerCase();
            handleInput(input);
        }
    });
}

function handleInput(input) {
    console.log(input);

    switch (input) {
        case "loc":
            clearElements();
            writeElements("LIST_OF_COMMANDS" , terminalCommands);
            break;

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
            writeElements("Error" , ["Wrong input, please try again.", "Write LOC to get a list of commands."]);
            break;
    }
}

function clearElements() {
    terminalTitle.textContent = "";

    while (terminalList.firstChild) {
        terminalList.removeChild(terminalList.firstChild);
    }

    terminalInput.value = "";
}

function writeElements(title, list) {
    terminalTitle.textContent = title;

    // Iterate over the list array and create <li> elements for each item
    list.forEach(function(item) {
        const li = document.createElement('li'); // Create a new <li> element
        li.textContent = item; // Set the text content to the current item
        terminalList.appendChild(li); // Append the <li> to the list
    });
}

