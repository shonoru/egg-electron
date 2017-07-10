const { ipcRenderer } = require('electron');
require('devtron').install();

const countEl = document.querySelector('#count');

ipcRenderer.on('window-count', (event, props) => {
  countEl.textContent = props.count;
})

ipcRenderer.send('get-window-count');

document.querySelector('#new-window').addEventListener('click', () => {
  ipcRenderer.send('create-window', {
    x: 0,
    y: 0
  });
})

const versionEl = document.querySelector('#version');
versionEl.innerText = process.versions.electron;
console.log(process.versions);

const { remote } = require('electron');
const path = require('path');
const currentWindow = remote.getCurrentWindow();

document.querySelector('#new-remote-window').addEventListener('click', () => {
  const win = new remote.BrowserWindow({
    height: 400,
    width: 400
  });

  win.loadURL(path.join('file://', __dirname, 'index.html'));
});

console.log(remote);

function onBlur() {
  document.body.style = 'opacity: 0.2';
}

function onFocus() {
  document.body.style = 'opacity: 1';
}

currentWindow.on('blur', onBlur);
currentWindow.on('focus', onFocus);

window.addEventListener('beforeunload', () => {
  currentWindow.removeListener('blur', onBlur);
  currentWindow.removeListener('focus', onFocus);
})