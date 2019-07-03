import path from 'path'

module.exports = {
    entry: path.join("app/server.ts"),
    target: "node", 
    mode: "development",
    module:{
      rules:[
        {
          test:/\.ts$/,
          use:'ts-loader'
        },
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts' ]
    },
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'build/')
    }
  };