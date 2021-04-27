#!/bin/sh

set -eu

version=@valu/react-valu-search@^15.0.1


for dir in *; do

    if [ ! -f "$dir/package.json" ]; then
        continue
    fi

    (
        cd "$dir"

        if [ ! -d node_modules ]; then
            npm ci
        fi

        npm install "$version"
    )

done

git add .
git commit -m "Upgrade @valu/react-valu-search to $version"