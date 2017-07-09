const { dialog, app, nativeImage } = require('electron');
const fs = require('fs');
const path = require('path');

module.exports = { showMessage };

function showMessage(browserWindow) {
    dialog.showMessageBox(browserWindow, {
      type: 'info',
      icon: nativeImage.createFromPath('./turtles.jpg'),
      message: 'Cowabunga',
      detail: 'Just a friendly cowabunga.',
      buttons: ['Cowabunga', 'Close'],
      defaultId: 0
    }, clickedIndex => {
      console.log(clickedIndex)
    });
}
