# QR Scanner for attendance marking n stuff

## Get Started

Clone the repo and cd into it
```
git clone https://github.com/RCOE-Code-Cell/QTSys.git
cd QTSys
```

### Server
cd into the server
```
cd server
```
and run the builder script depending on your shell

```
./build.sh # for bash

## OR

./build.ps1 # for powershell
```

to shutdown the containers run the destroy script depending on your shell

```
./destroy.sh # for bash

## OR

./destroy.ps1 # for powershell
```

### Client
cd into the client, install the npm packages, and start the front-end
```
cd client
npm install
npm run dev
```
