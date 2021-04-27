#!/bin/sh

set -eu


for dir in *; do

    if [ ! -f "$dir/package.json" ]; then
        continue
    fi

    (
        cd "$dir"

        if [ ! -d node_modules ]; then
            npm ci
        fi

        npm install --save-exact @valu/react-valu-search@15.0.0-dev.2e0eaeb286
    )

done