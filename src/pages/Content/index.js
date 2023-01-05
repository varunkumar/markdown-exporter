const createButton = (text, onClick) => {
  const button = document.createElement('button');
  button.innerText = text;
  button.onclick = onClick;
  return button;
};

const exportMd = (md) => {
  // TODO: export md
  console.log(md);
};

const startDownload = () => {
  const md = 'Hello World';
  exportMd(md);
};

(() => {
  console.log('Here');
  const button = createButton('Start Download', startDownload);
  document.body.appendChild(button);
})();

console.log('Content script works!');
