const path = require('path');

module.exports   = {
    entry: {
        home: './src/home.js',
        pedido: './src/pedido.js'
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname, 'dist/assets/js')
    },
    mode: 'production', /* production or development */
    module: {
        rules: [
            { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [
                    {

                        loader: 'file-loader',
                        options:{
                            name:'../images/[name].[ext]'
                        }
                    }
                ]
            },
            {test:/\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ]}
        ]
    }
};