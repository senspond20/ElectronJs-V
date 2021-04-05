# Electron

```js
npm init -y
npm i electron --save-dev
npm i electron-builder --save-dev
```

```js
{
  ...
  script: {
    "build:osx": "electron-builder --mac",
    "build:linux": "npm run build:linux32 && npm run build:linux64",
    "build:linux32": "electron-builder --linux --ia32",
    "build:linux64": "electron-builder --linux --x64",
    "build:win": "npm run build:win32 && npm run build:win64", 
    "build:win32": "electron-builder --win --ia32",
    "build:win64": "electron-builder --win --x64",
  },
  ...
  "build": {
    "productName": "HelloElectron",
    "appId": "com.electron.hello",
    "asar": true, //소스코드를 asar 포맷으로 압축 패키징 옵션
    "protocols" : {
        "name" : "helloElectron",
        "schemes" : ["helloelectron"]
    },
    "mac": { //mac용 옵션
      "target": [
        "default"
      ],
      "icon": "./resources/installer/Icon.icns"
    },
    "dmg": { //mac 인스톨 옵션
      "title": "HelloElectron",
      "icon": "./resources/installer/Icon.icns"
    },
    "win": {  // windows 옵션
      "target": [  //
        "zip",  // zip
        "nsis"  // 인스톨러 실행파일
      ],
      "icon": "./resources/installer/Icon.ico"
    },
    "linux": { //리눅스 옵션
      "target": [
        "AppImage", 
        "deb",
        "rpm",
        "zip",
        "tar.gz"
      ],
      "icon": "./resources/linuxicon"
    },
    "nsis":{
      "oneClick" : false, //nsis 기본 옵션은 원클릭 true
      "allowToChangeInstallationDirectory" :true // 디렉토리 변경 옵션
    },
    "directories": {
      "buildResources": "resources/installer/",
      "output": "dist/", // 빌드 후 결과물 저장 경로
      "app": "."
    }
  }
  ...
}
```