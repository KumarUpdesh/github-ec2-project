#!/bin/bash
cd "$(dirname "$0")"
npm install
pkill -f app.js
nohup node app.js > app.log 2>&1 &

