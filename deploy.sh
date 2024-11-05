#!/usr/bin/env bash
set -e

echo "node version >>"
node -v

echo "running yarn install"
yarn

echo "Running pm2 stop deposita"
pm2 stop deposita || true

echo "copy env"
rm config/config.prod.yml ||  true
cp config/config.example.yml  config/config.prod.yml

echo "yarn deploy"
yarn deploy

echo "pm2 save"
pm2 save

echo "finished!"