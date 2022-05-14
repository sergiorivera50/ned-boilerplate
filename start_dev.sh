#!/bin/bash

args="--rm --volume=$(pwd):/app --publish=8000:8000"

if [[ -f ".env" ]]; then
  args+=" --env-file=.env"
fi

docker run $args $(docker build --quiet --target=builder .)
