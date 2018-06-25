const path = require('path');
module.exports = {
    //Inform webpack that we are building a bundle for nodejs, rather than for browser
    //for node js it will be little different
    target:'node',
    //tell webpack the root file of our server application
    entry: './src/index.js',
    //tell webpack where to put the output file that is generated
    output: {
       filename: 'bundle.js',
       path: path.resolve(__dirname, 'build')
    },
    //Tell webpack to run  babelon everyfile it runs through
    module:{
        rules:[
            {
                test:/\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options:{
                    presets:[
                        'react',
                        'stage-0',
                        ['env',{targets: { browsers: ['last 2 versions'] }}]
                    ]
                }
            }
        ]
    }
}
