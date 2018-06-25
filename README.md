# SampleServerSideReact
A simple server side react app

We have React on server , Webpack is used to bundle main index server and serve in one file.
We have nodemon for clients to rerun

"dev:server":"nodemon --watch build --exec \"node build/bundle.js \"",
"dev:build:server":"webpack --config webpack.server.js --watch"

Build - npm run dev:build:server
Run - npm run dev:server
