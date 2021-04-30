#!/bin/sh

set -eu

version="15.0.4-dev.c811f7238f"


for dir in *; do

    if [ ! -f "$dir/package.json" ]; then
        continue
    fi

    (
        cd "$dir"

        if [ ! -d node_modules ]; then
            npm ci
        fi

        npm install -E "@valu/react-valu-search@${version}"
    )

done

git add .
git commit -m "Upgrade @valu/react-valu-search to $version"