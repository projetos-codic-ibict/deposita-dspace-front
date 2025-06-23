#!/usr/bin/env bash
set -e

echo "node version >>"
node -v

echo "Running pm2 stop deposita"
pm2 stop deposita || true

echo "Encerrando processos da porta 5000 e 4000"
kill $(lsof -t -i:5000) || true
kill $(lsof -t -i:4000) || true

echo "running yarn install"
yarn

echo "copy env"
rm config/config.yml ||  true
cp config/config.example.yml config.production.yaml


echo "yarn build"
yarn build:prod

echo "yarn deploy"
yarn deploy

echo "pm2 save"
pm2 save --force

echo "finished!"
