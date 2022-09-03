let canWrite = true;
let consoleContents = document.getElementById(`indexConsole`).innerHTML;

async function Wait(ms) {
    await new Promise(r => setTimeout(r, ms));
}

async function TypeString(str, outputStr, charsPerSec, breakAfterComplete) {
    while (canWrite == false) { await new Promise(r => setTimeout(r, 100)); }
    canWrite = false;
    for (let i = 0; i < str.length; i++) {
        outputStr += str.charAt(i);
        document.getElementById(`indexConsole`).innerHTML = outputStr;
        await new Promise(r => setTimeout(r, 1000 / charsPerSec));
    }
    await new Promise(r => setTimeout(r, breakAfterComplete));
    canWrite = true;
}

async function TypeLines(arr, outputStr, linesPerSec, clearField) {
    while (canWrite == false) { await new Promise(r => setTimeout(r, 100));; }
    canWrite = false;
    for (let i = 0; i < arr.length; i++) {
        if (clearField) {
            outputStr = `${arr[i]}<br>`;
        } else {
            outputStr += `${arr[i]}<br>`;
        }
        document.getElementById(`indexConsole`).innerHTML = outputStr;
        await new Promise(r => setTimeout(r, 1000 / linesPerSec));
    }
    canWrite = true;
}

TypeString(`Welcome to my Capstone Project Homepage!`, consoleContents, 20, 1000);
TypeLines([`&emsp;> Fetching student data.`, `&emsp;> Fetching student data..`, `&emsp;> Fetching student data...`, `&emsp;> Student data retrieved.`], consoleContents, 3, true);