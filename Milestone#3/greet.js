import React from 'react';
import ReactDOM from 'react-dom';
import './greet.css';

let curDate = new Date();
curDate = curDate.getHours();
let greeting = '';
const cssStyle = {};

if (curDate >= 1 && curDate < 12) {
  greeting = 'Good Morning';
  cssStyle.color = 'orange';
}
else if (curDate >= 12 && curDate <= 16) {
  greeting = 'Good Afternoon';
  cssStyle.color = 'purple';
}
else {
  greeting = 'Good Evening';
  cssStyle.color = 'blue';
}

ReactDOM.render(
  <>
    <div>
      <h1>Hello,<span style={cssStyle}>{greeting}</span></h1>
    </div>
  </>,
  document.getElementById('root')
    );