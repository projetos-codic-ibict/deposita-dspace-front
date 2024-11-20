#!/usr/bin/env bash
set -e

echo "node version >>"
node -v

echo "Running pm2 stop deposita"
pm2 stop deposita || true

echo "running yarn install"
yarn

echo "copy env"
rm config/config.prod.yml ||  true
cp config/config.example.yml  config/config.prod.yml

echo "yarn build"
yarn build:prod

echo "yarn deploy"
yarn deploy

echo "pm2 save"
pm2 save

echo "finished!"
