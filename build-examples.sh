#!/bin/sh

set -eux


export NODE_ENV=production


build_nextjs() {
    local name=$1
    cd "$name"
    npm ci

    export BASE_PATH="/$name"
    ./node_modules/.bin/next build
    ./node_modules/.bin/next export
    mv out "../out/$name"
}


mkdir -p out

build_nextjs next-header-input