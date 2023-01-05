import './index.css';
import Panel from './Panel.ts'; // eslint-disable-line

const container =
  window.document.querySelector('#app-container') || window.document.body;
container.innerHTML = Panel();

if (import.meta.webpackHot) import.meta.webpackHot.accept();
