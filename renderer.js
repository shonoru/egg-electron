const { ipcRenderer } = require('electron');

document.querySelector('#new-window').addEventListener('click', () => {
  ipcRenderer.send('create-window', {
    x: 0,
    y: 0
  });
})

const versionEl = document.querySelector('#version');
versionEl.innerText = process.versions.electron;
console.log(process.versions)