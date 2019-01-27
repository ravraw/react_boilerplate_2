console.log('index.js geting compiled');
import React from 'react';
import ReactDOM from 'react-dom';

const title = 'React with babel - 7 and webpack-';

ReactDOM.render(<div>{title}</div>, document.getElementById('app'));

module.hot.accept();
