<h1>Basic react boilerplate -- using babel-7,webpack-4 , react-16</h1>

<h2>Steps-</h2>

1) cd to project folder
2) npm init -y
3) mkdir src dist
4) cd dist 
5) touch index.html
6) copy into dist/index.html :
``` html <!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Page Title</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<div id="app"></div>
<script src="./bundle.js"></script>
</body>
</html> 
```
7) install babel :  
  ```npm i --save-dev @babel/cli @babel/core @babel/preset-env @babel/preset-react```

8) install webpack :
``` npm i --save-dev webpack webpack-dev-server webpack-cli```  
9) ```touch webpack.config.js```
10)  copy into webpack.config.js :
 ``` 
 module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
}; 
```
11) update package.json : 
```
"scripts": {
  "start": "webpack-dev-server --config ./webpack.config.js --mode development",
  ...
},
```
12) touch src/index.js
13) run 
```
npm start
```
14) to hook-up babel with webpack
```
npm install --save-dev babel-loader
```
15)add below code to webpack.config.js

```
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
```
16) touch .babelrc
```
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

17) 
```
npm install --save react react-dom
```

18) copy to src/index.js
```
import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);
```
19) hot loading
```
npm install --save-dev react-hot-loader
```
20) update webpack.config.js

-add to the top of the file
```
const webpack = require('webpack');
```
-update config
```
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
```

21) add to src/index.js
```
module.hot.accept();
```

22) projet is being compiled and bundled , hot loading in use
```
npm start
```
