#!/bin/sh

set -eux


export NODE_ENV=production


build_nextjs() {(
    local name=$1
    cd "$name"
    npm ci

    export BASE_PATH="/$name"
    ./node_modules/.bin/next build
    ./node_modules/.bin/next export
    mv out "../out/$name"
)}

build_parcel() {(
        local name=$1
        cd "$name"
        # npm ci

        ./node_modules/.bin/parcel build --public-url "/$name" src/index.html
        mv dist "../out/$name"
)}


rm -rf out
mkdir out

build_nextjs next-header-input
build_nextjs next-header-input-lazy
build_parcel parcel-fullscreen-modal