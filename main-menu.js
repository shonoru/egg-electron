const { app, Menu } = require('electron');
const isWindows = process.platform === 'win32';
const { showMessage, showSaveDialog, showOpenDialog } = require('./dialogs.js');

module.exports = {
  setMainMenu
}

function setMainMenu(mainWindow) {
  const template = [
    {
      label: isWindows ? 'File' : app.getName(),
      submenu: [
        {
          label: isWindows ? 'Exit': `Quit ${app.getName()}`,
          accelerator: isWindows ? 'Alt+F4' : 'CmdOrCtrl+Q',
          click() {
            app.quit();
          }
        },
        
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { role: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'selectall' },
        { role: 'separator' },
        { role: 'toggledevtools'},
        { role: 'reload'},
        { role: 'forcereload'},
      ]
    },
    {
      label: 'Dialog',
      submenu: [
        {
          label: 'Say Hello',
          click() {
            showMessage(mainWindow);
          }
        },
        {
          label: 'Save Memory Usage Info',
          click() {
            showSaveDialog(mainWindow);
          }
        },
        {
          label: 'Open File',
          click() {
            showOpenDialog(mainWindow);
          }
        }
      ]
    }
  ]

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}