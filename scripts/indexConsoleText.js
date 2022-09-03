let consoleContents = document.getElementById(`indexConsole`).innerHTML;
let messagesSent = 0;

async function ClearConsole(messageID) {
    while (messageID != messagesSent) { await new Promise(r => setTimeout(r, 10)); }
    document.getElementById(`indexConsole`).innerHTML = consoleContents = ``;
    messagesSent++;
}

async function TypeString(str, charsPerSec, breakAfterComplete, messageID) {
    while (messageID != messagesSent) { await new Promise(r => setTimeout(r, 10)); }
    for (let i = 0; i < str.length; i++) {
        consoleContents += str.charAt(i);
        document.getElementById(`indexConsole`).innerHTML = consoleContents;
        await new Promise(r => setTimeout(r, 1000 / charsPerSec));
    }
    consoleContents += `<br>`;
    await new Promise(r => setTimeout(r, breakAfterComplete));
    messagesSent++;
}

async function TypeLines(arr, linesPerSec, clearField, messageID) {
    while (messageID != messagesSent) { await new Promise(r => setTimeout(r, 10));; }
    for (let i = 0; i < arr.length; i++) {
        if (clearField) {
            consoleContents = `${arr[i]}<br>`;
        } else {
            consoleContents += `${arr[i]}<br>`;
        }
        document.getElementById(`indexConsole`).innerHTML = consoleContents;
        await new Promise(r => setTimeout(r, 1000 / linesPerSec));
    }
    messagesSent++;
}

TypeString(`Welcome to my Capstone Project Homepage!`, 20, 1000, 0);
TypeLines([`&emsp;> Fetching student data.`, `&emsp;> Fetching student data..`, `&emsp;> Fetching student data...`, `&emsp;> Student data retrieved.`], 3, true, 1);
ClearConsole(2);
TypeString(`Sophomore - Class of 2025`, 250, 0, 3);
TypeString(`My name is David Lawrence, and I love to create and discover things. While I don't have time to do it much these days, I like to draw and play creative games like Animal Crossing. Mathematics and programming are my main focus these days, as they are high-paying fields that go hand-in-hand.`, 500, 1000, 4);