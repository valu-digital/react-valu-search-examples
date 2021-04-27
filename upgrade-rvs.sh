#!/bin/sh

set -eu

version="^15.0.1"


for dir in *; do

    if [ ! -f "$dir/package.json" ]; then
        continue
    fi

    (
        cd "$dir"

        if [ ! -d node_modules ]; then
            npm ci
        fi

        npm install "@valu/react-valu-search@${version}"
    )

done

git add .
git commit -m "Upgrade @valu/react-valu-search to $version"