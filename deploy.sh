#!/usr/bin/env bash
set -e

echo "node version >>"
node -v

echo "Running pm2 stop deposita"
pm2 stop deposita || true

echo "Encerrando processos da porta 5000"
kill $(lsof -t -i:5000)

echo "running yarn install"
yarn

echo "copy env"
rm config/config.yml ||  true
cp config/config.example.yml  config/config.yml


echo "yarn build"
yarn build:prod

echo "yarn deploy"
yarn deploy

echo "pm2 save"
pm2 save

echo "finished!"
