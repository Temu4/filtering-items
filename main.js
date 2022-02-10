import ITEMS from './items.js';

const createItemHTML = (item) => {
  return `<div class="item item--${item.os}"><b>${item.name}</b> - os: <i>${item.os}</i></div>`;
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

    if (valueName && !item.name.toLowerCase().includes(valueName)) {
      return false;
    }

    if (valueIOS && item.os !== valueIOS) {
      return false;
    }

    return true;
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
