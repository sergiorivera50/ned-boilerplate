#!/bin/bash

clear

echo -e "[== N.E.D. Development Server ☕️ ==]"

replace="\033[0A"

echo -e "\nBuilding development image..."
SHA256=$(docker build -q --target builder .)

echo -e "${replace}Building development image... ✔︎"

echo -e "\nSpinning up container..."

args="-d -v $(pwd):/app -p 8000:8000"

if [[ -f ".env" ]]; then
  args+=" --env-file .env"
fi

CONTAINER=$(docker run $args $SHA256)

echo -e "${replace}Spinning up container... ✔︎"

docker logs --follow $CONTAINER

echo -e "\n\nStopping container..."

docker rm --force $CONTAINER > /dev/null

echo -e "${replace}Stopping container... ✔︎\n"
