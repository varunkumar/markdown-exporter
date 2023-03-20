const createButton = (text, onClick) => {
  const button = document.createElement('button');
  button.setAttribute('class', 'test-button');
  button.innerText = text;
  button.onclick = onClick;
  return button;
};

const createDownloadLink = () => {
  const link = document.createElement('a');
  link.setAttribute('id', 'some-link');
  link.setAttribute('download', 'download.pdf');
  link.setAttribute('class', 'test-link');
  link.innerText = 'Download';
  return link;
};

const exportMd = () => {
  // TODO: export md
  // const element = document.querySelector('readme-toc');
};

const startDownload = () => {
  exportMd();
};

(() => {
  const button = createButton('Start Download', startDownload);
  document.body.appendChild(button);
  const link = createDownloadLink();
  document.body.appendChild(link);
})();
