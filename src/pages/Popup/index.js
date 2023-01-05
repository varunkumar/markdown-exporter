import './index.css';
import Popup from './Popup.js'; // eslint-disable-line

const container =
  window.document.querySelector('#app-container') || window.document.body;
container.innerHTML = Popup();

if (import.meta.webpackHot) import.meta.webpackHot.accept();
