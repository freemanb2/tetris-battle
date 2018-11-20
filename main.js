const electron = require('electron');
const { app, BrowserWindow } = electron;

app.on('ready', () => {
  let window = new BrowserWindow({ width: 800, height: 600});
  window.loadURL(`file://${__dirname}/index.html`);
})

/*
*Example of adding a function to the main electron controller
exports.openWindow = () => {
  let window = new BrowserWindow({ width: 800, height: 600});
  window.loadURL("https://www.google.com");
}
*/