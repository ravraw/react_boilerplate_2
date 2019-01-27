<h1>Basci react boilerplate -- using babel-7,webpack-4 , react-16</h1>

<h2>Steps-</h2>

1) cd to project folder
2) npm init -y
3) mkdir src dist
4) cd dist 
5) touch index.html
6) copy into dist.index.html :
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
9) update package.json : 
```
"scripts": {
  "start": "webpack-dev-server --config ./webpack.config.js --mode development",
  ...
},
```


