const downloadFile = (fileName, fileType, fileContent) => {
  var anchor;
  anchor = document.createElement('a');
  anchor.href = fileType + ',' + encodeURIComponent(fileContent);
  anchor.setAttribute('download', fileName);
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};
let tldFile = '';
const foo = document.getElementsByTagName('td');
const blah = Array.prototype.slice.call(foo);
let count = 0;
blah.forEach((td) => {
  if (count % 3 === 0) {
    const possibleTld = td.innerText;
    if (possibleTld.startsWith('.')) {
      tldFile += `${possibleTld}\n`;
    }
  }
  count += 1;
})
downloadFile('tlds.txt', 'data:application/txt', tldFile);