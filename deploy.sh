#!/bin/bash
set -e

echo "=== Installing Node.js ==="
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

echo "=== Installing PM2 ==="
sudo npm install -g pm2

echo "=== Cloning/Updating repo ==="
if [ -d "/opt/sbolt" ]; then
  cd /opt/sbolt && git pull
else
  sudo git clone https://github.com/saffi277/sbolt.git /opt/sbolt
  sudo chown -R ubuntu:ubuntu /opt/sbolt
  cd /opt/sbolt
fi

echo "=== Switching branch ==="
git checkout claude/setup-server-config-HUVDq

echo "=== Installing dependencies ==="
npm install

echo "=== Building ==="
npm run build

echo "=== Starting with PM2 ==="
pm2 delete sbolt 2>/dev/null || true
pm2 start npm --name sbolt -- start -- -p 3000
pm2 save
pm2 startup | tail -1 | sudo bash

echo "=== Installing Nginx ==="
sudo apt-get install -y nginx

echo "=== Configuring Nginx ==="
sudo tee /etc/nginx/sites-available/sbolt << 'NGINX'
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
NGINX

sudo ln -sf /etc/nginx/sites-available/sbolt /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl restart nginx

echo ""
echo "=== DONE! Site is running at http://158.180.58.14 ==="
