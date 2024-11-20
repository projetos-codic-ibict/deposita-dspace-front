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
rm config/config.yml ||  true
cp config/config.example.yml  config/config.yml
cp config/config.example.yml  config.production.yaml

echo "yarn build"
yarn build:prod

echo "yarn deploy"
yarn deploy

echo "pm2 save"
pm2 save

echo "finished!"
