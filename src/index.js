import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import $ from 'jquery'; 
import './index.css';

window.$ = $;
window.jQuery = $;

ReactDOM.render(<App />, document.getElementById('root'));
