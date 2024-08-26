"use strict";
const terminalCommands = [
    "whoami",
    "languages",
    "frameworks",
    "databases"
];
const whoami = [
    "Hello! I'm Grimy86",
    "I am a software developer with a strong focus on creating WPF applications and working with SQL databases.",
    "I have a passion for coding and enjoy exploring low-level cybersecurity in my side projects.",
    "Feel free to explore my repositories, portfolio and connect with me."
];
const compiledLanguages = [
    "C#",
    "C / C++"
];
const otherLanguages = [
    "XAML",
    "Markdown",
    "HTML & CSS",
    "JavaScript"
];
const programmingLanguages = compiledLanguages.concat(otherLanguages);
const programmingFrameworks = [
    ".NET",
    "WPF",
    "Blazor"
];
const programmingDatabases = [
    "Microsoft SQL Server",
    "MySql"
];
const dev = {
    about: whoami,
    languages: programmingLanguages,
    frameworks: programmingFrameworks,
    databases: programmingDatabases
}
const terminalBody = document.getElementsByClassName('terminal-body');
const terminalTitle = document.getElementById('terminal-title');
const terminalList = document.getElementById('terminal-list');
const terminalInput = document.getElementById('terminal-input');