import ITEMS from './items.js';

const createItemHTML = (item) => {
  return `<div>${item.name} - os: ${item.os}</div>`;
};

const generatePageContent = (items) => {
  const content = document.getElementById('content');

  const data = items.reduce((acc, item) => {
    acc += createItemHTML(item);
    return acc;
  }, '');

  content.innerHTML = data || 'No items based on your filters';
};

const inputName = document.getElementById('name');
const inputIOS = document.getElementById('IOS');
const inputMacOS = document.getElementById('macOS');

const filterItems = () => {
  const valueName = inputName.value.toLowerCase();
  const valueIOS = inputIOS.checked ? inputIOS.name : '';
  const valueMacOS = inputMacOS.checked ? inputMacOS.name : '';

  const filteredItems = ITEMS.filter((item) => {
    // true | false
    let result = true;

    if (valueName) {
      result = item.name.toLowerCase().includes(valueName);
    }

    if (valueIOS) {
      result = item.os === valueIOS;
    }

    if (valueMacOS) {
      result = item.os === valueMacOS;
    }

    return result;
  });

  return filteredItems;
};

inputName.addEventListener('input', () => {
  generatePageContent(filterItems());
});

inputIOS.addEventListener('change', () => {
  generatePageContent(filterItems());
});

inputMacOS.addEventListener('change', () => {
  generatePageContent(filterItems());
});

// init
document.addEventListener('DOMContentLoaded', () => generatePageContent(ITEMS));
