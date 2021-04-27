#!/bin/sh

set -eux


export NODE_ENV=production

add_index_entry() {
    echo "<p><a href="/$name">$name</a><p>" >> out/index.html
}


build_nextjs() {(
    local name=$1
    add_index_entry "$name"

    cd "$name"

    if [ ! -d node_modules ]; then
        npm ci
    fi

    export BASE_PATH="/$name"
    ./node_modules/.bin/next build
    ./node_modules/.bin/next export
    mv out "../out/$name"
)}

build_parcel() {(
    local name=$1
    add_index_entry "$name"

    cd "$name"

    if [ ! -d node_modules ]; then
        npm ci
    fi

    ./node_modules/.bin/parcel build --public-url "/$name" src/index.html
    mv dist "../out/$name"
)}


rm -rf out
mkdir out


echo '
<html>
    <head>
        <title>React Valu Search Examples</title>
        <style>
        h1 a:visited {
            color: blue;
        }
        </style>
    </head>
<body>
<h1><a href="https://docs.valusearch.pro/react-valu-search/introduction">React Valu Search</a> Examples</h1>
' > out/index.html

build_nextjs next-header-input
build_nextjs next-header-input-lazy
build_parcel parcel-fullscreen-modal
build_parcel parcel-fullscreen-modal-lazy

echo "</body></html>" >> out/index.html