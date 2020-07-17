const path = require('path')

module.exports = {
  cli: {
    devtool: 'none'
  },
  webpack: {
    module: {
      rules: [
        // {
        //   test: /\.tsx?$/,
        //   use: [
        //     {
        //       loader: 'ts-loader'
        //     }
        //   ]
        // },
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cwd: __dirname
              }
            }
          ]
        }
      ]
    }
  }
}