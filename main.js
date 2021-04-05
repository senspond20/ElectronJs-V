//main.js
const {app, BrowserWindow} = require('electron')
const path = require('path')

let mainWindow = null

function initialize() {
  function createWindow() { //창을 생성하고, 연결되는 페이지는 index.html
    const windowOptions = {
      widht: 800,
      height: 600,
    }
    mainWindow = new BrowserWindow(windowOptions)
    mainWindow.loadURL(path.join('file://', __dirname, '/index.html'))
    mainWindow.on('closed', () => {
      mainWindow = null
    })
  }
  app.on('ready', () => {
    createWindow()
  })
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  app.on('activate', () => {
    if (mainWindow === null) {
      createWindow()
    }
  })
}

initialize()