import './index.css';
import Newtab from './Newtab.js'; // eslint-disable-line

const container =
  window.document.querySelector('#app-container') || window.document.body;
container.innerHTML = Newtab();

if (import.meta.webpackHot) import.meta.webpackHot.accept();
